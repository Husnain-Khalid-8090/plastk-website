import * as React from 'react';
import { cx } from 'linaria';
import { faqSection, accordion, accordionItem, accordionOpener, accordionContent } from './BapFaqAccordion.styles';
import { container } from '../../styles/common';

function BapFaqAccordion() {
  const [isActive, setIsActive] = React.useState(false);

  const faqData = [
    {
      question: 'What is Plastk Business Accelerator Portal?',
      answer:
        'The Plastk Business Accelerator Portal is an innovative digital platform that connects Plastk card holders with businesses around the country with the goal of increasing profitability for businesses by driving more customers to spend and engage with the brand.',
    },
    {
      question: 'How do I sign up for the Business Accelerator Portal?',
      answer:
        'You have two options; You can click on the sign-up button which will direct you to the sign-up page or you can fill out merchant request form and one of our team members will reach out to you.',
    },
    {
      question: 'How much does it cost?',
      answer: 'It’s free to register! No setup costs, fees, or commissions.',
    },
    {
      question: 'What kind of business can sign up?',
      answer:
        'The Plastk Business Accelerator Portal is open to all businesses. It is created for most local and national based businesses, including restaurants, clothing stores, gyms, gas stations, grocery stores, coffee shops and more.',
    },
    {
      question: 'Do I need a new Point of Sale system? (POS)',
      answer: 'No, if you accept credit cards you do not need anything else.',
    },
    {
      question: 'How do I track the success of my campaigns?',
      answer:
        'We provide a detailed dashboard for all success criteria including the revenue and metrics for all your campaigns.',
    },
    {
      question: 'My business is online only, can I still sign up?',
      answer:
        'The Plastk Business Accelerator Portal works with all registered businesses including online only businesses.',
    },
    {
      question: 'Do I get help marketing my business?',
      answer:
        'Yes, we work with you to promote your business through our proprietary platform at a local & national level. Please reach out to your Plastk associate to know more.',
    },
    {
      question: 'I own multiple businesses do I have to open an account for each one?',
      answer:
        'Each individual business requires its own business accelerator account. If a business has multiple stores, they can be included under the same business accelerator account.',
    },
  ];

  const toggle = index => {
    if (isActive === index) {
      // if clicked question is already active, then close it
      return setIsActive(null);
    }

    setIsActive(index);

    return '';
  };

  return (
    <section className={cx(faqSection)}>
      <div className={cx(container)}>
        <ul className={cx(accordion)}>
          {faqData.map((item, index) => (
            <li className={cx(accordionItem)} key={index}>
              <button type="button" className={cx(accordionOpener)} onClick={() => toggle(index)}>
                {item.question}
                <span className="ico">{isActive === index ? '-' : '+'}</span>
              </button>
              {isActive === index && (
                <div className={cx(accordionContent)}>
                  <p>{item.answer}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default BapFaqAccordion;
