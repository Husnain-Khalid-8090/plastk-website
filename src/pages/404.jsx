import { css, cx } from '@linaria/core';
import { Link } from 'gatsby';
import * as React from 'react';

import Button from '../components/Button';
import Seo from '../components/Seo';
import img404 from '../images/img404.svg';
import { container } from '../styles/common';

const contentWrap = css`
  position: relative;
  padding: 50px 0;
  text-align: center;
  font-size: 18px;
  line-height: 25px;
  color: var(--dark-black);

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 30px;
  }
`;
const imgHolder = css`
  max-width: 740px;
  margin: 0 auto 30px;

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

function NotFoundPage() {
  return (
    <div className={cx(container)}>
      <div className={cx(contentWrap)}>
        <div className={cx(imgHolder)}>
          <img loading="eager" src={img404} alt="img description" />
        </div>
        <p>Purr! The page you are looking for does not exist!</p>
        <Button as={Link} to="/" type="primary" sm width="200">
          Back to Homepage
        </Button>
      </div>
    </div>
  );
}

export default NotFoundPage;

export function Head() {
  return <Seo title="404: Not found" />;
}
