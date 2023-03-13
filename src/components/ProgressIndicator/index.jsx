import { StaticImage } from 'gatsby-plugin-image';
import { cx } from 'linaria';
import React, { useEffect, useRef } from 'react';

import { useIsInViewport } from '../../helpers/useIsInViewport';
import progressBar from '../../images/progress_bar.svg';
import { progressHolder } from './ProgressIndicator.styles';

function ProgressIndicator() {
  const parentRef = useRef(null);

  const isInViewport = useIsInViewport(parentRef, 0.5);

  const animateValue = (obj, start, end, duration) => {
    let startTimestamp = null;
    const step = timestamp => {
      if (!startTimestamp) {
        startTimestamp = timestamp;
      }

      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // eslint-disable-next-line no-param-reassign
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    const obj = document.getElementById('totalScore');
    if (isInViewport) {
      setTimeout(() => {
        animateValue(obj, 300, 800, 2000);
      }, 500);
    } else {
      setTimeout(() => {
        animateValue(obj, 800, 300, 2000);
      }, 500);
    }
  });
  return (
    <div className={cx(progressHolder)} ref={parentRef}>
      <div className={`progress-indicator ${isInViewport ? 'rotate-active' : ''}`}>
        <div className="circle-holder">
          <div className="circle" id="circle" />
          <span className="number" id="totalScore">
            300
          </span>
          <div className="gradient-progress-bar">
            <div className="bar-holder">
              <img
                loading="eager"
                src={progressBar}
                alt="Knowing your credit score is the best way to improve it. With Plastk, you will receive your credit score for free every month."
                width="320"
                height="320"
              />
            </div>
            <div className="progress-pointer" id="progress-pointer" />
            <ul className="numbers-holder list-unstyled">
              <li>300</li>
              <li>400</li>
              <li>500</li>
              <li>600</li>
              <li>900</li>
            </ul>
          </div>
        </div>
        <div className="lines-holder">
          <div className="circle-lines">
            <StaticImage
              loading="eager"
              src="../../images/circle_lines.png"
              alt="Knowing your credit score is the best way to improve it. With Plastk, you will receive your credit score for free every month."
              width={644}
              height={680}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressIndicator;
