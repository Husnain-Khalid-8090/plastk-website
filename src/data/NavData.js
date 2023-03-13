import { moengage } from '../../utils/moengageEvents';

export const NavData = [
  {
    id: 1,
    title: 'Products',
    live: true,
    subMenu: [
      // {
      //   title: 'Plastk Sentinel',
      //   path: '/plastk-sentinel',
      //   live: true,
      //   moAction: () => {
      //     moengage.productSentinel();
      //   },
      // },
      {
        title: 'secured credit card',
        path: '/secured-credit-card',
        live: true,
        moAction: () => {
          moengage.securedCreditCard();
        },
      },
    ],
  },
  // {
  //   id: 2,
  //   title: 'Business Accelerator',
  //   path: '/business',
  //   live: false,
  //   moAction: () => {
  //     moengage.businessAccelerator();
  //   },
  // },
  {
    id: 3,
    title: 'Credit Insight',
    live: true,
    subMenu: [
      {
        title: 'blog',
        path: '/blog',
        live: true,
        moAction: () => {
          moengage.getBlogs();
        },
      },
    ],
  },
  {
    id: 4,
    title: 'Company',
    live: true,
    subMenu: [
      {
        title: 'about us',
        path: '/about-us',
        live: true,
        moAction: () => {
          moengage.aboutUs();
        },
      },
      {
        title: 'Plastk Gives Back',
        path: 'https://plastk-1.hubspotpagebuilder.com/plastk-gives-back',
        live: true,
        externalLink: true,
        moAction: () => {
          moengage.givesBack();
        },
      },
      {
        title: 'careers',
        path: '/careers',
        live: true,
        moAction: () => {
          moengage.careers();
        },
      },
    ],
  },
  {
    id: 5,
    title: 'Support',
    live: true,
    subMenu: [
      {
        title: 'FAQs',
        path: '/faqs',
        live: true,
        moAction: () => {
          moengage.faqs();
        },
      },
      {
        title: 'Contact Us',
        path: '/contact-us#hs-chat-open',
        externalLink: true,
        live: true,
        moAction: () => {
          moengage.contactUs();
        },
      },
      {
        title: 'Terms & Conditions',
        path: '/terms-and-conditions',
        footerOnly: true,
        live: true,
        moAction: () => {
          moengage.termsAndConditionFooter();
        },
      },
      {
        title: 'Privacy Policy',
        path: '/privacy-policy',
        footerOnly: true,
        live: true,
        moAction: () => {
          moengage.privacyFooter();
        },
      },
    ],
  },
  {
    title: 'Login',
    path: process.env.GATSBY_API_BASE_URL_ACCOUNT,
    externalLink: true,
    live: true,
    moAction: () => {
      moengage.logIn();
    },
  },
];
