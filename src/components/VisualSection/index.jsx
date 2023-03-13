/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { cx } from 'linaria';
import * as React from 'react';
import { useMediaPredicate } from 'react-media-hook';

import { moengage } from '../../../utils/moengageEvents';
import { container } from '../../styles/common';
import AnimationCircle from '../AnimatedCircle';
import Button from '../Button';
import PlastkAppBtns from '../PlastkAppBtns';
import {
  btnMb,
  holder,
  infoListStyle,
  infoTitle,
  logoHolder,
  partnerRibbon,
  scrollDown,
  textBox,
  value,
  visualSection,
} from './VisualSection.styles';

function VisualSection({ title, description, signUpBtn, affiliateBtn, infoList, scrollToId, affiliateLink }) {
  const biggerThan768 = useMediaPredicate('(min-width: 768px)');
  return (
    <section className={cx(visualSection)}>
      <div className={cx(container)}>
        <div className={cx(holder)}>
          <div className={cx(textBox)}>
            <div className={cx(partnerRibbon)}>
              {/* <StaticImage src="../../images/canucks-preferred-partner.jpg" alt="canucks preferred partner" /> */}
            </div>

            <h1 className="h2">{title}</h1>
            <p>{description}</p>
            {signUpBtn && (
              <Button
                className={cx(btnMb)}
                as={Link}
                to="/sign-up"
                type={!biggerThan768 ? 'secondary' : 'primary'}
                width={!biggerThan768 ? 145 : 227}
                onClick={() => {
                  moengage.getPlastk();
                }}>
                {!biggerThan768 ? 'Apply Now' : 'Get Plastk'}
              </Button>
            )}
            {affiliateBtn && (
              <Button
                className={cx(btnMb)}
                width={357}
                as={Link}
                to={affiliateLink || '/sign-up'}
                type="secondary"
                onClick={() => {
                  moengage.applyNow();
                }}>
                Apply Now
              </Button>
            )}
            <PlastkAppBtns />
            {infoList && (
              <ul className={cx(infoListStyle)}>
                <li>
                  <span className={cx(value)}>17.99%</span>
                  <span className={cx(infoTitle)}>Interest rate</span>
                </li>
                <li>
                  <span className={cx(value)}>$48</span>
                  <span className={cx(infoTitle)}>Annual Fee</span>
                </li>
                <li>
                  <span className={cx(value)}>$6</span>
                  <span className={cx(infoTitle)}>Monthly Fee</span>
                </li>
              </ul>
            )}

            <div className={cx(logoHolder)}>
              <StaticImage loading="eager" src="../../images/visa-text-img.svg" alt="visa" />
              <StaticImage loading="eager" src="../../images/equifax-text-img.svg" alt="equifax" />
            </div>
          </div>
          {biggerThan768 && (
            <AnimationCircle>
              <StaticImage loading="eager" src="../../images/iphone-img.png" alt="iphone" />
              <StaticImage loading="eager" className="credit-img" src="../../images/credit-img.png" alt="credit" />
              <StaticImage
                loading="eager"
                className="card-img"
                src="../../images/plastk-card.png"
                alt="plastk secured visa card"
              />
              <StaticImage
                loading="eager"
                className="canadian-img"
                src="../../images/img01.png"
                alt="img description"
              />
            </AnimationCircle>
          )}
        </div>
        <a className={cx(scrollDown)} href={`#${scrollToId}`} onClick={() => moengage.arrowDown()}>
          <span className="material-icons-outlined ico">arrow_downward</span>
        </a>
      </div>
    </section>
  );
}

export default VisualSection;
