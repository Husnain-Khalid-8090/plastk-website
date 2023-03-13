import * as React from 'react';
import { cx } from 'linaria';
import { benefitSection } from './BenefitsPlastk.styles';
import Button from '../Button';
import { container } from '../../styles/common';
import Modal from '../Modal';
import SentinelPackageModal from '../SentinelPackageModal';
import { moengage } from '../../../utils/moengageEvents';

function BenefitsPlastk() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <section className={cx(benefitSection)}>
        <div className={cx(container)}>
          <div className="holder">
            <span className="subtitle">Access the benefits of Plastk Sentinel</span>
            <h2 className="no-border">Click ‘subscribe now’ to see our payment plans</h2>
            <Button
              type="primary"
              width={210}
              rounded
              onClick={() => {
                setIsOpen(true);
                moengage.sentinelSubscibeNowBottom();
              }}
              md>
              Subscribe Now
            </Button>
          </div>
        </div>
      </section>
      <Modal width={1060} isOpen={isOpen} setIsOpen={setIsOpen} title="Plastk Sentinel">
        <SentinelPackageModal />
      </Modal>
    </>
  );
}

export default BenefitsPlastk;
