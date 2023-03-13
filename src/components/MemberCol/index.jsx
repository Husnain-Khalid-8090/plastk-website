import { cx } from 'linaria';
import * as React from 'react';

import { memberImg, memberInfo, writeUps } from './MemberCol.styles';

function MemberCol({ img, name, designation, writeUp, color }) {
  return (
    <>
      <div className={cx(memberImg)}>
        <div className="img-holder">{img}</div>
        <div className={cx(memberInfo, color)}>
          <span className="name">{name}</span>
          <span className="role">{designation}</span>
        </div>
      </div>
      <div className={cx(writeUps)}>{writeUp}</div>
    </>
  );
}

export default MemberCol;
