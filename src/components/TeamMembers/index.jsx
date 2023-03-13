import { StaticImage } from 'gatsby-plugin-image';
import { cx } from 'linaria';
import * as React from 'react';

import { container } from '../../styles/common';
import MemberCol from '../MemberCol';
import { grid, memberCol, teamContainer, teamMemberSection } from './TeamMembers.styles';

function TeamMembers() {
  return (
    <section className={cx(teamMemberSection)}>
      <div className={cx(container, teamContainer)}>
        <h2 className="h1 center">Leadership Team</h2>
        <div className={cx(grid)}>
          <div className={cx(memberCol)}>
            <MemberCol
              img={
                <StaticImage
                  loading="eager"
                  src="../../images/team_member_01.png"
                  alt="Motola Omobamiduro"
                  width={380}
                  height={566}
                />
              }
              name="Motola Omobamiduro"
              designation="Founder & CEO"
              color="yellow"
              writeUp={
                <>
                  <p>
                    As a father to my sweet girl Aria, there is no bigger responsibility than to lead through example.
                    Challenging myself to do more with less, is the same situation many hard working Canadians are
                    forced to do every day.
                  </p>
                  <p>
                    The team at Plastk which will lead this revolution in the Canadian Fintech industry is dynamic and
                    talented. I am humbled every day to be given the opportunity to challenge some of the smartest
                    people I know, to bring the most innovative products and services to Canadian consumers. I also
                    really like playing online video games.
                  </p>
                </>
              }
            />
          </div>
          <div className={cx(memberCol)}>
            <MemberCol
              img={
                <StaticImage
                  loading="eager"
                  src="../../images/team_member_02.png"
                  alt="David Ojemakinde"
                  width={380}
                  height={566}
                />
              }
              name="David Ojemakinde"
              designation="Chief Technology Officer"
              color="blue"
              writeUp={
                <>
                  <p>
                    David Ojemakinde has a degree in Industrial and Production Engineering with a focus on Operations
                    Research and Operations Management. He has established himself as a Management, Process and
                    Technology consultant with many of the Fortune 500 companies, with footprints in many industries
                    across the globe such as Accenture, Nestle, Shell Group, TC Energy etc{' '}
                  </p>
                  <p>
                    David believes there is always a better way to doing anything. His passion, training and attitude
                    focuses only on driving value at speed to Plastk and our cardholders. He enjoys teaching, cooking
                    and loves to travel the world.
                  </p>
                </>
              }
            />
          </div>
          <div className={cx(memberCol)}>
            <MemberCol
              img={
                <StaticImage
                  loading="eager"
                  src="../../images/team_member_03.png"
                  alt="Anil Rege"
                  width={380}
                  height={566}
                />
              }
              name="Anil Rege"
              designation="Chief Marketing Officer"
              color="purple"
              writeUp={
                <p>
                  Our CMO, Anil Rege, has extensive North American and Global experience. He did his MBA from the State
                  University of New York, Buffalo, and has worked with Fortune 500 companies, such as Nestle, Reckitt
                  Benckiser, and Procter & Gamble. He also teaches at a business school in Toronto. He is a huge NFL
                  fan, loves travelling and trying new cuisines.
                </p>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamMembers;
