const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');

const run = () => {
    // Prefix path to the graphite metric
    const GRAPHITE_PATH = 'bucket1.reassure';

    const regressionOutput = JSON.parse(fs.readFileSync('.reassure/output.json', 'utf8'));

    const creationDate = regressionOutput.metadata.current.creationDate;
    const timestampInMili = new Date(creationDate).getTime();
    // Graphite accepts timestamp in seconds
    const timestamp = Math.floor(timestampInMili / 1000);

    // get PR number from the github context
    const prNumber = github.context.payload.pull_request.number;

    // We need to combine all tests from the 4 buckets
    const reassureTests = [...regressionOutput.meaningless, ...regressionOutput.significant, ...regressionOutput.countChanged, ...regressionOutput.added];

    // Map through every test and create string for meanDuration and meanCount
    // eslint-disable-next-line rulesdir/prefer-underscore-method
    const graphiteString = reassureTests
        .map((test) => {
            const current = test.current;
            // Graphite doesn't accept metrics name with space, we replace spaces with "-"
            const formattedName = current.name.split(' ').join('-');

            const meanDurationString = `${GRAPHITE_PATH}.meanDuration.PR-${prNumber}.${formattedName} ${current.meanDuration} ${timestamp}`;
            const meanCountString = `${GRAPHITE_PATH}.meanCount.PR-${prNumber}.${formattedName} ${current.meanCount} ${timestamp}`;

            return `${meanDurationString}\n${meanCountString}`;
        })
        .join('\n');

    // Set generated graphite string to the github variable
    core.setOutput('graphiteString', graphiteString);
};

if (require.main === module) {
    run();
}

module.exports = run;
