import { cx } from '@linaria/core';
import { Link } from 'gatsby';
import * as React from 'react';

import { container } from '../../styles/common';
import { policyBlock } from './PrivacyPolicy.styles';

function PrivacyPolicy() {
  return (
    <div className={cx(policyBlock)}>
      <div className={cx(container)}>
        <h1 className="no-border center">Privacy Policy</h1>
        <small>Last Updated: October 1st 2020</small>
        <p>
          At PLASTK FINANCIAL & REWARDS INC, we value your privacy and understand that by entrusting us with your
          personal information we have a responsibility to provide transparency with respect to our privacy practices.
        </p>
        <p>
          This Privacy Policy (the “Policy”) describes the information we collect from you and how that information is
          used and shared by us. It also includes details about the choices we offer you in relation to that
          information. Please review it carefully.
        </p>
        <p>As used in this Policy, “we,” “us” and “our” refers to PLASTK FINANCIAL &</p>
        <p>REWARDS INC, PLASTK FINANCIAL, PLASTK REWARDS (“PLASTK”).</p>
        <h2 className="no-border">Overview of Policy</h2>
        <hr />
        <p>
          In addition to cookies, we use other similar technologies to track users of our Services and visitors to our
          Site for the purposes stated below. Examples of these technologies include:
        </p>
        <h3>Scope</h3>
        <p>
          This policy applies to any user of any of our services, whether accessed through our website, mobile app, API
          or other channel. Additionally, this policy applies to anyone who contacts us or otherwise submits information
          to us. This policy does not apply to third-party websites, products or services even if they are linked to our
          services.
        </p>
        <h3>Definitions</h3>
        <p>
          For the purpose of this Policy, “Personal Data” refers to information that could be used to identify you.
          “Sites” means the PLASTK websites, mobile app, or other channel through which you access our services.
        </p>
        <h2 className="no-border">How We Collect Information</h2>
        <hr />
        <p>We collect information about you through a variety of different channels, including the following:</p>
        <h3>Information you Provide</h3>
        <p>
          You provide Personal Data and other information to us when you register for an PLASTK FINANCIAL & REWARDS INC
          user account, submit to our verification procedures, apply for additional account features or services,
          respond to our emails or surveys, communicate with us, provide feedback, participate in promotions or
          contests, provide referrals, or upload content.
        </p>
        <h3>Information from Your Use of Services</h3>
        <p>
          When you use our services or visit any of our Sites, we collect information about you and the devices you use
          to access the services.
        </p>
        <h3>Information from Third Parties</h3>
        <p>
          We also collect information about you from third parties and other sources including information obtained from
          identification verification and fraud detection service providers, credit bureaus, community forums used to
          post ratings or reviews, PLASTK FINANCIAL & REWARDS INC business partners through which you access our
          services, or other sources of public records.
        </p>
        <h2 className="no-border">Information We Collect</h2>
        <hr />
        <h3>Identification information</h3>
        <p>
          We may collect some or all of the following Personal Data: your name, date of birth, mailing address, phone
          number, email address, social insurance number or other tax identification number. To comply with federal laws
          and regulations, we may collect identity verification information such as copies of your government-issued
          identification (including passport, driver’s license or national ID card) or other authentication information,
          all of which may include photographs of you.
        </p>
        <h3>Financial Information</h3>
        <p>
          In order to process payments and transactions we may collect financial information such as bank account
          details (account number, routing number), credit or debit card numbers, credit reports or tax information,
          such as withholding allowances and filing status.
        </p>
        <h3>Transaction Information</h3>
        <p>
          When you make purchases with our products, those transactions, we may collect information about the parties to
          the transaction, the designated recipient (including the recipient’s bank account information), the source of
          the funds, the reason for the transaction, the devices and payment methods used to complete transactions.
          Specific and detailed transaction information. That transaction information may be shared with other third
          party service suppliers who work with Plastk to provide you goods or services.
        </p>
        <h3>Business Information</h3>
        <p>
          If you are using our services on behalf of a business entity, we may collect information about the business
          including: the organizational structure of the company, the product and service offerings, website domain name
          used by the business, and information about the beneficial owners of the business. We also may collect entity
          formation documents or other corporate records.
        </p>
        <h3>Background Information</h3>
        <p>
          To the extent permitted by applicable law, we may obtain background check reports from public records of
          criminal convictions and arrest records. In order to obtain such reports, we may use information or Personal
          Data you provide to us.
        </p>
        <h3>Log Data</h3>
        <p>
          When you access our services, we collect server logs which may include information such as IP address, device
          ID, Advertising ID, access times and dates, pages viewed and other system activity, including the third-party
          site you were using before accessing our services.
        </p>
        <h3>Device Information</h3>
        <p>
          We may obtain information about the devices you use to access our services including but not limited to: the
          device type, operating systems and versions, the device manufacturer and model, preferred languages, and
          plugins.
        </p>
        <h3>Usage and Preference Information</h3>
        <p>
          We collect information about how you interact with the PLASTK FINANCIAL & REWARDS INC sites, Mobile Apps and
          how you use our services including your user preferences and other settings selected by you. In some cases we
          do this by utilizing cookies, pixel tags and similar technologies. Please see further details about cookies
          and other tracking technologies in our <Link to="/">Cookie Policy.</Link>
        </p>
        <h3>Geolocation Information</h3>
        <p>
          When you use certain features of our services, we may collect information about your precise or approximate
          location as determined by data such as your IP address or mobile device GPS. Most mobile devices allow you to
          control or disable the use of geolocation services for applications by changing preferences on your mobile
          device.
        </p>
        <h3>Aggregated/Anonymized Data</h3>
        <p>
          We may also collect information about our users that is combined so that it no longer identifies or references
          an individual user. This de-identified data is used for industry and market analysis, demographic profiling,
          marketing and advertising, and other business purposes.
        </p>
        <h3>Other Information</h3>
        <p>
          Any other information you may provide us when you update your account information, respond to surveys, post to
          community forums, participate in contests or promotions or use any other feature of our services.
        </p>
        <h2 className="no-border">How We Use Your Information</h2>
        <hr />
        <p>We use information we collect from or about you for several purposes, including but not limited to:</p>
        <h2 className="no-border">To provide or improve our services</h2>
        <ul className="list">
          <li>To process payments or E-transfers</li>
          <li>To provide customer support</li>

          <li>To evaluate your application to use our services</li>
          <li>To develop new products or enhance existing products and services.</li>
          <li>
            To monitor and analyze trends, usage and other user activities on our Sites to optimize user experience.
          </li>
          <li> For quality control and staff training</li>
        </ul>
        <h3>To ensure safety and security</h3>
        <ul className="list">
          <li>To verify your identity or authenticate your right to access an account or other information.</li>
          <li>To conduct manual or system monitoring to protect against fraud and other harmful activity.</li>
        </ul>
        <h3>To comply with legal obligations</h3>
        <ul className="list">
          <li>To respond to legal process, governmental authorities or comply with applicable laws.</li>
          <li>To address disputes or resolve claims related to use of the services.</li>
          <li>To enforce our terms and conditions and collect fees.</li>
        </ul>
        <h3>To communicate with you</h3>
        <ul className="list">
          <li>To respond to your inquiries and support requests.</li>
          <li>To send you technical notices, updates, security alerts and other administrative messages.</li>
          <li>
            To provide information related to your transactions including confirmations, receipts and tracking notices.
          </li>
        </ul>
        <h3>To market and advertise our services</h3>
        <ul className="list">
          <li>
            To deliver promotional offers, incentives, and targeted marketing in accordance with your preferences (as
            permitted by applicable law).
          </li>
          <li>To provide invitations and information about events or events held by our partners.</li>
          <li>To facilitate promotional contests or sweepstakes.</li>
          <li>Recommend product or services which may fit your interests</li>
        </ul>
        <h2 className="no-border">Information Sharing and Disclosure</h2>
        <hr />
        <p>
          We will never sell, loan or rent your Personal Data to marketers or other third parties. We may disclose or
          otherwise provide anonymized aggregate data to third-parties. Additionally, we may share information about
          you, including Personal Data with third parties who may be providing you services.
        </p>
        <h3>Our Service Providers</h3>
        <p>
          We engage a variety of service providers to enable us to provide our services to you. For example, service
          providers may be used to: facilitate payment processing, support technology or infrastructure, conduct market
          research, and perform audits or other functions. We will share your Personal Data with such service providers
          only to the extent necessary to allow the performance of their intended engagement. All service providers and
          business partners that receive your Personal Data are contractually bound to protect and use your information
          only in accordance with this Policy.
        </p>
        <h3>Our Corporate Affiliates</h3>
        <p>
          To facilitate or support us in providing our services to you, we may share your Personal Data within our
          worldwide corporate family of companies among entities that are related by common control or ownership.
        </p>
        <h3>Other Authorized Parties</h3>
        <p>
          If you provide your consent, we may share your information including your Personal Data with a third party not
          defined in this Policy. Such disclosure will only be carried out in the manner described to you at the time
          you agreed to the sharing. Authorizing a third-party application or website to access your PLASTK FINANCIAL &
          REWARDS INC account or participating in certain promotional activities constitutes such consent to share your
          information.
        </p>
        <h3>Government Authorities</h3>
        <p>
          If we believe it is necessary, we may share your information with law enforcement officials, government
          authorities, or other third parties as required to: (i) enforce our User Agreement or other applicable
          agreements or policies; (ii) protect our rights, property, privacy, or security, or that of others; or (iii)
          comply with applicable law, legal process or governmental orders.
        </p>
        <h3>Third-Party Acquirers</h3>
        <p>
          If we are the subject or are involved in any corporate merger, acquisition, consolidation, reorganization,
          sale, joint venture, assignment, transfer or other disposition of all or any portion of our business, assets
          or stock (including in connection with bankruptcy or similar proceedings), we may share data with third
          parties during negotiations. In the event your Personal Data becomes subject to a different privacy policy, we
          will make reasonable efforts to notify you beforehand. We also may need to disclose information to a third
          party in connection with a commercial transaction where we or any of our affiliates are seeking financing,
          investment or funding.
        </p>
        <h2 className="no-border">Cookies and Tracking Technologies</h2>
        <hr />
        <p>
          We use cookies and similar technologies (i.e. web beacons, pixels, ad tags and device identifiers) to
          recognize you and to customize your online experience. To learn more about cookies and the other tracking
          technologies we may utilize, please refer to our Cookie Policy, which includes a comprehensive overview of
          cookies and provides further details about how we use cookies and how to control our use of cookies.
        </p>
        <h2 className="no-border">Advertising Analytics</h2>
        <hr />
        <p>
          We may partner with third-parties to display PLASTK FINANCIAL & REWARDS INC advertisements to you across the
          Internet and to track and report on the performance of those advertisements. These third-party partners use
          cookies and other technologies to gather information about your activities on our Sites as well as other sites
          you visit in order to serve you advertising based upon your browsing history and interests. To learn more
          about behavioral advertising and online tracking, visit the{' '}
          <Link to="https://www.networkadvertising.org/">Network Advertising Initiative.</Link> This website also
          provides information about how to opt out of interest-based online advertising delivered by member companies.
          For more information about the cookies that may be served through use of our services, please refer to our{' '}
          <Link to="/">Cookie Policy.</Link>
        </p>
        <h2 className="no-border">Choices and Transparency</h2>
        <hr />
        <p>
          You have choices about how we use and disclose your Personal Data as well as what information we may access or
          hold about you.
        </p>
        <h3>Managing Your Information</h3>
        <p>
          You may review, correct or update information you provided to us at any time by logging into your PLASTK
          FINANCIAL & REWARDS INC account or by contacting us using the contact details below. We will respond to any
          such request in a reasonable timeframe. Prior to changing or correcting your information, we may be required
          to verify your identity. There may be circumstances which preclude us from providing access to some or all of
          your information, for example where the information contains references to Personal Data about an individual
          other than you or the information is subject to legal or proprietary protections.
        </p>
        <h3>Device Permissions</h3>
        <p>
          Most mobile devices allow you to disable the use of location services, or revoke consent to applications to
          access your camera and photo library or send you push notifications information. Please refer your device
          settings to restrict collection of certain information.
        </p>
        <h3>Marketing Opt-Out</h3>
        <p>
          You can opt out of receiving promotional communications or marketing- related email from PLASTK FINANCIAL &
          REWARDS INC by adjusting your contact preferences under the &quot;Your Profile&quot; section or &quot;Profile
          & Settings - Notifications&quot; section. You may also opt out of receiving promotional communications from us
          by following the instructions included in those messages. Please note that if you opt out of marketing-related
          emails from us, we will continue to send you non-promotional messages that are required to provide our
          services, such as transactional receipts, statements and messages about your account or our relationship with
          you.
        </p>
        <h2 className="no-border">Information Retention</h2>
        <hr />
        <p>
          We will retain your Personal Data only for the period of time required to comply with applicable law or
          fulfill any ongoing obligations to you. Please note that there are certain circumstances in which we will
          retain your Personal Data even after you close your PLASTK FINANCIAL & REWARDS INC account or request deletion
          of your Personal Data. Examples of such cases include:
        </p>
        <ul className="list">
          <li>To process any transactions prior to closure or deactivation of an account.</li>
          <li>
            To comply with anti-money laundering regulations or other laws and rules that apply to us as a financial
            services provider.
          </li>
          <li>To detect or prevent fraud.</li>
          <li>To comply with legal process orders or law enforcement requests.</li>
          <li>To collect any fees or other outstanding amount owed and payable to us by you.</li>
          <li>To resolve any disputes or enforce our User Agreement or other applicable agreements or policies.</li>
          <li>To conduct research related to new products categories and services</li>

          <li>To take any other action or exercise any other right in accordance with applicable law.</li>
        </ul>
        <h2 className="no-border">Storage and Cross-Border Transfers</h2>
        <hr />
        <p>
          To support our global operations, we may store or process your Personal Data in any country where we or one of
          our affiliates maintains a physical presence or where we engage third-party service providers. This could
          result in a transfer of your Personal Data to a country outside of your country of residence, including the
          United States. The laws and privacy regulations of such countries may differ from the country of your
          residence and potentially may not be as protective. There may be circumstances in which the law enforcement
          agencies or government authorities in such other countries may be entitled to access your Personal Data. Any
          transfer of your Personal Data outside your country of residence will at all times comply with the standards
          set forth in this policy as well as the applicable data protection rules.
        </p>
        <h2 className="no-border">Security</h2>
        <hr />
        <p>
          We take reasonable technical, physical and administrative measures to safeguard your Personal Data against
          loss, misuse or unauthorized access. Unfortunately, the transmission of information over the Internet is never
          100% secure and no data storage system can be guaranteed safe. Although we will do our best to protect your
          Personal Data, we cannot warrant the security of data transmitted to our Sites; any transmission is at your
          own risk. We encourage you to understand the integral role you play in keeping your own Personal Data secure
          and confidential. Please select passwords that are sufficiently complex and always keep our log-in details
          secure. If you suspect any unauthorized use or access to your account or information, please contact us
          immediately at <a href="mailto:Hello@plastk.ca">Hello@plastk.ca</a> or{' '}
          <a href="tel:18442000526">1-844-200-0526</a>
        </p>
        <h2 className="no-border">Children</h2>
        <hr />
        <p>
          Our services are not intended for or directed at children under the age of 13. We do not knowingly collect any
          information from children. If we obtain actual knowledge that we have collected Personal Data from an
          individual under the age of 13, we will immediately delete it (unless we are legally obligated to retain such
          information). Please contact us if you believe that we inadvertently collected information from any individual
          under the age of 13.
        </p>
        <h2 className="no-border">Updates to This Policy</h2>
        <hr />
        <p>
          We reserve the right to make changes to this policy at any time by posting a revised version to our Site and
          updating the “Last Updated” date at the top of this policy. If we make material changes, we will provide
          reasonable notice to you, including by email to the email address associated with your PLASTK FINANCIAL &
          REWARDS INC account. To the extent permitted by applicable law, your continued use of our services after such
          notice or posting constitutes your consent to our revisions of this Policy. If you disagree with any of our
          changes, you may deactivate your account with us at any time.
        </p>
        <h2 className="no-border">Contact Us</h2>
        <hr />
        <p>
          If you have questions or concerns about this policy, or a specific request related to your Personal Data,
          please contact us at <a href="mailto:privacy@plastk.ca">privacy@plastk.ca</a> or at:
        </p>
        <address>
          <p>
            <b>PLASTK FINANCIAL &amp; REWARDS INC</b> <br /> Po Box 34155 Westbrook RPO <br />
            Calgary, AB T3C 3W2 <br /> Attn: Privacy Office
          </p>
        </address>
        <p>
          If you are not satisfied with the resolution of any complaint you make with us concerning your privacy, you
          may submit a complaint to the Privacy Commissioner in your province of residence or to the Office of the
          Privacy Commissioner of Canada at:
        </p>
        <address>
          <p>
            <b>Office of the Privacy Commissioner of Canada</b> <br /> 30 Victoria Street, 1st Floor <br />
            Gatineau, QC K1A 1H3 <br /> <a href="tel:18554850102">1-855-485-0102</a> <br />
            <a href="https://www.priv.gc.ca/">www.priv.gc.ca</a>
          </p>
        </address>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
