import { isMobileOnly } from "react-device-detect";
import i18next from "../../i18/index";

export default function TERMS_AND_CONDITION() {
  return (
    <div style={isMobileOnly ? styles.sectionMobile : styles.section}>
      <div
        style={
          isMobileOnly ? styles.aboutUsMobileContent : styles.aboutUsContent
        }
      >
        <h2
          style={isMobileOnly ? styles.aboutUsMobileText : styles.aboutUsText}
        >
          {i18next.t("PRIVACY_POLICY")}
        </h2>
      </div>
      <p style={styles.pText}>
        This privacy policy (“Policy”) explains our policy regarding the
        collection, use, disclosure and transfer of your information by ADJ
        Utility Apps Private Limited or any of its  affiliate(s) (“we” or “us”
        or “our”), which operates the website&nbsp;
        <a href="https://www.digichal.in/">https://www.digichal.in/ (“Site”)</a>
        , “DigiChal App” (the “App”) available on Google Play Store, iOS and
        other similar platforms and other services including but not limited to
        recording credit/payment, communicating dues/balances via the site and
        application, any mobile or internet connected device or otherwise
        (collectively the “DigiChal App Service”). This Policy forms part and
        parcel of the Terms of Use for the DigiChal App Services. Capitalized
        terms which have been used here but are undefined shall have the same
        meaning as attributed to them in the Terms of Use. Users (as defined
        hereinafter) are requested to read this Policy in conjunction with the
        Terms of Use.<br></br>
        The App/Site (i) provides an online digital ledger book / record book
        wherein the Users, can record their ledger entries with their respective
        customers and (ii) also allows Users to generate a payment link which
        can be sent it to their respective customers and the customers could use
        the payment link and make the payment of the amount to the Users in
        settlement of their obligations towards the Users (collectively,
        “Services”). Please note that ‘Services’ would include any other future
        services we may provide or propose to provide. <br></br>
        <br />
        <br />
        As we update, improve and expand the DigiChal App Service, this Policy
        may change, so please refer back to it periodically. By accessing the
        Site, App or otherwise using the DigiChal App Services, you consent to
        the collection, storage, and use of the personal information you provide
        (including any changes thereto as provided by you) for any of the
        services that we offer.
        <br />
        <br />
        We respect the privacy of the users of the DigiChal App Services
        (“Users” or “you”) and are committed to reasonably protect it in all
        respects. The information about the User as collected by us is: (a)
        information supplied by Users and (b) information automatically tracked
        while using a mobile device having DigiChal App Services enabled
        (collectively referred to as “Information”). By using DigiChal App
        Services, you agree to this Policy. If you do not agree with any term in
        this Policy, please do not use / avail of the DigiChal App Services.
        <br />
      </p>
      <br></br>

      <div style={styles.componentDiv}>
        <div>
          <div style={styles.colorBlue}>
            <span style={styles.colorNo}>1</span>
          </div>
        </div>
        <div style={styles.headingText}>
          <h2 style={styles.heading1}>Information supplied by users</h2>
        </div>
      </div>
      <p style={styles.pText}>
        To avail certain Services on the DigiChal App, Users are required to
        provide certain personal information for the registration process which
        may include: a) their name, b) email address, c) phone number, d)
        business entity information, (e) account number of the Users, (f) KYC
        details and any other such information as required. The Information as
        supplied by the Users enables us to provide the Services and improve the
        DigiChal App Services and provide you the most user-friendly experience.
        In some cases / provision of certain service(s) or utility(ies), we may
        require your contact address as well. Further, upon downloading the App,
        Users are requested to share access to their contact list (as stored on
        their mobile device on which the App is downloaded), so as to enable the
        User to share payment/credit updates with his customers (who might be or
        might not be Users). This contact list of the User is uploaded
        to https://api.DigiChal.in, for the purposes of improving and enhancing
        the User experience of the App. In an attempt to improve our Services,
        we may, from time to time, collect any information (other than what is
        mentioned above) from Users through App / Site. You may be assured that
        we do not share this data with any third party except in accordance with
        the terms of this Policy.   <br />
        <br />
        We may access a user’s inventory of installed apps and treat this data
        as personal or sensitive data subject to this Policy, secure
        transmission, and prominent disclosure requirements of User. <br></br>
        All Information is service dependent and we may use the Information to
        provide the Services, maintain, protect, and improve the DigiChal App
        Services, and for developing new services.<br></br>
        We may also use your email address and phone number without further
        consent for marketing, non-marketing or administrative purposes (such as
        notifying you of major changes, for customer service purposes, providing
        information about updates to DigiChal App Services, billing, etc.).
        <br></br>
        Any Information provided by you will not be considered as personal
        information if it is freely available and/or accessible in the public
        domain or is not deemed as a personal information under the applicable
        law. Further, any reviews, comments, messages, blogs
        posted/uploaded/conveyed/communicated by Users on the public sections of
        the Site or an application store (like the App Store or Play Store)
        becomes published content and is not considered as personal information
        which is subject to this Policy.<br></br>
        In case you choose to decline to submit Information on the DigiChal
        App/Site, we may not be able to provide certain services on the App/Site
        to you. We will make reasonable efforts to notify you of the same at the
        appropriate time. In any case, we will not be liable and or responsible
        for the denial of certain services to you for due to not receiving
        necessary Information from you. <br></br>
        When you register with the DigiChal App Services, we may (at our
        discretion) contact you from time to time about updation of your
        Information.
      </p>

      <div style={styles.componentDiv}>
        <div>
          <div style={styles.colorBlue}>
            <span style={styles.colorNo}>2</span>
          </div>
        </div>
        <div style={styles.headingText}>
          <h2 style={styles.heading1}>
            Information automatically tracked while using the App or Site
          </h2>
        </div>
      </div>

      <p style={styles.pText}>
        Credit/Payment Records: We store all your credit/payment records in a
        cloud-based environment using the services of third party infrastructure
        service providers. <br />
        Customer Information: We store the contact information of your
        customers. We also keep a log of all the credit/payment related
        communication to the customers.
        <br />
        Demographic and Related Information: We may reference other sources of
        demographic and other information in order to provide you with more
        targeted communications and promotions. We use Google Analytics, among
        others, to track the User behaviour on Site. <br />
        Log File Information: Our Servers automatically collect limited
        Information about your device’s connection to the internet, including
        your IP address, when you visit our Site or use the App. We
        automatically receive and log Information from the App and/or your
        browser including but not limited to IP address, your device or
        computer’s name, and your operating system, We may also collect log
        Information from your device, including but not limited to your
        location, IP address, your device’s name, device’s serial number or
        unique identification number (e.g. UDID on your iOS device, Android ID
        or ADID on your Android Device), your device operating system, browser
        type and version, CPU speed, and connection speed etc. <br />
        Cookies: To improve the responsiveness of the Site for our Users, we may
        use “cookies”, or similar electronic tools to collect information to
        assign each visitor a unique, random number as a User Identification
        (User ID) to understand the User’s individual interests using the
        identified computer. By continuing to visit the App/Site, you are
        agreeing to the use of cookies and similar technologies for the purposes
        we describe in this Policy. If you prefer not to receive cookies or web
        beacons, then you should stop using Services, or consult your browsing
        and third party cookie settings. We use cookies and other technologies
        for analysing and optimising our websites as well as for marketing
        purposes. Our partners may also assign their own cookies to your
        browser, a process that we do not control. <br />
      </p>
      <div style={styles.componentDiv}>
        <div>
          <div style={styles.colorBlue}>
            <span style={styles.colorNo}>3</span>
          </div>
        </div>
        <div style={styles.headingText}>
          <h2 style={styles.heading1}>Link to third party sites/ad-servers</h2>
        </div>
      </div>

      <p style={styles.pText}>
        The Site may include links to other websites such as advertisers, blogs,
        content sponsorships, vendor services, social networks, etc. Such
        websites are governed by their respective privacy policies, which are
        beyond our control. Once you leave our servers (you can tell where you
        are by checking the URL in the location bar on your browser), use of any
        information you provide is governed by the privacy policy of the
        operator of the site you are visiting and we make no representation or
        warranty on  how your information is stored or used on third-party
        servers. That policy may differ from ours. If you can’t find the privacy
        policy of any of these sites via a link from the website’s homepage, you
        should contact the website directly for more information.
      </p>
      <div style={styles.componentDiv}>
        <div style={styles.colorBlue}>
          <span style={styles.colorNo}>4</span>
        </div>
        <div style={styles.headingText}>
          <h2 style={styles.heading1}>Information sharing</h2>
        </div>
      </div>

      <p style={styles.pText}>
        The Information (including personal information) collected may be shared
        with our affiliates, and group companies to the extent required for our
        internal business and/or administrative purposes and/or general
        corporate operations and to any third party service providers including
        marketing partners, and the User hereby consents to the same. We will
        take reasonable steps to ensure that these third-party service providers
        are obligated to protect your personal information and are also subject
        to appropriate confidentiality/non-disclosure obligations and they
        comply with the applicable provisions of the data protection laws. These
        entities, with whom we share the Information, may market to you as a
        result of such sharing unless you explicitly opt-out. <br></br>
        The User explicitly consents that we may have access to your SMS,
        contacts in your directory, location and device information and we may
        request you to provide your PAN and Know-Your-Customer (KYC) details to
        check your eligibility for certain products/services including but not
        limited to credit and payment products, etc., to enhance your experience
        and provide you access to the services being offered by us, our
        affiliates or other third party service providers (including lenders).
        <br></br>
        Further, the User also consents to sharing of Information (including
        sensitive personal information) when it is requested or required by law
        or by any court or governmental agency or authority to disclose, for the
        purpose of verification of identity, or for the prevention, detection,
        investigation including cyber incidents, or for prosecution and
        punishment of offences. These disclosures are made in good faith and
        belief that such disclosure is reasonably necessary for enforcing the
        Terms of Use or for complying with the applicable laws and regulations.
        No personal information of an individual User such as name, phone
        number, email address, spends data, card details etc. would be shared
        with any other User and/or third party unless explicitly approved by the
        concerned individual User himself/herself. We may also present
        information related to credit records, User spends, patterns and User
        data tracked by us only in the form of aggregated statistics on data
        such as overall app usage by date, time, balances, etc. within our
        App/Site or to our partners.
        <br></br>
        By using the DigiChal App Services and providing information to us,
        Users agree and consent to the disclosure, transfer, storage, and
        processing of the personal information (including the sensitive personal
        information) by us in India and / or in other countries to its
        affiliates, group companies and third parties. While our primary motive
        is to protect the disclosure of personal information (except in
        accordance with the provisions of this Policy) of Users, Users may note
        that countries where their Information may be stored, may not have data
        protection laws similar to the countries where they are located.
        <br></br>
      </p>

      <div style={styles.componentDiv}>
        <div>
          <div style={styles.colorBlue}>
            <span style={styles.colorNo}>5</span>
          </div>
        </div>
        <div style={styles.headingText}>
          <h2 style={styles.heading1}>
            Accessing and updating personal information
          </h2>
        </div>
      </div>

      <p style={styles.pText}>
        When Users use the Site (or any of its sub sites) / App, we make good
        faith efforts to provide Users, as and when requested by Users, with
        access to their Information and shall further ensure that any personal
        information or sensitive personal data or other Information found to be
        inaccurate or deficient shall be corrected or amended as feasible,
        subject to any requirement for such personal Information or sensitive
        personal data or Information to be retained by law or for legitimate
        business purposes. We ask individual Users to identify themselves and
        the Information requested to be accessed, corrected or removed before
        processing such requests, and we may decline to process requests that
        are unreasonably repetitive or systematic, require disproportionate
        technical effort, jeopardize the privacy of others, or would be
        extremely impractical (for instance, requests concerning Information
        residing on backup tapes), or for which access is not otherwise
        required. In any case, where we provide Information access and
        correction, we perform this service free of charge, except if doing so
        would require a disproportionate effort. Because of the way we maintain
        certain services, after you delete your Information, residual copies may
        take a period of time before they are deleted from our active servers
        and may remain in our backup systems.
      </p>

      <div style={styles.componentDiv}>
        <div>
          <div style={styles.colorBlue}>
            <span style={styles.colorNo}>6</span>
          </div>
        </div>
        <div style={styles.headingText}>
          <h2 style={styles.heading1}>Information storage and backup</h2>
        </div>
      </div>

      <p style={styles.pText}>
        From time to time, we take backup of your data on DigiChal App on our
        cloud database. This is done for the purpose of enabling Users to get
        their data back in case their phone’s data becomes unusable, or phone
        gets lost, or the User moves to a new phone device. We also use this
        backup to provide useful insights and information related to their
        spends such as weekly spends in a month, insights related to spend
        behaviour, etc., and to provide information related to User spends,
        patterns and User data in the form of aggregated and anonymized
        statistics on data such as User spends by category, date, time, bank
        balances, etc. We shall keep User’s Information in our records till the
        period of time where we can potentially offer the DigiChal App Services
        to the Users. After such period of time where DigiChal App Services are
        no more relevant to a User, we remove all the Information pertaining to
        a particular User from our records.
      </p>

      <div style={styles.componentDiv}>
        <div>
          <div style={styles.colorBlue}>
            <span style={styles.colorNo}>7</span>
          </div>
        </div>
        <div style={styles.headingText}>
          <h2 style={styles.heading1}>Purpose of Data Processing</h2>
        </div>
      </div>

      <p style={styles.pText}>
        We will only collect and process Personal Information about you where we
        have lawful basis to do so. Our primary purpose in collecting your
        information, including Personal Information from you is to deliver the
        personalized DigiChal and its various features. Please note that should
        you choose to not provide us consent to collect your information,
        including Personal Information, we may not be able to perform the
        contract with you. Where we refer to ‘perform the contract’ we mean the
        Terms of Use applicable to your use of the DigiChal Service, which means
        that you may either not be able to access certain features of the
        DigiChal Service or we may not be able to provide you the DigiChal
        Service in entirety.
        <br />
        <br />
        For example, we use your information where we need the Personal
        Information to perform the contract with you (for example, to provide
        the Platform or our services to you) so as to:
        <p style={styles.pBulletText}>
          • Register you on our Platform
          <br />
          <br />
          • Provide you with customer or technical support including addressing
          support queries related to, but not limited to, payment processing, or
          to diagnose any problems with our servers etc.
          <br />
          <br />
          • Send you transactional emails/SMS or to provide you with
          information, direct marketing, online and offline advertising and
          other materials regarding products, services and other offers from
          time to time in connection with the DigiChal Service or its parent,
          subsidiary and affiliated companies (“Platform Entities”) and its
          joint ventures.
          <br />
          <br />
          • Determine your geographic location, to provide you localized content
          including advertisements, personalized recommendations, allow you to
          continue watching/using previous content at another time, and to
          determine your Internet service provider to troubleshoot a technical
          issue, and help us quickly and efficiently respond to inquiries and
          requests;
          <br />
          <br />
          • To provide you with a personalised service and experience; we do
          this by linking some or all of your Personal Information such as
          transactions done with DigiChal with your activity on our Platform
          across all your devices and associating and storing this information
          with a unique platform generated identifier that is generated for each
          user (guest as well as registered user). When a guest user
          subsequently registers and creates an account, the information and
          data relating to such user’s past activities gets added to and
          associated to the registered account.
          <br />
          <br />
          • In other contexts, if the processing of your Personal Information is
          subject to the EU General Data Protection Regulation, we use your
          Personal Information where the processing is in our legitimate
          interests and not overridden by your fundamental rights and freedoms
          (for example, our direct marketing activities in accordance with your
          preferences) such as to:Display or target advertisements on the
          Platform based on your registration or profile information, location
          and/or your activity on the Platform across all your streaming devices
          (including inferred information through usage and log data) which is
          associated with your device advertising identifier (IDFA, GAID etc) –
          this is typically referred to as ‘interest-based advertising’. We also
          display contextual advertisements on the Platform but these are not
          targeted to any particular user and does not make use of any
          information that personally identifies you or precisely locates you
          (contextual advertising is advertising which we target based on the
          content being viewed, for example if you are watching a particular
          sporting event we may serve adverts of companies or products related
          to that particular sport or the age-group most likely to be watching).
          <br />
          <br />
          • Research, analyze and understand our audience and what content and
          advertising they may view, watch or otherwise engage with, in order to
          improve our service (including our user interface experiences and
          security features); evaluate your eligibility for certain types of
          offers, products or services and market such products or services to
          you; to perform analytics and conduct customer research, including
          general market research or surveying our customers’ needs and opinions
          on specific issues, generating sales and traffic patterns, and to
          analyze advertising effectiveness, both on an anonymous basis (e.g.,
          by aggregating data) or on an individual basis (if legally
          permissible), in combination with other information collected from
          tracking technologies and aggregate it with information collected from
          other Users using our Platform, to attempt to provide you with the
          Services and a better experience on the Platform. For example, one of
          the ways we use this information is to count the number of times an
          advert or other content is viewed because this might be the metric by
          which our advertisers pay us. This information is compiled and
          analyzed on an aggregated basis.
          <br />
          <br />
          • Allow you to participate in interactive features such as Game play
          events on the Platform, providing you with relevant gameplay
          experience, determine and declaring winners and providing you with
          prizes.
          <br />
          <br />
          • Analyse and measure how effective our advertising is by determining
          which media sources should be paid for delivering a desired action
          e.g. users who install our application or subscribe (also known as
          ‘attribution’), so that we pay for demonstrated value and don’t
          overspend.  <br />
          <br />
        </p>
        We will use your Personal Information with your explicit consent as
        follows:
        <p style={styles.pBulletText}>
          • When you agree to share your precise location based on GPS data, we
          will combine this information with other information that you provide
          to us on the DigiChal Service to provide personalised content and
          advertisements with better accuracy basis your geographic location
          e.g. you may see more regional content recommendations or
          advertisements for local establishments, when you share your precise
          location based on GPS data;
          <br />
          <br />• When you agree to share information pertaining to the
          applications frequently used by you on your device, we will combine
          this information with other information that you provide to us on the
          DigiChal Service, to display advertisements that are more relevant to
          your interest areas
        </p>
        Or otherwise whenever the law requires us to get your permission or
        where we have stated we may seek your permission in this Privacy Notice.
        In some contexts, we use your Personal Information where we have a legal
        obligation to do so or to protect your vital interests or those of
        another person:
        <p style={styles.pBulletText}>
          • Prevent, detect and investigate potentially prohibited or illegal
          activities, including fraud, and enforcing our terms (such as
          determining free trial eligibility);
          <br />
          <br />
          • Confirming your identity if you are exercising legal rights;
          <br />
          <br />
          • Notify you about changes in the Terms of Use or in this Privacy
          Notice;
          <br />
          <br />• Carry out our obligations and enforce our rights arising from
          any contracts entered into between you and us/our distributor.
        </p>
        When you access or use the Services or send any data, query, request or
        communication to us via our Support email, you understand that you are
        communicating with us electronically, and that we may respond via
        electronic means from us, such as by email.
      </p>

      <div style={styles.componentDiv}>
        <div style={styles.colorBlue}>
          <span style={styles.colorNo}>8</span>
        </div>
        <div style={styles.headingText}>
          <h2 style={styles.heading1}>Revocation of consent</h2>
        </div>
      </div>

      <p style={styles.pText}>
        A User can revoke his consent to the processing of his personal
        information at any time with effect for the future. Please note that
        withdrawing consent does not affect our right to continue to collect,
        use and disclose personal information where such collection, use and
        disclose without consent is permitted or required under applicable laws.
      </p>

      <div style={styles.componentDiv}>
        <div>
          <div style={styles.colorBlue}>
            <span style={styles.colorNo}>9</span>
          </div>
        </div>
        <div style={styles.headingText}>
          <h2 style={styles.heading1}>
            Responsible organization for the data collection
          </h2>
        </div>
      </div>

      <p style={styles.pText}>
        All the DigiChal App Services are currently provided and regulated
        by ADJ Utility Apps Private Limited and therefore ADJ Utility Apps
        Private Limited is responsible for the collection, storage and
        processing of personal information of the Users.
      </p>
      <div style={styles.componentDiv}>
        <div style={styles.colorBlue}>
          <span style={styles.colorTwoDigitNo}>10</span>
        </div>
        <div style={styles.headingText}>
          <h2 style={styles.heading1}>Updates/Changes</h2>
        </div>
      </div>

      <p style={styles.pText}>
        We may alter our Policy from time to time to incorporate necessary
        changes in technology, applicable law or any other variant. In any case,
        we reserve the right to change (at any point of time) the terms of this
        Policy or the Terms of Use. Any changes we make will be effective
        immediately on notice, which we may give by posting the new policy on
        the Site. Your use of the DigiChal App Services after such notice will
        be deemed acceptance of such changes. We may also make reasonable
        efforts to inform you via electronic mail. In any case, you are advised
        to review this Policy periodically on the Site to ensure that you are
        aware of the latest version.
      </p>

      <div style={styles.componentDiv}>
        <div>
          <div style={styles.colorBlue}>
            <span style={styles.colorTwoDigitNo}>11</span>
          </div>
        </div>
        <div style={styles.headingText}>
          <h2 style={styles.heading1}>Questions/Grievance Redressal</h2>
        </div>
      </div>

      <p style={styles.pText}>
        In the event you have any grievance relating to the processing of
        Information provided by you, you may contact our Grievance Officer at
        feedback@DigiChal.in or write to us at the following address: DigiChal
        Consultancy Private Limited, 75C, Park Street, Kolkata – 700016, West
        Bengal, India.
        <br />
        <br />
        Disclaimer: In case any personal information is shared by you with us,
        which is not requested by us during registration, (whether mandatorily
        or optionally), we will not be liable for any information security
        breach or disclosure in relation to such information. If you have any
        questions regarding this Policy or the protection of your personal
        information, please contact our data protection officer/grievance
        officer.
      </p>
    </div>
  );
}

//   export default ABOUT_US

const styles = {
  section: {
    paddingLeft: 70,
    paddingRight: 70,
  },
  sectionMobile: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  aboutText: {
    textAlign: "center",
  },
  contentWrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  heading: {
    mb: [30],
    maxWidth: [null, null, null, 500, 560, 730],
    textAlign: "center",
    h2: {
      fontSize: [8, null, null, 8, 9, 10, 11],
      lineHeight: [1.57],
    },
    p: {
      fontSize: [1, null, null, 6],
      lineHeight: [1.87, null, null, 2.33],
      color: "#3cb3e7",
    },
  },
  illustration: {
    display: ["block", null, null, "flex"],
    position: "relative",
    img: {
      display: ["block", null, null, "block"],
      maxWidth: ["90%"],
      m: ["0 auto"],
    },
  },
  buttonWrapper: {
    textAlign: ["center"],
    position: ["static", null, null, "absolute"],
    left: "50%",
    top: 0,
    transform: ["unset", null, null, "translateX(-50%)"],
  },
  pText: {
    fontSize: "16px",
    lineHeight: "35px",
  },
  nameText: {
    textAlign: "center",
  },
  designationText: {
    textAlign: "center",
  },
  pBulletText: {
    fontSize: "16px",
    lineHeight: "35px",
    padding: "20px",
  },
  componentDiv: {
    display: "flex",
    flexDirection: "row",
  },
  headingText: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "10px",
  },
  imageDiv: {
    marginTop: "4px",
  },
  heading1: {
    color: "#3cb3e7",
  },
  colorBlue: {
    marginTop: 2,
    height: 30,
    width: 30,
    background: "linear-gradient(to bottom, #3a97d5, #3ecdf7)",
    borderRadius: "50%",
  },
  colorNo: {
    position: "absolute",
    color: "white",
    marginLeft: 9,
    fontSize: 20,
  },
  colorTwoDigitNo: {
    position: "absolute",
    color: "white",
    marginLeft: 4,
    fontSize: 20,
  },
  aboutUsContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  aboutUsMobileContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  aboutUsText: {
    fontSize: "38px",
    letterSpacing: "0.5px",
    color: "#090A0B",
    marginTop: "30px",
    textAlign: "center",
  },
  aboutUsInstText: {
    fontSize: "28px",
    letterSpacing: "0.5px",
    color: "#090A0B",
    // marginTop: "30px",
    textAlign: "center",
    marginBottom: "20px",
  },
  aboutUsMobileText: {
    fontSize: "28px",
    letterSpacing: "0.5px",
    color: "#090A0B",
    marginTop: "30px",
    textAlign: "center",
  },
  aboutUsInstMobileText: {
    fontSize: "22px",
    letterSpacing: "0.5px",
    color: "#090A0B",
    // marginTop: "30px",
    textAlign: "center",
  },
};
