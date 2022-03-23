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
          {i18next.t("TERMS_AND_CONDITION")}
        </h2>
      </div>
      <p style={styles.pText}>
        Your use of the information, graphics and materials on the DigiChal
        Consultancy Private Limited website/application (“Materi al on this
        website/application ”) is governed by these Terms of Use and the Privacy
        Policy. If you use or access the DigiChal Consultancy Private Limited
        website/application you agree and accept these Terms of Use, the Privacy
        Policy, notices, disclaimers and any and every other rules of use
        contained on this website/application and changes to them that we may
        make from time to time. You should review them carefully and check
        periodically for any changes. If you do not agree with the Terms of Use,
        Privacy Policy, notices, disclaimers and any other rules you are not
        authorised to use the DigiChal Consultancy Private Limited
        website/application . We may modify these Terms at any time without any
        prior notice to you by posting revised Terms on our sites. Your use of
        our sites constitutes your binding acceptance of these Terms, including
        any modifications that we make. In addition to the terms contained in
        this document, there are also specific terms which form part of the
        Terms of Use and govern your use of, and access to, certain sections of
        the DigiChal Consultancy Private Limited website/application. Since you
        are also bound by these additional terms, you should review them
        wherever they are accessible by you on the DigiChal Consultancy Private
        Limited website/application .
        <br />
        <br />
        This User Agreement is published in accordance with the provisions of
        Rule 3(1) of the Information Technology (Intermediaries Guidelines)
        Rules, 2011 that require publishing the rules and regulations, privacy
        policy and terms and conditions for access or usage of the website{" "}
        <a href="https://www.digichal.in/">www.digichal.in</a> (including the
        uniform resource locator created for each Merchant) (“Website”), the
        mobile application available on Play Store and app store- DigiChal i.e.
        (“App”) and the uniform resource locator created for each Merchant (the
        ‘Website’, the ‘App’ is collectively hereinafter referred to as the
        “Platform”)
      </p>

      {/* <div style={styles.componentDiv}>
              <div style={styles.imageDiv}>
                <Image src={blueIcon1} width={30} height={30} />
              </div>
              <div style={styles.headingText}>
                <h2 style={styles.heading1}>Disclaimer</h2>
              </div>
            </div> */}
      <div style={styles.componentDiv}>
        <div style={styles.colorBlue}>
          <span style={styles.colorNo}>1</span>
        </div>
        <div style={styles.headingText}>
          <h2 style={styles.heading1}>Disclaimer</h2>
        </div>
      </div>

      <p style={styles.pText}>
        DigiChal Consultancy Private Limited provides general information about
        our products and services that should not be construed as any advice or
        recommendations of particular products or services. Material on this
        website/application may contain general information about products and
        services. Unless expressly stated otherwise, this information:
        <p style={styles.pBulletText}>
          • Does not constitute an offer or inducement to enter into a legally
          binding contract; and
          <br />
          <br />• Does not form part of the terms and conditions for said
          products and services.
        </p>
        None of the information on the website/application takes into account
        the objectives, financial situation or needs of any particular person.
        Before acting on any of the information you should first consider the
        appropriateness of the information, in the light of your own individual
        objectives, financial situation and needs.
        <br />
        <br />
        It is advisable to obtain appropriate advice from an appropriate
        authorised adviser before making any decisions or before purchasing
        products or services.
      </p>

      <div style={styles.componentDiv}>
        <div style={styles.colorBlue}>
          <span style={styles.colorNo}>2</span>
        </div>
        <div style={styles.headingText}>
          <h2 style={styles.heading1}>General</h2>
        </div>
      </div>

      <p style={styles.pText}>
        For the purposes of these Terms, ‘User’ and wherever the context may
        require, ‘You’ (or any variation thereof), shall mean any natural or
        legal person (including any legal heirs, administrators or successors)
        who has agreed to become a user of the Platform by accessing or using
        the Platform. If You are accepting these Terms and using the Services
        (as defined below) or the Platform on behalf of a company, organization,
        government, or other legal entity, You represent and warrant that You
        are authorized to do so.
        <p style={styles.pBulletText}>
          • Unless the context otherwise requires, “DigiChal’’, “We”, “us”,
          “our” or “Company” shall mean DigiChal Consultancy Private Limited or
          any of its licensees, whether now or in the future.
          <br />
          <br />• The Company enables transactions on its Platform between
          participating restaurants/stores/merchants/sellers and buyers, dealing
          in (a) food and beverages, (b) provisions, consumer goods, consumables
          etc., and (c) any other products or services (&quot;Platform
          Services). The buyers (&quot;Buyers) can choose and place orders
          (&quot;Orders) from a variety of products and services listed and
          offered for sale by various merchants including but not limited to the
          restaurants, eateries, grocery stores, other service providers
          (&quot;Merchants), on the Platform.
          <br />
          <br />• These Terms contain rules, regulations, policies, terms and
          conditions applicable to any Person who may access or use the
          Platform, as modified and updated from time to time.
          <br />
          <br />• Use of the Platform and the Services provided are subject to
          the rules and regulations, policies, notices, terms and conditions set
          forth or included by reference in these Terms.
          <br />
          <br />• Please read these Terms carefully before using or registering
          on the Platform or listing any item, accessing any material,
          information or Services, posting any information at or through the
          Platform.
          <br />
          <br />• As a User, the User Agreement shall be effective and binding
          upon your ‘acceptance’. ‘Acceptance’ shall mean Your affirmative
          action is on entering information as requested on the sign up page or
          simply by accessing or visiting the Platform. If You do not agree or
          are not willing to be bound by the User Agreement and our
          Policies(defined below), please do not enter information as requested
          on the sign up page and click the “Accept” button or do not seek to
          obtain access to, view, visit, download or otherwise use the Platform
          (or any of its components/constituents) or any information or
          Services.
          <br />
          <br />• By impliedly or expressly accepting these Terms, You also
          accept and agree to be bound by applicable policies of the Company
          including the Privacy Policy as published on the Platform (“Policies”)
          communicated to the Users by publication on the Platform.
          <br />
          <br />• By impliedly or expressly accepting these Terms, you also
          grant us the permission to contact you via Call/SMS/Email/Whatsapp or
          any other medium deemed feasible by the Company.
        </p>
        The content on the Platform is provided for general information only. It
        is not intended to amount to advice on which you should rely. You must
        obtain professional or specialist advice before taking, or refraining
        from taking, any action on the basis of the content on the Platform.
      </p>

      <div style={styles.componentDiv}>
        <div>
          <div style={styles.colorBlue}>
            <span style={styles.colorNo}>3</span>
          </div>
        </div>
        <div style={styles.headingText}>
          <h2 style={styles.heading1}>Links to other website/application:</h2>
        </div>
      </div>

      <p style={styles.pText}>
        The DigiChal Consultancy Private Limited website/application may contain
        links to other website/application operated by third parties (“Third
        Party Website/application”). DigiChal Consultancy Private Limited does
        not endorse, or approve of the operators of Third Party
        Website/application, or the information, graphics and material on those
        Third Party Website/application (“Third Party Material”), even when
        linked to from an “DigiChal Consultancy Private Limited ” button.
        Subject to any applicable law which cannot be excluded, DigiChal
        Consultancy Private Limited makes no warranties or representations:
        <br />
        regarding the quality, accuracy, merchantability or fitness for purpose
        of Third Party Material or products or services available through Third
        Party Website/application; or <br />
        that Third Party Material does not infringe the intellectual property
        rights of any person. DigiChal Consultancy Private Limited is not
        authorising the reproduction of Third Party Material by linking Material
        on this website/application to Third Party Material. <br />
        When you follow a link on the DigiChal Consultancy Private Limited
        website/application , material at a Third Party Website/application may
        be displayed in your browser framed by Material on this
        website/application . This material is also Third Party Material for the
        purpose of these Terms of Use. <br />
        All offers to sell and statements relating to goods and services
        available on Third Party Website/application are the responsibility of
        and given by the Third Party Website/application operator. In so far as
        such offers and statements are made on the DigiChal Consultancy Private
        Limited website/application , such offers and statements are made by
        DigiChal Consultancy Private Limited on behalf of the operator. DigiChal
        Consultancy Private Limited expressly disclaims acting in any other
        respect on behalf of Third Party Website/application operators.
        <br />
        DigiChal Consultancy Private Limited may receive payments from operators
        of Third Party Website/applications in relation to goods or services
        supplied by the operator as a result of you linking to the Third Party
        Website/application from the DigiChal Consultancy Private Limited
        website/application .
      </p>
      <div style={styles.componentDiv}>
        <div style={styles.colorBlue}>
          <span style={styles.colorNo}>4</span>
        </div>
        <div style={styles.headingText}>
          <h2 style={styles.heading1}>User Obligations:</h2>
        </div>
      </div>
      <p style={styles.pText}>
        You agree, undertake and confirm that Your use of Platform shall be
        strictly governed by the following binding principles:
        <p style={styles.pBulletText}>
          • You shall not host, display, upload, download, modify, publish,
          transmit, update or share any information which:
          <br />
          <br />• belongs to another person and which You do not have any right
          to;
          <br />
          <br />• is grossly harmful, harassing, blasphemous, defamatory,
          obscene, pornographic, paedophilic, libellous, slanderous, criminally
          inciting or invasive of another&apos;s privacy, hateful, or racially,
          ethnically objectionable, disparaging, relating or encouraging money
          laundering or gambling, or otherwise unlawful in any manner
          whatsoever; or unlawfully threatening or unlawfully harassing
          including but not limited to &quot;indecent representation of
          women&quot; within the meaning of the Indecent Representation of Women
          (Prohibition) Act, 1986;
          <br />
          <br />• is misleading or misrepresentative in any way;
          <br />
          <br />• is patently offensive to the online community, such as
          sexually explicit content, or content that promotes obscenity,
          paedophilia, racism, bigotry, hatred or physical harm of any kind
          against any group or individual;
          <br />
          <br />• harasses or advocates harassment of another person;
          <br />
          <br />• involves the transmission of &quot;junk mail&quot;,
          &quot;chain letters&quot;, or unsolicited mass mailing or
          &quot;spamming&quot;;
          <br />
          <br />• promotes illegal activities or conduct that is abusive,
          threatening, obscene, defamatory or libellous;
          <br />
          <br />• infringes upon or violates any third party&apos;s rights
          including, but not limited to, intellectual property rights, rights of
          privacy (including without limitation unauthorized disclosure of a
          person&apos;s name, email address, physical address or phone number)
          or rights of publicity or any other proprietary rights;
          <br />
          <br />• promotes an illegal or unauthorized copy of another
          person&apos;s copyrighted work (see &quot;copyright complaint&quot;
          below for instructions on how to lodge a complaint about uploaded
          copyrighted material), such as providing pirated computer programs or
          links to them, providing information to circumvent
          manufacture-installed copy-protect devices, or providing pirated music
          or links to pirated music files;
          <br />
          <br />• contains restricted or password-only access pages, or hidden
          pages or images (those not linked to or from another accessible page);
          <br />
          <br />• provides material that exploits people in a sexual, violent or
          otherwise inappropriate manner or solicits personal information from
          anyone;
          <br />
          <br />• provides instructional information about illegal activities
          such as making or buying illegal weapons, violating someone&apos;s
          privacy, or providing or creating computer viruses;
          <br />
          <br />• contains video, photographs, or images of another person (with
          a minor or an adult);
          <br />
          <br />• tries to gain unauthorized access or exceeds the scope of
          authorized access to the Platform or to profiles, blogs, communities,
          account information, bulletins, friend request, or other areas of the
          Platform or solicits passwords or personal identifying information for
          commercial or unlawful purposes from other Users;
          <br />
          <br />• engages in commercial activities and/or sales without our
          prior written consent such as contests, sweepstakes, barter,
          advertising and pyramid schemes, or the buying or selling of products
          related to the Platform. Throughout these Terms, the Company’s prior
          written consent means a communication coming from the Company’s
          authorised representative, specifically in response to Your request,
          and expressly addressing and allowing the activity or conduct for
          which You seek authorization;
          <br />
          <br />• solicits gambling or engages in any gambling activity which is
          or could be construed as being illegal;
          <br />
          <br />• interferes with another user&apos;s use and enjoyment of the
          Platform or any third party&apos;s user and enjoyment of similar
          services;
          <br />
          <br />• refers to any website or URL that, in our sole discretion,
          contains material that is inappropriate for the Platform or any other
          website, contains content that would be prohibited or violates the
          letter or spirit of these Terms; harm minors in any way;
          <br />
          <br />• harm minors in any way;
          <br />
          <br />• infringes any patent, trademark, copyright or other
          intellectual property rights or third party&apos;s trade secrets or
          rights of publicity or privacy or shall not be fraudulent or involve
          the sale of counterfeit or stolen products;
          <br />
          <br />• violates any Law for the time being in force;
          <br />
          <br />• deceives or misleads the addressee/users about the origin of
          such messages or communicates any information which is grossly
          offensive or menacing in nature;
          <br />
          <br />• impersonate another person;
          <br />
          <br />• contains software viruses or any other computer code, files or
          programs designed to interrupt, destroy or limit the functionality of
          any computer resource; or contains any trojan horses, worms, time
          bombs, cancelbots, easter eggs or other computer programming routines
          that may damage, detrimentally interfere with, diminish value of,
          surreptitiously intercept or expropriate any system, data or personal
          information;
          <br />
          <br />• threatens the unity, integrity, defence, security or
          sovereignty of India, friendly relations with foreign states, or
          public order or causes incitement to the commission of any criminal
          offence or prevents investigation of any offence or is insulting any
          other nation;
          <br />
          <br />• is false, inaccurate or misleading;
          <br />
          <br />• directly or indirectly, offers, attempts to offer, trades or
          attempts to trade in any item, the dealing of which is prohibited or
          restricted in any manner under the provisions of any applicable Law,
          rule, regulation or guideline for the time being in force; or
          <br />
          <br />• creates liability for us or causes us to lose (in whole or in
          part) the services of our internet service provider or other
          suppliers.
          <br />
          <br />• In case of any action, omission, transaction or attempted
          transaction which is violative of these Terms or applicable Laws comes
          to Your knowledge, You shall forthwith take all steps to inform the
          Company of such violation at support@digichal.in
          <br />
          <br />• You shall not use any &quot;deep-link&quot;,
          &quot;page-scrape&quot;, &quot;robot&quot;, &quot;spider&quot; or
          other automatic device, program, algorithm or methodology, or any
          similar or equivalent manual process, to access, acquire, copy or
          monitor any portion of the Platform or any content, or in any way
          reproduce or circumvent the navigational structure or presentation of
          the Platform or any content, to obtain or attempt to obtain any
          materials, documents or information through any means not purposely
          made available through the Platform. We reserve our right to prohibit
          any such activity.
          <br />
          <br />• You shall not attempt to gain unauthorized access to any
          portion or feature of the Platform, or any other systems or networks
          connected to the Platform or to any server, computer, network, or to
          any of the services offered on or through the Platform, by hacking,
          &quot;password mining&quot; or any other illegitimate means.
          <br />
          <br />• You shall not probe, scan or test the vulnerability of the
          Platform or any network connected to the Platform nor breach the
          security or authentication measures on the Platform or any network
          connected to the Platform. You may not reverse look-up, trace or seek
          to trace any information on any other user of or visitor to Platform,
          or any other Buyer, including any account on the Platform not owned by
          You, to its source, or exploit the Platform or any service or
          information made available or offered by or through the Platform, in
          any way where the purpose is to reveal any information, including but
          not limited to personal identification or information, other than Your
          own information, as provided for by the Platform.
          <br />
          <br />• You may not use the Platform or any content on the Platform
          for any purpose that is unlawful or prohibited by the User Agreement,
          or to solicit the performance of any illegal activity or other
          activity that infringes the rights of the Company and/or others.
          <br />
          <br />• You shall at all times ensure full compliance with the
          applicable provisions, as amended from time to time, of (a) the
          Information Technology Act, 2000 and the rules thereunder; (b) all
          applicable Laws; and (c) international laws, foreign exchange laws,
          statutes, ordinances and regulations (including, but not limited to
          sales tax/VAT, income tax, general sales tax, central excise, custom
          duty, local levies) regarding Your use of our service and Your
          listing, purchase, solicitation of offers to purchase, and sale of
          products or services. You shall not engage in any transaction in an
          item or service, which is prohibited by the provisions of any
          applicable law including exchange control laws or regulations for the
          time being in force.
          <br />
          <br />• In order to allow us to use the information supplied by You,
          without violating Your rights or any laws, You agree to grant us a
          non-exclusive, worldwide, perpetual, irrevocable, royalty-free,
          sub-licensable (through multiple tiers) right to exercise the
          copyright, publicity, database rights or any other rights You have in
          Your information, in any media now known or not currently known, with
          respect to Your information. We will only use Your Information in
          accordance with these Terms and Policies applicable to use of the
          Platform.
          <br />
          <br />• From time to time, You shall be responsible for providing
          information relating to the products or services proposed to be sold
          by You. In this connection, You undertake that all such information
          shall be complete, accurate and not misleading in all respects. You
          shall not exaggerate or overemphasize the attributes of such products
          or services so as to mislead other Users in any manner.
          <br />
          <br />• You shall not engage in advertising to, or solicitation of,
          other Users of the Platform to buy or sell any products or services,
          including, but not limited to, products or services related to that
          being displayed on the Platform or related to us. You may not transmit
          any chain letters or unsolicited commercial or junk email to other
          Users via the Platform. It shall be a violation of the User Agreement
          to use any information obtained from the Platform in order to harass,
          abuse, or harm another person, or in order to contact, advertise to,
          solicit, or sell to another person other than us without our prior
          explicit consent. You understand that we have the right, at all times,
          to disclose any information (including the identity of the persons
          providing information or materials on the Platform) as necessary to
          satisfy any law, regulation or valid governmental request. This may
          include, without limitation, disclosure of the information in
          connection with investigation of alleged illegal activity or
          solicitation of illegal activity or in response to a lawful court
          order or subpoena. In addition, We can (and You hereby expressly
          authorize us to) disclose any information about You to any law
          enforcement or other government officials, as we, in our sole
          discretion, believe necessary or appropriate in connection with the
          investigation and/or resolution of possible crimes, especially those
          that may involve personal injury.
          <br />
          <br />• We reserve the right, but have no obligation, to monitor the
          materials posted on the Platform. The Company shall have the right to
          remove or edit any content that in its sole discretion violates, or is
          alleged to violate, any applicable law or either the spirit or letter
          of these Terms. Notwithstanding this right, You remain solely
          responsible for the content of the materials You post on the platform
          and in Your private messages. Please be advised that such content
          posted does not reflect the Company’s views. In no event shall the
          Company assume or have any responsibility or liability for any content
          posted or for any claims, damages or Losses resulting from use of
          content and/or appearance of the content on the Platform. You hereby
          represent and warrant that You have all necessary rights in and to all
          content which You provide and all information it contains and that
          such content shall not infringe any proprietary or intellectual
          property or other rights of third parties or contain any libellous,
          tortious, or otherwise unlawful information.
          <br />
          <br />• Your correspondence or business dealings with, or
          participation in promotions of, advertisers found on or through the
          Platform, including payment and delivery of related products or
          services, and any other terms, conditions, warranties or
          representations associated with such dealings, are solely between You
          and such advertiser. We shall not be responsible or liable for any
          loss or damage of any sort incurred as the result of any such dealings
          or as the result of the presence of such advertisers on the Platform.
          <br />
          <br />• It is possible that other Users (including unauthorized users
          or &apos;hackers&apos;) may post or transmit offensive or obscene
          materials on the Platform and that You may be involuntarily exposed to
          such offensive and obscene materials. It is also possible for others
          to obtain personal information about You due to Your use of the
          Platform, and that the recipient may use such information to harass or
          injure You. We do not approve of such unauthorized uses, but by using
          the Platform You acknowledge and agree that we are not responsible for
          the use of any personal information that You publicly disclose or
          share with others on the Platform. Please carefully select the type of
          information that You publicly disclose or share with others on the
          Platform.
          <br />
          <br />• The Company respects the intellectual property rights of
          others and expects Users of the Services to do the same. We reserve
          the right to remove content alleged to be infringing without prior
          notice, at our sole discretion, and without any liability to You. We
          will respond to notices of alleged infringement that comply with
          applicable Law and are properly provided to us. If You believe that
          Your content has been copied in a way that constitutes copyright
          infringement, please report this at support@digichal.in
          <br />
          <br />• The Company may in future charge a fee or charges, as
          intimated from time to time on the Platform, for registration on the
          Platform as Users especially for maintaining an official account, for
          availing services provided by the Company through the Platform.
          Currently, the Company does not levy any charges/fees for
          registration, access or maintaining an account on the Platform. The
          Company reserves the right to introduce new services including any
          premium or paid services or modify or discontinue any existing
          services provided on the Platform. Changes to the Terms or any of the
          Policies of the Company shall be published on the Platform and such
          changes shall automatically become effective immediately after they
          are published on the Platform. You are requested to visit the Terms
          and various Policies links on the Platform often to keep abreast of
          any amendments
          <br />
          <br />• You confirm that these Terms hereunder (and the User
          Agreement) will not conflict with, result in a breach of or constitute
          a default (or any event that, with notice or lapse of time, or both,
          would constitute a default) or result in the acceleration of any
          obligation under any of the terms, conditions or provisions of any
          other agreement or instrument to which You are a party or by which You
          are bound or to which any of Your property or assets are subject,
          conflict with or violate any of the provisions of its charter
          documents, or violate any statute or any order, rule or regulation of
          any Authority that would materially and adversely affect the
          performance of Your duties hereunder. You have obtained any consent,
          approval, authorization of Authority required for the execution,
          delivery and performance of its respective obligations hereunder. If
          the Company suffers any Loss or damages or a claim is made by any
          Person against the Company or the Platform as a result of a breach or
          default or contravention on Your part of the User Agreement , You
          agree to, forthwith upon delivery of notice by the Company, make good
          such Losses or damages or claim amounts suffered by the Company.
          <br />
          <br />• You confirm that there is no action, suit or proceeding
          pending against You or to Your knowledge, threatened in any court or
          by or before any other Authority which would prohibit Your entering
          into or performing obligations under the User Agreement.
          <br />
          <br />• You confirm that You shall not transfer Your account and shall
          not assign any rights and obligations under the User Agreement to any
          third party without the specific written permission of the Company.
        </p>
      </p>

      <div style={styles.componentDiv}>
        <div style={styles.colorBlue}>
          <span style={styles.colorNo}>5</span>
        </div>
        <div style={styles.headingText}>
          <h2 style={styles.heading1}>Merchant Terms:</h2>
        </div>
      </div>

      <p style={styles.pText}>
        The Merchants may list and provide the details of the products/ services
        offered for sale to the Buyers as a registered user of the Platform.
        <br />
        However the Merchants shall not be permitted to sell any product that
        fall are under the list of banned items{" "}
        <a href="https://s3.ap-south-1.amazonaws.com/static-digichal.in/digichalWebsite/DigiChal_banned_products+.pdf">
          Digichal Banned Products
        </a>
        identified by the Company from time to time, or are otherwise prohibited
        for sale under applicable Law. The Merchants agree and undertake that
        are legally permitted to sell the products listed for sale on the
        Platform. Listings may only include text descriptions, graphics and
        pictures that describe your products for sale. All listed products must
        be listed in an appropriate category on the Platform. Soliciting
        business offline or outside of the Platform with the Buyers is expressly
        prohibited and would be considered as a breach of the User Agreement.
        All listed products must be kept in stock for successful fulfilment of
        orders. The Merchants hereby agree and undertake that descriptions,
        images, and other content pertaining to the products/services is
        complete and accurate, and corresponds directly with the appearance,
        nature, quality, purpose and other features of such products/services.
        The listing description of the products must not be misleading and must
        describe the actual condition of the product. If the product description
        does not match the actual product, You agree to refund any amounts that
        You may have received from the Buyer. You shall not abuse or misuse the
        Platform or engage in any activity which violates the terms of the User
        Agreement. In any such case, the Company may suspend your account or
        permanently debar You from accessing the Platform.
      </p>

      <div style={styles.componentDiv}>
        <div style={styles.colorBlue}>
          <span style={styles.colorNo}>6</span>
        </div>
        <div style={styles.headingText}>
          <h2 style={styles.heading1}>Payment:</h2>
        </div>
      </div>

      <p style={styles.pText}>
        For all the transactions between the Merchant and the Buyer, the
        Merchant agrees to pay an amount equal to 2% of the transaction value
        (“Transaction Fees”) to the Company. The Merchant agrees that the
        Transaction Fees is subject to change and such change shall be published
        on the Platform from time to time.
        <br />
        <br />
        We use third party service providers or payment gateway(s) for
        processing the payments made in relation to the purchase of products
        offered by the Merchants to Buyers.
        <br />
        <br />
        The relevant third party service provider shall transfer the amount paid
        by the Buyer against an Order (after deducting the Transaction Fees) in
        the Merchant’s account, within 2 working days from the Buyer being in
        receipt of the good/service pursuant to such an Order delivered.
        <br />
        <br />
        In order to enable Buyers to use paid services on the Platform, the
        Company facilitates the provision of Pay Facility by a third-party
        service provider on the Platform, at its sole discretion. The Pay
        Facility shall enable automated collection and remittance services using
        the facilities of various Indian banks, financial institutions, credit/
        debit/ cash card brands, various third-party service providers and/or
        payment card industry issuers and through such other infrastructure and
        facilities as may be authorized by the Reserve Bank of India for
        collection, refund and remittance, as the case may be. The Pay Facility
        shall be availed in accordance with these Terms.
        <br />
        <br />
        The Pay Facility may support payments through credit/debit cards from
        the banks that are available while selecting the Pay Facility as the
        payment method or by cash. The Pay Facility may support payments through
        UPI and mobile wallet payment options. However, payment mechanisms may
        be added or removed or suspended through any one or more banks directly
        or through any payment gateway facilitators and such change shall come
        into effect upon the same being published on such third party service
        provider’s website.
        <br />
        <br />
        The Pay Facility shall be made available to the Buyers to make payment
        easier. In case wrong bank account details are used by the Buyer, the
        Company shall not be responsible for loss of money, if any. In case of
        there being any technical failure, at the time of transaction and there
        is a problem in making payment, You could contact us
        atsupport@digichal.in however, the Company shall not be liable for
        transaction failure or payment issues. You assume sole responsibility
        for all risks associated with transfer of money or payments to the
        Merchants, whether or not such transfer or payments are done through the
        use of a third-party payment gateway. All disputes regarding delayed
        payments or failed payments must be resolved by You, and the third-party
        payment gateway directly.
        <br />
        <br />
        You agree and accept that the Company is neither acting as a trustee nor
        acting in a fiduciary capacity with respect to the payment transaction
        by reason of providing the Pay Facility or any other method of payment
        to its Buyers.
        <br />
        <br />
        While availing any of the payment method/s available on the Platform, we
        will not be responsible or assume any liability, whatsoever in respect
        of any loss or damage arising directly or indirectly to
        <br />
        You due to:
        <p style={styles.pBulletText}>
          • Lack of authorization for any transaction;
          <br />
          <br />
          • Exceeding the preset limit mutually agreed by You and between
          &quot;Banks&quot;;
          <br />
          <br />
          • Any payment issues arising out of the transaction; or
          <br />
          <br />• Decline of transaction for any other reason.
        </p>
        All payment transactions are subject to approval by Your issuing bank as
        applicable. If Your bank refuses to authorize payment, the Merchant
        shall have the right to cancel the Order without any further liability.
        Further, You agree that we/Merchants will not be held accountable for
        any delays caused to the delivery in cases where the payment
        authorization is delayed by Your bank/ financial institution. You
        acknowledge and agree that You shall not use the details of credit
        card/debit card/net-banking or any other payment instrument which is not
        lawfully owned by You. All payments made against the purchases/Services
        on the Platform by You shall be compulsorily in Indian Rupees acceptable
        in the Republic of India. The Platform shall not facilitate transaction
        with respect to any other form of currency with respect to the purchases
        made on the Platform. The Merchants have specifically authorized the
        Company or its service providers to collect, process, facilitate and
        remit payments electronically or through ‘cash on delivery’ to and from
        other Buyers in respect of transactions through Pay Facility. Your
        relationship with the Company is on a principal to principal basis and
        by accepting these Terms, You agree that the Company is an independent
        contractor for all purposes, and does not have control of or liability
        for the products or services that are listed on the Platform that are
        paid for by using the Pay Facility. The Company does not guarantee the
        identity of any Buyer nor does it ensure that a Buyer or a Merchant will
        complete a transaction. You understand, accept and agree that the Pay
        Facility provided by the Company is neither a banking nor financial
        service but is merely a facilitator providing an electronic, automated
        online electronic payment, receiving payment through ‘cash on delivery’,
        collection and remittance facility for the transactions on the Platform
        using the existing authorized banking infrastructure and credit card
        payment gateway networks. Further, by providing the Pay Facility, the
        Company is neither acting as trustees nor acting in a fiduciary capacity
        with respect to the transaction or the transaction price. Buyers
        acknowledge and agree that the Company acts as the Merchant&apos;s
        payment agent for the limited purpose of accepting payments from Buyers
        on behalf of the Merchant. Upon Your payment of amounts to us, which are
        due to the Merchant, Your payment obligation to the Merchant for such
        amounts is completed, and we are responsible for remitting such amounts
        to the Merchant. You shall not, under any circumstances whatsoever, make
        any payment directly to the Merchant for Order bookings made using the
        Platform.
        <br />
        Payment Facility for Buyers:
        <p style={styles.pBulletText}>
          • You, as a Buyer, understand that upon initiating a transaction You
          are entering into a legally binding and enforceable contract with the
          Merchant to purchase the products and /or services from the Merchant
          using the Pay Facility, and You shall pay the transaction price
          through Your issuing bank to the Merchant using Pay Facility.
          <br />
          <br />
          • You, as a Buyer, shall be entitled to claim a refund of the
          transaction price from the Merchant (as Your sole and exclusive
          remedy) in case You do not receive the delivery of the goods or
          services being sold by the Merchant within the time period agreed in
          the transaction. In case You do not raise a refund claim using the
          Platform features within the stipulated time, then this would make You
          ineligible for a refund.
          <br />
          <br />
          • You, as a Buyer, understand that refund may not be available in full
          or in part for certain category of products and/or services and/or
          transactions and hence You may not be entitled to a refund in respect
          of the transactions for those products and /or services.
          <br />
          <br />• Except for ‘cash on delivery’ transactions, refund, if any,
          shall be made at the same issuing bank from where the transaction
          price was received, or through any other method available on the third
          party payment gateway’s website, as chosen by You.
          <br />
          <br />• For ‘cash on delivery’ transactions, refunds, if any, will be
          made via electronic payment transfers in accordance with the policies
          adopted by the third party payment gateway.
          <br />
          <br />• Refund shall be made in Indian Rupees only and shall be
          equivalent to the transaction price received in Indian Rupees.
          <br />
          <br />• For electronics payments, refund shall be made through payment
          facility using any other online banking / electronic funds transfer
          system approved by Reserve Bank India (RBI).
          <br />
          <br />• Refunds may be supported for select banks. Where a bank is not
          supported for processing refunds, You will be required to share
          alternate bank account details with for processing the refund.
          <br />
          <br />• Refund shall be conditional and shall be with recourse
          available to the Company in case of any misuse by Buyer.
          <br />
          <br />• We may also request You for additional documents for
          verification.
          <br />
          <br />• The Company reserves the right to impose limits on the number
          of transactions or transaction price from an individual valid
          Credit/Debit/ Cash Card / Valid Bank Account/ and such other
          infrastructure or any other financial instrument directly or
          indirectly through payment aggregator or through any such facility
          authorized by Reserve Bank of India to provide enabling support
          facility for collection and remittance of payment or by an individual
          Buyer during any time period, and reserves the right to refuse to
          process transactions exceeding such limit.
          <br />
          <br />• The Company reserves the right to refuse to process
          transactions by Buyers with a prior history of questionable charges
          including without limitation breach of the User Agreement by Buyer
          with the Company or breach/violation of any law or any charges imposed
          by the issuing bank.
          <br />
          <br />• The Buyer and Merchant acknowledge that the Company will not
          be liable for any damages, interests or claims etc. resulting from not
          processing a transaction/transaction price or any delay in processing
          a transaction/transaction price which is beyond control of the
          Company.
          <br />
        </p>
        Compliance with Laws:
        <p style={styles.pBulletText}>
          • Buyer and Merchant shall comply with all the applicable Laws
          (including without limitation Foreign Exchange Management Act, 1999
          and the rules made and notifications issued thereunder and the
          Exchange Control Manual as may be issued by Reserve Bank of India from
          time to time, Customs Act, Information and Technology Act, 2000 as
          amended by the Information Technology (Amendment) Act 2008, Prevention
          of Money Laundering Act, 2002 and the rules made there under, Foreign
          Contribution Regulation Act, 1976 and the rules made there under,
          Income Tax Act, 1961 and the rules made there under, Export Import
          Policy of government of India) applicable to them respectively for
          using the payment facility.
          <br />
          <br />• ement with Issuing Bank:
          <br />
          <br />• All valid credit / debit/ cash card/ and other payment
          instruments are processed using a payment gateway or appropriate
          payment system infrastructure and the same will also be governed by
          the terms and conditions agreed to between the Buyer and the
          respective issuing bank and payment instrument issuing company.
          <br />
          <br />• All online bank transfers from valid bank accounts are
          processed using the gateway provided by the respective issuing bank
          which support Pay Facility to provide these services to the Users. All
          such online bank transfers on Pay Facility are also governed by the
          terms and conditions agreed to between Buyer and the respective
          issuing bank.
        </p>
      </p>
      <div style={styles.componentDiv}>
        <div style={styles.colorBlue}>
          <span style={styles.colorNo}>7</span>
        </div>
        <div style={styles.headingText}>
          <h2 style={styles.heading1}>Warranties:</h2>
        </div>
      </div>

      <p style={styles.pText}>
        While we have made every effort to ensure that information is free from
        error, DigiChal Consultancy Private Limited does not warrant the
        accuracy, adequacy or completeness of Material on this
        website/application . All information is subject to change without
        notice. DigiChal Consultancy Private Limited recommends that you seek
        independent advice before acting upon Material on this
        website/application or Third Party Material. DigiChal Consultancy
        Private Limited does not guarantee that the DigiChal Consultancy Private
        Limited website/application or Third Party Website/application will be
        free from viruses, or that access to the DigiChal Consultancy Private
        Limited website/application or Third Party Website/application will be
        uninterrupted.
      </p>
      <div style={styles.componentDiv}>
        <div style={styles.colorBlue}>
          <span style={styles.colorNo}>8</span>
        </div>
        <div style={styles.headingText}>
          <h2 style={styles.heading1}>Limitation of Liability:</h2>
        </div>
      </div>

      <p style={styles.pText}>
        Subject to any responsibilities implied by law and which cannot be
        excluded, no member of DigiChal Consultancy Private Limited is liable to
        you for any losses, damages, liabilities, claims and expenses (including
        but not limited to legal costs and defence or settlement costs)
        whatsoever arising out of or referable to Material on the DigiChal
        Consultancy Private Limited website/application or to Third Party
        Material, whether in contract, tort including negligence, statute or
        otherwise. Except where to do so would cause any part of these Terms to
        be illegal, void or unenforceable:
        <p style={styles.pBulletText}>
          • Excludes all conditions and warranties implied into these Terms;
          <br />
          <br />
          • To the fullest extent permitted by applicable law, is not liable to
          you or anyone else for any loss or damage, however caused (including
          negligence), which may be directly or indirectly suffered, in
          connection with use of this website/ application ; and
          <br />
          <br />• Excludes liability (whether that liability arises under
          contract, tort (including negligence) or statute) for any special,
          indirect or consequential loss or damage (including without limitation
          loss of revenue and loss of, or damage to, data) suffered or incurred
          in connection with this website/application .
        </p>
        Without limiting the general disclaimer,DigiChal Consultancy Private
        Limited : Makes no warranty as to the completeness or accuracy of any
        material or as to its merchantability or fitness for a particular
        purpose. DigiChal Consultancy Private Limited is not liable to you or
        anyone else if errors occur in the information on this
        website/application or if that information is not up-to-date; Will not
        be liable for disruptions to this website/application ; and Is not
        liable to you or anyone else if interference with or damage to your
        computer systems occurs in connection with use of this
        website/application or an external site. You must take your own
        precautions to ensure that whatever you select for use from this
        website/application is free of viruses or anything else that may
        interfere with or damage the operation of your computer systems.
        Liability of any member of DigiChal Consultancy Private Limited for a
        breach of a condition or warranty implied by law or otherwise, and which
        cannot be excluded, is limited to the extent possible, at International
        FinTech’s option, to:
        <p style={styles.pBulletText}>
          • The supply of the goods or services again;
          <br />
          <br /> • The repair of the goods; or
          <br />
          <br /> • The payment of the cost of having the goods or services
          supplied again or repaired.
        </p>
      </p>

      <div style={styles.componentDiv}>
        <div style={styles.colorBlue}>
          <span style={styles.colorNo}>9</span>
        </div>
        <div style={styles.headingText}>
          <h2 style={styles.heading1}>Termination:</h2>
        </div>
      </div>

      <p style={styles.pText}>
        These Terms of Use (and the agreement constituted by your use of the
        information, graphics and materials on the DigiChal Consultancy Private
        Limited website/application ) and your access to the DigiChal
        Consultancy Private Limited website/application may be terminated at any
        time by DigiChal Consultancy Private Limited without notice. All
        restrictions, licences granted by you and all disclaimers and
        limitations of liability by DigiChal Consultancy Private Limited will
        survive termination, however, you will no longer be authorised to access
        the DigiChal Consultancy Private Limited website/application .
      </p>

      <div style={styles.componentDiv}>
        <div>
          <div style={styles.colorBlue}>
            <span style={styles.colorTwoDigitNo}>10</span>
          </div>
        </div>
        <div style={styles.headingText}>
          <h2 style={styles.heading1}>Copyright and Trademarks:</h2>
        </div>
      </div>

      <p style={styles.pText}>
        Copyright in the Material on this website/application is owned or
        licensed byDigiChal Consultancy Private Limited . The material contained
        on this website/application is protected by copyright. You may use this
        website/application only for your personal and non-commercial purposes.
        Except to the extent permitted by relevant copyright legislation, you
        must not use, copy, modify, transmit, store, publish or distribute the
        material on this website/application , or create any other material
        using material on this website/application , without obtaining the prior
        written consent ofDigiChal Consultancy Private Limited . Trade marks
        (whether registered or unregistered) and logos must not be used or
        modified in any way without obtaining the prior written consent of
        DigiChal Consultancy Private Limited . The website/application ,
        products, technology and processes contained in this website/application
        may be the subject of other intellectual property rights owned by
        DigiChal Consultancy Private Limited or by third parties. No licence is
        granted in respect of those intellectual property rights other than as
        set out in these Terms. Your use of this website/application must not in
        any way infringe the intellectual property rights of any person.
      </p>

      <div style={styles.componentDiv}>
        <div>
          <div style={styles.colorBlue}>
            <span style={styles.colorTwoDigitNo}>11</span>
          </div>
        </div>
        <div style={styles.headingText}>
          <h2 style={styles.heading1}>
            Acceptance to the Terms and Conditions of Usage:
          </h2>
        </div>
      </div>

      <p style={styles.pText}>
        You acknowledge agree and accept that your use of the DigiChal
        Consultancy Private Limited website/application indicates your
        acceptance of these Terms of Use and the Privacy Policy. These are the
        current Terms of Use. They replace any other terms of use for the
        DigiChal Consultancy Private Limited website/application published on
        the DigiChal Consultancy Private Limited website/application to date at
        the sole discretion of the Company. DigiChal Consultancy Private Limited
        may at any time vary the Terms of Use by publishing the varied Terms of
        Use on the DigiChal Consultancy Private Limited website/application .
        DigiChal Consultancy Private Limited reserves any rights not expressly
        granted in these Terms of Use.
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
    display: "flex",
    flexWrap: "wrap",
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
    // marginTop: "20px",
  },
  headingText: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "10px",
  },
  imageDiv: {
    marginTop: "4px",
    // width: 50,
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
