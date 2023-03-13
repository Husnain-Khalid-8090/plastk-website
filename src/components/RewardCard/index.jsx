/* eslint-disable jsx-a11y/click-events-have-key-events */
import { cx } from 'linaria';
import * as React from 'react';

import { cardBox, iconHolder, modalHolder, titleStyle } from './RewardCard.styles';

function RewardCard({ title, children, paragraph, className, ...props }) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  // const [selectedValue, setSelectedValue] = useState('');
  const ref = React.useRef();

  React.useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isExpanded && ref.current && !ref.current.contains(e.target)) {
        setIsExpanded(false);
        document.body.classList.remove('popup-active');
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      // Cleanup the event listener

      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isExpanded]);

  return (
    <div className={cx(cardBox, className, isExpanded && 'modalActive')} ref={ref} {...props}>
      <div
        className="mobile-icon"
        role="button"
        tabIndex="0"
        onClick={() => {
          setIsExpanded(!isExpanded);
          document.body.classList.add('popup-active');
        }}>
        <div className={cx(iconHolder)}>{children}</div>
        <span className={cx(titleStyle)}>{title}</span>
      </div>
      <div className={cx(modalHolder)}>
        <div className="hideOnDesktop">
          <div className={cx(iconHolder)}>{children}</div>
          <span className={cx(titleStyle)}>{title}</span>
        </div>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}

export default RewardCard;
