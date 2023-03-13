import * as React from 'react';
import { cx } from 'linaria';
import { StaticImage } from 'gatsby-plugin-image';
import { bapWorkingBlock, workingStepList } from './BapWorkingSection.styles';
import { container } from '../../styles/common';

function BapWorkingSection() {
  return (
    <div className={cx(bapWorkingBlock)}>
      <div className={cx(container)}>
        <h2 className="no-border">How the Platform Works</h2>
        <div className="img-holder">
          <StaticImage
            loading="eager"
            src="https://d2ef97fwq3c8g5.cloudfront.net/web_images/macbook_image.png"
            className="img-fluid"
          />
        </div>
        <ol className={cx(workingStepList)}>
          <li className="working-step">
            <h3>Dashboard</h3>
            <p>An overview of your business revenue & metrics</p>
          </li>
          <li className="working-step">
            <h3>Stores</h3>
            <p>View all of the stores under your business</p>
          </li>
          <li className="working-step">
            <h3>Store Groups</h3>
            <p>Organize your individual stores by category</p>
          </li>
          <li className="working-step">
            <h3>Promotions</h3>
            <p>Build promotions for your valued customers</p>
          </li>
          <li className="working-step">
            <h3>Managers</h3>
            <p>Add managers to your business profile</p>
          </li>
          <li className="working-step">
            <h3>Statements</h3>
            <p>Monthly reports on your business success</p>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default BapWorkingSection;
