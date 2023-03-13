import { cx } from 'linaria';
import * as React from 'react';

import { moengage } from '../../../utils/moengageEvents';
import Button from '../Button';
import { jobBox } from './JobPost.styles';

function JobPost({ jobTitle, location, type, jobLink }) {
  return (
    <div className={cx(jobBox)}>
      <div className="title-holder">
        <a
          href={jobLink}
          target="_blank"
          rel="noreferrer"
          className="job-title"
          onClick={() => moengage.carrerJobLink()}>
          {jobTitle}
        </a>
        <ul className="detail-list">
          <li>
            <i className="material-icons">place</i>
            {location}
          </li>
          <li>
            <i className="material-icons">schedule</i>
            {type}
          </li>
        </ul>
      </div>
      <Button
        as="a"
        className="btn"
        width={180}
        href={jobLink}
        target="_blank"
        rel="noreferrer"
        type="primary"
        sm
        rounded
        onClick={() => moengage.carrerApplyNowjob()}>
        Apply Now
      </Button>
    </div>
  );
}

export default JobPost;
