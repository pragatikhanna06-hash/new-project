// // ── translations.js ──────────────────────────────────────────────────────────
// // All homepage copy in English (en) and Hindi (hi).
// // Add new keys here whenever you add new visible text to HomePage.jsx.

// export const translations = {
//   en: {
//     nav: {
//       about: "About",
//       services: "Services",
//       clients: "Clients",
//       programs: "Programs",
//       contact: "Contact",
//       getInTouch: "Get in Touch",
//     },
//     hero: {
//       eyebrow: "NyayShield",
//       title: "What do you need help with right now?",
//       subtitle: "Pick one — each takes you straight to the right place, no digging through menus.",
//       actions: [
//         { title: "Report a Crime", sub: "File details, get routed instantly" },
//         { title: "Book a Lawyer", sub: "From Day 1, or later in the case" },
//         { title: "Check Case Status", sub: "Track progress & next hearing date" },
//         { title: "Book a Forensic Expert", sub: "Secure evidence before it's gone" },
//         { title: "Nearby Police Station", sub: "Find the closest station to you" },
//         { title: "Legal / Corporate Report Drafting", sub: "Notices, contracts & compliance docs" },
//       ],
//     },
//     about: {
//       eyebrow: "About Forfra",
//       titleLine1: "At the Intersection of Technology,",
//       titleLine2: "Investigation & Intelligence",
//       p1: "Forfra Solutions is a multidisciplinary professional firm delivering high-impact solutions to corporates, law enforcement agencies, and academic institutions. We combine forensic science with cutting-edge technology to uncover the truth — and protect what matters most.",
//       p2: "Certified under ISO 9001:2015 for Quality Management and ISO 27001:2022 for Information Security, our approach is built on precision, compliance, and uncompromising integrity.",
//       stats: [
//         { val: "2", label: "ISO Certifications" },
//         { val: "10+", label: "Service Verticals" },
//         { val: "6+", label: "Client Categories" },
//       ],
//     },
//     services: {
//       eyebrow: "Our Services",
//       title: "Every Threat. One Partner.",
//       learnMore: "Learn More →",
//       items: [
//         {
//           id: "01", slug: "data-security", icon: "🔐",
//           title: "Data Security", tag: "Royal Vault Approach",
//           desc: "Air-gapped systems, strong encryption, and strict access controls keep your data completely isolated, private, and tamper-proof.",
//         },
//         {
//           id: "02", slug: "forensic-audit", icon: "🔍",
//           title: "Forensic Audit", tag: "Beyond Traditional Audits",
//           desc: "Uncover fraud, financial irregularities, and hidden risks with investigative expertise and advanced analytics. Court-admissible reports guaranteed.",
//         },
//         {
//           id: "03", slug: "digital-forensics", icon: "💻",
//           title: "Digital Forensics", tag: "End-to-End Investigation",
//           desc: "Data imaging, extraction, and in-depth analysis from mobile devices, computers, and networks with full chain of custody.",
//         },
//         {
//           id: "04", slug: "fraud-investigation", icon: "📊",
//           title: "Financial & Fraud Investigation", tag: "Follow the Money",
//           desc: "Uncover financial irregularities, trace complex transactions, and track fraud across banking systems — including cryptocurrency tracing.",
//         },
//         {
//           id: "05", slug: "investigations", icon: "🕵️",
//           title: "Investigations & Intelligence", tag: "OSINT & Due Diligence",
//           desc: "Background verification, corporate & private investigations, OSINT, litigation support, and business risk assessment.",
//         },
//         {
//           id: "06", slug: "document-examination", icon: "📄",
//           title: "Document Examination", tag: "Verify. Authenticate. Protect.",
//           desc: "Signatures, handwriting, ink, paper, and digital metadata — we detect forgery, alterations, or tampering using scientific methods.",
//         },
//         {
//           id: "07", slug: "legal-consultation", icon: "⚖️",
//           title: "Legal Consultations", tag: "Forensic-Backed Legal Strategy",
//           desc: "Bridge the gap between technical evidence and legal strategy. Expert witness services and court-admissible forensic report preparation.",
//         },
//       ],
//     },
//     capabilities: {
//       eyebrow: "Our Approach",
//       title: "How We Work",
//       items: [
//         {
//           phase: "Detect",
//           title: "Uncover What's Hidden",
//           body: "Our certified experts analyze financial records, digital footprints, and communication trails to surface fraud, irregularities, and concealed evidence before it becomes a liability.",
//           bullets: [
//             "Transaction trail analysis",
//             "Data manipulation detection",
//             "Benami & shell entity investigation",
//             "Email & communication forensics",
//           ],
//         },
//         {
//           phase: "Protect",
//           title: "Guard What Matters Most",
//           body: "We treat your data as a high-value asset — not a file. Our 'royal vault' approach combines air-gapped environments, multi-layer authentication, and full chain of custody compliance.",
//           bullets: [
//             "Secure offline infrastructure",
//             "Data protection & encryption",
//             "Controlled data access (role-based)",
//             "DPDP Act 2023 alignment",
//           ],
//         },
//         {
//           phase: "Evolve",
//           title: "Stay Ahead of Tomorrow's Threats",
//           body: "From corporate crime awareness programs to school digital safety workshops, we build the human layer of security — preparing organisations and institutions for an increasingly digital world.",
//           bullets: [
//             "Corporate crime awareness programs",
//             "School cyber safety education",
//             "Legal & regulatory advisory",
//             "Career development in forensics",
//           ],
//         },
//       ],
//     },
//     differentiator: {
//       eyebrow: "What Makes Us Different",
//       titleLine1: "Security Is Table Stakes.",
//       titleLine2: "We Deliver Integrity.",
//       points: [
//         { icon: "🔒", title: "Security + Accountability", desc: "We don't just isolate data — we create controlled environments with strict access protocols and full chain of custody." },
//         { icon: "⚖️", title: "Legally Admissible", desc: "Every report we produce is court-admissible, traceable, and handled with complete integrity." },
//         { icon: "📋", title: "Section 63(4)(c) Compliant", desc: "Proper handling, storage, and presentation of digital evidence ensures validity in Indian courts." },
//         { icon: "🇮🇳", title: "DPDP Act 2023 Aligned", desc: "Fully aligned with India's Digital Personal Data Protection Act — data minimisation, purpose limitation, and lawful processing." },
//       ],
//     },
//     clients: {
//       eyebrow: "Our Clients",
//       title: "Trusted by Those Who Protect India's Institutions",
//       names: [
//         "Income Tax Department",
//         "GST Authorities",
//         "Enforcement Directorate",
//         "CBI",
//         "SEBI",
//         "SFIO",
//         "State Police & Cyber Crime Cells",
//         "Law Firms & Courts",
//         "Public & Private Sector Banks",
//         "NBFCs & FinTechs",
//         "Large Corporates & MNCs",
//         "CA Firms & Auditors",
//       ],
//       categories: [
//         { label: "Government & Regulatory Agencies", icon: "🏛️" },
//         { label: "Law Enforcement & Legal Bodies", icon: "🚔" },
//         { label: "Banking & Financial Institutions", icon: "🏦" },
//         { label: "Corporate & Business Enterprises", icon: "🏢" },
//         { label: "Professional & Advisory Firms", icon: "📂" },
//       ],
//     },
//     programs: {
//       eyebrow: "Awareness Programs",
//       titleLine1: "Building a Safer Society,",
//       titleLine2: "One Awareness Session at a Time",
//       items: [
//         {
//           title: "Corporate Crime Awareness",
//           subtitle: "For Business Teams",
//           points: ["FinTech & corporate fraud detection", "Digital exploitation & cyber abuse", "Internal threats & employee risks", "Legal & regulatory awareness"],
//         },
//         {
//           title: "School Crime Awareness",
//           subtitle: "For Educational Institutions",
//           points: ["Cyber safety & digital awareness", "Student safety & crime prevention", "POSH & safe school environment", "Mental health & social responsibility"],
//         },
//       ],
//     },
//     contact: {
//       eyebrow: "Let's Work Together",
//       titleLine1: "Whether You Need Digital Forensics,",
//       titleLine2: "Fraud Investigation, or Document Validation —",
//       desc: "Our team is ready to deliver accurate, court-admissible solutions when it matters most.",
//       ctaTitle: "Ready to protect what matters?",
//       contactUsNow: "Contact Us Now",
//       visitWebsite: "Visit Website",
//     },
//     footer: {
//       tagline: "Detect. Protect. Evolve.",
//       rights: "All rights reserved.",
//     },
//   },

//   hi: {
//     nav: {
//       about: "परिचय",
//       services: "सेवाएँ",
//       clients: "ग्राहक",
//       programs: "कार्यक्रम",
//       contact: "संपर्क",
//       getInTouch: "संपर्क करें",
//     },
//     hero: {
//       eyebrow: "न्यायशील्ड",
//       title: "अभी आपको किस चीज़ में मदद चाहिए?",
//       subtitle: "एक विकल्प चुनें — हर एक आपको सीधे सही जगह ले जाएगा, मेन्यू में खोजने की ज़रूरत नहीं।",
//       actions: [
//         { title: "अपराध की रिपोर्ट करें", sub: "विवरण दर्ज करें, तुरंत सही जगह भेजा जाएगा" },
//         { title: "वकील बुक करें", sub: "पहले दिन से, या केस में बाद में भी" },
//         { title: "केस की स्थिति जांचें", sub: "प्रगति और अगली सुनवाई की तारीख देखें" },
//         { title: "फॉरेंसिक विशेषज्ञ बुक करें", sub: "सबूत खोने से पहले सुरक्षित करें" },
//         { title: "नज़दीकी पुलिस स्टेशन", sub: "अपने सबसे नज़दीकी स्टेशन को खोजें" },
//         { title: "कानूनी / कॉर्पोरेट रिपोर्ट ड्राफ्टिंग", sub: "नोटिस, अनुबंध और अनुपालन दस्तावेज़" },
//       ],
//     },
//     about: {
//       eyebrow: "फॉर्फ्रा के बारे में",
//       titleLine1: "टेक्नोलॉजी, इन्वेस्टिगेशन और",
//       titleLine2: "इंटेलिजेंस के संगम पर",
//       p1: "फॉर्फ्रा सॉल्यूशंस एक बहु-विषयक पेशेवर फर्म है जो कॉर्पोरेट्स, कानून प्रवर्तन एजेंसियों और शैक्षणिक संस्थानों को उच्च-प्रभाव समाधान प्रदान करती है। हम सच्चाई को उजागर करने और सबसे महत्वपूर्ण चीज़ों की रक्षा करने के लिए फॉरेंसिक विज्ञान को अत्याधुनिक तकनीक के साथ जोड़ते हैं।",
//       p2: "गुणवत्ता प्रबंधन के लिए ISO 9001:2015 और सूचना सुरक्षा के लिए ISO 27001:2022 के तहत प्रमाणित, हमारा दृष्टिकोण सटीकता, अनुपालन और अडिग ईमानदारी पर आधारित है।",
//       stats: [
//         { val: "2", label: "ISO प्रमाणपत्र" },
//         { val: "10+", label: "सेवा क्षेत्र" },
//         { val: "6+", label: "ग्राहक श्रेणियाँ" },
//       ],
//     },
//     services: {
//       eyebrow: "हमारी सेवाएँ",
//       title: "हर खतरा। एक साझेदार।",
//       learnMore: "और जानें →",
//       items: [
//         {
//           id: "01", slug: "data-security", icon: "🔐",
//           title: "डेटा सुरक्षा", tag: "रॉयल वॉल्ट दृष्टिकोण",
//           desc: "एयर-गैप्ड सिस्टम, मज़बूत एन्क्रिप्शन और सख्त एक्सेस नियंत्रण आपके डेटा को पूरी तरह से अलग, निजी और छेड़छाड़-रोधी बनाए रखते हैं।",
//         },
//         {
//           id: "02", slug: "forensic-audit", icon: "🔍",
//           title: "फॉरेंसिक ऑडिट", tag: "पारंपरिक ऑडिट से आगे",
//           desc: "जांच विशेषज्ञता और उन्नत विश्लेषण के साथ धोखाधड़ी, वित्तीय अनियमितताओं और छिपे जोखिमों को उजागर करें। न्यायालय-मान्य रिपोर्ट की गारंटी।",
//         },
//         {
//           id: "03", slug: "digital-forensics", icon: "💻",
//           title: "डिजिटल फॉरेंसिक्स", tag: "एंड-टू-एंड जांच",
//           desc: "मोबाइल डिवाइस, कंप्यूटर और नेटवर्क से डेटा इमेजिंग, निष्कर्षण और गहन विश्लेषण, पूर्ण चेन ऑफ कस्टडी के साथ।",
//         },
//         {
//           id: "04", slug: "fraud-investigation", icon: "📊",
//           title: "वित्तीय और धोखाधड़ी जांच", tag: "पैसे का पीछा करें",
//           desc: "वित्तीय अनियमितताओं को उजागर करें, जटिल लेन-देन का पता लगाएं, और बैंकिंग सिस्टम में धोखाधड़ी को ट्रैक करें — क्रिप्टोकरेंसी ट्रेसिंग सहित।",
//         },
//         {
//           id: "05", slug: "investigations", icon: "🕵️",
//           title: "जांच और इंटेलिजेंस", tag: "OSINT और ड्यू डिलिजेंस",
//           desc: "पृष्ठभूमि सत्यापन, कॉर्पोरेट और निजी जांच, OSINT, मुकदमेबाज़ी सहायता, और व्यावसायिक जोखिम आकलन।",
//         },
//         {
//           id: "06", slug: "document-examination", icon: "📄",
//           title: "दस्तावेज़ जांच", tag: "सत्यापित करें। प्रमाणित करें। सुरक्षित करें।",
//           desc: "हस्ताक्षर, हस्तलेख, स्याही, कागज़ और डिजिटल मेटाडेटा — हम वैज्ञानिक तरीकों का उपयोग करके जालसाज़ी, बदलाव या छेड़छाड़ का पता लगाते हैं।",
//         },
//         {
//           id: "07", slug: "legal-consultation", icon: "⚖️",
//           title: "कानूनी परामर्श", tag: "फॉरेंसिक-समर्थित कानूनी रणनीति",
//           desc: "तकनीकी सबूत और कानूनी रणनीति के बीच की खाई को पाटें। विशेषज्ञ गवाह सेवाएँ और न्यायालय-मान्य फॉरेंसिक रिपोर्ट तैयार करना।",
//         },
//       ],
//     },
//     capabilities: {
//       eyebrow: "हमारा दृष्टिकोण",
//       title: "हम कैसे काम करते हैं",
//       items: [
//         {
//           phase: "पहचानें",
//           title: "जो छिपा है उसे उजागर करें",
//           body: "हमारे प्रमाणित विशेषज्ञ वित्तीय रिकॉर्ड, डिजिटल फुटप्रिंट और संचार ट्रेल्स का विश्लेषण करते हैं ताकि धोखाधड़ी, अनियमितताएँ और छिपे सबूत, देनदारी बनने से पहले ही सामने आ जाएँ।",
//           bullets: [
//             "लेन-देन ट्रेल विश्लेषण",
//             "डेटा हेरफेर का पता लगाना",
//             "बेनामी और शेल इकाई जांच",
//             "ईमेल और संचार फॉरेंसिक्स",
//           ],
//         },
//         {
//           phase: "सुरक्षा",
//           title: "जो सबसे महत्वपूर्ण है उसकी रक्षा करें",
//           body: "हम आपके डेटा को एक फाइल नहीं, बल्कि एक उच्च-मूल्य संपत्ति के रूप में मानते हैं। हमारा 'रॉयल वॉल्ट' दृष्टिकोण एयर-गैप्ड वातावरण, बहु-स्तरीय प्रमाणीकरण और पूर्ण चेन ऑफ कस्टडी अनुपालन को जोड़ता है।",
//           bullets: [
//             "सुरक्षित ऑफ़लाइन इंफ्रास्ट्रक्चर",
//             "डेटा सुरक्षा और एन्क्रिप्शन",
//             "नियंत्रित डेटा एक्सेस (भूमिका-आधारित)",
//             "DPDP अधिनियम 2023 अनुपालन",
//           ],
//         },
//         {
//           phase: "विकास",
//           title: "आने वाले खतरों से एक कदम आगे रहें",
//           body: "कॉर्पोरेट अपराध जागरूकता कार्यक्रमों से लेकर स्कूल डिजिटल सुरक्षा वर्कशॉप तक, हम सुरक्षा की मानवीय परत का निर्माण करते हैं — संस्थानों को एक बढ़ते डिजिटल दुनिया के लिए तैयार करते हुए।",
//           bullets: [
//             "कॉर्पोरेट अपराध जागरूकता कार्यक्रम",
//             "स्कूल साइबर सुरक्षा शिक्षा",
//             "कानूनी और नियामक सलाह",
//             "फॉरेंसिक्स में करियर विकास",
//           ],
//         },
//       ],
//     },
//     differentiator: {
//       eyebrow: "हम अलग क्यों हैं",
//       titleLine1: "सुरक्षा तो बस शुरुआत है।",
//       titleLine2: "हम ईमानदारी प्रदान करते हैं।",
//       points: [
//         { icon: "🔒", title: "सुरक्षा + जवाबदेही", desc: "हम केवल डेटा को अलग नहीं करते — हम सख्त एक्सेस प्रोटोकॉल और पूर्ण चेन ऑफ कस्टडी के साथ नियंत्रित वातावरण बनाते हैं।" },
//         { icon: "⚖️", title: "कानूनी रूप से मान्य", desc: "हमारी हर रिपोर्ट न्यायालय में मान्य, ट्रेस करने योग्य, और पूर्ण ईमानदारी के साथ तैयार की जाती है।" },
//         { icon: "📋", title: "धारा 63(4)(c) अनुपालन", desc: "डिजिटल साक्ष्य का उचित प्रबंधन, भंडारण और प्रस्तुति भारतीय अदालतों में इसकी वैधता सुनिश्चित करती है।" },
//         { icon: "🇮🇳", title: "DPDP अधिनियम 2023 के अनुरूप", desc: "भारत के डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम के पूर्णतः अनुरूप — डेटा न्यूनीकरण, उद्देश्य सीमा और वैध प्रसंस्करण।" },
//       ],
//     },
//     clients: {
//       eyebrow: "हमारे ग्राहक",
//       title: "भारत के संस्थानों की रक्षा करने वालों का भरोसा",
//       names: [
//         "आयकर विभाग",
//         "जीएसटी प्राधिकरण",
//         "प्रवर्तन निदेशालय",
//         "सीबीआई",
//         "सेबी",
//         "एसएफआईओ",
//         "राज्य पुलिस और साइबर क्राइम सेल",
//         "लॉ फर्म्स और अदालतें",
//         "सार्वजनिक और निजी क्षेत्र के बैंक",
//         "एनबीएफसी और फिनटेक",
//         "बड़े कॉर्पोरेट्स और एमएनसी",
//         "सीए फर्म्स और ऑडिटर्स",
//       ],
//       categories: [
//         { label: "सरकारी और नियामक एजेंसियाँ", icon: "🏛️" },
//         { label: "कानून प्रवर्तन और कानूनी निकाय", icon: "🚔" },
//         { label: "बैंकिंग और वित्तीय संस्थान", icon: "🏦" },
//         { label: "कॉर्पोरेट और व्यावसायिक उद्यम", icon: "🏢" },
//         { label: "पेशेवर और सलाहकार फर्म्स", icon: "📂" },
//       ],
//     },
//     programs: {
//       eyebrow: "जागरूकता कार्यक्रम",
//       titleLine1: "एक सुरक्षित समाज का निर्माण,",
//       titleLine2: "एक बार में एक जागरूकता सत्र",
//       items: [
//         {
//           title: "कॉर्पोरेट अपराध जागरूकता",
//           subtitle: "व्यावसायिक टीमों के लिए",
//           points: ["फिनटेक और कॉर्पोरेट धोखाधड़ी का पता लगाना", "डिजिटल शोषण और साइबर दुर्व्यवहार", "आंतरिक खतरे और कर्मचारी जोखिम", "कानूनी और नियामक जागरूकता"],
//         },
//         {
//           title: "स्कूल अपराध जागरूकता",
//           subtitle: "शैक्षणिक संस्थानों के लिए",
//           points: ["साइबर सुरक्षा और डिजिटल जागरूकता", "छात्र सुरक्षा और अपराध रोकथाम", "POSH और सुरक्षित स्कूल वातावरण", "मानसिक स्वास्थ्य और सामाजिक जिम्मेदारी"],
//         },
//       ],
//     },
//     contact: {
//       eyebrow: "आइए मिलकर काम करें",
//       titleLine1: "चाहे आपको डिजिटल फॉरेंसिक्स,",
//       titleLine2: "धोखाधड़ी जांच, या दस्तावेज़ सत्यापन की ज़रूरत हो —",
//       desc: "जब सबसे ज़्यादा मायने रखता हो, तब हमारी टीम सटीक, न्यायालय-मान्य समाधान देने के लिए तैयार है।",
//       ctaTitle: "जो महत्वपूर्ण है उसकी रक्षा करने के लिए तैयार हैं?",
//       contactUsNow: "अभी संपर्क करें",
//       visitWebsite: "वेबसाइट देखें",
//     },
//     footer: {
//       tagline: "पहचानें। सुरक्षित करें। विकसित हों।",
//       rights: "सर्वाधिकार सुरक्षित।",
//     },
//   },
// };

// export const LANGS = ["en", "hi"];
















































// ── translations.js ──────────────────────────────────────────────────────────
// All homepage copy in English (en) and Hindi (hi).
// Add new keys here whenever you add new visible text to HomePage.jsx.

export const translations = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      clients: "Clients",
      programs: "Programs",
      contact: "Contact",
      getInTouch: "Get in Touch",
    },
    hero: {
      eyebrow: "NyayShield",
      title: "What do you need help with right now?",
      subtitle: "Pick one — each takes you straight to the right place, no digging through menus.",
      actions: [
        { title: "Report a Crime", sub: "File details, get routed instantly" },
        { title: "Book a Lawyer", sub: "From Day 1, or later in the case" },
        { title: "Check Case Status", sub: "Track progress & next hearing date" },
        { title: "Book a Forensic Expert", sub: "Secure evidence before it's gone" },
        { title: "Legal / Corporate Report Drafting", sub: "Notices, contracts & compliance docs" },
      ],
    },
    about: {
      eyebrow: "About Forfra",
      titleLine1: "At the Intersection of Technology,",
      titleLine2: "Investigation & Intelligence",
      p1: "Forfra Solutions is a multidisciplinary professional firm delivering high-impact solutions to corporates, law enforcement agencies, and academic institutions. We combine forensic science with cutting-edge technology to uncover the truth — and protect what matters most.",
      p2: "Certified under ISO 9001:2015 for Quality Management and ISO 27001:2022 for Information Security, our approach is built on precision, compliance, and uncompromising integrity.",
      stats: [
        { val: "2", label: "ISO Certifications" },
        { val: "10+", label: "Service Verticals" },
        { val: "6+", label: "Client Categories" },
      ],
    },
    services: {
      eyebrow: "Our Services",
      title: "Every Threat. One Partner.",
      learnMore: "Learn More →",
      items: [
        {
          id: "01", slug: "data-security", icon: "🔐",
          title: "Data Security", tag: "Royal Vault Approach",
          desc: "Air-gapped systems, strong encryption, and strict access controls keep your data completely isolated, private, and tamper-proof.",
        },
        {
          id: "02", slug: "forensic-audit", icon: "🔍",
          title: "Forensic Audit", tag: "Beyond Traditional Audits",
          desc: "Uncover fraud, financial irregularities, and hidden risks with investigative expertise and advanced analytics. Court-admissible reports guaranteed.",
        },
        {
          id: "03", slug: "digital-forensics", icon: "💻",
          title: "Digital Forensics", tag: "End-to-End Investigation",
          desc: "Data imaging, extraction, and in-depth analysis from mobile devices, computers, and networks with full chain of custody.",
        },
        {
          id: "04", slug: "fraud-investigation", icon: "📊",
          title: "Financial & Fraud Investigation", tag: "Follow the Money",
          desc: "Uncover financial irregularities, trace complex transactions, and track fraud across banking systems — including cryptocurrency tracing.",
        },
        {
          id: "05", slug: "investigations", icon: "🕵️",
          title: "Investigations & Intelligence", tag: "OSINT & Due Diligence",
          desc: "Background verification, corporate & private investigations, OSINT, litigation support, and business risk assessment.",
        },
        {
          id: "06", slug: "document-examination", icon: "📄",
          title: "Document Examination", tag: "Verify. Authenticate. Protect.",
          desc: "Signatures, handwriting, ink, paper, and digital metadata — we detect forgery, alterations, or tampering using scientific methods.",
        },
        {
          id: "07", slug: "legal-consultation", icon: "⚖️",
          title: "Legal Consultations", tag: "Forensic-Backed Legal Strategy",
          desc: "Bridge the gap between technical evidence and legal strategy. Expert witness services and court-admissible forensic report preparation.",
        },
      ],
    },
    capabilities: {
      eyebrow: "Our Approach",
      title: "How We Work",
      items: [
        {
          phase: "Detect",
          title: "Uncover What's Hidden",
          body: "Our certified experts analyze financial records, digital footprints, and communication trails to surface fraud, irregularities, and concealed evidence before it becomes a liability.",
          bullets: [
            "Transaction trail analysis",
            "Data manipulation detection",
            "Benami & shell entity investigation",
            "Email & communication forensics",
          ],
        },
        {
          phase: "Protect",
          title: "Guard What Matters Most",
          body: "We treat your data as a high-value asset — not a file. Our 'royal vault' approach combines air-gapped environments, multi-layer authentication, and full chain of custody compliance.",
          bullets: [
            "Secure offline infrastructure",
            "Data protection & encryption",
            "Controlled data access (role-based)",
            "DPDP Act 2023 alignment",
          ],
        },
        {
          phase: "Evolve",
          title: "Stay Ahead of Tomorrow's Threats",
          body: "From corporate crime awareness programs to school digital safety workshops, we build the human layer of security — preparing organisations and institutions for an increasingly digital world.",
          bullets: [
            "Corporate crime awareness programs",
            "School cyber safety education",
            "Legal & regulatory advisory",
            "Career development in forensics",
          ],
        },
      ],
    },
    differentiator: {
      eyebrow: "What Makes Us Different",
      titleLine1: "Security Is Table Stakes.",
      titleLine2: "We Deliver Integrity.",
      points: [
        { icon: "🔒", title: "Security + Accountability", desc: "We don't just isolate data — we create controlled environments with strict access protocols and full chain of custody." },
        { icon: "⚖️", title: "Legally Admissible", desc: "Every report we produce is court-admissible, traceable, and handled with complete integrity." },
        { icon: "📋", title: "Section 63(4)(c) Compliant", desc: "Proper handling, storage, and presentation of digital evidence ensures validity in Indian courts." },
        { icon: "🇮🇳", title: "DPDP Act 2023 Aligned", desc: "Fully aligned with India's Digital Personal Data Protection Act — data minimisation, purpose limitation, and lawful processing." },
      ],
    },
    clients: {
      eyebrow: "Our Clients",
      title: "Trusted by Those Who Protect India's Institutions",
      names: [
        "Income Tax Department",
        "GST Authorities",
        "Enforcement Directorate",
        "CBI",
        "SEBI",
        "SFIO",
        "State Police & Cyber Crime Cells",
        "Law Firms & Courts",
        "Public & Private Sector Banks",
        "NBFCs & FinTechs",
        "Large Corporates & MNCs",
        "CA Firms & Auditors",
      ],
      categories: [
        { label: "Government & Regulatory Agencies", icon: "🏛️" },
        { label: "Law Enforcement & Legal Bodies", icon: "🚔" },
        { label: "Banking & Financial Institutions", icon: "🏦" },
        { label: "Corporate & Business Enterprises", icon: "🏢" },
        { label: "Professional & Advisory Firms", icon: "📂" },
      ],
    },
    programs: {
      eyebrow: "Awareness Programs",
      titleLine1: "Building a Safer Society,",
      titleLine2: "One Awareness Session at a Time",
      items: [
        {
          title: "Corporate Crime Awareness",
          subtitle: "For Business Teams",
          points: ["FinTech & corporate fraud detection", "Digital exploitation & cyber abuse", "Internal threats & employee risks", "Legal & regulatory awareness"],
        },
        {
          title: "School Crime Awareness",
          subtitle: "For Educational Institutions",
          points: ["Cyber safety & digital awareness", "Student safety & crime prevention", "POSH & safe school environment", "Mental health & social responsibility"],
        },
      ],
    },
    contact: {
      eyebrow: "Let's Work Together",
      titleLine1: "Whether You Need Digital Forensics,",
      titleLine2: "Fraud Investigation, or Document Validation —",
      desc: "Our team is ready to deliver accurate, court-admissible solutions when it matters most.",
      ctaTitle: "Ready to protect what matters?",
      contactUsNow: "Contact Us Now",
      visitWebsite: "Visit Website",
    },
    footer: {
      tagline: "Detect. Protect. Evolve.",
      rights: "All rights reserved.",
    },
  },

  hi: {
    nav: {
      about: "परिचय",
      services: "सेवाएँ",
      clients: "ग्राहक",
      programs: "कार्यक्रम",
      contact: "संपर्क",
      getInTouch: "संपर्क करें",
    },
    hero: {
      eyebrow: "न्यायशील्ड",
      title: "अभी आपको किस चीज़ में मदद चाहिए?",
      subtitle: "एक विकल्प चुनें — हर एक आपको सीधे सही जगह ले जाएगा, मेन्यू में खोजने की ज़रूरत नहीं।",
      actions: [
        { title: "अपराध की रिपोर्ट करें", sub: "विवरण दर्ज करें, तुरंत सही जगह भेजा जाएगा" },
        { title: "वकील बुक करें", sub: "पहले दिन से, या केस में बाद में भी" },
        { title: "केस की स्थिति जांचें", sub: "प्रगति और अगली सुनवाई की तारीख देखें" },
        { title: "फॉरेंसिक विशेषज्ञ बुक करें", sub: "सबूत खोने से पहले सुरक्षित करें" },
        { title: "कानूनी / कॉर्पोरेट रिपोर्ट ड्राफ्टिंग", sub: "नोटिस, अनुबंध और अनुपालन दस्तावेज़" },
      ],
    },
    about: {
      eyebrow: "फॉर्फ्रा के बारे में",
      titleLine1: "टेक्नोलॉजी, इन्वेस्टिगेशन और",
      titleLine2: "इंटेलिजेंस के संगम पर",
      p1: "फॉर्फ्रा सॉल्यूशंस एक बहु-विषयक पेशेवर फर्म है जो कॉर्पोरेट्स, कानून प्रवर्तन एजेंसियों और शैक्षणिक संस्थानों को उच्च-प्रभाव समाधान प्रदान करती है। हम सच्चाई को उजागर करने और सबसे महत्वपूर्ण चीज़ों की रक्षा करने के लिए फॉरेंसिक विज्ञान को अत्याधुनिक तकनीक के साथ जोड़ते हैं।",
      p2: "गुणवत्ता प्रबंधन के लिए ISO 9001:2015 और सूचना सुरक्षा के लिए ISO 27001:2022 के तहत प्रमाणित, हमारा दृष्टिकोण सटीकता, अनुपालन और अडिग ईमानदारी पर आधारित है।",
      stats: [
        { val: "2", label: "ISO प्रमाणपत्र" },
        { val: "10+", label: "सेवा क्षेत्र" },
        { val: "6+", label: "ग्राहक श्रेणियाँ" },
      ],
    },
    services: {
      eyebrow: "हमारी सेवाएँ",
      title: "हर खतरा। एक साझेदार।",
      learnMore: "और जानें →",
      items: [
        {
          id: "01", slug: "data-security", icon: "🔐",
          title: "डेटा सुरक्षा", tag: "रॉयल वॉल्ट दृष्टिकोण",
          desc: "एयर-गैप्ड सिस्टम, मज़बूत एन्क्रिप्शन और सख्त एक्सेस नियंत्रण आपके डेटा को पूरी तरह से अलग, निजी और छेड़छाड़-रोधी बनाए रखते हैं।",
        },
        {
          id: "02", slug: "forensic-audit", icon: "🔍",
          title: "फॉरेंसिक ऑडिट", tag: "पारंपरिक ऑडिट से आगे",
          desc: "जांच विशेषज्ञता और उन्नत विश्लेषण के साथ धोखाधड़ी, वित्तीय अनियमितताओं और छिपे जोखिमों को उजागर करें। न्यायालय-मान्य रिपोर्ट की गारंटी।",
        },
        {
          id: "03", slug: "digital-forensics", icon: "💻",
          title: "डिजिटल फॉरेंसिक्स", tag: "एंड-टू-एंड जांच",
          desc: "मोबाइल डिवाइस, कंप्यूटर और नेटवर्क से डेटा इमेजिंग, निष्कर्षण और गहन विश्लेषण, पूर्ण चेन ऑफ कस्टडी के साथ।",
        },
        {
          id: "04", slug: "fraud-investigation", icon: "📊",
          title: "वित्तीय और धोखाधड़ी जांच", tag: "पैसे का पीछा करें",
          desc: "वित्तीय अनियमितताओं को उजागर करें, जटिल लेन-देन का पता लगाएं, और बैंकिंग सिस्टम में धोखाधड़ी को ट्रैक करें — क्रिप्टोकरेंसी ट्रेसिंग सहित।",
        },
        {
          id: "05", slug: "investigations", icon: "🕵️",
          title: "जांच और इंटेलिजेंस", tag: "OSINT और ड्यू डिलिजेंस",
          desc: "पृष्ठभूमि सत्यापन, कॉर्पोरेट और निजी जांच, OSINT, मुकदमेबाज़ी सहायता, और व्यावसायिक जोखिम आकलन।",
        },
        {
          id: "06", slug: "document-examination", icon: "📄",
          title: "दस्तावेज़ जांच", tag: "सत्यापित करें। प्रमाणित करें। सुरक्षित करें।",
          desc: "हस्ताक्षर, हस्तलेख, स्याही, कागज़ और डिजिटल मेटाडेटा — हम वैज्ञानिक तरीकों का उपयोग करके जालसाज़ी, बदलाव या छेड़छाड़ का पता लगाते हैं।",
        },
        {
          id: "07", slug: "legal-consultation", icon: "⚖️",
          title: "कानूनी परामर्श", tag: "फॉरेंसिक-समर्थित कानूनी रणनीति",
          desc: "तकनीकी सबूत और कानूनी रणनीति के बीच की खाई को पाटें। विशेषज्ञ गवाह सेवाएँ और न्यायालय-मान्य फॉरेंसिक रिपोर्ट तैयार करना।",
        },
      ],
    },
    capabilities: {
      eyebrow: "हमारा दृष्टिकोण",
      title: "हम कैसे काम करते हैं",
      items: [
        {
          phase: "पहचानें",
          title: "जो छिपा है उसे उजागर करें",
          body: "हमारे प्रमाणित विशेषज्ञ वित्तीय रिकॉर्ड, डिजिटल फुटप्रिंट और संचार ट्रेल्स का विश्लेषण करते हैं ताकि धोखाधड़ी, अनियमितताएँ और छिपे सबूत, देनदारी बनने से पहले ही सामने आ जाएँ।",
          bullets: [
            "लेन-देन ट्रेल विश्लेषण",
            "डेटा हेरफेर का पता लगाना",
            "बेनामी और शेल इकाई जांच",
            "ईमेल और संचार फॉरेंसिक्स",
          ],
        },
        {
          phase: "सुरक्षा",
          title: "जो सबसे महत्वपूर्ण है उसकी रक्षा करें",
          body: "हम आपके डेटा को एक फाइल नहीं, बल्कि एक उच्च-मूल्य संपत्ति के रूप में मानते हैं। हमारा 'रॉयल वॉल्ट' दृष्टिकोण एयर-गैप्ड वातावरण, बहु-स्तरीय प्रमाणीकरण और पूर्ण चेन ऑफ कस्टडी अनुपालन को जोड़ता है।",
          bullets: [
            "सुरक्षित ऑफ़लाइन इंफ्रास्ट्रक्चर",
            "डेटा सुरक्षा और एन्क्रिप्शन",
            "नियंत्रित डेटा एक्सेस (भूमिका-आधारित)",
            "DPDP अधिनियम 2023 अनुपालन",
          ],
        },
        {
          phase: "विकास",
          title: "आने वाले खतरों से एक कदम आगे रहें",
          body: "कॉर्पोरेट अपराध जागरूकता कार्यक्रमों से लेकर स्कूल डिजिटल सुरक्षा वर्कशॉप तक, हम सुरक्षा की मानवीय परत का निर्माण करते हैं — संस्थानों को एक बढ़ते डिजिटल दुनिया के लिए तैयार करते हुए।",
          bullets: [
            "कॉर्पोरेट अपराध जागरूकता कार्यक्रम",
            "स्कूल साइबर सुरक्षा शिक्षा",
            "कानूनी और नियामक सलाह",
            "फॉरेंसिक्स में करियर विकास",
          ],
        },
      ],
    },
    differentiator: {
      eyebrow: "हम अलग क्यों हैं",
      titleLine1: "सुरक्षा तो बस शुरुआत है।",
      titleLine2: "हम ईमानदारी प्रदान करते हैं।",
      points: [
        { icon: "🔒", title: "सुरक्षा + जवाबदेही", desc: "हम केवल डेटा को अलग नहीं करते — हम सख्त एक्सेस प्रोटोकॉल और पूर्ण चेन ऑफ कस्टडी के साथ नियंत्रित वातावरण बनाते हैं।" },
        { icon: "⚖️", title: "कानूनी रूप से मान्य", desc: "हमारी हर रिपोर्ट न्यायालय में मान्य, ट्रेस करने योग्य, और पूर्ण ईमानदारी के साथ तैयार की जाती है।" },
        { icon: "📋", title: "धारा 63(4)(c) अनुपालन", desc: "डिजिटल साक्ष्य का उचित प्रबंधन, भंडारण और प्रस्तुति भारतीय अदालतों में इसकी वैधता सुनिश्चित करती है।" },
        { icon: "🇮🇳", title: "DPDP अधिनियम 2023 के अनुरूप", desc: "भारत के डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम के पूर्णतः अनुरूप — डेटा न्यूनीकरण, उद्देश्य सीमा और वैध प्रसंस्करण।" },
      ],
    },
    clients: {
      eyebrow: "हमारे ग्राहक",
      title: "भारत के संस्थानों की रक्षा करने वालों का भरोसा",
      names: [
        "आयकर विभाग",
        "जीएसटी प्राधिकरण",
        "प्रवर्तन निदेशालय",
        "सीबीआई",
        "सेबी",
        "एसएफआईओ",
        "राज्य पुलिस और साइबर क्राइम सेल",
        "लॉ फर्म्स और अदालतें",
        "सार्वजनिक और निजी क्षेत्र के बैंक",
        "एनबीएफसी और फिनटेक",
        "बड़े कॉर्पोरेट्स और एमएनसी",
        "सीए फर्म्स और ऑडिटर्स",
      ],
      categories: [
        { label: "सरकारी और नियामक एजेंसियाँ", icon: "🏛️" },
        { label: "कानून प्रवर्तन और कानूनी निकाय", icon: "🚔" },
        { label: "बैंकिंग और वित्तीय संस्थान", icon: "🏦" },
        { label: "कॉर्पोरेट और व्यावसायिक उद्यम", icon: "🏢" },
        { label: "पेशेवर और सलाहकार फर्म्स", icon: "📂" },
      ],
    },
    programs: {
      eyebrow: "जागरूकता कार्यक्रम",
      titleLine1: "एक सुरक्षित समाज का निर्माण,",
      titleLine2: "एक बार में एक जागरूकता सत्र",
      items: [
        {
          title: "कॉर्पोरेट अपराध जागरूकता",
          subtitle: "व्यावसायिक टीमों के लिए",
          points: ["फिनटेक और कॉर्पोरेट धोखाधड़ी का पता लगाना", "डिजिटल शोषण और साइबर दुर्व्यवहार", "आंतरिक खतरे और कर्मचारी जोखिम", "कानूनी और नियामक जागरूकता"],
        },
        {
          title: "स्कूल अपराध जागरूकता",
          subtitle: "शैक्षणिक संस्थानों के लिए",
          points: ["साइबर सुरक्षा और डिजिटल जागरूकता", "छात्र सुरक्षा और अपराध रोकथाम", "POSH और सुरक्षित स्कूल वातावरण", "मानसिक स्वास्थ्य और सामाजिक जिम्मेदारी"],
        },
      ],
    },
    contact: {
      eyebrow: "आइए मिलकर काम करें",
      titleLine1: "चाहे आपको डिजिटल फॉरेंसिक्स,",
      titleLine2: "धोखाधड़ी जांच, या दस्तावेज़ सत्यापन की ज़रूरत हो —",
      desc: "जब सबसे ज़्यादा मायने रखता हो, तब हमारी टीम सटीक, न्यायालय-मान्य समाधान देने के लिए तैयार है।",
      ctaTitle: "जो महत्वपूर्ण है उसकी रक्षा करने के लिए तैयार हैं?",
      contactUsNow: "अभी संपर्क करें",
      visitWebsite: "वेबसाइट देखें",
    },
    footer: {
      tagline: "पहचानें। सुरक्षित करें। विकसित हों।",
      rights: "सर्वाधिकार सुरक्षित।",
    },
  },
};

export const LANGS = ["en", "hi"];