import * as React from 'react';
import { cx } from 'linaria';
import { container } from '../../styles/common';
import { bapRegister } from './BapRegister.styles';
import Button from '../Button';

function BapRegister() {
  const [isValid, setIsValid] = React.useState(false);

  const [email, setEmail] = React.useState('');
  const handleChange = e => {
    setEmail(e.target.value);
    const errors = {};
    if (!e.target.value) {
      errors.email_field = 'Required';
      setIsValid(false);
    } else if (
      !/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]{2,64}@)([\w+[\\?-\w+)]{2,187}([.])\w{2,3})+$/i.test(e.target.value)
    ) {
      errors.email_field = 'Invalid email address';
      setIsValid(false);
    } else {
      setIsValid(true);
    }
    return errors;
  };
  const handleSubmit = e => {
    if (isValid) {
      e.preventDefault();
      window.open(`${process.env.GATSBY_API_BASE_URL_BUSINESS}/sign-up?email=${email}`, '_blank');
    }
  };
  const style = {
    color: '#70BC29',
  };
  return (
    <div className={cx(bapRegister)}>
      <div className={cx(container)}>
        <div className="holder">
          <div className="text-holder">
            <h2 className="no-border">
              Register Your Business for Free In Just <span style={style}>5 Minutes!</span> ⏱️
            </h2>
            <p>
              Join the Plastk Community and build your customer base today or tell us about your business below and a
              member of our team will connect with you shortly.
            </p>
          </div>
          <div className="form-holder">
            <form onSubmit={handleSubmit}>
              <input type="email" placeholder="Enter Email" onChange={handleChange} />
              <Button className="button" type="primary" htmlType="submit" rounded width="235">
                Register for Free
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BapRegister;
