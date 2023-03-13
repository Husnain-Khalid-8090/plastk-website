import * as React from 'react';

import FaqAccordion from '../components/FaqAccordion';
import Seo from '../components/Seo';

function NotFoundPage() {
  return <FaqAccordion />;
}

export default NotFoundPage;

export function Head() {
  return (
    <Seo
      title="FAQs | Know More About Secured Credit Card"
      metaDescription="What is a secured credit card? What is the difference between a secured and unsecured credit card? How to apply? How do send in the security funds? Read our FAQs to know all about Plastk & Secured Credit Cards.">
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
              "@type": "Question",
              "name": "How do I apply for a Plastk Secured Credit Card?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Please visit https://plastk.ca, select the “APPLY NOW” icon and complete the sign-up form online. You will receive a subsequent email with instructions on how to complete the registration process."
              }
          }, {
              "@type": "Question",
              "name": "How long does it take to get approved?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our approval process is instant. You should hear back from us within 24 hours. We will email you instructions on how to send us your security funds. Your card and pin will be mailed to you."
              }
          }, {
              "@type": "Question",
              "name": "Do I have to send in my security funds before I receive my card?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Once you’ve applied, we’ll let you know the amount of security funds required to get started. You will have to send in your security funds before we are able to issue your new Plastk Secured Credit Card."
              }
          }, {
              "@type": "Question",
              "name": "How do I send in my security funds?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We have made it easy as 1-2-3! to add funds by e-transfer! 1. Simply send your deposit to securityfunds@plastk.ca it will be auto deposited.2. Log into the Plastk App or the Plastk Cardholder Portal and verify your funds using your Interac Reference Number (you would have received this via email)3. That’s it!*It may take up to 30 minutes to receive your transfer.*If your bank requires a password (even though it is auto deposited) please use the password “plastk”."
              }
          }, {
              "@type": "Question",
              "name": "How long does it take to deliver the card?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You will get your Plastk Secured Credit Card within 10-15 business days from the date in which we received your confirmation of your deposit in the cardholder portal."
              }
          }, {
              "@type": "Question",
              "name": "How long does it take to get my security funds back once I close my account with Plastk?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Security funds will be returned to you within 60 days of you closing your account."
              }
          }, {
              "@type": "Question",
              "name": "How can I reach Plastk?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can email us at hello@plastk.ca or call us at 1-844-200-0526. You can also use our Live Chat feature on https://plastk.ca. Our hours of operations are Monday to Friday 7 AM to 5 PM MST."
              }
          }, {
              "@type": "Question",
              "name": "How do I cancel the Plastk Secured Credit Card?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can cancel your Plastk Secured Credit Card by calling us at 1-844-200-0526. Our hours of operations are Monday to Friday 7 AM to 5 PM MST."
              }
          }, {
              "@type": "Question",
              "name": "How do I report my credit card as stolen?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can call us at 1-844-200-0526. Our hours of operations are Monday to Friday 7 AM to 5 PM MST."
              }
          }, {
              "@type": "Question",
              "name": "How do I increase my credit limit?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "To increase your credit limit;1. Simply send the additional funds through Interac e-Transfer to securityfunds@plastk.ca, it will be auto-deposited.2. Log into the Plastk App or the Plastk Cardholder Portal and verify your funds sent using your Interac Reference Number (you will receive this via email)Once verified by Plastk, your credit limit will be updated to reflect the new limit amount within 24 Hours. Please Note: It may take up to 30 minutes to receive your transferIf your bank requires a password (even though it is auto- deposited) please use the password “plastk”"
              }
          }, {
              "@type": "Question",
              "name": "I have sent in my security deposit but now how do I lower my credit limit?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "1. If you have not activated your card, you can decrease your credit limit anytime by contacting us. You can email us at hello@plastk.ca or call us at 1-844-200-0526. Our hours of operations are Monday to Friday 7 AM to 5 PM MST.2. If you have activated your card, there is no process to lower your credit limit. You will have to cancel your current card & re-apply."
              }
          }, {
              "@type": "Question",
              "name": "How do I make a credit card payment?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can make a payment towards your Plastk Secured Visa Credit Card two ways:1. Sending a e-Transfer to yourself using your Direct Payment ID (DPiD) – You can find your DPiD in the personal information tab in the Cardholder Portal; or2. Send an e-transfer to payments@plastk.ca. Go to the cardholder portal and click the Payments tab on the left of your screen. Click on the Verify Payment button and paste your Interac Reference Number. That's it!*For payments made to payments@plastk.ca please allow 30 minutes before verifying with the Interact Reference Number."
              }
          }, {
              "@type": "Question",
              "name": "Does Plastk have a rewards program?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "YES WE DO! Plastk offers the only premium rewards program for a secured credit card in Canada. Our rewards program allows cardholders to earn points to redeem for statement credits, exclusive member events and other perks. All new cardholders receive 5,000 bonus rewards points (a value of $20 (CDN) after 3 months. Conditions apply."
              }
          }, {
              "@type": "Question",
              "name": "Is Plastk Secured Credit Card an online/digital card?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, Plastk Secured Credit Card is not an online/digital card. It is a physical card."
              }
          }, {
              "@type": "Question",
              "name": "Is Plastk Secured Visa Credit Card a prepaid/gift card or a debit card?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, Plastk Secured Credit Card is NOT a prepaid/gift card or a debit card. Plastk is a credit card."
              }
          }, {
              "@type": "Question",
              "name": "Is there a minimum requirement for security funds (deposit)?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, the minimum-security funds (deposit) is $300 (CDN). However, you can request a maximum credit limit of $10,000 (CDN)."
              }
          }, {
              "@type": "Question",
              "name": "Can I pay my security funds (deposit) in Instalments?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, any amount sent to securityfunds@plastk.ca will go towards your security funds (deposit) total until the requested amount or a minimum of $300 is achieved. You still are required to verify your installment funds each time you send an Interac e-transfer. You can increase your credit limit anytime you want up to a maximum of $10,000 (CAD)."
              }
          }, {
              "@type": "Question",
              "name": "Are the security funds refundable?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, if you close your account and your account has no outstanding balance, the entire amount will be returned to you once the account closure is processed."
              }
          }, {
              "@type": "Question",
              "name": "Can I use my security funds to make payments?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, the security funds (your deposit) can not be used to make payments since these funds are held as security funds (a deposit) until your account is closed. At no time can your security funds be accessed while your account is active."
              }
          }, {
              "@type": "Question",
              "name": "Does Plastk have an annual Fee?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our annual fee is $48.00 (CDN)."
              }
          }, {
              "@type": "Question",
              "name": "Where can the Plastk Secured Credit Card be used?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Plastk Secured Credit Card can be used ANYWHERE Visa is accepted around the world, in over 200 million places."
              }
          }, {
              "@type": "Question",
              "name": "Can I add an authorized user to my account?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, not at this time."
              }
          }, {
              "@type": "Question",
              "name": "Can I spend over my limit?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, you cannot spend over your credit limit. If you require a higher limit you can increase your credit limit by sending additional security funds to securityfunds@plastk.ca."
              }
          }, {
              "@type": "Question",
              "name": "What is my available credit?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Your available credit, as it appears in your account details, represents the funds available you can still use on your credit card as of today’s date. Your available credit limit considers both your posted and pending transactions."
              }
          }, {
              "@type": "Question",
              "name": "Where can I find the Card verification value (CVV)?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The CVV is located on or near the signature strip on the back of your Plastk Secured Credit Card. You should see only 3 digits. These 3 digits are the ones you need to enter as your CVV."
              }
          }, {
              "@type": "Question",
              "name": "Does Plastk have a monthly maintenance fee?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our monthly maintenance fee is $6.00 (CDN)."
              }
          }, {
              "@type": "Question",
              "name": "What is a secured credit card?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A secured credit card is a type of credit card which is secured by a cash deposit that is used as collateral. Card providers offer these secured credit cards to their customers to help them build, rebuild or strengthen their credit profile. The credit card is issued only after a certain amount (the security deposit) is paid to the card provider and that amount usually acts as the credit limit of the card."
              }
          }, {
              "@type": "Question",
              "name": "What is the difference between a Secured Credit Card and an Unsecured Credit Card?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A secured credit card is a type of credit card that requires the cardholder to place funds with the issuer. Those funds, called security funds, are required at the time of approval, whereas an unsecured credit card would not require any security fund. Both types of credit cards function the same and can be used in the exact same capacity and both report to the credit reporting agencies."
              }
          }, {
              "@type": "Question",
              "name": "What is the difference between a secured credit card and a gift card/prepaid card?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A secured credit card is a type of credit card that requires the cardholder to place funds with the issuer.On the other hand, a prepaid card/gift card has no collateral involved. As the name suggests, it is a prepaid card/gift card and comes with a balance purchased from a bank or card provider.A prepaid card does not affect your credit score or report to credit reporting agencies. It may not be accepted in certain circumstances such as car rental, hotels or some online purchases."
              }
          }, {
              "@type": "Question",
              "name": "What are the benefits of a secured credit card?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In some cases, the applicants are not required to provide additional inquiries of their credit history1. The process of approval is fast and generally completed the same day2. Guaranteed approval3. Easy way to build your credit score4. No credit check is required"
              }
          }]
        }`}
      </script>
    </Seo>
  );
}
