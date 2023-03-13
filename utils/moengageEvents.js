const gT = () => ({ timestamp: Math.floor(Date.now() / 1000) });

const EVENT_TR = (title, body) => {
  window.Moengage.track_event(title, body);
};
export const moengage = {
  // headers handlers

  plastkLogo: () => {
    EVENT_TR('PLASTK_LOGO_CLICK', gT());
  },
  productSentinel: () => {
    EVENT_TR('PRODUCT_SENTINEL_CLICK', gT());
  },
  securedCreditCard: () => {
    EVENT_TR('PRODUCT_SECURED_CREDIT_CARD_CLICK', gT());
  },
  businessAccelerator: () => {
    EVENT_TR('BUSINESS_ACCEOLERATOR_CLICK', gT());
  },
  getBlogs: () => {
    EVENT_TR('CREDIT_INSIGHT_BLOG_CLICK', gT());
  },
  aboutUs: () => {
    EVENT_TR('COMPANY_ABOUTUS_CLICK', gT());
  },
  givesBack: () => {
    EVENT_TR('COMPANY_PLASTK_GIVES_BACK_CLICK', gT());
  },
  careers: () => {
    EVENT_TR('COMPANY_CREERS_CLICK', gT());
  },
  faqs: () => {
    EVENT_TR('SUPPORT_FAQS_CLICK', gT());
  },
  contactUs: () => {
    EVENT_TR('SUPPORT_CONTACTUS_CLICK', gT());
  },
  logIn: () => {
    EVENT_TR('LOGIN_CLICK', gT());
  },
  applyNow: () => {
    EVENT_TR('APPLY_NOW_CLICK', gT());
  },

  // main page handlers
  getPlastk: () => {
    EVENT_TR('EVENT_GET_PLASTK_BUTTON', gT());
  },
  appStoreIOS: () => {
    EVENT_TR('APP_STORE_IOS_BUTTON', gT());
  },
  appStoreAndroid: () => {
    EVENT_TR('PLAY_STORE_ANDROID_BUTTON', gT());
  },
  arrowDown: () => {
    EVENT_TR('ARROW_DOWN_BUTTON', gT());
  },
  sentinelIntroducingPlastkButton: () => {
    EVENT_TR('LEARN_MORE_ABOUT_PLASTK_SENTINEL_BUTTON', gT());
  },
  sentinalIntroducingHeading: () => {
    EVENT_TR('SENTINEL_INTRODUCING_BUTTON', gT());
  },
  sentinalIntroducingImageClick: () => {
    EVENT_TR('SENTINEL_IMAGE_LINK_BUTTON', gT());
  },
  applyNowCreditScore: () => {
    EVENT_TR('APPLY_NOW_CREDIT_SCORE_CLICK', gT());
  },
  learnMoreAboutPlastkSentinelCreditScore: () => {
    EVENT_TR('LEARN_MORE_ABOUT_PLASTK_SENTINEL_CREDIT_SCORE_BUTTON', gT());
  },
  premiumRewardsApplyNow: () => {
    EVENT_TR('PREMIUM_REWARDS_APPLY_NOW', gT());
  },

  // footer

  plastkLogoFooter: () => {
    EVENT_TR('PLASTK_LOGO_FOOTER_CLICK', gT());
  },
  termsAndConditionFooter: () => {
    EVENT_TR('TERMS_&_CONDITION_FOOTER_CLICK', gT());
  },
  privacyFooter: () => {
    EVENT_TR('PRIVACY_POLICY_FOOTER_CLICK', gT());
  },
  linkedinFooter: () => {
    EVENT_TR('LINKEDIN_FOOTER_CLICK', gT());
  },
  facebookFooter: () => {
    EVENT_TR('FACEBOOK_FOOTER_CLICK', gT());
  },
  twitterFooter: () => {
    EVENT_TR('TWITTER_FOOTER_CLICK', gT());
  },
  instagramFooter: () => {
    EVENT_TR('INSTAGRAM_FOOTER_CLICK', gT());
  },

  // sentinel page

  sentienlSpecialOffer: () => {
    EVENT_TR('SENTINEL_PAGE_SPECIAL_OFFER_CLICK', gT());
  },
  sentinelSubscribeNow: () => {
    EVENT_TR('SENTINEL_PAGE_SUBSCRIBE_NOW_CLICK', gT());
  },
  sentinelDesktop: () => {
    EVENT_TR('SENTINEL_PAGE_DESKTOP_CLICK', gT());
  },
  sentinelMobile: () => {
    EVENT_TR('SENTINEL_PAGE_MOBILE_CLICK', gT());
  },
  sentinelSubscibeNowBottom: () => {
    EVENT_TR('SENTINEL_PAGE_SUBSCRIBE_NOW_BOTTOM_CLICK', gT());
  },
  sentinelCloseModal: val => {
    EVENT_TR(val, gT());
  },

  sentinelModalSubscribeAnnual: () => {
    EVENT_TR('SENTINEL_PAGE_SUBSCRIBE_ANNUAL_CLICK', gT());
  },
  sentinelModalSubscribeMonth: () => {
    EVENT_TR('SENTINEL_PAGE_SUBSCRIBE_MONTH_CLICK', gT());
  },
  sentinelModalTerms: () => {
    EVENT_TR('SENTINEL_PAGE_MODAL_TERMS_CLICK', gT());
  },
  sentinelModalConfirmationYes: () => {
    EVENT_TR('SENTINEL_PAGE_MODAL_CONFIRMATION_YES_CLICK', gT());
  },
  sentinelModalConfirmationNo: () => {
    EVENT_TR('SENTINEL_PAGE_MODAL_CONFIRMATION_NO_CLICK', gT());
  },
  creatAccModalCreateAcc: () => {
    EVENT_TR('CREATE_ACCOUNT_MODAL_CREATE_ACCOUNT_CLICK', gT());
  },
  creatAccModalLOGIN: () => {
    EVENT_TR('CREATE_ACCOUNT_MODAL_LOG_IN_CLICK', gT());
  },

  // secured-credit card page

  secureCreditCardApplyNowTop: () => {
    EVENT_TR('SECURE_CREDIT_CARD_TOP_APPLY_NOW_CLICK', gT());
  },
  secureCreditCardApplyNowMiddle: () => {
    EVENT_TR('SECURE_CREDIT_CARD_MIDDLE_APPLY_NOW_CLICK', gT());
  },
  secureCreditCardApplyNowBottom: () => {
    EVENT_TR('SECURE_CREDIT_CARD_BOTTOM_APPLY_NOW_CLICK', gT());
  },

  // blogs page
  blogCTT: () => {
    EVENT_TR('BLOG_CTT_CLICK', gT());
  },
  blogFLT: () => {
    EVENT_TR('BLOG_FINICIAL_LITERACY_CLICK', gT());
  },

  // carrers page
  carrerApplyNowjob: () => {
    EVENT_TR('CAREERS_APPLY_NOW_JOB_CLICK', gT());
  },
  carrerJobLink: () => {
    EVENT_TR('CAREERS_JOB_LINK_CLICK', gT());
  },
  carrerEmailLINK: () => {
    EVENT_TR('CAREERS_EMAIL_LINK_CLICK', gT());
  },

  // contact us page
  contactEmailLINK: () => {
    EVENT_TR('CONTACT_EMAIL_LINK_CLICK', gT());
  },
  contactNumberLINK: () => {
    EVENT_TR('CONTACT_NUMBER_LINK_CLICK', gT());
  },

  // signup page
  signUpGoBack: () => {
    EVENT_TR('SIGN_UP_GO_BACK', gT());
  },
  signUpNext: () => {
    EVENT_TR('SIGN_UP_NEXT_BTN', gT());
  },
  signUpSubmit: () => {
    EVENT_TR('SIGN_UP_SUBMIT_BTN', gT());
  },
  signUpTermsAndCondition: () => {
    EVENT_TR('SIGN_UP_TERMS_&_CONDITIONS', gT());
  },
  signUpDownloadPolicyDisclourStatment: () => {
    EVENT_TR('SIGN_UP_DOWNLOAD_DISCLOUR_STATEMENT', gT());
  },
  signUpDownloadPolicyCreditAggrement: () => {
    EVENT_TR('SIGN_UP_DOWNLOAD_CREDIT_AGGREMENT', gT());
  },
  signUpSelectPolicyCreditAggrement: () => {
    EVENT_TR('SIGN_UP_SELECT_CREDIT_AGGREMENT', gT());
  },
  signUpSelectPolicyDisclourStatment: () => {
    EVENT_TR('SIGN_UP_SELECT_DISCLOUR_STATEMENT', gT());
  },

  // terms and conditions
  termsAndConditionsDownload: name => {
    EVENT_TR(name, gT());
  },

  // reset password
  accountSignUpSuccess: status => EVENT_TR('I_SIGNUP_STATUS', { status }),
  accountSignUpSuccessDate: date => EVENT_TR('I_SIGNUP_DATE', { date }),
};
