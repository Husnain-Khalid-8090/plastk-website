import * as React from 'react';
import { cx } from 'linaria';
import { StaticImage } from 'gatsby-plugin-image';
import Button from '../Button';
import Modal from '../Modal';
import { container } from '../../styles/common';
import { sentinelVisual, textCol, offerWrap, imgCol } from './SentinelVisual.styles';
import SentinelPackageModal from '../SentinelPackageModal';
import TermConditionModal from '../TermConditionModal';
import ConfirmationModal from '../ConfirmationModal';
import { moengage } from '../../../utils/moengageEvents';

function SentinelVisual() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isTcOpen, setTcOpen] = React.useState(false);
  const [isConfirmationOpen, setConfirmationOpen] = React.useState(false);

  return (
    <>
      <div className={cx(sentinelVisual)}>
        <div className={cx(container)}>
          <StaticImage
            loading="eager"
            className="card-img1"
            src="../../images/plastk-card-1.png"
            width={258}
            height={269}
            alt="img-description"
          />
          <StaticImage
            loading="eager"
            className="card-img2"
            src="../../images/plastk-card-2.png"
            width={247}
            height={236}
            alt="img-description"
          />
          <div className="holder">
            <div className={cx(textCol)}>
              <div className="head">
                <h1 className="no-border">Introducing </h1>
                <div className="title-holder">
                  <StaticImage
                    loading="eager"
                    class="badge-img"
                    src="../../images/badge.png"
                    width={70}
                    height={90}
                    alt="img-description"
                  />
                  <strong className="title">Plastk Sentinel</strong>
                </div>
              </div>
              <strong className="subtitle">Take Control of your Credit</strong>
              <div className={cx(offerWrap)}>
                <div className="btn-box">
                  <strong className="get-off">get 80% off First 3 months</strong>
                  <button
                    type="button"
                    className="btn-offer"
                    onClick={() => {
                      setIsOpen(true);
                      moengage.sentienlSpecialOffer();
                    }}>
                    <div>
                      <span>Special Offer</span>
                    </div>
                  </button>
                </div>
                <div className="price-holder">
                  <span className="price">
                    $9.99 <span className="text">For 3 Months</span>
                  </span>
                  <span className="price old">
                    <del>$15.99</del> <span className="text">/ Month</span>
                  </span>
                </div>
                <span className="text">*Conditions Apply. Non Refundable. All prices are subject to tax</span>
              </div>
              <strong className="price d-none">
                $15.99 <span>/ month</span>
              </strong>
              <div className="para">
                <p>The best way to monitor, track and review your full credit report</p>
              </div>
              <div className="btn-holder">
                <Button
                  rounded
                  width={185}
                  onClick={() => {
                    setIsOpen(true);
                    moengage.sentinelSubscribeNow();
                  }}
                  md>
                  Subscribe Now
                </Button>
              </div>
            </div>
            <div className={cx(imgCol)}>
              <StaticImage loading="eager" src="../../images/cell-img01.png" alt="img-description" />
            </div>
          </div>
        </div>
      </div>
      <Modal
        width={1060}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Plastk Sentinel"
        moType="SENTINEL_PAGE_CLOSE_SUBSCRIBE_PACKAGE_MODAL_CLICK">
        <SentinelPackageModal setTcOpen={setTcOpen} setConfirmationOpen={setConfirmationOpen} />
      </Modal>

      <Modal
        width={900}
        isOpen={isTcOpen}
        setIsOpen={setTcOpen}
        title="Plastk Sentinel"
        moType="SENTINEL_PAGE_CLOSE_TERMS&CONDITIONS_MODAL_CLICK">
        <TermConditionModal />
      </Modal>
      <Modal
        width={550}
        isOpen={isConfirmationOpen}
        setIsOpen={setConfirmationOpen}
        title="Confirmation"
        moType="SENTINEL_PAGE_CLOSE_SUBSCRIBE_CONFIRMATION_MODAL_CLICK">
        <ConfirmationModal />
      </Modal>
    </>
  );
}

export default SentinelVisual;
