import React from 'react';
import {View} from 'react-native';
import type {OnyxEntry} from 'react-native-onyx';
import {withOnyx} from 'react-native-onyx';
import FormProvider from '@components/Form/FormProvider';
import InputWrapper from '@components/Form/InputWrapper';
import type {FormInputErrors, FormOnyxValues} from '@components/Form/types';
import Text from '@components/Text';
import TextInput from '@components/TextInput';
import useLocalize from '@hooks/useLocalize';
import useReimbursementAccountStepFormSubmit from '@hooks/useReimbursementAccountStepFormSubmit';
import type {SubStepProps} from '@hooks/useSubStep/types';
import useThemeStyles from '@hooks/useThemeStyles';
import * as ValidationUtils from '@libs/ValidationUtils';
import HelpLinks from '@pages/ReimbursementAccount/PersonalInfo/HelpLinks';
import CONST from '@src/CONST';
import ONYXKEYS from '@src/ONYXKEYS';
import INPUT_IDS from '@src/types/form/PersonalBankAccountForm';
import type {WalletAdditionalDetails} from '@src/types/onyx';

type PhoneNumberOnyxProps = {
    /** Reimbursement account from ONYX */
    walletAdditionalDetails: OnyxEntry<WalletAdditionalDetails>;
};

type PhoneNumberProps = PhoneNumberOnyxProps & SubStepProps;

const PERSONAL_INFO_STEP_KEY = INPUT_IDS.PERSONAL_INFO_STEP;
const STEP_FIELDS = [PERSONAL_INFO_STEP_KEY.PHONE_NUMBER];

const validate = (values: FormOnyxValues<typeof ONYXKEYS.FORMS.WALLET_ADDITIONAL_DETAILS>): FormInputErrors<typeof ONYXKEYS.FORMS.WALLET_ADDITIONAL_DETAILS> => {
    const errors = ValidationUtils.getFieldRequiredErrors(values, STEP_FIELDS);

    if (values.phoneNumber && !ValidationUtils.isValidUSPhone(values.phoneNumber, true)) {
        errors.phoneNumber = 'bankAccount.error.phoneNumber';
    }
    return errors;
};
function PhoneNumber({walletAdditionalDetails, onNext, isEditing}: PhoneNumberProps) {
    const {translate} = useLocalize();
    const styles = useThemeStyles();

    const defaultPhoneNumber = walletAdditionalDetails?.[PERSONAL_INFO_STEP_KEY.PHONE_NUMBER] ?? '';

    const handleSubmit = useReimbursementAccountStepFormSubmit({
        formId: ONYXKEYS.FORMS.WALLET_ADDITIONAL_DETAILS,
        fieldIds: STEP_FIELDS,
        onNext,
        shouldSaveDraft: isEditing,
    });

    return (
        <FormProvider
            formID={ONYXKEYS.FORMS.WALLET_ADDITIONAL_DETAILS}
            submitButtonText={translate(isEditing ? 'common.confirm' : 'common.next')}
            validate={validate}
            onSubmit={handleSubmit}
            style={[styles.mh5, styles.flexGrow1]}
            submitButtonStyles={[styles.pb5, styles.mb0]}
        >
            <View>
                <Text style={[styles.textHeadlineLineHeightXXL, styles.mb3]}>{translate('personalInfoStep.whatsYourPhoneNumber')}</Text>
                <Text style={[styles.textSupporting]}>{translate('personalInfoStep.weNeedThisToVerify')}</Text>
                <View style={[styles.flex1]}>
                    <InputWrapper
                        InputComponent={TextInput}
                        inputID={PERSONAL_INFO_STEP_KEY.PHONE_NUMBER}
                        label={translate('common.phoneNumber')}
                        aria-label={translate('common.phoneNumber')}
                        role={CONST.ROLE.PRESENTATION}
                        inputMode={CONST.INPUT_MODE.TEL}
                        placeholder={translate('common.phoneNumberPlaceholder')}
                        defaultValue={defaultPhoneNumber}
                        shouldSaveDraft={!isEditing}
                        containerStyles={[styles.mt6]}
                    />
                </View>
                <HelpLinks containerStyles={[styles.mt5]} />
            </View>
        </FormProvider>
    );
}

PhoneNumber.displayName = 'PhoneNumber';

export default withOnyx<PhoneNumberProps, PhoneNumberOnyxProps>({
    // @ts-expect-error ONYXKEYS.WALLET_ADDITIONAL_DETAILS is conflicting with ONYXKEYS.FORMS.WALLET_ADDITIONAL_DETAILS_FORM
    walletAdditionalDetails: {
        key: ONYXKEYS.FORMS.WALLET_ADDITIONAL_DETAILS,
    },
})(PhoneNumber);
