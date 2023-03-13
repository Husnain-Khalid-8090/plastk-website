import { css } from 'linaria';

export const variables = css`
  :global() {
    :root {
      --white: #fff;
      --black: #000;
      --primary: #aae15d;
      --light-primary: #c7eb93;
      --gray: #4f4f4f;
      --blue: #2f80ed;
      --gray-2: #6f7c97;
      --light-gray: #d9d9d9;
      --dark-blue: #022242;
      --black-solid: #221314;
      --dark-black: #0f203a;
      --dark-black1: #0f2546;
      --text-color: #2e2e30;
      --secondary: #ffaf10;
      --card-bg: #404968;
      --danger: #ef466f;
      --success: #53b13e;
      --info: #6180f2;
      --warning: #f9c055;
      --light-blue: #39f;
      --light: #eff2f8;

      --body-text-color: #696871;
      --font-family-base: 'Rubik', sans-serif;
      --headings-font-family: 'Montserrat', sans-serif;

      --headings-color: var(--black);

      --h1-font-size: 50px;
      --h2-font-size: 44px;
      --h3-font-size: 22px;

      --base-link-color: var(--primary);

      --btn-color: var(--white);
      --primary-btn-background: var(--primary);
      --btn-padding: 23px 10px;

      --font-size-xs: 0.75rem; /* 12px */
      --font-size-sm: 0.875rem; /* 14px */
      --font-size-base: 1rem;
      --font-size-lg: 1.125rem; /* 18px */
      --font-size-xl: 1.25rem; /* 20px */
      --font-size-xxl: 1.5rem; /* 24px */

      --z-10: 10;
      --z-20: 20;
      --z-30: 30; /* header dropdown */
      --z-40: 40; /* header */
      --z-50: 50; /* Modal */
      --z-90: 90; /* Toast */

      --form-element-padding: 5px 10px;
      --form-element-padding-lg: 0.75rem 1.4375rem;
      --form-element-height: 45px;
      --form-element-height-lg: 60px;
      --form-element-radius: 6px;
      --form-element-border-color: var(--light-gray);
      --form-element-border-width: 1px;
      --form-element-focus-border-color: var(--black);
      --placeholder-color: var(--light-gray);

      --tooltip-text-color: white;
      --tooltip-background-color: black;
      --tooltip-margin: 10px;
      --tooltip-arrow-size: 6px;
    }
  }
`;
