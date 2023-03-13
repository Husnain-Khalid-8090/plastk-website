import { cx } from 'linaria';
import * as React from 'react';

import logoImg from '../../images/logo.svg';
import { disclosuerStatment } from './ViewDisclosuerStatment.styles';

function ViewDisclosuerStatment() {
  return (
    <div className={cx(disclosuerStatment)}>
      <div className="page-head">
        <div className="logo">
          <img loading="eager" src={logoImg} alt="plastk" />
        </div>
        <strong className="heading">Plastk Disclosure Statement</strong>
        <p>
          This Disclosure Statement contains important information related to your credit agreement with Plastk
          Financial & Rewards Inc. Please visit{' '}
          <a href="https://www.plastk.ca/" target="_blank" rel="noreferrer">
            www.Plastk.ca/
          </a>{' '}
          to view our online credit card offers. If you are a current Plastk Secure Visa* Cardholder, please log in to
          your account if you would like to request the Credit Agreement, or Disclosure Statement for your account.
        </p>
      </div>
      <div className="statment-section">
        <div className="header">
          <strong className="heading">Plastk Interest Rate and Fee Descriptions:</strong>
        </div>
        <div className="statment-holder">
          <div className="holder">
            <strong className="title">Initial Credit Limit</strong>
            <div className="text-box">
              <p>
                Your initial credit limit will be provided to you by email prior to you receiving your Card and will
                appear on each monthly statement.
              </p>
            </div>
          </div>
          <div className="holder">
            <strong className="title">Annual Interest Rate or Rates</strong>
            <div className="text-box">
              <strong className="subtitle">Introductory No Interest Period for Purchases</strong>
              <p>
                You will be charged an introductory interest rate of <strong>0.00%</strong> on purchases for the first
                three <strong>(3)</strong> months when you open your account.
              </p>
              <p>
                During the introductory interest rate period, your interest rate will increase from <strong>0%</strong>
                to <strong>17.99%</strong> on purchases, if you:
              </p>
              <ul className="list">
                <li>
                  miss <strong>one (1)</strong> minimum payment during such period;
                </li>
                <li>make a payment that is returned/dishonored; or </li>
                <li>fail to meet any of the terms in the credit agreement.</li>
              </ul>
              <p>
                If you miss a <strong>second</strong> minimum payment during the introductory interest rate period, your
                interest rate will increase from <strong>17.99%</strong> to <strong>29.99%</strong> until your entire
                outstanding balance is paid in full, at which time you will be charged an interest rate of{' '}
                <strong>17.99%</strong> for the remainder of the introductory interest rate period.
              </p>
              <strong className="subtitle">Annual Interest Rates:</strong>
              <ul className="list">
                <li>
                  Purchases: <strong>17.99%</strong> following the introductory interest rate period.
                </li>
                <li>
                  Transfers:{' '}
                  <strong>
                    17.99% <sup>1</sup>
                  </strong>
                </li>
                <li>
                  Cash Advances:{' '}
                  <strong>
                    21.99% <sup>2</sup>
                  </strong>
                </li>
              </ul>
              <strong className="subtitle">Default Interest Rate and When It Applies:</strong>
              <ul className="list">
                <li>
                  The default interest rate of <strong>29.99%</strong> may be applied to all balances outstanding on
                  your account if you are late making <strong>two (2)</strong> minimum payments in a calendar year or{' '}
                  <strong>two (2)</strong> consecutive minimum payments.
                </li>
                <li>
                  <strong>How Long Will the Default Interest Rate Apply?</strong> You will be charged the default
                  interest rate until your outstanding account balance is paid in full. Once the account balance is paid
                  in full you will be charged the annual interest rate applicable to the various types of transactions,
                  as described above.3
                </li>
              </ul>
            </div>
          </div>
          <div className="holder">
            <strong className="title">Interest-Free Grace Period</strong>
            <div className="text-box">
              <strong className="subtitle">Purchases and Standard Balance Transfers: 25 days</strong>
              <p>
                You will benefit from an interest-free grace period of at least <strong>25</strong> days for new
                purchases and new standard balance transfers provided you pay your new balance on your monthly statement
                in full by the payment due date, in both the current and all previous months. The minimum 25-day grace
                period is the period between the last day of your billing period and the payment due date.
              </p>
              <p>
                The payment due date for your billing period appears on your monthly statement. If you do not pay off
                the new balance in full by the payment due date, interest will be payable on all purchases and standard
                balance transfers appearing on the monthly statement and is charged from the date each such transaction
                occurred.
              </p>
              <div className="text-holder small">
                <ul className="number-list">
                  <li>
                    <sup>1</sup> This annual interest rate applies only to standard balance transfers. The promotional
                    rate for special balance transfers (if any) will be disclosed to you at the time such offer is made.
                  </li>
                  <li>
                    <sup>2</sup> Cash advances include “quasi cash advances” which are monetary transactions posted to
                    your account which are not &quot;purchase&quot; transactions and include, but are not limited to,
                    wire transfers, foreign currency, travelers cheques, money orders, remote stored value, and purchase
                    of gaming chips.
                  </li>
                  <li>
                    <sup>3</sup> If you are in default, in addition to being charged the default interest rate, where
                    permitted by applicable law, you are also required to pay all legal fees reasonably incurred to
                    collect or attempt to collect the balance of your account.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="holder">
            <strong className="title" />
            <div className="text-box">
              <strong className="subtitle">Cash Advances and Special Balance Transfers: 3 days</strong>
              <p>
                You will benefit from an interest-free grace period of at least 3 days for cash advances and special
                balance transfers, which period includes the day the applicable transaction occurs.
              </p>
            </div>
          </div>
          <div className="holder">
            <strong className="title">Determination of Interest</strong>
            <div className="text-box">
              <p>
                If interest is charged on a transaction, it is calculated based on your daily interest rate using the
                “average daily balance (including new transactions) method.” This interest is charged to your account at
                the end of each billing period.
              </p>
            </div>
          </div>
          <div className="holder">
            <strong className="title">Minimum Payment</strong>
            <div className="text-box">
              <strong className="subtitle">3.00% or $15</strong>
              <p>
                Your minimum payment will be the greater of <strong>3.00%</strong> of the new balance on each monthly
                statement or <strong>$15.00.</strong> You must pay your minimum payment by the payment due date shown on
                each monthly statement.
              </p>
              <p>
                In addition, amounts showing on your monthly statement as OVERDUE or OVERLIMIT must be paid immediately
                and will be added to the minimum payment.
              </p>
            </div>
          </div>
          <div className="holder">
            <strong className="title">Foreign Currency Conversion</strong>
            <div className="text-box">
              <strong className="subtitle">4.5%</strong>
              <p>
                Payments must be made in Canadian dollars. Any other transactions made in a foreign currency will be
                converted and posted to your account in Canadian dollars.
              </p>
              <p>
                For a transaction with the card, the exchange rate is determined by VISA International on our behalf on
                the date that the transaction is settled with VISA International. This exchange rate may be different
                from the exchange rate in effect on the transaction date. This rate includes an amount equal to{' '}
                <strong>4.5%</strong> of the converted amount. For any reversal of a transaction with the card, the
                exchange rate is determined by VISA International on our behalf on the date that the reversal of the
                transaction is settled with VISA International.
              </p>
            </div>
          </div>
          <div className="holder">
            <strong className="title">Annual Fee</strong>
            <div className="text-box">
              <strong className="subtitle">$48.00</strong>
              <p>
                Charged on your first monthly statement and annually on your first monthly statement anniversary date.
                The Annual Fee will be charged annually even if your account is inactive for any period during the
                applicable year and in addition to the Inactive Fee described below.
              </p>
            </div>
          </div>
          <div className="holder">
            <strong className="title">Other Fees</strong>
            <div className="text-box">
              <p>
                <strong>Monthly Maintenance Fee: $6.00</strong> will be charged to your account each month at the end of
                the billing period, and will apply even if your account is inactive for the applicablemonth.
              </p>
              <strong className="subtitle">International POS Transaction: $4.75 per transaction. </strong>
              <p>
                <strong>Cash Advance Fees:</strong> The following fees will be charged for each cash advance on the day
                the transaction occurs (unless otherwise indicated):
              </p>
              <ul className="list bullet-none">
                <li>
                   processed by a teller at any financial institution in Canada: <strong>$10.00</strong>
                </li>
                <li>
                   obtained at any ABM in Canada displaying the Interac symbol: <strong>$10.00</strong>
                </li>
                <li>
                   processed by a teller at any financial institution outside of Canada: <strong>$15.00</strong>
                </li>
                <li>
                   obtained at any ABM outside of Canada: <strong>$15.00</strong>
                </li>
                <li>
                   Interac e-transfers (mobile/web) initiated from your account: <strong>$5.00</strong>
                </li>
              </ul>
              <p>
                <strong>Reissued cards:</strong> Each cardholder will be able to receive 1 free card per calendar year
                as a replacement card for any reason. In addition, a replacement card may be reissued at no cost in
                circumstances where your card is stolen or breaks because of use. Each cardholder will also receive 1
                new card prior to the expiry for your existing card. All other reissued cards will be subject to a
                charge of $20.00.
              </p>
              <p>
                <strong>Monthly Statement Fee (paper copy): $5.00 </strong> per copy.
              </p>
              <p>
                <strong>Declined Transaction Fee: $0.10</strong> will be charged for each transaction that is not
                approved.
              </p>
              <p>
                <strong>Dishonored Payment Fee**:</strong> A dishonored payment fee of <strong>$35.00</strong> is
                charged to your account for each payment dishonored by your financial institution on the date the
                payment is dishonored.
              </p>
              {/* <p>
                <strong>Late Payment Fee**:</strong> A late payment fee of <strong>$35.00</strong> is charged to your
                account each time you fail to make the minimum payment on the payment due date.
              </p> */}
              <p>
                <strong>Over Limit Fee**:</strong> An over limit fee of <strong>$30.00</strong> is charged to your
                account on the day your account balance first exceeds your credit limit and then once per statement
                period (charged on the first day of the statement period) if your account remains over limit from a
                previous statement period.
              </p>
              <p>
                <strong>Inactive Fee:</strong> An inactive fee of <strong>$2.00</strong> is charged if there have been
                no transactions on your account for a period of <strong>3</strong> consecutive months and is charged to
                your account on a monthly basis thereafter until a transaction is charged to your account.
              </p>
              {/* <p>
                **Dishonored payment fee, late payment fee and over limit fee are treated as purchases and are subject
                to the prevailing interest rate applicable to purchases. The interest-free grace period applicable to
                purchases, as described in this disclosure statement, also applies.
              </p> */}
              <p>
                **Dishonored payment fee, and over limit fee are treated as purchases and are subject to the prevailing
                interest rate applicable to purchases. The interest-free grace period applicable to purchases, as
                described in this disclosure statement, also applies.
              </p>
            </div>
          </div>
        </div>
        <div className="info-section">
          <strong className="title">THINGS YOU SHOULD KNOW ABOUT THIS CARD</strong>
          <p>
            <strong>How We Will Calculate Balances:</strong> We use a method called “average daily balance” (including
            new transactions). See
          </p>
          <p>
            <strong>&quot;How Do You Calculate the Interest Charge?&quot;</strong> below for more details. How Do You
            Calculate The Interest Charges? We use a method called &quot;average daily balance (including new
            transactions)&quot;. Underthis method, we first calculate thedaily balance of your account during the
            billing period for each interest charge segment (transactions that share the same interest rate are placed
            into the same interest charge segment). This is calculated as follows
          </p>
          <ul className="number-list">
            <li>(1) take the beginning balance of each interest charge segment each day;</li>
            <li>(2) add any new transactions made during that day to the applicable interest charge segment; and</li>
            <li>(3) subtract any payments or credits to the applicable interest charge segment that occur that day.</li>
          </ul>
          <p>
            The result is the daily balance for each interest charge segment. For certainty, any transactions that are
            subject to a grace period are not added to the daily balance of the applicable interest charge segment.
          </p>
          <p>We then calculate your average daily balance for each interest charge segment as follows:</p>
          <ul className="number-list">
            <li>
              (1) add the daily balances for each interest charge segment together to get the total balance for each
              interest charge segment during the billing period; and
            </li>
            <li>
              (2) divide the total balance for each interest charge segment by the number of days in the applicable
              billing period.{' '}
            </li>
          </ul>
          <p>
            (2) divide the total balance for each interest charge segment by the number of days in the applicable
            billing period:
          </p>
          <ul className="number-list">
            <li>
              (1) multiply the average daily balance for each interest charge segment by the daily periodic interest
              rate (calculated by taking the annual interest rate applicable to each interest charge segment divided by
              365);
            </li>
            <li>
              (2) multiply the resulting number for each interest charge segment by the number ofdays in the billing
              period (which results in the total interest charge for each interest charge segment); and
            </li>
            <li>
              (3) add together the total interest charge for each interest charge segment to get the total interest
              charge on your account for the billing period.
            </li>
          </ul>
          <p>
            When the default rate applies, it is calculated in the same manner described above, except that all
            transactions will be subject to the default interest rate. <strong>NOTE:</strong> due to rounding or a
            minimum interest charge, this calculation may vary from the interest charge actually assessed.
          </p>
          <p>
            <strong>Can Plastk Change My Account Terms?</strong> We can change the terms of your account as permitted by
            law. When required by law, we will send you notice before changing the terms of your account and you will be
            given 30 days before the new terms take effect to decide whether you want to refuse the change(s) and close
            your account.
          </p>
          <p>
            <strong>How Can I Avoid Paying Interest Charges?</strong> If you pay your statement’s “New Balance” in full
            by the due date, we will FEBRUARY 2021 not charge interest on any new transactions that post to the Purchase
            balance. If you have been paying your account in full with no interest charges, but then you do not pay your
            next “New Balance” in full, we will charge interest on the portion of the balance that you did not pay.
          </p>
          <p>
            For cash advances and special balance transfers, you will not be charged interest only if you pay the full
            balance of these items within the three <strong>(3)</strong> day grace-period applicable to these types of
            transactions.
          </p>
          <p>
            <strong>How Is The Interest Charge Applied?</strong> Interest charges accrue on every unpaid amount until it
            is paid in full. This means you may owe interest charges even if you pay the entire “New Balance” one month,
            but did not do so for the previous month. Unpaid interest charges are added to the proper segment of your
            account. However, we reserve the right to not assess interest charges at any time.
          </p>
          <p>
            <strong>Loss or Theft of Card?</strong> You must notify us promptly in the event of the loss or theft of
            your card. You may be liable for the unauthorized use of your card or PIN. However, you will not be liable
            for unauthorized use that occurs after you notify us orally or in writing of the loss, theft, or possible
            unauthorized use of your account. To report a lost or stolen card, call 1-844-200-0526. Please have your
            account number ready and state that you are reporting a lost/stolen card.
          </p>
          <p>
            <strong>Further Questions / Additional Information?</strong> If you have any other question or require
            further information, please contact our customer service team toll free at: 1-844-200-0526.
          </p>
          <p>
            This information was printed on October 16, 2020 and was accurate as of that date and is subject to change
            after that date. Call Plastk Financial & Rewards Inc. at 1-844-200-0526 to find out what may have changed.
          </p>
        </div>
        <div className="bottom-footer">
          <div className="logo">
            <img loading="eager" src={logoImg} alt="plastk" />
          </div>
          <p>
            All credit is issued by Plastk Financial & Rewards Inc. This card is owned and issued by Digital Bank
            Commerce, pursuant to license from Visa International. Use of the card is governed by the agreement under
            which it is issued. The Visa Brand is a registered trademark of Visa International.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ViewDisclosuerStatment;
