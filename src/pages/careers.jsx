import { css, cx } from 'linaria';
import * as React from 'react';

import { moengage } from '../../utils/moengageEvents';
import JobPost from '../components/JobPost';
import Seo from '../components/Seo';
import { CareersData, InternshipData } from '../data/CareersData';
import { container } from '../styles/common';

const containerCareers = css`
  max-width: 800px;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const heading = css`
  font-weight: 500;
  margin-bottom: 16px;
`;

const subTitle = css`
  display: block;
  text-align: center;
  font-size: 20px;
  line-height: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  color: var(--black);
`;

const plastkMail = css`
  text-align: center;
  box-shadow: 0 10px 20px rgba(65, 62, 101, 0.2);
  font-weight: 500;
  padding: 8px;
  border-radius: 5px;
  background: var(--white);
  .material-icons {
    font-size: 20px;
    line-height: 1;
    display: inline-block;
    vertical-align: top;
  }
`;

function Careers() {
  return (
    <div className={cx(container, containerCareers)}>
      <h2 className={cx('center no-border text-black', heading)}>Join Our Team</h2>
      <span className={cx(subTitle)}>Permanent Positions</span>
      {CareersData.map((item, index) => (
        <JobPost key={index} jobTitle={item.title} location={item.location} type={item.type} jobLink={item.link} />
      ))}
      <span className={cx(subTitle)}>Internship Positions</span>
      {InternshipData.map((item, index) => (
        <JobPost key={index} jobTitle={item.title} location={item.location} type={item.type} jobLink={item.link} />
      ))}
      <div className={cx(plastkMail)}>
        <i className="material-icons">info</i> To apply, please send your resume to{' '}
        <a href="mailto:teams@plastk.ca" onClick={() => moengage.carrerEmailLINK()}>
          teams@plastk.ca
        </a>
      </div>
    </div>
  );
}

export default Careers;

export function Head() {
  return (
    <Seo
      title="Career | Build A Rewarding Career | Plastk Visa Credit Card"
      metaDescription="Ambition to create a better future for our clients and team growth, Plastk Visa Credit Card believes in teamwork, therefore, seeking to collaborate with the right person."
    />
  );
}
