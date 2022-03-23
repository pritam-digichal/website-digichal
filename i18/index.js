import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      HOW_WILL_DIGICHAL_HELP_US: "How will going digital help your business?",
      REVENUE_GROWTH: "Revenue Growth",
      DECREASE_IN_COST_OF_BUSINESS: "Decrease in cost of business",
      DECREASE_IN_COST_OF_BUSINESS_CONTENT:
        "  With Digital Accounting, keep an eye on your Sales, Expense, Udhaar & Inventory number in real-time. Also, get paid faster with automated reminders for Udhaar sales. Our data-based insights will help you in reducing inventory leakage/wastage, keep your expenses low and decrease over all cost of doing business ",
      INCREASE_IN_CUSTOMER_ENGAGEMENT: "Increase in customer engagement",
      INCREASE_IN_CUSTOMER_ENGAGEMENT_CONTENT:
        "When you go digital, you can engage with your customers in a far more effective way than traditional methods. With our digital marketing suite, you can create discount codes for your customers, run digital campaign on festivals and send promotional messages to all your customers in one go. All this with few taps on your mobile screen.",
      BUSINESS_EXPANSION: "Business Expansion",
      BUSINESS_EXPANSION_CONTENT:
        "When you are digital, you enjoy working capital loans from us at very low-interest rates. Now scale your business up as high as you want",
      REVENUE_GROWTH_CONTENT:
        "In these changing times - Digital businesses are drivers of growth and more popular than traditional Dukaan. Increase your revenue by expanding your presence. We help you create your ‘Online Dukaan’; get started and enable yourself to sell via online store to customers who can not visit your shop. With our online store creator tool, create a catalog and go online in 2 simple steps. On the DigiChal App, you have no limitations when it comes to designing your digital dukaan; expand your digital market and watch your business grow. Keep an eye on your business 24/7 from the comfort of wherever you choose to be. List your products online with ‘Digichal Digital Dukaan’, create your own brand, engage with customers, and excel in the new era of online business.",
      WHY_CHOOSE_US: "Why Choose Us",
      TWENTY_FOUR_SEVEN_SUPPORT: "24x7 Support",
      TWENTY_FOUR_SEVEN_SUPPORT_CONTENT:
        "We are always at your back and call with 24- hour customer support to help you with any problem that you face in our app",
      ONLINE_BACKUP: "Online Backup",
      ONLINE_BACKUP_CONTENT:
        "Your data is always backed up on our secure servers. So, that you can access your data anytime, anywhere",
      FREE_TO_USE: "Free to Use",
      FREE_TO_USE_CONTENT:
        "We are free and don't charge you anything for using our app. Just input your mobile number and get started",
      DATA_PRIVACY: "Data Privacy",
      DATA_PRIVACY_CONTENT:
        "Your data is your own and safe with us. It is accessible only to you and people who are authorized by you",
      WATCH_DIGICHAL_TUTORIAL: " Watch how easy to use DigiChal is",
      SHRAWAN_GUPTA_REVIEW:
        "This app is very helpful. Earlier I was sending reminder manually. I used to go through Udhar Khata book and then make note of the people who owe me money. Now I set reminders on the app and it is sent automatically. Thank you so much for this feature.",
      SANTOSH_SHARMA_REVIEW:
        "I downloaded this app to make invoices. But when I saw the features I was amazed. So many useful features and so easy to use and store information. best billing app for mobile ever.",
      JOGINDER_SINGH_REVIEW:
        "It has helped me so much in my business. I used to spend so much time maintaining credit debit entry book manually. Now I just enter the details and check the details anytime from my phone. No need to look through books.",
      OM_FURNITURE_REVIEW:
        "It take me minutes to fill the sale record and generate an invoice. When I give the customers the invoices they also feel I am a serious businessman.",
      WHAT_USER_SAY_ABOUT_US: "What our users say about us",
      BANO_DIGITAL_WITH: "Bano Digital With",
      DIGICHAL: "DigiChal",
      ONE_STOP_SOLUTION_TO_MANAGE_BUSINESS:
        "One Stop Solution to Manage your Business",
      EXPLORE_HOW_CAN_WE__HELP_GROW: "Explore how we can help you grow",
      DISCOVERY: "Discovery",
      GO_ONLINE_WITH_YOUR_BUSINESS: "Go online with your business!",
      SHARE_YOUR_CATALOGUE:
        "Share your catalogue on your online store and start selling",
      GET_NEW_ORDER_ALERTS: "Get new order alerts on your mobile",
      ACCEPT_YOUR_ORDERS:
        "Accept/Reject/Modify your orders as you wish. You are in control",
      ACCOUNTING: "Accounting",
      RECORD_YOUR_SALES: "Records your sales digitally on your mobile",
      CREATE_PROFESSIONAL_INVOICES_IN_SECONDSD:
        "Create professional invoices in seconds",
      TRACK_YOUR_BUSINESS: "Track your business expenses online",
      ALL_CARDS_IN_ONE_PLACE: "All your credits, and debits in one place",
      PROMOTION_AND_BRANDING: "Promotion & Branding",
      YOUR_OWN_CUSTOMER_DATA: "You own data of your customers",
      OFFER_DISOCUNT_IN_SALES:
        "Offer custom discounts/sales to your customers with few tap on your mobile",
      PROMOTE_YOUR_SHOP:
        "Promote your shop with attractive banners and visiting cards",
      RUN_SMS_CAMPAIGN: "Run SMS campaigns to reactivate your lost customers",
      MEET_OUR_EXCITING: "Meet our exciting",
      FEATURES: "Features",
      DEDICATE_TO_HELP_YOUR_BUSINESS: "Dedicated to help your business",
      BANO_DIGITAL_WITH_DIGICHAL: "Bano digital with Digichal",
      ABOUT_US: "About Us",
      ABOUT_US_INSTRUCTION_FIRST_PART:
        "Our country is moving towards Digital India and we believe that all business owners should reap its benefits. We owe our economic strength to India's MSMEs and we are aiming to provide them with the tools they need to streamline their financial activities and manage their business efficiently.",
      ABOUT_US_INSTRUCTION_SECOND_PART:
        "Our products are designed solely focusing on the challenges faced by micro, small and medium businesses and we offer solutions to help their business flourish.",
      TRANSFORM_YOUR_KHATA: "Transform your Khata",
      TRANSFORM_YOUR_KHATA_CONTENT:
        "Our mission is to create digitally aware merchants and our app helps them maintain records of all their credits and debits in one place. Maintain clear records of your business ledger and enjoy real-time monitoring of your business anywhere, anytime. You can strategically plan for the future based on insights provided by similar businesses on the platform.",
      EXPAND_YOUR_REACH: "Expand your reach",
      EXPAND_YOUR_REACH_CONTENT_PART_FIRST:
        "The pandemic has created a rapid urge for businesses to move online. A business has to act immediately to be competitive in the digital age. Our services are customized to meet the unique needs of small businesses and entrepreneurs. In addition to spreading their reach beyond their local markets, our product allows them to create and market their brand online.",
      EXPAND_YOUR_REACH_CONTENT_PART_SECOND:
        "Digichal team will assist you through the entire process from getting your business listed online to creating awareness for your brand.",
      LETS_CONQUER_TOGETHER: "Let’s conquer together",
      LETS_CONQUER_TOGETHER_CONTENT:
        "We’ve got your back - Lack of awareness about technology can restrict businesses to create online visibility. DigiChal will be holding your hand through the entire transition. We share your load and help you achieve maximum efficiency with the existing setup. While you focus on your core business, our team offers help to set up your own online store and help you overcome the constraints on modernization & expansions by allowing you to increase your customer reach.",
      OUR_BRAIN_BEHIND_THIS: "Our Team - The brains behind this!",
      SAGAR_CHAUHAN: "Sagar Chauhan (CTO)",
      SAGAR_CHAUHAN_INTRO:
        "Sagar is an IIT alumnus and is passionate about converting ideas into reality. Multiple projects that he has led over the last decade have been instruments of change.",
      PAWAN_KUMAR: "Pawan Kumar (CPO)",
      PAWAN_KUMAR_INTRO:
        "Pawan is an IIT and IIM alumnus and has built this product with speed and precision. He holds experience in executing successful tech solutions in the past.",
      SHRAWAN_GUPTA: "Sharwan Gupta",
      SHRAWAN_GUPTA_ADDRESS: "Sec52, Gurugram",
      SANTOSH_SHARMA: "Santosh Sharma",
      SANTOSH_SHARMA_ADDRESS: "Lajpat Nagar, Delhi",
      JOGINDER_SINGH: "Jogindar Singh",
      JOGINDER_SINGH_ADDRESS: "Khanpur, Delhi",
      OM_FURNITURE: "Om Furniture",
      OM_FURNITURE_ADDRESS: "Sikandarpur, Gurugram",
      GET_IN_TOUCH_WITH_US: "Get In Touch With Us",
      EMAIL_ADDRESS: "Email Address",
      LIVE_SUPPORT: "Live Support",
      OUR_LOCATION: "Our Location",
      YOUR_LOCATION: "Your Location",
      PHONE_NUMBER: "Phone Number",
      EMAIL_ADDRESS: "Email Address",
      YOUR_MESSAGE: "Your Message",
      SEND_MESSAGE: "Send Message",
      OUR_CONTACT_INFO: "Our Contact Info",
      FOLLOW_US: "Follow Us",
      HOME: "Home",
      CONTACT_US: "Contact Us",
      PRIVACY_POLICY: "Privacy Policy",
      TERMS_AND_CONDITION: "Terms & Condition",
      COPYRIGHT_DIGICHAL: "Copyright by 2021 DigiChal",
      RAMESH_KUMAR: "Ramesh Kumar",
      RAMESH_KUMAR_ADDRESS: "Sadar Bazar, Agra",
      RAMESH_KUMAR_REVIEW:
        "With DigiChal app, whenever I get a new order, I receive a notification with your customer's name, address, and mobile phone number. It increase my sale without any commission . This app give me an overall look at the details of my business. It helped me understand more about my business, orders, and audience, and helped sales.",
      SURENDRA_VERMA: "Surendra Verma",
      SURENDRA_VERMA_ADDRESS: "Arya Nagar, Kanpur",
      SURENDRA_VERMA_REVIEW:
        "During lockdown, when my shop was closed and customer can’t reach to store. DigiChal helped me get order online and deliver to customers. Help me survive during tough times and maintain sales. Now my customer can buy my products sitting at home and this has increased my reach, thanks to DigiChal.",
      HINDI: "हिन्दी",
      ENGLISH: "English",
      META_DESCRIPTION:
        "100% free Digichal Digital khata & Digital Dukaan in one app.Record your daily hisab kitab.Send payment reminders from Digital khata udhar.Record your expenses on Expense and sale khata",
      META_KEYWORDS:
        "digital khata book, digital khata business, digital khata sale, digital udhar khata book, Digital udhar khata online, sale udhar khata, Sale digital Khata, Digital udhar khata, khata book digital udhar, digital sale Khata, digital Sale khata record, Expense digital khata, Digital khata udhar, Udhar digital khata, Udhar book digital khata, digital sale udhar, digital khata, digital sale udhar report, digital khata book udhar, digi sales app, digital udhar khata app, digital udhar app, expense digital khata app, digital sale khata app, digital khata app, digital khata business app, digital business khata app, digital khata diary, digital expense khata, digital expense udhar khata, sale digital udhar khata, sale udhar khata online, expense digital khata online, digichal digital dukaan, digital sale dukaan, digital dukaan online, digital dukaan online app, create digital dukaan online app, digital dukaan, digital dukaan app, online sale khata app, sale report, daily sales report, monthly sales report, daily sales record, business sales report, sales and expenses report, expense tracking, expense report, expense record, daily expenses app, business expense tracker, expense khata diary, expense khata record, sale khata record, apka apna khata, digital ledger, ledger khata book, daily hisab kitab app, ledger khata book, hisab kitab book, best hisab kitab app, daily hisab kitab, hisab kitab, online hisab, hisab online",
      META_TITLE:
        "100% Free,Safe,Secure Digichal Digital khata apka apna khata",
    },
  },
  hi: {
    translation: {
      HOW_WILL_DIGICHAL_HELP_US:
        "डिजिटल होने से आपके व्यवसाय को कैसे मदद मिलेगी?",
      REVENUE_GROWTH: "आमदनी मे इजाफा",
      DECREASE_IN_COST_OF_BUSINESS: "व्यापार की लागत करे कम",
      DECREASE_IN_COST_OF_BUSINESS_CONTENT:
        "डिजिचल के डिजिटल खाता के साथ, अपनी बिक्री, खर्च पर नजर रखें। अपनी बिक्री रिकॉर्ड करें और ग्राहकों के लिए बिल बनाये । इसके अलावा, हमारे उधार खाता से समय-समय पर उधार रिपोर्ट प्राप्त करें और भुगतान के रिमाइंडर के साथ तेज़ी से अपने रूपये प्राप्त करें।हमारी विस्तारित रिपोर्ट के साथ अपने खर्चों और व्यवसाय करने की लागत को क्षेत्रों की पहचान करें ।",
      INCREASE_IN_CUSTOMER_ENGAGEMENT: "ग्राहको से जुड़े",
      INCREASE_IN_CUSTOMER_ENGAGEMENT_CONTENT:
        "जब आप डिजिटल होते हैं, तो आप अपने ग्राहकों के साथ पारंपरिक तरीकों की तुलना में कहीं अधिक प्रभावी तरीके से जुड़ सकते हैं। हमारे डिजिटल मार्केटिंग सूट के साथ, आप अपने ग्राहकों के लिए डिस्काउंट कोड बना सकते हैं, त्योहारों पर डिजिटल अभियान चला सकते हैं और अपने सभी ग्राहकों को एक बार में प्रचार संदेश भेज सकते हैं। यह सब आपके मोबाइल स्क्रीन पर कुछ टैप के साथ ।",
      BUSINESS_EXPANSION: "व्यापार बढ़ाये",
      BUSINESS_EXPANSION_CONTENT:
        "जब आप डिजिटल होते हैं, तो आप व्यवसाय बढ़ाने के लिए हमारे द्वारा बहुत कम ब्याज दर पर क़र्ज़ का का लाभ उठा सकते हैं। अब अपने व्यवसाय को जितना चाहें बढ़ाये।",
      REVENUE_GROWTH_CONTENT:
        "इस बदलते समय में - डिजिटल दुकाने पारंपरिक दुकान की तुलना में अधिक लोकप्रिय हैं और वृद्धि भी कर रही है। डिजिटल दुकान अपनी बिक्री बढ़ाएं। हम आपकी ऑनलाइन दुकान बनाने में आपकी मदद करते हैं; अभी शुरु करें और अपने आप को उन ग्राहकों को ऑनलाइन स्टोर के माध्यम से बेचने में सक्षम बनाएं जो आपकी दुकान पर नहीं आ सकते हैं। हमारे ऑनलाइन स्टोर टूल के साथ, वो सामान लिस्ट करें जो आप बेचते हैं और 2 आसान चरणों में ऑनलाइन जाएं। डिजीचल ऐप पर, जब आपके डिजिटल दुकान को डिजाइन करने की बात आती है तो आपकी कोई सीमा नहीं होती है| अपने डिजिटल बाजार और अपने व्यवसाय को बढ़ते हुए देखें। कही भी रह कर , आराम से 24/7 अपने व्यवसाय पर नज़र रखें। डिजिचल डिजिटल दुकान के साथ अपने उत्पादों को ऑनलाइन बेचे, अपना खुद का ब्रांड बनाएं, ग्राहकों से जुड़ें, और ऑनलाइन व्यापार के नए युग में वृद्धि प्राप्त करें।",
      WHY_CHOOSE_US: "हमे क्यों चुने ?",
      TWENTY_FOUR_SEVEN_SUPPORT: "24x7 सहायता",
      TWENTY_FOUR_SEVEN_SUPPORT_CONTENT:
        "हम हमेशा आपके साथ है और 24 घंटे ग्राहक सहायता के साथ कॉल करते हैं ताकि आप हमारे ऐप में किसी भी समस्या का सामना कर सकें",
      ONLINE_BACKUP: "ऑनलाइन बैकअप",
      ONLINE_BACKUP_CONTENT:
        "आपके डेटा का हमेशा हमारे सुरक्षित सर्वर पर बैकअप लिया जाता है। ताकि, आप अपने डेटा को कभी भी, कहीं भी देख सकें",
      FREE_TO_USE: "डिजिचल मुफ्त हैं",
      FREE_TO_USE_CONTENT:
        "हम नि: शुल्क हैं और हमारे ऐप का उपयोग करने के लिए आपसे कोई फीस नहीं लेते हैं। बस अपना मोबाइल नंबर दर्ज करें और शुरू करे",
      DATA_PRIVACY: "डाटा प्राइवेसी",
      DATA_PRIVACY_CONTENT:
        "आपका डेटा आपका अपना है और हमारे पास सुरक्षित है। यह केवल आपके लिए और आपके द्वारा अधिकृत लोगों के लिए है",
      WATCH_DIGICHAL_TUTORIAL: "देखें कि डिजिचल का उपयोग करना कितना आसान है",
      SHRAWAN_GUPTA_REVIEW:
        "यह ऐप बहुत मददगार है। पहले मैं मैन्युअल रूप से रिमाइंडर भेज रहा था। मैं उधार खाता किताब देखता था और फिर उन लोगों का नोट बनाता था, जिन पर मुझ पर पैसा बकाया है। अब मैं ऐप पर रिमाइंडर सेट करता हूं और यह अपने आप भेज दिया जाता है। इस सुविधा के लिए आपका बहुत-बहुत धन्यवाद।",
      SANTOSH_SHARMA_REVIEW:
        "मैंने इनवॉइस बनाने के लिए यह डिजिटल ऐप डाउनलोड किया है। लेकिन जब मैंने सुविधाओं को देखा तो मैं चकित रह गया। इतनी सारी उपयोगी सुविधाएँ और इस्तेमाल में आसान और जानकारी रखने के लिए । मोबाइल के लिए अब तक का सबसे अच्छा बिलिंग ऐप।",
      JOGINDER_SINGH_REVIEW:
        "इसने मुझे मेरे व्यवसाय में बहुत मदद की है। मैं मैन्युअल रूप से क्रेडिट/डेबिट एंट्री बुक को बनाए रखने में इतना समय लगाता था। अब मैं सिर्फ विवरण डिजिटल उधार खाता ऐप मे दर्ज़ करता हूं और अपने फोन से कभी भी विवरण की जांच करता हूं। उधार खाता किताबों को  देखने की जरूरत नहीं है।",
      OM_FURNITURE_REVIEW:
        "बिक्री रिकॉर्ड भरने और इनवॉइस जेनरेट करने में मुझे कुछ मिनट लगते हैं। जब मैं डिजिटल दुकान ऐप  से ग्राहकों को इनवॉइस देता हूं तो उन्हें भी लगता है कि मैं एक सफल व्यवसायी हूं।",
      WHAT_USER_SAY_ABOUT_US: "जानें हमारे ग्राहक हमारे बारे में क्या कहते हैं",
      BANO_DIGITAL_WITH: "के साथ बनो डिजिटल",
      DIGICHAL: "डिजिचल",
      ONE_STOP_SOLUTION_TO_MANAGE_BUSINESS:
        "आपके व्यवसाय की सभी ज़रूरतों के लिए एक ऐप",
      EXPLORE_HOW_CAN_WE__HELP_GROW:
        "पता करें कि हम आपको बढ़ने में कैसे मदद कर सकते हैं",
      DISCOVERY: "डिस्कवरी",
      GO_ONLINE_WITH_YOUR_BUSINESS: "अपने व्यवसाय के साथ ऑनलाइन जाओ!",
      SHARE_YOUR_CATALOGUE:
        "अपने कैटलॉग को अपने ऑनलाइन स्टोर पर साझा करें और बिक्री शुरू करें",
      GET_NEW_ORDER_ALERTS: "अपने मोबाइल पर नए ऑर्डर अलर्ट प्राप्त करें",
      ACCEPT_YOUR_ORDERS:
        "अपनी इच्छानुसार अपने आदेशों को स्वीकार/अस्वीकार/संशोधित करें। सब आपके कन्ट्रोल में हैं",
      ACCOUNTING: "डिजिटल खाता",
      RECORD_YOUR_SALES:
        "आपकी बिक्री को आपके मोबाइल पर डिजिटल रूप से रिकॉर्ड करता है",
      CREATE_PROFESSIONAL_INVOICES_IN_SECONDSD: "सेकंड में चालान/बिल बनाएं",
      TRACK_YOUR_BUSINESS: "अपने व्यवसाय के खर्चों को ऑनलाइन ट्रैक करें",
      ALL_CARDS_IN_ONE_PLACE: "आपके सभी क्रेडिट, और डेबिट एक ही स्थान पर",
      PROMOTION_AND_BRANDING: "प्रमोशन और मार्केटिंग ",
      YOUR_OWN_CUSTOMER_DATA: "आप अपने ग्राहकों के डेटा के मालिक हैं",
      OFFER_DISOCUNT_IN_SALES:
        "अपने मोबाइल पर कुछ ही टैप करके अपने ग्राहकों को कस्टम छूट/डिस्काउंट प्रदान करें",
      PROMOTE_YOUR_SHOP:
        "आकर्षक बैनर और विजिटिंग कार्ड के साथ अपनी दुकान का प्रचार करें",
      RUN_SMS_CAMPAIGN:
        "अपने खोए हुए ग्राहकों को पुनः सक्रिय करने के लिए SMS अभियान चलाएं",
      MEET_OUR_EXCITING: "देखे हमारे ऐप के",
      FEATURES: "फीचर्स",
      DEDICATE_TO_HELP_YOUR_BUSINESS: "आपके व्यवसाय की सहायता के लिए समर्पित",
      BANO_DIGITAL_WITH_DIGICHAL: "डिजिचल के साथ बनो डिजिटल",
      ABOUT_US: "हमारे बारे में",
      ABOUT_US_INSTRUCTION_FIRST_PART:
        "हमारा देश डिजिटल इंडिया की ओर बढ़ रहा है और हमारा मानना ​​है कि सभी व्यापार मालिकों को इसका लाभ उठाना चाहिए। हम भारत कि आर्थिक ताकत का श्रेय को MSME देते हैं और हम उन्हें अपनी वित्तीय गतिविधियों को सुव्यवस्थित करने और अपने व्यवसाय को कुशलतापूर्वक से चलने के लिए आवश्यक उपकरण प्रदान करने का लक्ष्य रखते हैं।",
      ABOUT_US_INSTRUCTION_SECOND_PART:
        "हमारे उत्पादों को पूरी तरह से सूक्ष्म, लघु और मध्यम व्यवसायों के सामने आने वाली चुनौतियों पर ध्यान केंद्रित करने के लिए डिज़ाइन किया गया है और हम उनके व्यवसाय को फलने-फूलने में मदद करने के लिए समाधान प्रदान करते हैं।",
      TRANSFORM_YOUR_KHATA: "अपने खाते को बदले",
      TRANSFORM_YOUR_KHATA_CONTENT:
        "हमारा मिशन डिजिटल रूप से जागरूक व्यापारियों को तैयार करना है और हमारा उधार खाता ऐप उन्हें एक ही स्थान पर अपने सभी क्रेडिट और डेबिट का रिकॉर्ड बनाए रखने में मदद करता है। अपने व्यवसाय के डिजिटल खाता का स्पष्ट रिकॉर्ड बनाए रखें और कहीं भी, कभी भी अपने व्यवसाय की वास्तविक समय की निगरानी का आनंद लें। आप मंच पर व्यवसायों द्वारा प्रदान की गई डेटा के आधार पर भविष्य के लिए योजना बना सकते हैं।",
      EXPAND_YOUR_REACH: "अपनी पहुंच बढ़ाएं",
      EXPAND_YOUR_REACH_CONTENT_PART_FIRST:
        "महामारी ने व्यवसायों के लिए ऑनलाइन करने की ज़रूरत पैदा कर दी है। डिजिटल युग में प्रतिस्पर्धी होने के लिए एक व्यवसाय को तुरंत कार्य करना पड़ता है। हमारी सेवाओं को छोटे व्यवसायों और उद्यमियों की अनूठी जरूरतों को पूरा करने के लिए अनुकूलित किया गया है। अपने स्थानीय बाजारों से परे अपनी पहुंच फैलाने के अलावा, हमारा उत्पाद उन्हें अपने ब्रांड को ऑनलाइन बनाने देता है।",
      EXPAND_YOUR_REACH_CONTENT_PART_SECOND:
        "डिजिचल टीम आपके व्यवसाय को ऑनलाइन करने से लेकर आपके लिए जागरूकता पैदा करने तक की पूरी प्रक्रिया में आपकी सहायता करेगी",
      LETS_CONQUER_TOGETHER: "आओ मिलकर जीतें",
      LETS_CONQUER_TOGETHER_CONTENT:
        "हमलोग आपके साथ हैं - व्यवसायों के बारे में जागरूकता की कमी व्यवसायों को ऑनलाइन बनाने के लिए रोकता है। पूरे संक्रमण काल ​​में डिजिचल आपका हाथ थामे रहेगा। हम आपका भार साझा करते हैं और मौजूदा सेटअप के साथ अधिकतम व्यवसाय हासिल करने में आपकी सहायता करते हैं। जब आप अपने मुख्य व्यवसाय पर ध्यान केंद्रित करते हैं, तो हमारी टीम आपका अपना ऑनलाइन स्टोर स्थापित करने में सहायता प्रदान करती है और आधुनिकीकरण की बाधाओं को दूर करने में आपकी सहायता करती है।",
      OUR_BRAIN_BEHIND_THIS: "हमारी टीम ",
      SAGAR_CHAUHAN: "सागर चौहान (CTO)",
      SAGAR_CHAUHAN_INTRO:
        "सागर IIT के पूर्व छात्र हैं और विचारों को वास्तविकता में बदलने का शौक रखते हैं। पिछले एक दशक में उन्होंने कई नयी कंपनियों के निर्माण में अहम् भूमिका निभाई हैं.",
      PAWAN_KUMAR: "पवन कुमार (CPO)",
      PAWAN_KUMAR_INTRO:
        "पवन एक IIT और IIM के पूर्व छात्र हैं और उन्होंने डिजिचल ऐप को दिशा देने में अहम् भूमिका निभाई है । उनके पास 5 साल का इंडस्ट्री का अनुभव है और वो इससे पहले मोबाइल गेमिंग, सोलर इंडस्ट्री, हेल्थ केयर जैसे क्षेत्र में काम कर चुकें हैं",
      SHRAWAN_GUPTA: "श्रवण गुप्ता",
      SHRAWAN_GUPTA_ADDRESS: "सेक्टर 52, गुरुग्राम",
      SANTOSH_SHARMA: "संतोष शर्मा",
      SANTOSH_SHARMA_ADDRESS: "लाजपत नगर, दिल्ली",
      JOGINDER_SINGH: "जोगिन्दर सिंह",
      JOGINDER_SINGH_ADDRESS: "खानपुर, दिल्ली",
      OM_FURNITURE: "ओम फर्नीचर",
      OM_FURNITURE_ADDRESS: "सिकंदरपुर, गुरुग्राम",
      GET_IN_TOUCH_WITH_US: "हमारे साथ संपर्क करे",
      EMAIL_ADDRESS: "ईमेल एड्रेस",
      LIVE_SUPPORT: "लाइव सहायता",
      OUR_LOCATION: "हमारा पता",
      YOUR_LOCATION: "आपका पता",
      PHONE_NUMBER: "फ़ोन नंबर",
      EMAIL_ADDRESS: "ईमेल एड्रेस",
      YOUR_MESSAGE: "आपका संदेश",
      SEND_MESSAGE: "मेसेज भेजें",
      OUR_CONTACT_INFO: "हमारी संपर्क जानकारी",
      FOLLOW_US: "फॉलो करे",
      HOME: "होम",
      CONTACT_US: "संपर्क करें",
      PRIVACY_POLICY: "प्राइवेसी पालिसी",
      TERMS_AND_CONDITION: "टर्म्स एंड कंडीशंस",
      COPYRIGHT_DIGICHAL: "कॉपीराइट 2021 डिजीचल द्वारा",
      RAMESH_KUMAR: "रमेश कुमार",
      RAMESH_KUMAR_ADDRESS: "सदर बाजार, आगरा",
      RAMESH_KUMAR_REVIEW:
        "डिजिटल ऐप के साथ, जब भी मुझे कोई नया ऑर्डर मिलता है, तो मुझे आपके ग्राहक के नाम, पते और मोबाइल फोन नंबर के साथ एक सूचना प्राप्त होती है। यह बिना किसी कमीशन के मेरी बिक्री बढ़ी है । यह ऐप मुझे मेरे व्यवसाय को समझने मे मेरी मदत करता है । इससे मुझे अपने व्यवसाय, ऑर्डर और ग्राहको के बारे में अधिक समझने में मदद मिली और बिक्री में मदद मिली।",
      SURENDRA_VERMA: "सुरेंद्र वर्मा",
      SURENDRA_VERMA_ADDRESS: "आर्य नगर, कानपुर",
      SURENDRA_VERMA_REVIEW:
        "लॉकडाउन के दौरान जब मेरी दुकान बंद थी और ग्राहक दुकान तक नहीं पहुंच पा रहा था। डिजिचल ने मुझे ऑनलाइन ऑर्डर प्राप्त करने और ग्राहकों तक पहुंचाने में मदद की। कठिन समय में बिक्री बनाए रखने में मेरी सहायता करें। अब मेरा ग्राहक घर बैठे मेरे उत्पाद खरीद सकता है और इससे मेरी पहुंच बढ़ी है, डिजीचल को धन्यवाद।",
      HINDI: "हिन्दी",
      ENGLISH: "English",
      META_DESCRIPTION:
        "पुराने बही खाते को Digichal ऑनलाइन खाता में बदलें|100% मुफ़्त|आसान और सुरक्षित|बिक्री,खर्च,उधार रिकॉर्ड करें|डिजिटल दुकान से ऑनलाइन स्टोर बनाएं|उधार खाता ऐप से पेमेंट रिमाइंडर भेजें",
      META_KEYWORDS:
        "डिजिटल खाता, उधार खाता ऐप, ऑनलाइन खाता, डिजिटल खाता उधार, डिजिटल खाता डायरी, डिजिटल दुकान, डिजिटल दुकान ऐप, डिजिटल हिसाब किताब डायरी, डिजिटल खर्च खाता, उधार किताब डिजिटल खाता, डिजिटल खाता किताब, डिजिटल खाता बुक डायरी, डिजिटल उधार खाता, डिजिटल उधार खाता ऐप, डिजिटल बिक्री खाता रिकॉर्ड, डिजिटल दुकान ऑनलाइन ऐप, डिजिटल खाता डायरी ऐप, डिजिटल खाता ऐप, खर्च खाता, सेल खाता, डिजिटल बचत खाता, बचत खाता, बिक्री डिजिटल खाता, ऑनलाइन खर्च खाता, ऑनलाइन बिक्री रिकॉर्ड, डिजिटल खाता ऐप, ऑनलाइन दुकान ऐप, दुकान ऐप, सेल खाता ऐप, खाता ऐप, खाता, बहीखाता, डिजिटल खाता, डिजिटल खाता, उधार खाता ऐप",
      META_TITLE: "आसान,सुरक्षित Digichal डिजिटल खाता|बिक्री-खर्च-उधार खाता ऐप",
    },
  },
};

let lang = "hi";
if (typeof window !== "undefined") {
  if (localStorage.getItem("language") != null) {
    lang = localStorage.getItem("language");
  }
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: lang, // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
