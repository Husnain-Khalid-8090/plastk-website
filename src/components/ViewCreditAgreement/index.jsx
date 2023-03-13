import { cx } from 'linaria';
import * as React from 'react';

import logoImg from '../../images/logo.svg';
import { viewAgreement } from './ViewCreditAgreement.styles';

function ViewCreditAgreement() {
  return (
    <div className={cx(viewAgreement)}>
      <div className="credit-agreement">
        <div className="page-head">
          <div className="logo">
            <img loading="eager" src={logoImg} alt="plastk" />
          </div>
          <strong className="heading">credit agreement</strong>
          <p>
            We’re happy to open your credit account. This agreement contains information about your account. Please read
            it and keep it for your records.
          </p>
        </div>
        <div className="pages-name">
          <span className="title">Contents</span>
          <ol className="pages">
            <li>
              <div className="inner">
                <span className="title">Glossary</span>
                <span className="count">2</span>
              </div>
            </li>
            <li>
              <div className="inner">
                <span className="title">Your agreement with us</span>
                <span className="count">3</span>
              </div>
            </li>
            <li>
              <div className="inner">
                <span className="title">Your responsibility for the total debt</span>
                <span className="count">3</span>
              </div>
            </li>
            <li>
              <div className="inner">
                <span className="title"> Using your account and Cards</span>
                <span className="count">3</span>
              </div>
            </li>
            <li>
              <div className="inner">
                <span className="title">Authorized users</span>
                <span className="count">4</span>
              </div>
            </li>
            <li>
              <div className="inner">
                <span className="title">Your credit limit</span>
                <span className="count">4</span>
              </div>
            </li>
            <li>
              <div className="inner">
                <span className="title">Foreign currency transactions</span>
                <span className="count">5</span>
              </div>
            </li>
            <li>
              <div className="inner">
                <span className="title">Other services and benefits</span>
                <span className="count">5</span>
              </div>
            </li>
            <li>
              <div className="inner">
                <span className="title">Rewards</span>
                <span className="count">5</span>
              </div>
            </li>
            <li>
              <div className="inner">
                <span className="title">Fees we charge</span>
                <span className="count">5</span>
              </div>
            </li>
            <li>
              <div className="inner">
                <span className="title">Interest we charge</span>
                <span className="count">5</span>
              </div>
            </li>
            <li>
              <div className="inner">
                <span className="title">How we calculate interest</span>
                <span className="count">6</span>
              </div>
            </li>
            <li>
              <div className="inner">
                <span className="title">Your monthly statements</span>
                <span className="count">6</span>
              </div>
            </li>
            <li>
              <div className="inner">
                <span className="title">Telling us about statement errors</span>
                <span className="count">6</span>
              </div>
            </li>
            <li>
              <div className="inner">
                <span className="title">Making payments to us</span>
                <span className="count">7</span>
              </div>
            </li>
            <li>
              <div className="inner">
                <span className="title">Applying your payments</span>
                <span className="count">7</span>
              </div>
            </li>
            <li>
              <div className="inner">
                <span className="title">Pre-authorized payments</span>
                <span className="count">7</span>
              </div>
            </li>
            <li>
              <div className="inner">
                <span className="title">Telling us about changes to your contact information</span>
                <span className="count">8</span>
              </div>
            </li>
            <li>
              <div className="inner">
                <span className="title">Resolving transaction disputes</span>
                <span className="count">8</span>
              </div>
            </li>
            <li>
              <div className="inner">
                <span className="title">Lost/stolen cards and unauthorized use of your account</span>
                <span className="count">8</span>
              </div>
            </li>
            <li>
              <div className="inner">
                <span className="title">Security funds</span>
                <span className="count">8</span>
              </div>
            </li>
            <li>
              <div className="inner">
                <span className="title">Default & forfeiture of benefit of the term</span>
                <span className="count">9</span>
              </div>
            </li>
            <li>
              <div className="inner">
                <span className="title">Restricting or closing your account</span>
                <span className="count">9</span>
              </div>
            </li>
            <li>
              <div className="inner">
                <span className="title">Changes to this agreement</span>
                <span className="count">10</span>
              </div>
            </li>
            <li>
              <div className="inner">
                <span className="title">Assigning your account</span>
                <span className="count">10</span>
              </div>
            </li>
            <li>
              <div className="inner">
                <span className="title">No Warranties</span>
                <span className="count">10</span>
              </div>
            </li>
            <li>
              <div className="inner">
                <span className="title">Governing law</span>
                <span className="count">10</span>
              </div>
            </li>
            <li>
              <div className="inner">
                <span className="title">Non-waiver</span>
                <span className="count">10</span>
              </div>
            </li>
            <li>
              <div className="inner">
                <span className="title">Severability</span>
                <span className="count">11</span>
              </div>
            </li>
            <li>
              <div className="inner">
                <span className="title">No Coercive Tied-Selling</span>
                <span className="count">11</span>
              </div>
            </li>
            <li>
              <div className="inner">
                <span className="title">
                  Québec residents only – clauses required under the Consumer Protection Act
                </span>
                <span className="count">11</span>
              </div>
            </li>
            <li>
              <div className="inner">
                <span className="title"> Plastk Privacy Policy</span>
                <span className="count">13</span>
              </div>
            </li>
            <li>
              <div className="inner">
                <span className="title"> Addressing your concerns</span>
                <span className="count">15</span>
              </div>
            </li>
          </ol>
        </div>
        <div className="text-detail">
          <strong className="heading" id="1">
            1. Glossary
          </strong>
          <p>
            There are a lot of defined terms and “jargon” that you may not be familiar with. Fortunately, we have
            created a handy glossary to help you sift through it all. account: The account that we open and maintain for
            your Card.
          </p>
          <p>
            <strong>agreement:</strong> This Credit Agreement, as well as your application, the disclosure statement,
            the Privacy Policy, and any amendments, replacements or updates we may provide from time to time.{' '}
            <strong>authorized user:</strong> A person who has been issued a Card on your account at your request.
          </p>
          <p>
            <strong>balance transfer:</strong> A type of funds advance that allows you to transfer to your account all
            or part of a balance you owe elsewhere. Balance transfers include both standard balance transfers and
            special balance transfers.
          </p>
          <p>
            <strong>billing period:</strong> the time between the last billing date and the current billing date for any
            charges applied to your account.
          </p>
          <p>
            <strong>Card:</strong> A Plastk Secured Visa Card issued under license by Digital Commerce Bank for your
            account that we issue to you or an authorized user (including any renewal or replacement Cards). This
            includes any software application we provide that permits you to charge amounts to your account. cash
            advance: Any of the following:
          </p>
          <ol type="a">
            <li>
              An advance of money obtained using your Card at an automated banking machine (ABM). The ABM must bear one
              of the logos shown on your Card or any other logo we designate; or
            </li>
            <li>A cash-like transaction. </li>
          </ol>
          <p>
            <strong>cash-like transaction:</strong> Any transaction involving the purchase of items directly convertible
            into cash, including wire transfers, money orders, bets, lottery tickets, gambling or casino gaming chips.
          </p>
          <p>
            <strong>disclosure statement:</strong> A document provided to you that sets out key information relevant to
            the use of your account, including the annual interest rates, fees and other charges that apply, and any
            amendments, replacements or updates we may provide from time to time.
          </p>
          <p>
            <strong>minimum payment:</strong> As shown on your monthly statement, the lowest amount of money that you’re
            required to pay by the payment due date each month to keep your account from going past due.
          </p>
          <p>
            <strong>new balance:</strong> As shown on your monthly statement, the total amount you owe on your account
            as of the date your monthly statement was prepared. For certainty, it does not include the amount of any
            pending transactions that did not post to your account by the date your monthly statement was prepared.
          </p>
          <p>
            <strong>payment due date: </strong>As shown on your monthly statement, the date when at least the minimum
            payment is due to be paid on your account. It may not fall on the same date each month.
          </p>
          <p>
            <strong>purchase:</strong> An amount charged to your account for goods and services at any merchant or
            business, other than a balance transfer or cash advance. A new purchase is a purchase appearing on your
            statement for the first time.
          </p>
        </div>
        <div className="text-detail">
          <p>
            <strong>rewards program:</strong> the Plastk Financial & Rewards Inc. rewards program that will be provided
            to you when you open your account provided your account is eligible for rewards.
          </p>
          <p>
            <strong>special balance transfer:</strong> An offer to make a balance transfer at a promotional annual
            interest rate. The promotional rate will be disclosed to you at the time the offer is made.
          </p>
          <p>
            <strong>standard balance transfer:</strong> A balance transfer which you can make at the standard annual
            interest rate for balance transfers set out in the disclosure statement. A new standard balance transfer is
            a standard balance transfer appearing on your statement for the first time.
          </p>
          <p>
            <strong>security funds:</strong> Funds you&apos;ve provided to us, which we hold as collateral for payment
            of the amounts you owe to us under this agreement, if applicable.
          </p>
          <p>
            <strong>transaction:</strong> Any purchase, cash advance, balance transfer, fee, interest charge, or any
            other charge on your account.
          </p>
          <p>
            <strong>we/our/us/Plastk:</strong> Plastk Secured Visa Card | Plastk Financial & Rewards Inc.
          </p>
          <p>
            <strong>you/your:</strong> The person(s) who signed or submitted the application for your account. This
            doesn’t include an authorized user.
          </p>
          <strong className="heading" id="2">
            Your agreement with us.
          </strong>
          <p>
            When you or an authorized user accesses your account for the first time, it means you have read and accepted
            the terms of this agreement and are able to request Cards, including renewal and replacement Cards. If we
            provided this agreement to you as an amendment or update to a previous agreement, the terms of this
            agreement shall apply on the date we indicate.
          </p>
          <p>
            This agreement applies to your account and any Cards that we may issue for your account. You are responsible
            for ensuring that any authorized users understand and comply with this agreement. This Credit Agreement
            replaces any other Credit Agreement or customer agreement we may have sent to you for your account.
          </p>
          <p>
            You confirm that you’ve requested this agreement and all communications and documents from us to be in
            English until you advise us otherwise. Vous confirmez que vous avez demandé que cette convention et toute
            communication ou tout document venant de nous soient en anglais jusqu’à avis contraire de votre part.
          </p>
          <strong className="heading" id="3">
            3.Your responsibility for the total debt.
          </strong>
          <p>
            You are liable under this agreement for all amounts owing on your account, including any indebtedness
            incurred by an authorized user. If more than one person submitted the application for your account you are
            each separately and jointly liable for all amounts owing on your account. The total debt that you owe
            consists of the amounts of all transactions charged to your account.
          </p>
          <p>You can incur a debt on your account even if:</p>
          <ul>
            <li>Your credit limit is exceeded; </li>
            <li>Your Card is used after its expiry date; or </li>
            <li>Your account is used after it has been restricted or closed </li>
          </ul>
          <strong className="heading" id="4">
            4. Using your account and Cards.
          </strong>
          <p>
            You can charge amounts to your account by using your Card along with your personal identification number
            (PIN) or by providing your signature on a sales receipt. We may also allow you to charge amounts in other
            ways, such as internet, mobile and/or contactless payments. Your Card may be used at any merchant that
            accepts Visa. We aren’t responsible if your Card is not honored by a merchant or your account can’t be used
            for any reason. You can’t use your account at any merchant or business located in the Crimea region of
            Ukraine, The Democratic People’s Republic of Korea, Sudan, Iran, Syria or Cuba. We may update this list in
            the future without giving you notice. You agree that you will use your Card and account for personal, family
            or household purposes only and not for any other purposes, including for business or commercial purposes.
            You may not use your account for any illegal, unauthorized or fraudulent purpose. If your Card requires a
            signature, you must sign your Card as soon as you receive it. You must not use your Card after the expiry
            date shown on your Card. If you or an authorized user charge anything to your account after your Card has
            expired or your account is restricted or closed, you are responsible for paying the amount owing to us,
            together with any interest or fees, as applicable.
          </p>
          <p>
            Digital Commerce Bank owns all Cards issued on your account and you can’t transfer them to anyone else. You
            are the only person permitted to use your Card and an authorized user is the only person permitted to use
            their Card.
          </p>
          <strong className="heading" id="5">
            5. Authorized users.
          </strong>

          <p>
            You may add or remove authorized users by contacting us. Each request to add an authorized user is subject
            to our approval and we may limit the number of authorized users on your account.
          </p>
          <p>
            An authorized user may make purchases and obtain cash advances in the same manner as you but isn’t liable
            for any debt incurred on the account.
            <strong>
              You are responsible for repaying any charges an authorized user makes on your account, including any
              associated interest and fees.
            </strong>
          </p>
          <p>
            We may provide information to an authorized user regarding transactions made on the account and the
            available credit limit, but an authorized user is not able to:
          </p>
          <ul>
            <li>
              <strong>Make any transactions other than purchases and cash advances; </strong>
            </li>
            <li>
              <strong> Give any instructions to us with respect to your account; or </strong>
            </li>
            <li>
              <strong>Update your account information </strong>
            </li>
          </ul>
          <p>We also do not send legal notices or disclosures to an authorized user</p>
          <strong className="heading" id="6">
            6. Your credit limit.
          </strong>
          <p>
            Your credit limit is the maximum amount you (together with your authorized users) can charge to your
            account. Your initial credit limit will be provided to you via email prior to you receiving your Card and
            your current credit limit will appear on each monthly statement.
          </p>
          <p>
            Each monthly statement also shows your current cash advance limit. Your cash advance limit is part of your
            total credit limit – it’s not additional credit over and above the credit limit for your account. We may
            lower your credit limit at any time without telling you in advance, but we need your express consent to
            raise your credit limit.
          </p>
          <p>
            We may allow you to exceed your credit limit, but we are not required to do so, even if we have done so
            previously. If your account is subject to an over limit fee for exceeding your credit limit, details of the
            fee are set out in the disclosure statement.
          </p>
        </div>
        <div className="text-detail">
          <strong className="heading" id="7">
            7. Foreign currency transactions.
          </strong>
          <p>
            We bill you in Canadian dollars when you use your Card to make a transaction in a foreign currency. The
            transaction amount will be converted to Canadian dollars using the Visa rate of exchange applicable at the
            time the transaction is processed. If your account is subject to a foreign currency conversion charge,
            details of the charge are set out in the disclosure statement.
          </p>
          <p>
            If a foreign currency transaction is refunded to your account, the exchange rate for the refund may not be
            the same as the rate used when the original purchase was processed. As a result, the amount of the purchase
            and the refund may differ. If the amount of the refund is less than the amount of the purchase, you will be
            responsible for the difference.
          </p>
          <strong className="heading" id="8">
            8. Other services and benefits.
          </strong>
          <p>
            We may make non-financial benefits and services associated with your card available to you. These benefits
            and services are subject to the terms set by the companies that provide them and may be changed or cancelled
            with or without notice. We aren’t liable for these benefits and services.
          </p>
          <strong className="heading" id="9">
            9. Rewards.
          </strong>
          <p>
            If your account is eligible for rewards, the features and terms of the rewards program will be described in
            the rewards program that is provided to you. By accepting this agreement, you agree to the terms and
            conditions of the rewards program, where applicable.
          </p>
          <strong className="heading" id="10">
            10. Fees we charge.
          </strong>
          <p>All the fees that we charge in connection with your account are set out in the disclosure statement.</p>
          <strong className="heading" id="11">
            11. Interest we charge.
          </strong>
          <p>The annual interest rates we charge are as follows:</p>
          <ul>
            <li>
              The interest rate applicable to purchases and standard balance transfers is
              <strong>17.99%;</strong>
            </li>
            <li>
              The interest rate applicable to cash advances is <strong>21.99%;</strong>
            </li>
            <li> Any promotional interest rates we may provide to you; or</li>
            <li>
              The default interest rate is <strong>29.99%</strong> on all balances outstanding on your account until
              your account balance is paid in full.
            </li>
          </ul>
          <p>
            We don’t charge interest on purchases appearing on your monthly statement for the first time (new purchases)
            and standard balance transfers appearing on your monthly statement for the first time (new standard balance
            transfers) provided you pay your new balance in full within the grace period for the current and all
            previous months. For each new purchase and new standard balance transfer, the grace period is the period
            between the transaction date and the payment due date shown on the monthly statement on which the
            transaction first appears. For certainty, in each billing period you will have a grace period of at least 25
            days before the payment due date. If we don’t receive payment of your entire new balance by the payment due
            date, you will be charged interest on each new purchase and new standard balance transfer, starting from the
            transaction date. Interest on purchases and standard balance transfers is charged until they are paid off.
            If you reside in Québec, we will not charge interest on any purchases and standard balance transfers for a
            billing period where you pay your new balance in full by the payment due date.
          </p>
          <p>
            We will always charge interest on cash advances and special balance transfers. Interest on a cash advance or
            special balance transfer is charged 3 days from the transaction date until it&apos;s paid off. This means
            there is a 3 day interest-free grace period on cash advances and special balance transfers. For the purpose
            of interest calculation, fees for cash advances are treated as cash advances, fees for standard balance
            transfers are treated as standard balance transfers, and fees for special balance transfers are treated as
            special balance transfers. All other fees are treated as purchases.
          </p>
          <strong className="heading" id="12">
            12. How we calculate interest.
          </strong>
          <p> The amount of interest we charge on your monthly statement is calculated as follows:</p>
          <ul>
            <li>
              First, we add the amount you owe on each day during the billing period and divide that total by the number
              of days in the billing period. This is your average daily balance.
            </li>
            <li>
              Then we multiply the average daily balance by the applicable daily interest rate (obtained by taking the
              annual interest rate and dividing it by 365). When more than one interest rate applies to your account, we
              calculate the interest charge based on the average daily balance that is applicable to each interest rate.
              Your monthly statement shows the interest rates applicable to your account and any associated interest
              charges. For a more detailed explanation of how we calculate interest for your account, please see the
              disclosure statement.
            </li>
          </ul>
          <p>
            When more than one interest rate applies to your account, we calculate the interest charge based on the
            average daily balance that is applicable to each interest rate. Your monthly statement shows the interest
            rates applicable to your account and any associated interest charges. For a more detailed explanation of how
            we calculate interest for your account, please see the disclosure statement.
          </p>
          <strong className="heading" id="13">
            13. Your monthly statements.
          </strong>
          <p>
            We will provide you with a monthly statement for your account for each billing period. Your monthly
            statement will always be sent by email unless you have otherwise instructed for it to be sent by regular
            mail. There may be an additional fee to receive your statement by regular mail.
          </p>
          <p>
            If you do not receive a monthly statement for any billing period, you must contact us or check your account
            balance through online banking. You are required to meet your payment obligations each billing period, even
            if you don’t receive a statement due to a change in your contact information, email address, a postal
            disruption, an internet failure or for any other reason.
          </p>
          <strong className="heading" id="14">
            14. Telling us about statement errors.
          </strong>
          <p>
            You are responsible for informing us of any errors on your monthly statement. Subject to applicable law, if
            you don’t notify us of an error within 30 days of receiving your statement, you accept the monthly statement
            and our records as accurate and complete.
          </p>
          <strong className="heading" id="15">
            15. Making payments to us.
          </strong>
          <p>
            You must make at least the minimum payment indicated on your monthly statement by the payment due date shown
            on that monthly statement. The method of calculating your minimum payment is set out in the disclosure
            statement.
          </p>
          <p>
            Payments must be made in Canadian dollars. You can make payments on your account at any time using the
            following methods:
          </p>
          <ul>
            <li> By telephone or online banking through your financial institution;</li>
            <li> By mail, using the payment information provided on your monthly statement;</li>

            <li> By any pre-authorized debit service we may offer;</li>
            <li> By email money transfer to your account; and</li>
            <li> By using rewards points, if applicable.</li>
          </ul>
          <p>
            All payments must be made in a form acceptable to us. Payments made by a cheque or money order must be drawn
            on a Canadian financial institution.
          </p>
          <p className="italic">Interac email money transfer. </p>
          <p>
            Depending on the payment method you choose, your payment may take several days to reach us and may be
            credited to your account after the payment due date. Keep this in mind when considering how and when to make
            your payment. We can accept late payments or partial payments, or cheques and money orders marked “payment
            in full” or other similar language, without losing any of our rights under this agreement.
          </p>
          <p>
            If a payment through your financial institution doesn’t clear, we will reverse the account credit and you
            will still owe us the amount of the payment, which will continue to incur interest, if applicable, until
            paid
          </p>
          <strong className="heading" id="16">
            16. Applying your payments.
          </strong>
          <p>
            Any payments we receive up to and including the amount of your minimum payment will be applied in the
            following order:
          </p>
          <ul>
            <li> First, to any interest charges shown on your monthly statement;</li>
            <li> Second, to any fees shown on your monthly statement;</li>
            <li>
              Third, to any fees which have been charged to your account but have not yet been shown on a monthly
              statement; and
            </li>
            <li> Fourth, to any remaining balances shown on your monthly statement.</li>
          </ul>
          <p>
            Within each of the above categories, if there are different annual interest rates that apply, the payment
            will be applied first to the amount with the lowest annual interest rate, and then to the other amounts in
            ascending order, based on their applicable annual interest rates.
          </p>
          <p>
            If you pay more than your minimum payment, your excess payment will be applied to the remaining balance on
            your monthly statement as follows:
          </p>
          <ul>
            <li>
              First, we divide all the unpaid transactions shown on your monthly statement into groups. Transactions
              that share the same interest rate are placed into the same group.
            </li>
            <li>
              Second, we pro-rate your excess payment to those different interest rate groups. This means that the
              percentage of your excess payment we apply to a group is the same percentage that the balance in that
              group represents of the total remaining new balance. For example, if the balance in an interest rate group
              represents <strong>60%</strong> of your total remaining new balance, we will apply <strong>60%</strong>
              of your excess payment to that group
            </li>
          </ul>
          <p>
            If you pay more than your new balance, your excess payment will be applied to transactions that have not yet
            appeared on a monthly statement, using the same payment allocation method described above.
          </p>
          <strong className="heading" id="17">
            17. Pre-authorized payments
          </strong>
          <p>
            You are responsible for providing a merchant with whom you have set up a pre-authorized payment plan with
            correct and up-to-date information. This includes a change in account number or your Card&apos;s expiry
            date. You are also responsible for all charges to the Card until you have cancelled the pre-authorized
            payment plan with the merchant. We will not be liable for any pre-authorized transactions that cannot be
            posted to your account, and you are still liable to the merchant for making payment. It is your
            responsibility to contact a merchant when you want to cancel a pre-authorized transaction. You should check
            your monthly statements to ensure that cancelled transactions have been discontinued. you have cancelled the
            pre-authorized payment plan with the merchant. We will not be liable for any pre-authorized transactions
            that cannot be posted to your account, and you are still liable to the merchant for making payment. It is
            your responsibility to contact a merchant when you want to cancel a pre-authorized transaction. You should
            check your monthly statements to ensure that cancelled transactions have been discontinued.
          </p>
          <p>
            On cancellation of the Card or on the termination of this Agreement, you agree to notify the merchant that
            all future pre-authorized payments on the Card are to be immediately cancelled.
          </p>
          <strong className="heading" id="18">
            18. Telling us about changes to your contact information.
          </strong>
          <p>
            You must tell us immediately if the email, mailing, and/or residential address or phone numbers we have on
            file for you change. As set out in this agreement, different terms may apply to your account depending on
            your province of residence. If you change your province of residence, it may take up to 90 days after you
            notify us of such change to apply any different terms to your account. Any different terms that apply as a
            result of such change to your province of residence will not apply retroactively.
          </p>
          <p>
            If we send a statement or a notice to you that’s returned because of an invalid address, we won’t issue
            further statements or notices to you until we receive a correct address. We may choose to restrict the use
            of your account, including access to online banking, until we’ve received the updated information. There are
            certain items, like Cards, which we may refuse to mail to an address that isn’t in Canada.
          </p>
          <strong className="heading" id="19">
            19. Resolving transaction disputes.
          </strong>
          <p>
            If you have problems with anything you buy using your card or account number, you must pay the amount owing
            on your account and settle the problem directly with the merchant. You may not stop payment on any
            transaction. In some circumstances, we may be able to help in resolving disputed transactions. If you wish
            to discuss a transaction dispute, you may contact us toll-free at
            <strong> 1-844-200-0526.</strong>
          </p>
          <strong className="heading" id="20">
            20. Lost/stolen cards and unauthorized use of your account.
          </strong>
          <p>
            You must take reasonable care to safeguard your Card and PIN against loss, theft or misuse. You must contact
            us by telephone immediately:
          </p>
          <ul>
            <li> if your account number or Card is lost or stolen,</li>
            <li> if you believe your PIN has been compromised/obtained without your authorization, or</li>
            <li>
              if a person uses your account without your permission (“unauthorized use”). You have no liability to pay
              for any transaction entered into through unauthorized use of your account. You will also not be liable for
              unauthorized use that occurs after you notify us orally or in writing of the loss/theft of your Card or
              unauthorized use. To report a lost/stolen card or an unauthorized use, call
              <strong>1-844-200-0526.</strong>
            </li>
          </ul>
          <p>
            However, unauthorized use doesn’t include use of your account by someone you’ve identified as an authorized
            user or someone you permitted to use your account, Card or PIN. You agree to cooperate and help with any
            investigation that we initiate into unauthorized use before we will consider reimbursing you for any losses.
            If our investigation establishes that there was no unauthorized use, you will be fully liable for all
            amounts charged to the account before you notified us.
          </p>
        </div>
        <div className="text-detail">
          <strong className="heading" id="21">
            21. Security funds.
          </strong>
          <p>
            In some cases, you may be asked to provide us with security funds, which we hold as collateral for payment
            of amounts you owe to us under this agreement. By providing us with security funds and accepting the terms
            of this agreement, you agree that if you’re in default under this agreement, you authorize Plastk to set off
            (and effect compensation, if you’re a resident of the province of Québec) and apply those funds against your
            obligations under this agreement (whether or not then immediately due and payable).
          </p>
          <p>
            We can do all of this without notifying you or sending you a demand for payment. You also agree to the
            following:
          </p>
          <ul>
            <li>
              The security funds do not constitute a deposit with Plastk, and will be held in an account at a depository
              institution we select;
            </li>
            <li>You will have no right to access or withdraw the security funds, except as described below;</li>
            <li> Any interest earned on the security funds will become our sole property; and</li>
            <li> Security funds may be used to offset purchases or cash advances.</li>
          </ul>
          <p>
            You represent that there are no lawsuits or bankruptcy proceedings that might affect our ability to withdraw
            and apply the security funds you provide, and you agree that you haven’t and won’t transfer or offer any
            interest in the funds to anybody other than Plastk. We will return any remaining funds to you at your last
            known address in our records within <strong> 60</strong> days of the closing of your account, and the
            payment in full of your obligations under this agreement, whichever comes last.
          </p>

          <strong className="heading" id="22">
            22. Default & forfeiture of benefit of the term.
          </strong>
          <p>Your account will be in default under this agreement if you:</p>
          <ul>
            <li> Fail to meet the terms of this agreement;</li>
            <li> Become the subject of a bankruptcy or insolvency proceeding;</li>
            <li> Provide any false or misleading information; or</li>
            <li> Have legal action taken against your property.</li>
          </ul>
          <p>If you&apos;re in default, we may, subject to applicable law:</p>
          <ul>
            <li>
              Terminate, modify or restrict your rights under this agreement, which could include closing your account;
            </li>
            <li>
              Demand that you immediately pay the balance of your account in full with interest at the applicable
              rate(s);
            </li>
            <li>
              Apply any balance that you have in any other account with us against the amount that you owe us under this
              agreement (whether or not the amounts are immediately due and payable), including any security funds or
              reward points, if applicable; or
            </li>
            <li>
              Increase your interest rate to the default interest rate of <strong>29.99%</strong> per annum for all
              amounts outstanding without further notice.
            </li>
          </ul>
          <p>
            If you’re in default, you must also pay all legal fees reasonably incurred to collect or attempt to collect
            the balance of your account.
          </p>
        </div>
        <div className="text-detail">
          <strong className="heading" id="23">
            23. Restricting or closing your account.
          </strong>
          <p>
            You can close your account at any time by contacting us. We can suspend or restrict the use of your Card and
            account, reduce your credit limit or close your account at any time for any reason without notifying you
            first, even if you’re not in default. If you’ve provided us with security funds, restricting or closing your
            account doesn’t affect our rights to those funds.
          </p>
          <p>
            If you close your account or we do, you must pay all amounts owing on your account, stop using your Card and
            destroy all Cards issued on the account. The terms and conditions in this agreement remain in effect until
            you pay the entire balance owing on your account or we notify you otherwise.
          </p>

          <strong className="heading" id="24">
            24. Changes to this agreement.
          </strong>
          <p>
            At our sole discretion, we can change any section of this agreement or the services that are available with
            your Card (and the terms and conditions relating to them) at any time. Where permitted by applicable law,
            any change to this agreement applies to both your outstanding and future debt.
          </p>
          <p>
            We will provide you with notice of any change in writing at least 30 days before the change takes effect.
            Our notice will specify the date the change takes effect and will include either the old section and the
            newly amended section, or just the newly amended section. You can always refuse to accept a change by
            closing your account before the change takes effect. Where required by law, our notice will indicate that
            you can close your account and refuse the change up to 30 days after the change takes effect.
          </p>
          <p>The continued use of your Card and account, means that you accept the new agreement as amended.</p>

          <strong className="heading" id="25">
            25. Assigning your account.
          </strong>
          <p>
            At any time, we may sell, transfer or assign any, or all of our rights and obligations under this agreement
            or your account without telling you in advance. You may not sell, assign or transfer any of your rights or
            obligations under this agreement, or your account.
          </p>

          <strong className="heading" id="26">
            26. No Warranties
          </strong>
          <p>
            We make no representations or warranties whatsoever, either express or implied, except as stated in this
            Agreement. We will not be liable for our inability to provide, in whole or in part, any features, benefits
            or services which are available in connection with your Card that are reasonably beyond our control. In
            addition, third parties will provide some of the benefits and services associated with the Card. These third
            parties, and not us, are responsible to you for the services and benefits offered or provided by them.
          </p>
          <p>
            We will not be liable for any damages of any kind related to your use of the Card, or for any of the
            features, benefits or services available in connection with your Card, even if you have notified us in
            advance of such possible damages. In no event will we be responsible for the acts or activities of any third
            party. In addition, we shall in no way be liable for any accident, act of aggression, theft, loss or damage
            you may suffer while using an ABM.
          </p>
          <p>
            No claim arising from this Agreement may be brought by you more than one (1) year after your disputed matter
            occurred. A longer period may apply if stipulated by applicable law.
          </p>
        </div>
        <div className="text-detail">
          <strong className="heading" id="27">
            27. Governing law.
          </strong>
          <p>
            This agreement will be interpreted in accordance with the applicable laws of the province or territory in
            which you reside (or the applicable laws of Alberta if you reside outside of Canada) and the applicable laws
            of Canada (&quot;applicable law&quot;). In the event of a dispute, you agree that the courts in the province
            or territory where you reside are competent to hear such dispute and you agree to be bound by any judgment
            of that court.
          </p>
          <strong className="heading" id="28">
            28. Non-waiver.
          </strong>
          <p>
            We may choose not to act on any right under this agreement without giving up that right.Any time we give up
            one of our rights, we will do so in writing and sign a waiver.
          </p>
          <strong className="heading" id="29">
            29. Severability.
          </strong>
          <p>
            If any part of this agreement is considered invalid, unenforceable or illegal under applicable law, the
            validity, enforceability or legality of the remainder of this agreement shall not in any way be affected or
            impaired.
          </p>
          <strong className="heading" id="30">
            30. No Coercive Tied-Selling
          </strong>
          <p>
            You cannot be unduly pressured to buy a product or service that you don’t want from Plastk or anyone else in
            order for Plastk to provide another product or service to you.
          </p>

          <strong className="heading" id="30">
            31. Québec residents only – clauses required under the Consumer Protection Act.
          </strong>
          <p>
            The following provisions apply only if you reside in Québec and are a consumer as defined by Québec’s
            Consumer Protection Act, chapter P-40.1 (&quot;Consumer Protection Act&quot;). Clause of forfeiture of
            benefit of the term.
          </p>
          <p>
            Before availing itself of this clause, the merchant must forward the consumer a notice in writing and unless
            the merchant is exempted in accordance with section 69 of the General Regulation made under the Consumer
            Protection Act, the merchant must forward him a statement of account.
          </p>
          <p>
            Within 30 days following the receipt by the consumer of the notice and, where necessary, of the statement of
            account, the consumer may:
          </p>
          <ol type="a">
            <li> either remedy the default; or </li>
            <li>
              or present a motion to the court to have the terms and conditions of payment prescribed in this contract
              changed.
            </li>
          </ol>
          <p>
            It is in the consumer&apos;s interest to refer to sections 104 to 110 of the Consumer Protection Act as well
            as to section 69 of the General Regulation made under the Consumer Protection Act and, where necessary, to
            communicate with the Office de la protection du conformateur.
          </p>
          <p className="italic">Open credit contract for the use of a secured credit card.</p>
          <ol>
            <li>
              If a consumer uses all or part of the credit extended to make full or partial payment for the purchase or
              the lease of goods or for a service, the consumer may, if the open credit contract was entered into on the
              making of and in relation to the sale, lease or service contract, and if the merchant and the open credit
              merchant collaborated with a view to granting credit, plead against the lender any ground of defence
              urgeable against the merchant who is the vendor, lessor, contractor or service provider.
            </li>
            <li>
              The consumer may also, in the circumstances described in the paragraph above, exercise against the open
              credit merchant, or against the merchant’s assignee, any right exercisable against the merchant who is the
              vendor, lessor, contractor or service provider if that merchant is no longer active or has no assets in
              Québec, is insolvent or is declared bankrupt. The open credit merchant or the merchant’s assignee is then
              responsible for the performance of the obligations of the merchant who is the vendor, lessor, contractor
              or service provider up to the amount of, as the case may be, the debt owed to the open credit merchant at
              the time the contract is entered into, the debt owed to the assignee at the time it was assigned to him or
              the payment the open credit merchant received if he assigned the debt.
            </li>
            <li>
              A consumer who is solitarily liable with another consumer for the obligations arising from an open credit
              contract is released from the obligations resulting from any use of the open credit account after
              notifying the merchant in writing that he will no longer use the credit extended and no longer intends to
              be solitarily liable for the other consumer’s future use of the credit extended in advance, and after
              providing proof to the merchant, on that occasion, that he informed the other consumer by sending him a
              written notice to that effect at his last known address or technological address.
            </li>
            <p>
              Any subsequent payment made by the consumer must be applied to the debts contracted before the notice was
              sent to the merchant.
            </p>
            <li>
              A consumer who has entered into a preauthorized payment agreement with a merchant under which payments are
              made out of credit obtained under a secured credit card contract may end the preauthorized payment
              agreement at any time by sending a notice to the merchant.
            </li>
            <p> On receipt of the notice, the merchant must cease to collect the preauthorized payments.</p>
            <p>
              On receipt of a copy of the notice, the card issuer must cease debiting the consumer’s account to make
              payments to the merchant.
            </p>
            <li>
              The consumer is not liable for debts resulting from the use of a secured credit card by a third person
              after the card issuer has been notified, by any means, of the loss, theft or fraudulent use of the card or
              of any other use of the card not authorized by the consumer. Even if no notice was given, consumer
              liability for the unauthorized use of a secured credit card is limited to <strong>$50</strong>. The
              consumer is held liable for the losses incurred by the card issuer if the latter proves that the consumer
              committed a gross fault as regards to the protection of the related personal identification number.
            </li>

            <li>
              Without delay at the end of each period, the merchant must send the consumer a statement of account. The
              merchant is not required to send a statement of account to the consumer at the end of any period if there
              have been no advances or payments during the period and the outstanding balance at the end of the billing
              period is zero.
            </li>
            <li>
              If the consumer makes a payment at least equal to the outstanding balance at the end of the preceding
              billing period within 25 days after the date of the end of the period, no credit charges may be required
              from the consumer on that outstanding balance, except as regards to cash advances. In the case of a cash
              advance, charges may accrue as of the date of the advance until the date of payment.
            </li>
          </ol>
          <p>
            The consumer may demand that the merchant send, without charge, a copy of the vouchers for each of the
            transactions charge to the account during the period covered by the statement. The merchant must send the
            copy of the vouchers requested within 60 days after the date the consumer’s request was sent until the
            consumer receives a statement of account at his address or technological address if expressly authorized by
            the consumer, the merchant must not claim credit charges on the unpaid balance, except as regards money
            advances.It is in the consumer&apos;s interest to refer to sections 103.1, 122.1, 123, 123.1, 124, 126,
            126.2, 126.3, 127 and 127.1 of the Consumer Protection Act and, if further information is necessary, to
            contact the Office de la protection du consommateur.
          </p>
          <p>Table of interest charges for a 30-day billing period. </p>

          <div className="table-box">
            <span className="subtitle">Average daily balance</span>
            <div className="row-col">
              <div className="left-col">
                <span className="title-txt">Annual interest rate</span>
              </div>
              <div className="right-col">
                <ul className="balance">
                  <li>
                    <span className="text">$100</span>
                  </li>
                  <li>
                    <span className="text">$500</span>
                  </li>
                  <li>
                    <span className="text">$1,000</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row-col">
              <div className="left-col">
                <span className="title-txt">17.99% (Purchases)</span>
              </div>
              <div className="right-col">
                <ul className="balance">
                  <li>
                    <span className="text">$1.50</span>
                  </li>
                  <li>
                    <span className="text">$7.50</span>
                  </li>
                  <li>
                    <span className="text">$14.99</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row-col">
              <div className="left-col">
                <span className="title-txt">21.99% (Cash Advances)</span>
              </div>
              <div className="right-col">
                <ul className="balance">
                  <li>
                    <span className="text">$1.83</span>
                  </li>
                  <li>
                    <span className="text">$9.16</span>
                  </li>
                  <li>
                    <span className="text">$18.32</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row-col">
              <div className="left-col">
                <span className="title-txt">29.99% (Default Rate)</span>
              </div>
              <div className="right-col">
                <ul className="balance">
                  <li>
                    <span className="text">$2.49</span>
                  </li>
                  <li>
                    <span className="text">$12.46</span>
                  </li>
                  <li>
                    <span className="text">$24.92</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <strong className="heading" id="32">
            32. Plastk Privacy Policy.
          </strong>
          <p>
            Personal information is information about an identifiable individual, as defined in the Personal Information
            Protection and Electronic Documents Act. Personal information about you is managed in accordance with the
            Plastk Privacy Policy (“Policy”).
          </p>
          <p>
            Please visit us online at www.Plastk.ca/privacy for the most up-to-date version of our complete Policy. A
            summary of our privacy practices, including how we collect, use and disclose your personal information, is
            below. Accountability.
          </p>
          <p>Our Privacy Officer is responsible for ensuring that we comply with our Policy and applicable law.</p>
          <p>Identifying purposes.</p>
          <p>
            We identify the purposes for which personal information is collected, used or disclosed prior to, or at the
            time of collection.
          </p>
          <p>Information we collect.</p>
          <p>Information we collect about our customers includes, but is not limited to:</p>

          <ul>
            <li>Publicly available information, such as information from telephone or other public directories;</li>
            <li> The information you provided to us before you became a customer;</li>
            <li>
              Information about your transactions, including purchases, account balances, fees, payment history, parties
              to transactions and Card usage and location;
            </li>
            <li>
              Information from credit reporting agencies and other outside sources to verify financial information about
              you, such as your employment and credit history;
            </li>
            <li>Information from surveys that you participate in, or from third parties that you engage with;</li>
            <li>
              Information from your mobile and online activity (for example, IP address, mobile device ID, application
              and website use, and history); and
            </li>
            <li> Information required by law.</li>
          </ul>
          <p className="italic">Use of Information. </p>
        </div>
        <div className="heading">
          <p> Purposes that we use your information for include, but are not limited to:</p>
          <ul>
            <li> Contacting you and verifying your identity;</li>
            <li> Assessing your creditworthiness;</li>
            <li> Making improvements to products and services;</li>
            <li> Preventing fraud;</li>
            <li> Serving you offers, advertising and marketing;</li>
            <li> Maintaining, servicing, processing, analyzing, auditing and collecting on your account(s);</li>
            <li>
              Sharing information with consumer reporting agencies and other parties who have financial, employment or
              business dealings with you;
            </li>
            <li>
              To offer you more financial related services; and • To allow the rewards program to verify your
              transactions.
            </li>
          </ul>
          <p className="italic">Consent. </p>

          <p>
            If you apply for credit products, communicate with us or provide information to us in any way, you
            acknowledge your consent for personal information collection, use and disclosure as set out in our Policy,
            applicable laws and/or industry standards. You can withdraw your consent for use and disclosure of your
            personal information, other than that which is required for us to maintain and service your account, subject
            to legal and contractual restrictions, with reasonable notice to us. No Limiting of collection.
          </p>
          <p>
            We collect personal information that’s necessary for the purposes we identify in the Policy, and as required
            by applicable laws.
          </p>
          <p className="italic">Limiting use, disclosure and retention.</p>
          <p>
            We limit the use, disclosure and retention of personal information to the purposes we identify in the
            Policy, and as required by applicable law. We may share your personal information with service providers who
            perform services on our behalf. Our contracts with third parties include obligations to protect your
            personal information.
          </p>
          <p>
            Your personal information may be stored and processed at our corporate offices or with approved third
            parties within Canada or elsewhere. If a third party processes or stores information outside of Canada,
            foreign governments, courts or regulatory agencies may be able to obtain such personal information through
            the laws of the foreign jurisdiction.
          </p>
          <p className="italic">Accuracy and safeguards.</p>
          <p>
            We ensure personal information is as accurate, complete and up to date as is necessary for the purposes for
            which it is to be used. We also use procedures and practices appropriate to the sensitivity of personal
            information to protect against loss, theft and unauthorized access. Access to your information is restricted
            to individuals and parties who require access.
          </p>
          <p className="italic">Openness, individual access and challenging compliance.</p>
          <p>
            You can contact our customer service team for general privacy inquiries or concerns by email at
            <a href="mailto:hello@plastk.ca">hello@plastk.ca</a> or by calling 1-844-200-0526.
          </p>
          <p>
            You can also write to our Canada Privacy Office at the address provided below to request access to the
            personal information we have on file for you or to raise a privacy concern. We will provide you with the
            personal information we have, subject to certain considerations specified by applicable law.
          </p>

          <address>
            <span>Canada Privacy Office</span>
            <span>Plastk Financial & Rewards Inc.</span>
            <span>Suite 105 2411 4st NW</span>
            <span>Calgary, Alberta</span>
            <span>T2M 2Z8</span>
          </address>

          <strong className="heading" id="33">
            33. Addressing your concerns.
          </strong>
          <p>
            At Plastk, our top priority is our customers – we work hard to ensure that our customers’expectations of
            service are met and even surpassed. We want to hear from you if this doesn’thappen.
          </p>
          <p>
            Follow these steps to get in touch with the right people or visit www.Plastk/concerns for more details
            regarding our current complaint resolution process.
          </p>
          <strong>Step 1</strong>
          <p>
            Our customer service team is your first point of contact for customer service inquiries or other concerns.
            Please have your relevant information handy – for example, your account number, important dates, and names
            of staff you’ve talked with. You can contact our customer service team as follows:
          </p>
          <address>
            <span>PO Box 34155 Westbrook PO</span>
            <span>Calgary, Alberta</span>
            <span>T3C 3W2</span>
            <span>Email: hello@plastk.ca</span>
            <span>Phone: 1-844-200-0526.</span>
          </address>
          <strong>Step 2</strong>
          <p>
            If you’ve already contacted our customer service team and they were unable to resolve your inquiry or
            concern to your satisfaction, you can elevate it by asking to speak with an account supervisor and, if
            necessary, to a manager.
          </p>
          <strong>Step 3</strong>
          <p>
            If you’ve been working with an account supervisor or manager and are not satisfied with the resolution, you
            can make a complaint to our Executive Response Committee. This can be done by requesting your account
            supervisor or manager to escalate your account to our Executive Response Committee.
          </p>
          <strong className="italic">Compliance with consumer protection provisions.</strong>
          <p>
            If your concerns are regarding our compliance with federal consumer protection law, public commitments, or
            industry codes of conduct, you may contact the Financial Consumer Agency of Canada at any time at the
            following address.
          </p>
          <address>
            <span>Financial Consumer Agency of Canada</span>
            <span>6th Floor, 427 Laurier Avenue West</span>
            <span>Ottawa, ON K1R 1B9</span>
            <span>Website: www.fcac-acfc.gc.ca</span>
          </address>
        </div>
        <div className="logo text-center mb-3">
          <img loading="eager" src={logoImg} alt="plastk" />
        </div>
        <div className="text-detail">
          <p>
            This Card is issued by Digital Commerce Bank pursuant to a license by Visa® International. Use of the Card
            is governed by the agreement under which it is issued. The Visa® brand is a registered trademark of Visa®
            International used under licence by Digital Commerce Bank. All credit and funding is provided by Plastk
            Financial & Rewards Inc. Digital Commerce Bank provides no credit or loans. All funding and lending for this
            program is provided by Plastk Financial & Rewards Inc
          </p>
        </div>
      </div>
    </div>
  );
}

export default ViewCreditAgreement;
