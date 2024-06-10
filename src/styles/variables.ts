import {PixelRatio} from 'react-native';

/**
 * Calculate the fontSize, lineHeight and padding when the device font size is changed, In most cases users do not change their device font size so PixelRatio.getFontScale() = 1 and this
 * method always returns the defaultValue (first param). When the device font size increases/decreases, the PixelRatio.getFontScale() value increases/decreases as well.
 * This means that if you have text and its 'fontSize' is 19, the device font size changed to the 5th level on the iOS slider and the actual fontSize is 19 * PixelRatio.getFontScale()
 * = 19 * 1.11 = 21.09. Since we are disallowing font scaling we need to calculate it manually. We calculate it with: PixelRatio.getFontScale() * defaultValue > maxValue ? maxValue :
 * defaultValue * PixelRatio.getFontScale() This means that the fontSize is increased/decreased when the device font size changes up to maxValue (second param)
 */
function getValueUsingPixelRatio(defaultValue: number, maxValue: number): number {
    return PixelRatio.getFontScale() * defaultValue > maxValue ? maxValue : defaultValue * PixelRatio.getFontScale();
}

export default {
    bottomTabHeight: 72,
    contentHeaderHeight: getValueUsingPixelRatio(72, 100),
    contentHeaderDesktopHeight: getValueUsingPixelRatio(80, 100),
    componentSizeSmall: getValueUsingPixelRatio(28, 32),
    componentSizeNormal: 40,
    componentSizeMedium: 48,
    inputComponentSizeNormal: 40,
    componentSizeLarge: 52,
    spacing2: 8,
    componentBorderRadius: 8,
    componentBorderRadiusSmall: 4,
    componentBorderRadiusMedium: 6,
    componentBorderRadiusNormal: 8,
    componentBorderRadiusLarge: 16,
    componentBorderRadiusXLarge: 28,
    componentBorderRadiusCard: 20,
    componentBorderRadiusRounded: 24,
    componentBorderWidth: 8,
    appModalAppIconSize: 48,
    buttonBorderRadius: 100,
    avatarSizeLargeBordered: 88,
    avatarSizeXLarge: 100,
    avatarSizeLarge: 80,
    avatarSizeMedium: 52,
    avatarSizeHeader: 40,
    avatarSizeNormal: 40,
    avatarSizeSmallNormal: 32,
    avatarSizeSmall: 28,
    avatarSizeSmaller: 24,
    avatarSizeSubscript: 20,
    avatarSizeMidSubscript: 16,
    avatarSizeMentionIcon: 16,
    avatarSizeSmallSubscript: 12,
    defaultAvatarPreviewSize: 360,
    fabBottom: 25,
    breadcrumbsFontSize: getValueUsingPixelRatio(19, 32),
    fontSizeOnlyEmojis: 30,
    fontSizeOnlyEmojisHeight: 35,
    fontSizeSmall: getValueUsingPixelRatio(11, 17),
    fontSizeExtraSmall: 9,
    fontSizeLabel: getValueUsingPixelRatio(13, 19),
    fontSizeNormal: getValueUsingPixelRatio(15, 21),
    fontSizeMedium: getValueUsingPixelRatio(16, 22),
    fontSizeLarge: getValueUsingPixelRatio(17, 19),
    fontSizeHero: 36,
    fontSizeHeroXL: 72,
    fontSizeh1: 19,
    fontSizeh2: 19,
    fontSizeXLarge: 22,
    fontSizeXXLarge: 28,
    fontSizeXXXLarge: 32,
    fontSizeNormalHeight: getValueUsingPixelRatio(21, 28),
    fontSizeEReceiptLarge: 44,
    fontSizeSignInHeroLarge: 48,
    fontSizeSignInHeroMedium: 38,
    fontSizeSignInHeroXSmall: 26,
    fontSizeSignInHeroSmall: 28,
    fontSizeSignInHeroBody: 20,
    lineHeightHero: 45,
    iconSizeXXXSmall: 4,
    iconSizeXXSmall: 8,
    iconSizeXSmall: 10,
    iconSizeExtraSmall: 12,
    iconSizeSmall: 16,
    iconSizeMedium: 18,
    iconSizeNormal: 20,
    iconSizeLarge: 24,
    iconSizeXLarge: 28,
    iconSizeExtraLarge: 40,
    iconSizeSuperLarge: 60,
    iconSizeUltraLarge: 80,
    iconBottomBar: 24,
    sidebarAvatarSize: 28,
    iconHeader: 48,
    iconSection: 68,
    emojiSize: 20,
    emojiLineHeight: 28,
    iouAmountTextSize: 40,
    extraSmallMobileResponsiveWidthBreakpoint: 320,
    extraSmallMobileResponsiveHeightBreakpoint: 667,
    mobileResponsiveWidthBreakpoint: 800,
    tabletResponsiveWidthBreakpoint: 1024,
    safeInsertPercentage: 0.7,
    sideBarWidth: 375,
    pdfPageMaxWidth: 992,
    tooltipzIndex: 10050,
    gutterWidth: 12,
    popoverMenuShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.06)',
    optionRowHeight: 64,
    optionRowHeightCompact: 52,
    optionsListSectionHeaderHeight: getValueUsingPixelRatio(32, 38),
    overlayOpacity: 0.72,
    lineHeightXSmall: getValueUsingPixelRatio(11, 17),
    lineHeightSmall: getValueUsingPixelRatio(14, 16),
    lineHeightNormal: getValueUsingPixelRatio(16, 21),
    lineHeightLarge: getValueUsingPixelRatio(18, 24),
    lineHeightXLarge: getValueUsingPixelRatio(20, 24),
    lineHeightXXLarge: getValueUsingPixelRatio(27, 32),
    lineHeightXXXLarge: getValueUsingPixelRatio(32, 37),
    lineHeightSizeh1: getValueUsingPixelRatio(28, 32),
    lineHeightSizeh2: getValueUsingPixelRatio(24, 28),
    lineHeightSignInHeroXSmall: getValueUsingPixelRatio(32, 37),
    inputHeight: getValueUsingPixelRatio(52, 72),
    inputHeightSmall: 28,
    formErrorLineHeight: getValueUsingPixelRatio(18, 23),
    communicationsLinkHeight: getValueUsingPixelRatio(20, 30),
    alternateTextHeight: getValueUsingPixelRatio(20, 24),
    INACTIVE_LABEL_TRANSLATE_Y: getValueUsingPixelRatio(16, 21),
    sliderBarHeight: 8,
    sliderKnobSize: 26,
    checkboxLabelActiveOpacity: 0.7,
    checkboxLabelHoverOpacity: 1,
    avatarChatSpacing: 12,
    chatInputSpacing: 52, // 40 + avatarChatSpacing
    borderTopWidth: 1,
    emptyLHNIconWidth: 24, // iconSizeSmall + 4*2 horizontal margin
    emptyLHNIconHeight: 16,
    emptyListIconWidth: 136,
    emptyListIconHeight: 144,
    modalTopIconWidth: 200,
    modalTopIconHeight: 164,
    modalTopMediumIconHeight: 203,
    modalTopBigIconHeight: 244,
    modalWordmarkWidth: 154,
    modalWordmarkHeight: 37,
    verticalLogoHeight: 634,
    verticalLogoWidth: 111,
    badgeMaxWidth: 180,
    signInHeroImageMobileHeight: 240.08,
    signInHeroImageMobileWidth: 303,
    signInHeroImageTabletHeight: 324.01,
    signInHeroImageTabletWidth: 346,
    signInHeroImageDesktopHeight: 362.4,
    signInHeroImageDesktopWidth: 386.99,
    signInHeroBackgroundWidth: 2000,
    signInHeroBackgroundWidthMobile: 800,
    signInContentMaxWidth: 1360,
    signInHeroContextMaxWidth: 680,
    signInContentMinHeight: 800,
    signInLogoHeightSmallScreen: 28,
    signInLogoHeight: 34,
    signInLogoWidth: 120,
    signInLogoWidthLargeScreen: 144,
    signInLogoHeightLargeScreen: 108,
    signInLogoWidthPill: 132,
    tabSelectorButtonHeight: 42,
    tabSelectorButtonPadding: 12,
    lhnLogoWidth: 95.09,
    lhnLogoHeight: 22.33,
    signInLogoWidthLargeScreenPill: 162,
    modalContentMaxWidth: 360,
    listItemHeightNormal: 64,
    popoverWidth: 375,
    bankAccountActionPopoverRightSpacing: 32,
    bankAccountActionPopoverTopSpacing: 14,
    addPaymentPopoverRightSpacing: 23,
    anonymousReportFooterBreakpoint: 650,
    dropDownButtonDividerHeight: 28,
    addPaymentMethodLeftSpacing: 2,
    addBankAccountLeftSpacing: 3,
    eReceiptThumbnailSmallBreakpoint: 110,
    eReceiptThumbnailMediumBreakpoint: 335,
    eReceiptThumbnailCenterReceiptBreakpoint: 200,
    eReceiptIconHeight: 100,
    eReceiptIconWidth: 72,
    eReceiptEmptyIconWidth: 76,
    eReceiptMCCHeightWidth: 40,
    eReceiptIconHeightSmall: 65,
    eReceiptIconWidthSmall: 46,
    eReceiptIconHeightXSmall: 24,
    eReceiptIconWidthXSmall: 20,
    eReceiptMCCHeightWidthSmall: 26,
    eReceiptIconHeightMedium: 82,
    eReceiptIconWidthMedium: 59,
    eReceiptMCCHeightWidthMedium: 32,
    eReceiptWordmarkHeight: 19.25,
    eReceiptWordmarkWidth: 86,
    eReceiptBGHeight: 540,
    eReceiptBGHWidth: 335,
    eReceiptTextContainerWidth: 263,
    receiptPlaceholderIconWidth: 80,
    receiptPlaceholderIconHeight: 80,
    reportPreviewMaxWidth: 335,
    reportActionImagesSingleImageHeight: 147,
    reportActionImagesDoubleImageHeight: 138,
    reportActionImagesMultipleImageHeight: 110,
    reportActionItemImagesMoreCornerTriangleWidth: 40,
    bankCardWidth: 40,
    bankCardHeight: 26,
    popoverzIndex: 10000,
    workspaceTypeIconWidth: 34,
    sectionMargin: 16,
    workspaceSectionMaxWidth: 680,
    oldDotWireframeIconWidth: 263.38,
    oldDotWireframeIconHeight: 143.28,
    sectionIllustrationHeight: 220,
    photoUploadPopoverWidth: 335,
    onboardingModalWidth: 500,
    welcomeVideoDelay: 1000,

    // The height of the empty list is 14px (2px for borders and 12px for vertical padding)
    // This is calculated based on the values specified in the 'getGoogleListViewStyle' function of the 'StyleUtils' utility
    googleEmptyListViewHeight: 14,
    hoverDimValue: 1,
    pressDimValue: 0.8,
    qrShareHorizontalPadding: 32,
    menuIconSize: 48,

    moneyRequestSkeletonHeight: 107,

    distanceScrollEventThrottle: 16,

    cardPreviewHeight: 148,
    cardPreviewWidth: 235,
    cardNameWidth: 156,
    holdMenuIconSize: 64,
    updateAnimationW: 390,
    updateAnimationH: 240,
    updateTextViewContainerWidth: 310,
    updateViewHeaderHeight: 70,

    mushroomTopHatWidth: 138,
    mushroomTopHatHeight: 128,
    bankButtonMargin: 23,
    textInputAutoGrowMaxHeight: 115,
    eReceiptBackgroundImageMinWidth: 217,

    searchTypeColumnWidth: 52,

    h36: 36,
    w28: 28,
    w36: 36,
    w40: 40,
    w44: 44,
    w80: 80,
    w96: 96,
} as const;
