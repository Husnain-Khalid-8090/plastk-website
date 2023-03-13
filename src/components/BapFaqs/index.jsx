import * as React from 'react';
import { cx } from 'linaria';
import { bapFaqs } from './BapFaqs.styles';
import { container } from '../../styles/common';
import BapFaqAccordion from '../BapFaqAccordion';
import Button from '../Button';

function BapFaqs() {
  return (
    <div className={cx(bapFaqs)}>
      <div className={cx(container)}>
        <h2 className="no-border">Frequently Asked Questions</h2>
        <BapFaqAccordion />
        <div className="btn-holder">
          <Button
            as="a"
            rounded
            width="200"
            type="primary"
            href={`${process.env.GATSBY_BUSINESS}`}
            target="_blank"
            rel="noreferrer">
            Business Login
          </Button>
          <p className="business-signup-text green">
            Don&apos;t have an account yet?{' '}
            <a href={`${process.env.GATSBY_BUSINESS}/sign-up`} target="_blank" rel="noreferrer">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BapFaqs;
