/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { cx } from 'linaria';
import { Link } from 'gatsby';
import Modal from '../Modal';
import { confirmationModal } from './ConfirmationModal.styles';
import CreateAccountModal from '../CreateAccountModal';

import { moengage } from '../../../utils/moengageEvents';

function ConfirmationModal() {
  const [isOpen, setIsOpen] = React.useState();
  return (
    <>
      <div className={cx(confirmationModal)}>
        <p>Are you plastk customer?</p>
        <div className="btn-holder">
          <a
            href={`${process.env.GATSBY_API_BASE_URL_ACCOUNT}`}
            className="btn-blue"
            onClick={() => {
              moengage.sentinelModalConfirmationYes();
            }}>
            Yes
          </a>
          <Link
            to=""
            onClick={() => {
              setIsOpen(true);
              moengage.sentinelModalConfirmationNo();
            }}
            className="btn-gray">
            No
          </Link>
        </div>
      </div>
      <Modal
        width={550}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Let's create your Plastk account"
        moType="SENTINEL_PAGE_CREATE_ACCOUNT_MODAL_CLOSE">
        <CreateAccountModal setIsOpen={setIsOpen} />
      </Modal>
    </>
  );
}

export default ConfirmationModal;
