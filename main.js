const LINKEDIN_URL = 'https://www.linkedin.com/in/tanselkilic/';
const OBFUSCATED_EMAIL = 'dGFuc2Vsa2lsaWNAZ21haWwuY29t';
const EMAIL = atob(OBFUSCATED_EMAIL);
const SITE_URL = 'https://tanselkilic.com';

const messages = {
  tr: {
    "nav": {
      "about": "Hakkımda",
      "experience": "Deneyim",
      "expertise": "Uzmanlık",
      "education": "Eğitim",
      "responsible_ai": "Sorumlu AI",
      "contact": "İletişim"
    },
    "hero": {
      "name": "Tansel KILIÇ",
      "headline": "AI, fintech ve platform ekipleri için teknoloji liderliği.",
      "subtitle": "Fintech, e-ticaret ve dijital ekosistemlerde 20+ yıldır mühendislik ekipleri, cloud-native platformlar ve üretime alınan AI girişimleri yönetiyorum.",
      "cta_primary": "İletişime geç",
      "cta_secondary": "Deneyimi gör",
      "title_line": "Teknoloji Yöneticisi",
      "card_location": "İstanbul, Türkiye · Hibrit",
      "card_langs": "Türkçe · İngilizce",
      "proof_1": "Fintech, e-ticaret ve dijital ekosistemlerde 20+ yıl",
      "proof_2": "50+ kişilik dağıtık mühendislik ekipleri yönetti",
      "proof_3": "AI ve LLM girişimlerini üretim sistemleri olarak hayata geçirdi",
      "focus_label": "Odak alanı",
      "focus_title": "Stratejiden uygulamaya",
      "focus_1": "AI dönüşümü",
      "focus_2": "Fintech platformları",
      "focus_3": "Mühendislik ölçeği",
      "card_experience": "Yıl teknoloji liderliği",
      "card_engineers": "Dağıtık ekiplerde yönetilen mühendis",
      "linkedin_label": "LinkedIn",
      "linkedin_aria_label": "LinkedIn profili",
      "email_label": "E-posta",
      "email_aria_label": "E-posta adresi"
    },
    "about": {
      "label": "Hakkımda",
      "title": "Stratejik Teknoloji ve Mühendislik Yönetimi",
      "subtitle": "İş hedeflerini mühendislik ölçeğiyle birleştiren, yapay zekâ çözümlerini deneysel aşamadan üretim sistemlerine taşıyan liderlik yaklaşımı.",
      "deck_label": "Yönetici profili",
      "deck_title": "Stratejiyi çalışan sistemlere dönüştürmek.",
      "deck_desc": "Odak noktam, iş ve teknoloji tarafını aynı hedefte buluşturmak; doğru kullanım alanlarını tanımlayıp bunları üretime taşımak.",
      "p1": "20+ yıldır fintech, e-ticaret ve dijital ekosistemlerde büyük ölçekli platformlar ve mühendislik organizasyonları yönetiyorum. 50+'lik dağıtık ekiplerle, milyonlarca kullanıcıyı destekleyen cloud-native mikroservis mimarileri kurdum.",
      "p2": "Son yıllarda AI ve LLM girişimlerini deney değil, karar almayı güçlendiren ve operasyonu hızlandıran üretim sistemleri olarak hayata geçirdim.",
      "p3": "İş ve yönetim paydaşlarıyla ölçülebilir etki yaratacak alanları belirliyor, kullanım senaryosu keşfinden devreye almaya kadar süreci yönetiyorum.",
      "p4": "Teknik derinliği, sonuç odaklı ve pragmatik bir dönüşüm yaklaşımıyla birleştiriyorum.",
      "principle_1": "İş öncelikli AI ve platform kararları",
      "principle_2": "Dağıtık ekiplerde mühendislik liderliği",
      "principle_3": "Ölçek için tasarlanmış cloud-native sistemler",
      "principle_4": "Keşiften devreye almaya pragmatik teslimat"
    },
    "impact": {
      "label": "Etki",
      "stat1_value": "20+",
      "stat1_label": "Yıl deneyim",
      "stat1_sub": "2003'ten bu yana",
      "stat2_value": "50+",
      "stat2_label": "Mühendis yönetimi",
      "stat2_sub": "Dağıtık, çok disiplinli ekipler",
      "stat3_value": "10+",
      "stat3_label": "Şirkette liderlik",
      "stat3_sub": "CTO · Direktör · Danışman"
    },
    "responsibleai": {
      "label": "Sorumlu AI",
      "title": "Sorumlu ve Güvenilir Yapay Zekâ Yaklaşımı",
      "subtitle": "Üretim seviyesindeki yapay zekâ uygulamalarında doğruluk, veri gizliliği ve insan denetimini esas alan mimari prensipler.",
      "operating_label": "Çalışma prensipleri",
      "project1_tag": "Ozan · 2024–2025",
      "project1_title": "Belge Zekası Platformu",
      "project1_desc": "Yüksek hacimli finansal belgeleri analiz eden yerel LLM tabanlı sistem. On-premise mimariyle veri gizliliği korundu, manuel inceleme süresi ve operasyonel yük azaltıldı.",
      "project2_tag": "Ozan · 2024–2025",
      "project2_title": "FraudInsight — AI Tabanlı Dolandırıcılık Tespiti",
      "project2_desc": "İşlem verileri ve metinsel sinyalleri NLP ve LLM ile analiz eden fraud tespit sistemi. Kural tabanlı yaklaşımın ötesinde şüpheli desenleri gerçek zamanlı tespit eder; fintech, e-ticaret ve telekom için ölçeklenebilir yapıdadır.",
      "p1_title": "Üretim öncelikli",
      "p1_desc": "Doğrulanmış iş etkisi olmadan devreye alma yapılmaz. Her sistem gerçek operasyon yükü için tasarlanır.",
      "p2_title": "İnsan denetimi",
      "p2_desc": "Kritik kararlarda insan denetimi varsayılandır. Otomasyon, güven arttıkça kademeli genişler.",
      "p3_title": "Gizlilik tasarımı",
      "p3_desc": "Finansal ve hassas veriler için on-premise mimari kurulur. Veri sınır dışına çıkmaz; uyumluluk mimaride çözülür."
    },
    "education": {
      "label": "Eğitim",
      "title": "Akademik Geçmiş & Sürekli Gelişim",
      "subtitle": "İş analitiği, yönetim bilişim sistemleri ve yazılım temellerini birleştiren akademik altyapı.",
      "edu1_title": "İstanbul Teknik Üniversitesi",
      "edu1_sub": "Büyük Veri & İş Analitiği, YL",
      "edu1_date": "Ağu 2024 — Devam ediyor",
      "edu2_title": "Ahmet Yesevi Üniversitesi",
      "edu2_sub": "Yönetim Bilişim Sistemleri",
      "edu2_date": "2005 — 2009",
      "edu3_title": "Ondokuz Mayıs Üniversitesi",
      "edu3_sub": "Bilgisayar Programcılığı, Ön Lisans",
      "edu3_date": "1999 — 2001"
    },
    "experience": {
      "label": "Kariyer",
      "title": "Kariyer Yolculuğu & Liderlik Kronolojisi",
      "subtitle": "Fintech, e-ticaret ve platform odaklı liderlik rolleri; unvanlardan ziyade yaratılan etki ve üstlenilen operasyonel sorumluluklar.",
      "earlier": "Önceki roller"
    },
    "expertise": {
      "label": "Uzmanlık",
      "title": "Temel Uzmanlık Alanları",
      "subtitle": "Fintech altyapıları, bulut tabanlı mikroservisler ve yapay zekâ entegrasyonlarına yön veren teknik ve yönetsel yetkinlikler.",
      "ai_title": "AI & LLM Dönüşümü",
      "ai_desc": "Belge zekası, dolandırıcılık tespiti ve karar otomasyonu için üretim kalitesinde LLM sistemleri.",
      "fintech_title": "Fintech & Ödeme Sistemleri",
      "fintech_desc": "POS, Sanal POS, dijital cüzdan, AML ve finansal uyumluluk tarafında güçlü uygulama deneyimi.",
      "cloud_title": "Cloud-Native Mimari",
      "cloud_desc": "Azure ve GCP üzerinde 100+ servislik, yüksek trafikli mikroservis mimarileri.",
      "security_title": "Güvenlik & Kriptografi",
      "security_desc": "HSM entegrasyonları, mTLS, PKI ve kurumsal güvenlik mimarisi deneyimi.",
      "leadership_title": "Mühendislik Liderliği",
      "leadership_desc": "3x ekip büyütme, 50+ mühendis yönetimi ve ölçekli Agile operasyonu.",
      "digital_title": "Dijital Dönüşüm",
      "digital_desc": "Eski sistemleri modern ve ölçeklenebilir dijital platformlara dönüştürme deneyimi.",
      "group_core": "Temel Alanlar",
      "group_systems": "Sistemler",
      "group_leadership": "Liderlik"
    },
    "contact": {
      "label": "İletişim",
      "title": "İletişim & İş Birliği",
      "desc": "AI dönüşümü, fintech platformları veya yüksek ölçekli organizasyonel yapılanmalar için doğrudan temas kurabilirsiniz.",
      "linkedin": "LinkedIn",
      "linkedin_sub": "tanselkilic",
      "email": "E-posta",
      "email_sub": "Mesaj gönder",
      "location": "İstanbul, Türkiye",
      "location_sub": "Uzaktan çalışmaya açık",
      "signal_1_title": "AI",
      "signal_1_sub": "Dönüşüm",
      "signal_2_title": "Fintech",
      "signal_2_sub": "Platformlar",
      "avail_reply": "Yanıt süresi: 24 saat içinde"
    },
    "ui": {
      "home_aria_label": "Tansel KILIÇ anasayfa",
      "language_group_label": "Dil",
      "switch_language_to_en": "Dili İngilizce yap",
      "switch_language_to_tr": "Dili Türkçe yap",
      "mobile_menu_toggle": "Menüyü aç veya kapat",
      "linkedin_profile_aria_label": "LinkedIn profili",
      "email_address_aria_label": "E-posta adresi"
    },
    "footer": "© 2026 Tansel KILIÇ · Teknoloji Lideri & AI Yöneticisi",
    "footer_scroll_top": "Yukarı Çık"
  },
  en: {
    "nav": {
      "about": "About",
      "experience": "Experience",
      "expertise": "Expertise",
      "education": "Education",
      "responsible_ai": "Responsible AI",
      "contact": "Contact"
    },
    "hero": {
      "name": "Tansel KILIÇ",
      "headline": "Technology leadership for AI, fintech, and platform teams.",
      "subtitle": "20+ years leading engineering teams, cloud-native platforms, and AI initiatives in production across fintech, e-commerce, and digital ecosystems.",
      "cta_primary": "Get in touch",
      "cta_secondary": "View experience",
      "title_line": "Technology Executive",
      "card_location": "Istanbul, Turkey · Hybrid",
      "card_langs": "Turkish · English",
      "proof_1": "20+ years across fintech, e-commerce and digital ecosystems",
      "proof_2": "Led distributed engineering teams of 50+ members",
      "proof_3": "AI and LLM initiatives delivered as production systems",
      "focus_label": "Operating focus",
      "focus_title": "From strategy to execution",
      "focus_1": "AI transformation",
      "focus_2": "Fintech platforms",
      "focus_3": "Engineering scale",
      "card_experience": "Years of technology leadership",
      "card_engineers": "Engineers led across distributed teams",
      "linkedin_label": "LinkedIn",
      "linkedin_aria_label": "LinkedIn profile",
      "email_label": "Email",
      "email_aria_label": "Email address"
    },
    "about": {
      "label": "About",
      "title": "Strategic Technology & Engineering Leadership",
      "subtitle": "Bridging business vision with engineering scale to transform AI initiatives into robust production systems.",
      "deck_label": "Executive profile",
      "deck_title": "Turning strategy into working systems.",
      "deck_desc": "My focus is to align business and technology, define the right use cases, and move them into production with the right teams.",
      "p1": "For 20+ years, I have led large-scale platforms and engineering organizations across fintech, e-commerce, and digital ecosystems. I have built and led distributed teams of 50+ engineers, delivering cloud-native microservices that support millions of users.",
      "p2": "In recent years, I have led AI and LLM initiatives not as experiments, but as production systems that improve decisions and streamline operations.",
      "p3": "I work with business and executive stakeholders to identify high-impact opportunities and lead the full path from use case discovery to rollout.",
      "p4": "I combine technical depth with a pragmatic, results-focused approach to digital transformation.",
      "principle_1": "Business-first AI and platform decisions",
      "principle_2": "Engineering leadership across distributed teams",
      "principle_3": "Cloud-native systems designed for scale",
      "principle_4": "Pragmatic delivery from discovery to rollout"
    },
    "impact": {
      "label": "Impact",
      "stat1_value": "20+",
      "stat1_label": "Years of experience",
      "stat1_sub": "Since 2003",
      "stat2_value": "50+",
      "stat2_label": "Engineers led",
      "stat2_sub": "Distributed, cross-functional teams",
      "stat3_value": "10+",
      "stat3_label": "Companies led",
      "stat3_sub": "CTO · Director · Advisor"
    },
    "responsibleai": {
      "label": "Responsible AI",
      "title": "Responsible & Production-Grade AI Framework",
      "subtitle": "Ensuring precision, compliance, data privacy, and human-in-the-loop oversight in enterprise AI systems.",
      "operating_label": "Operating principles",
      "project1_tag": "Ozan · 2024–2025",
      "project1_title": "Document Intelligence Platform",
      "project1_desc": "Local LLM-based system for high-volume financial documents. On-premise architecture protected data privacy while reducing manual review time and operational overhead.",
      "project2_tag": "Ozan · 2024–2025",
      "project2_title": "FraudInsight — AI-Powered Fraud Detection",
      "project2_desc": "Fraud detection system using NLP and LLM to analyze transaction data and text signals. It identifies suspicious patterns in real time and scales across fintech, e-commerce, and telecom use cases.",
      "p1_title": "Production-first",
      "p1_desc": "No deployment without validated business impact. Every system is designed for real operational load.",
      "p2_title": "Human oversight",
      "p2_desc": "Human oversight is the default for critical decisions. Automation expands gradually as trust increases.",
      "p3_title": "Privacy by design",
      "p3_desc": "On-premise architecture is used for financial and sensitive data. Data stays within the boundary, and compliance is handled in the architecture."
    },
    "education": {
      "label": "Education",
      "title": "Academic Background & Education",
      "subtitle": "An academic foundation combining big data analytics, information systems, and core computer science.",
      "edu1_title": "Istanbul Technical University",
      "edu1_sub": "MSc, Big Data & Business Analytics",
      "edu1_date": "Aug 2024 — Ongoing",
      "edu2_title": "Ahmet Yesevi University",
      "edu2_sub": "Management Information Systems",
      "edu2_date": "2005 — 2009",
      "edu3_title": "Ondokuz Mayıs University",
      "edu3_sub": "Computer Programming, Associate's Degree",
      "edu3_date": "1999 — 2001"
    },
    "experience": {
      "label": "Career",
      "title": "Career Journey & Leadership Timeline",
      "subtitle": "Two decades of leadership across fintech, platforms, and e-commerce, defined by operational scale and measurable impact.",
      "earlier": "Earlier roles"
    },
    "expertise": {
      "label": "Expertise",
      "title": "Core Expertise & Capabilities",
      "subtitle": "Strategic focus areas spanning AI integration, cloud-native platforms, regulated fintech ecosystems, and engineering management.",
      "ai_title": "AI & LLM Transformation",
      "ai_desc": "Production-grade LLM systems for document intelligence, fraud detection, and decision automation.",
      "fintech_title": "Fintech & Payment Systems",
      "fintech_desc": "Strong hands-on experience across POS, virtual POS, digital wallets, AML, and financial compliance.",
      "cloud_title": "Cloud-Native Architecture",
      "cloud_desc": "High-traffic microservice architectures on Azure and GCP, with 100+ services in operation.",
      "security_title": "Security & Cryptography",
      "security_desc": "Experience with HSM integrations, mTLS, PKI, and enterprise security architecture.",
      "leadership_title": "Engineering Leadership",
      "leadership_desc": "3x team growth, leadership of 50+ engineers, and Agile operations at scale.",
      "digital_title": "Digital Transformation",
      "digital_desc": "Experience modernizing legacy systems into scalable digital platforms.",
      "group_core": "Core",
      "group_systems": "Systems",
      "group_leadership": "Leadership"
    },
    "contact": {
      "label": "Contact",
      "title": "Let's Connect & Collaborate",
      "desc": "Reach out directly to discuss enterprise AI strategies, fintech architecture, or engineering organization design.",
      "linkedin": "LinkedIn",
      "linkedin_sub": "tanselkilic",
      "email": "Email",
      "email_sub": "Send a message",
      "location": "Istanbul, Turkey",
      "location_sub": "Open to remote",
      "signal_1_title": "AI",
      "signal_1_sub": "Transformation",
      "signal_2_title": "Fintech",
      "signal_2_sub": "Platforms",
      "avail_reply": "Typical response time: within 24 hours"
    },
    "ui": {
      "home_aria_label": "Tansel KILIÇ homepage",
      "language_group_label": "Language",
      "switch_language_to_en": "Switch language to English",
      "switch_language_to_tr": "Switch language to Turkish",
      "mobile_menu_toggle": "Open or close menu",
      "linkedin_profile_aria_label": "LinkedIn profile",
      "email_address_aria_label": "Email address"
    },
    "footer": "© 2026 Tansel KILIÇ · Technology Leader & AI Executive",
    "footer_scroll_top": "Back to top"
  }
};

const experiences = [
  {
    current: true,
    start_date: "2026-01-01",
    date_en: "Jan 2026 — Present",
    date_tr: "Oca 2026 — Devam ediyor",
    role_en: "AI & Digital Transformation Executive · Ex-CTO · Fractional CTO",
    role_tr: "AI & Dijital Dönüşüm Yöneticisi · Ex-CTO · Fractional CTO",
    company: "Self-Employed — İstanbul",
    desc_en: "Advising companies on AI adoption strategies with focus on practical implementation and measurable business impact. Designing AI-native workflows with strong accuracy standards and human oversight models. Delivering blockchain and digital asset custody projects with enterprise-grade security — HSM integrations (Thales, SafeNet), mTLS, and PKI.",
    desc_tr: "Şirketlere ölçülebilir iş etkisi odaklı AI benimseme stratejisi danışmanlığı. Güçlü doğruluk standartları ve insan denetim modelleriyle AI-native iş akışları tasarımı. Kurumsal güvenlikte blockchain ve dijital varlık saklama projeleri — HSM (Thales, SafeNet), mTLS ve PKI.",
    tags: ["AI Strategy", "LLM", "Blockchain", "HSM", "Fractional CTO", "Web3"],
    tags_tr: ["AI Stratejisi", "LLM", "Blockchain", "HSM", "Fractional CTO", "Web3"]
  },
  {
    date_en: "Dec 2024 — Dec 2025 · 1 year 1 month",
    date_tr: "Ara 2024 — Ara 2025 · 1 yıl 1 ay",
    role_en: "Chief Technology Officer",
    company: "Ozan — İstanbul (Fintech)",
    desc_en: "Directed end-to-end technology operations and strategy. Led multidisciplinary engineering teams across BE, FE, QA, DevOps and Infrastructure. Oversaw core payment products — Physical POS, Virtual POS (Gateway), and digital wallet. Built LLM-based Document Intelligence Platform for high-volume financial documents and FraudInsight — an AI-powered fraud detection system using NLP & LLM, designed for cross-domain scalability.",
    desc_tr: "Uçtan uca teknoloji operasyonları ve strateji yönetimi. BE, FE, QA, DevOps ekiplerini yönetti. POS, Sanal POS ve dijital cüzdan ürünlerini geliştirdi. Yüksek hacimli finansal belgeler için LLM tabanlı Belge Zekası Platformu ve çok alanlı kullanım için tasarlanmış AI destekli dolandırıcılık tespit sistemi FraudInsight (NLP & LLM) kurdu.",
    tags: ["Fintech", "LLM", "Fraud Detection", "Payment Systems", "AML", "Virtual POS"],
    tags_tr: ["Fintech", "LLM", "Dolandırıcılık Tespiti", "Ödeme Sistemleri", "AML", "Sanal POS"]
  },
  {
    date_en: "Mar 2024 — Sep 2024 · 7 months",
    date_tr: "Mar 2024 — Eyl 2024 · 7 ay",
    role_en: "Chief Technology Officer",
    company: "Saran Group — İstanbul",
    desc_en: "Led digital transformation across Saran Group's diverse portfolio: Tuttur.com (betting), Sonduzluk.com (TJK Betting), Ajansspor.com, SDS (Saran Digital Studios), RadyoSpor, and RadyoTrafik. Managed multi-team engineering, defined IT strategy across verticals, and oversaw third-party vendor relationships.",
    desc_tr: "Saran Group portföyünde dijital dönüşüm liderliği: Tuttur.com, Sonduzluk.com (TJK), Ajansspor.com, SDS, RadyoSpor, RadyoTrafik. Çok ekipli mühendislik yönetimi ve üçüncü taraf tedarikçi ilişkileri.",
    tags: ["Digital Transformation", "Media Tech", "Betting Systems", "Agile"],
    tags_tr: ["Dijital Dönüşüm", "Medya Teknolojisi", "Bahis Sistemleri", "Agile"]
  },
  {
    date_en: "Apr 2023 — Feb 2024 · 11 months",
    date_tr: "Nis 2023 — Şub 2024 · 11 ay",
    role_en: "Chief Technology Officer",
    company: "Huudle.io — Türkiye",
    desc_en: "Led development of Huudle, an innovative meeting platform focused on smooth user experience. Recruited and managed skilled engineering teams, shaped software and system architecture, and ensured security and compliance with data privacy standards.",
    desc_tr: "Kullanıcı deneyimi odaklı yenilikçi toplantı platformu Huudle'ın geliştirilmesini yönetti. Mühendis işe alımı, ekip yönetimi, sistem mimarisi ve veri gizliliği standartlarına uyum.",
    tags: ["Startup", "GCP", "System Architecture", "Product"],
    tags_tr: ["Startup", "GCP", "Sistem Mimarisi", "Ürün"]
  },
  {
    date_en: "Feb 2022 — Feb 2023 · 1 year 1 month · London, UK",
    date_tr: "Şub 2022 — Şub 2023 · 1 yıl 1 ay · Londra, İngiltere",
    role_en: "Director of Software Engineering",
    role_tr: "Yazılım Mühendisliği Direktörü",
    company: "Pisano — London",
    desc_en: "Responsible for IT roadmap, budget, and strategy. Managed the full engineering department — Development, DevOps, QA, Integration, PO, and BA teams. Expanded the engineering team 3x in one year. Developed partnerships with Microsoft, Salesforce, and Azure Marketplace. Oversaw delivery of multiple applications.",
    desc_tr: "IT yol haritası, bütçesi ve strateji sorumluluğu. Geliştirme, DevOps, QA, Entegrasyon, PO ve BA ekiplerini yönetti. Mühendislik ekibini 1 yılda 3 katına çıkardı. Microsoft, Salesforce ve Azure Marketplace ortaklıkları geliştirdi.",
    tags: ["Azure", "Salesforce", "Team Scaling", "WebServices"],
    tags_tr: ["Azure", "Salesforce", "Ekip Büyütme", "Web Servisleri"]
  },
  {
    date_en: "Jul 2021 — Feb 2022 · 8 months",
    date_tr: "Tem 2021 — Şub 2022 · 8 ay",
    role_en: "Director of Software Engineering",
    role_tr: "Yazılım Mühendisliği Direktörü",
    company: "Demirören Teknoloji / Azerloterya — İstanbul",
    desc_en: "Led Azerbaijan Sports Betting and Virtual Sports web platforms and mobile apps. Deployed 100+ microservices on Azure. Managed 30-35 person engineering teams with Scrum and Kanban. Oversaw Azure DevOps, cloud deployments, and third-party integrations.",
    desc_tr: "Azerbaycan Spor Bahis ve Sanal Spor platformları ve mobil uygulamaları. Azure üzerinde 100+ mikroservis. 30-35 kişilik mühendislik ekibi yönetimi (Scrum/Kanban). Azure DevOps ve üçüncü taraf entegrasyonlar.",
    tags: ["Azure", "Microservices", "DevOps", "Betting", "Mobile"],
    tags_tr: ["Azure", "Mikroservisler", "DevOps", "Bahis", "Mobil"]
  },
  {
    date_en: "Feb 2020 — Jul 2021 · 1 year 6 months",
    date_tr: "Şub 2020 — Tem 2021 · 1 yıl 6 ay",
    role_en: "E-commerce Senior Manager",
    role_tr: "E-Ticaret Kıdemli Yöneticisi",
    company: "Odeon Software & Technology / OTI Holding — İstanbul",
    desc_en: "Managed all web and e-commerce applications for OTI Holding — coral.ru, sunmar.ru, coraltravel.ua, royalflight.ru, otiumhotels.com, sevenseashotels.com and more. Led cross-functional teams of 30-35 members across engineering, DevOps, PO, and QA.",
    desc_tr: "OTI Holding'in tüm web ve e-ticaret uygulamaları — coral.ru, sunmar.ru, coraltravel.ua, royalflight.ru, otiumhotels.com dahil. 30-35 kişilik mühendislik, DevOps, PO ve QA ekiplerini yönetti.",
    tags: ["E-commerce", "GCP", "Agile", "Travel Tech"],
    tags_tr: ["E-ticaret", "GCP", "Agile", "Seyahat Teknolojisi"]
  },
  {
    date_en: "Apr 2019 — Feb 2020 · 11 months",
    date_tr: "Nis 2019 — Şub 2020 · 11 ay",
    role_en: "E-commerce Software Development Manager",
    role_tr: "E-Ticaret Yazılım Geliştirme Müdürü",
    company: "LC Waikiki — İstanbul",
    desc_en: "Led digital and agile transformation for one of Turkey's largest fashion retailers. Managed engineering, DevOps, PO, and QA teams. Drove architecture, software strategy, and third-party integrations for high-traffic e-commerce platforms.",
    desc_tr: "Türkiye'nin en büyük moda perakendecilerinden biri için dijital ve agile dönüşüm. Mühendislik, DevOps, PO ve QA ekiplerini yönetti. Mimari strateji ve üçüncü taraf entegrasyonlar.",
    tags: ["E-commerce", "Agile", "Scrum", "GCP"],
    tags_tr: ["E-ticaret", "Agile", "Scrum", "GCP"]
  },
  {
    date_en: "Sep 2017 — Apr 2019 · 1 year 8 months",
    date_tr: "Eyl 2017 — Nis 2019 · 1 yıl 8 ay",
    role_en: "Project & Software Development Manager",
    role_tr: "Proje ve Yazılım Geliştirme Müdürü",
    company: "Demirören Gazetecilik — İstanbul",
    desc_en: "Led software and project management for Posta, Fanatik, and Canlı Skor (App). Drove agile transformation, improved team productivity and time-to-market, managed infrastructure and performance of high-traffic media websites.",
    desc_tr: "Posta, Fanatik ve Canlı Skor için yazılım ve proje yönetimi. Agile dönüşüm, ekip verimliliği ve piyasaya çıkış süresini iyileştirdi. Yüksek trafikli medya sitelerinin altyapı ve performans yönetimi.",
    tags: ["Media", "Agile", "Performance", "Project Management"],
    tags_tr: ["Medya", "Agile", "Performans", "Proje Yönetimi"]
  },
  {
    date_en: "May 2015 — Sep 2017 · 2 years 5 months",
    date_tr: "May 2015 — Eyl 2017 · 2 yıl 5 ay",
    role_en: "Software Development Manager",
    role_tr: "Yazılım Geliştirme Müdürü",
    company: "Hürriyet — İstanbul",
    desc_en: "Managed software development teams (10-15 members) across Hürriyet, Bigpara, Hürriyet Aile, Hürriyet TV, Mahmure, and Hürriyet Sosyal platforms. Led agile transformation, defined development strategy and KPIs, managed budget and infrastructure for high-traffic digital properties.",
    desc_tr: "Hürriyet, Bigpara, Hürriyet Aile, Hürriyet TV, Mahmure ve Hürriyet Sosyal platformlarında 10-15 kişilik ekip yönetimi. Agile dönüşüm, yazılım stratejisi, KPI tanımlama ve bütçe yönetimi.",
    tags: ["Media", "Agile", "Scrum", "Kanban", "Budget Management"],
    tags_tr: ["Medya", "Agile", "Scrum", "Kanban", "Bütçe Yönetimi"]
  },
  {
    date_en: "Jul 2014 — May 2015 · 11 months",
    date_tr: "Tem 2014 — May 2015 · 11 ay",
    role_en: "Software Development Assistant Manager",
    role_tr: "Yazılım Geliştirme Müdür Yardımcısı",
    company: "Hürriyet — İstanbul",
    desc_en: "Managed software development for Bigpara, Hürriyet Aile, Hürriyet TV, Mahmure, and Hürriyet Sosyal. Led 7-9 member teams, drove agile practices, and oversaw IT career planning and KPI structuring.",
    desc_tr: "Bigpara, Hürriyet Aile, Hürriyet TV, Mahmure ve Hürriyet Sosyal yazılım geliştirme yönetimi. 7-9 kişilik ekip, agile uygulamaları ve kariyer planı.",
    tags: ["Media", "Agile", "Product Development"],
    tags_tr: ["Medya", "Agile", "Ürün Geliştirme"]
  },
  {
    date_en: "Sep 2011 — Jul 2014 · 2 years 11 months",
    date_tr: "Eyl 2011 — Tem 2014 · 2 yıl 11 ay",
    role_en: "Chief Software Engineer",
    role_tr: "Baş Yazılım Mühendisi",
    company: "Hürriyet — İstanbul",
    desc_en: "Designed and built core infrastructure for Hürriyet digital platforms. Led architecture decisions for vertical-oriented high-traffic systems. Coordinated cross-department delivery and third-party integrations.",
    desc_tr: "Hürriyet dijital platformları için temel altyapı tasarımı ve geliştirme. Yüksek trafikli sistemler için mimari kararlar. Departmanlar arası koordinasyon ve üçüncü taraf entegrasyonlar.",
    tags: ["Architecture", "Infrastructure", "High-Traffic"],
    tags_tr: ["Mimari", "Altyapı", "Yüksek Trafik"]
  },
  {
    date_en: "Mar 2011 — Sep 2011 · 7 months",
    date_tr: "Mar 2011 — Eyl 2011 · 7 ay",
    role_en: "Senior Software Developer",
    role_tr: "Kıdemli Yazılım Geliştirici",
    company: "SFS Şirketler Grubu — İstanbul",
    desc_en: "Software development and product support. Analysed and developed customer requirements, optimised database processes.",
    desc_tr: "Yazılım geliştirme ve ürün desteği. Müşteri gereksinimlerini analiz etti ve geliştirdi, veritabanı süreçlerini optimize etti.",
    tags: ["SQL", "OOP", "Software Development"],
    tags_tr: ["SQL", "OOP", "Yazılım Geliştirme"]
  },
  {
    date_en: "Jan 2009 — Mar 2011 · 2 years 3 months",
    date_tr: "Oca 2009 — Mar 2011 · 2 yıl 3 ay",
    role_en: "Software Developer",
    role_tr: "Yazılım Geliştirici",
    company: "BİLİN Yazılım — İstanbul",
    desc_en: "Developed HR software solutions using ASP.NET. Transferred HR processes — leave, training, absenteeism — to web environments. Used MS SQL Server and Oracle databases; FoxPro for reporting.",
    desc_tr: "ASP.NET ile İK yazılım çözümleri geliştirdi. İzin, eğitim, devamsızlık gibi İK süreçlerini web ortamına taşıdı. MS SQL Server, Oracle ve FoxPro kullandı.",
    tags: ["ASP.NET", "SQL", "Oracle", "HR Systems"],
    tags_tr: ["ASP.NET", "SQL", "Oracle", "İK Sistemleri"]
  },
  {
    date_en: "Jan 2003 — Nov 2008 · 5 years 11 months",
    date_tr: "Oca 2003 — Kas 2008 · 5 yıl 11 ay",
    role_en: "Software Developer",
    role_tr: "Yazılım Geliştirici",
    company: "NETİSİS Bilgi Teknolojileri — İstanbul",
    desc_en: "Software development and consulting across the full project lifecycle using OOP principles. Worked closely with Türkiye İş Bankası users on the implemented project, gaining extensive customer relations experience.",
    desc_tr: "OOP prensipleriyle projenin tüm aşamalarında yazılım geliştirme ve danışmanlık. Türkiye İş Bankası kullanıcılarıyla yakın çalışma, geniş müşteri ilişkileri deneyimi.",
    tags: ["OOP", "Oracle", "SQL", "Banking"],
    tags_tr: ["OOP", "Oracle", "SQL", "Bankacılık"]
  }
];

function readStoredLocale() {
  try {
    return localStorage.getItem('locale') === 'en' ? 'en' : 'tr';
  } catch {
    return 'tr';
  }
}

function writeStoredLocale(locale) {
  try {
    localStorage.setItem('locale', locale);
  } catch {
    // Ignore storage failures in restricted contexts.
  }
}

const state = {
  locale: readStoredLocale(),
  menuOpen: false
};

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&#39;');
}

function currentDuration(startDate, locale) {
  const start = new Date(startDate);
  const now = new Date();
  const months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  const years = Math.floor(months / 12);
  const rem = months % 12;

  if (locale === 'tr') {
    if (years === 0) return `${months} ay`;
    if (rem === 0) return `${years} yıl`;
    return `${years} yıl ${rem} ay`;
  }

  if (years === 0) return `${months} month${months !== 1 ? 's' : ''}`;
  if (rem === 0) return `${years} year${years !== 1 ? 's' : ''}`;
  return `${years} yr ${rem} mo`;
}

function iconLinkedIn(size = 14) {
  return `<svg width='${size}' height='${size}' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'><path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/></svg>`;
}

function iconMail(size = 16) {
  return `<svg width='${size}' height='${size}' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.9' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><rect x='3' y='5' width='18' height='14' rx='2'></rect><path d='M3 7l9 6 9-6'></path></svg>`;
}

function iconMapPin(size = 13) {
  return `<svg width='${size}' height='${size}' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.9' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><path d='M12 21s6-5.6 6-11a6 6 0 10-12 0c0 5.4 6 11 6 11z'></path><circle cx='12' cy='10' r='2.2'></circle></svg>`;
}

function iconGlobe(size = 13) {
  return `<svg width='${size}' height='${size}' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.9' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><circle cx='12' cy='12' r='9'></circle><path d='M3 12h18'></path><path d='M12 3c2.8 3 4 6 4 9s-1.2 6-4 9c-2.8-3-4-6-4-9s1.2-6 4-9z'></path></svg>`;
}

function iconArrowUpRight(size = 15) {
  return `<svg width='${size}' height='${size}' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.9' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><path d='M7 17L17 7'></path><path d='M9 7h8v8'></path></svg>`;
}

function iconArrowUp(size = 16) {
  return `<svg width='${size}' height='${size}' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.9' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><path d='M12 19V5'></path><path d='M5 12l7-7 7 7'></path></svg>`;
}

function iconGraduationCap(size = 17) {
  return `<svg width='${size}' height='${size}' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.9' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><path d='M22 10L12 5 2 10l10 5 10-5z'></path><path d='M6 12v4c0 1.8 2.7 4 6 4s6-2.2 6-4v-4'></path><path d='M6 12v4'></path></svg>`;
}

function iconMenu(open) {
  return `<span></span><span></span><span></span>`;
}

function getText(locale) {
  return messages[locale];
}

function renderLanguageSwitcher(t, locale) {
  return `<div class='language-switcher' role='group' aria-label='${escapeHtml(t.ui.language_group_label)}'>
    <button type='button' class='${locale === 'en' ? 'active' : ''}' data-action='set-locale' data-locale='en' aria-label='${escapeHtml(t.ui.switch_language_to_en)}'>EN</button>
    <button type='button' class='${locale === 'tr' ? 'active' : ''}' data-action='set-locale' data-locale='tr' aria-label='${escapeHtml(t.ui.switch_language_to_tr)}'>TR</button>
  </div>`;
}

function renderHeader(locale) {
  const t = getText(locale);
  const links = [
    ['about', t.nav.about],
    ['experience', t.nav.experience],
    ['expertise', t.nav.expertise],
    ['education', t.nav.education],
    ['responsible-ai', t.nav.responsible_ai],
    ['contact', t.nav.contact]
  ];

  return `<div class='section-shell header-inner'>
    <a href='#hero' class='brand' aria-label='${escapeHtml(t.ui.home_aria_label)}'>${escapeHtml(t.hero.name)}</a>
    <nav class='desktop-nav' aria-label='Main navigation'>
      ${links.map(([id, label]) => `<a href='#${id}'>${escapeHtml(label)}</a>`).join('')}
    </nav>
    <div class='header-actions'>
      ${renderLanguageSwitcher(t, locale)}
      <button type='button' class='mobile-menu-button${state.menuOpen ? ' is-open' : ''}' data-action='toggle-menu' aria-label='${escapeHtml(t.ui.mobile_menu_toggle)}' aria-expanded='${state.menuOpen ? 'true' : 'false'}'>${iconMenu(state.menuOpen)}</button>
    </div>
  </div>`;
}

function renderDrawer(locale) {
  const t = getText(locale);
  const links = [
    ['about', t.nav.about],
    ['experience', t.nav.experience],
    ['expertise', t.nav.expertise],
    ['education', t.nav.education],
    ['responsible-ai', t.nav.responsible_ai],
    ['contact', t.nav.contact]
  ];

  return `<nav aria-label='Mobile navigation'>
    ${links.map(([id, label]) => `<a href='#${id}' data-action='close-menu'>${escapeHtml(label)}</a>`).join('')}
  </nav>`;
}

function renderSectionHeader({ label, title, description, descriptionClass = 'section-description' }) {
  return `<div class='section-header'>
    ${label ? `<span class='section-label'>${escapeHtml(label)}</span>` : ''}
    <h2 class='section-title'>${escapeHtml(title)}</h2>
    ${description ? `<p class='${descriptionClass}'>${escapeHtml(description)}</p>` : ''}
  </div>`;
}

function renderHero(locale) {
  const t = getText(locale).hero;
  const imp = getText(locale).impact;
  const impItems = [
    ['stat1_value', 'stat1_label', 'stat1_sub'],
    ['stat2_value', 'stat2_label', 'stat2_sub'],
    ['stat3_value', 'stat3_label', 'stat3_sub']
  ];

  return `<section id='hero' class='hero-section executive-shell'>
    <div class='section-shell hero-grid'>
      <div class='reveal'>
        <h1 class='hero-title'>${escapeHtml(t.name)}</h1>
        <div class='hero-headline'>${escapeHtml(t.headline)}</div>
        <p class='hero-subtitle'>${escapeHtml(t.subtitle)}</p>
        <div class='hero-actions'>
          <a class='btn-primary' href='#contact'>${escapeHtml(t.cta_primary)} ${iconArrowUpRight(15)}</a>
          <a class='btn-secondary' href='#experience'>${escapeHtml(t.cta_secondary)}</a>
        </div>
        <div class='hero-meta'>
          <a class='hero-social' href='${LINKEDIN_URL}' target='_blank' rel='noopener noreferrer' aria-label='${escapeHtml(t.linkedin_aria_label)}'>${iconLinkedIn(14)} <span>${escapeHtml(t.linkedin_label)}</span></a>
          <span class='hero-divider' aria-hidden='true'></span>
          <div class='hero-location'>${iconMapPin(13)} <span>${escapeHtml(t.card_location)}</span></div>
          <div class='hero-location'>${iconGlobe(13)} <span>${escapeHtml(t.card_langs)}</span></div>
        </div>
      </div>
      <aside class='hero-side reveal' style='transition-delay: 0.1s'>
        <div class='hero-side-title'>${escapeHtml(t.focus_title)}</div>
        <div class='hero-side-item'><span>${escapeHtml(t.focus_1)}</span></div>
        <div class='hero-side-item'><span>${escapeHtml(t.focus_2)}</span></div>
        <div class='hero-side-item'><span>${escapeHtml(t.focus_3)}</span></div>
      </aside>
    </div>
    <div class='section-shell hero-impact'>
      <div class='impact-grid'>
        ${impItems.map(([valueKey, labelKey, subKey], i) => `<div class='impact-item reveal' style='transition-delay: ${0.15 + i * 0.06}s'>
          <div class='impact-row'>
            <div class='impact-value'>${escapeHtml(imp[valueKey])}</div>
            <div class='impact-meta'>
              <div class='impact-label'>${escapeHtml(imp[labelKey])}</div>
              <div class='impact-sub'>${escapeHtml(imp[subKey])}</div>
            </div>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>`;
}

function renderAbout(locale) {
  const a = getText(locale).about;
  return `<section id='about' class='section-paper section-border-y section-padded'>
    <div class='section-shell'>
      <div class='reveal'>
        ${renderSectionHeader({ label: a.label, title: a.title, description: a.subtitle, descriptionClass: 'section-description' })}
      </div>
      <div class='about-layout'>
        <div class='reveal' style='transition-delay: 0.05s'>
          <div class='about-deck-title'>${escapeHtml(a.deck_title)}</div>
          <div class='about-paragraphs'>
            <p>${escapeHtml(a.p1)}</p>
            <p>${escapeHtml(a.p2)}</p>
          </div>
        </div>
        <div class='about-aside'>
          <div class='about-principles'>
            <div class='principle-item reveal' style='transition-delay: 0.1s'><div class='principle-text'>${escapeHtml(a.principle_1)}</div></div>
            <div class='principle-item reveal' style='transition-delay: 0.15s'><div class='principle-text'>${escapeHtml(a.principle_2)}</div></div>
            <div class='principle-item reveal' style='transition-delay: 0.2s'><div class='principle-text'>${escapeHtml(a.principle_3)}</div></div>
            <div class='principle-item reveal' style='transition-delay: 0.25s'><div class='principle-text'>${escapeHtml(a.principle_4)}</div></div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

function renderExperience(locale) {
  const e = getText(locale).experience;
  const isTr = locale === 'tr';
  const full = experiences.slice(0, 4);
  const featured = full[0];
  const selected = full.slice(1);
  const earlier = experiences.slice(4);

  return `<section id='experience' class='section-white section-padded'>
    <div class='section-shell'>
      <div class='reveal'>
        ${renderSectionHeader({ label: e.label, title: e.title, description: e.subtitle, descriptionClass: 'section-description' })}
      </div>
      <div class='experience-grid'>
        <article class='experience-featured reveal' style='transition-delay: 0.05s'>
          <div class='experience-company'>${escapeHtml(featured.company)}</div>
          <h3 class='experience-title'>${escapeHtml(isTr && featured.role_tr ? featured.role_tr : featured.role_en)}</h3>
          <div class='experience-meta'>
            <span>${escapeHtml(isTr ? featured.date_tr : featured.date_en)}</span>
            ${featured.current && featured.start_date ? `<span>${escapeHtml(currentDuration(featured.start_date, locale))}</span>` : ''}
          </div>
          <p class='experience-desc' style='margin-top:1rem;max-width:38rem;'>${escapeHtml(isTr ? featured.desc_tr : featured.desc_en)}</p>
          <div class='tag-list'>${(isTr ? featured.tags_tr : featured.tags).slice(0, 4).map((tag) => `<span class='tag'>${escapeHtml(tag)}</span>`).join('')}</div>
        </article>
        <div class='experience-side'>
          <div class='experience-rows'>
            ${selected.map((exp, index) => {
              const showDescOnMobile = index < 2;
              const showTagsOnMobile = index < 2;
              return `<article class='experience-selected-item reveal' style='transition-delay: ${0.1 + index * 0.04}s'>
                <div class='experience-selected-head'>
                  <h3>${escapeHtml(isTr && exp.role_tr ? exp.role_tr : exp.role_en)}</h3>
                  <div class='experience-selected-date'>${escapeHtml(isTr ? exp.date_tr : exp.date_en)}</div>
                </div>
                <div class='experience-company' style='margin-bottom:0.75rem;'>${escapeHtml(exp.company)}</div>
                <p class='experience-desc${showDescOnMobile ? '' : ' mobile-hidden'}'>${escapeHtml(isTr ? exp.desc_tr : exp.desc_en)}</p>
                <div class='tag-list${showTagsOnMobile ? '' : ' mobile-hidden'}'>${(isTr ? exp.tags_tr : exp.tags).slice(0, 3).map((tag) => `<span class='tag tag-light'>${escapeHtml(tag)}</span>`).join('')}</div>
              </article>`;
            }).join('')}
          </div>
        </div>
      </div>
      ${earlier.length > 0 ? `<div style='margin-top:2rem;border-top:1px solid #e5e7eb;padding-top:1.25rem;'>
        <h3 class='experience-company reveal' style='margin-bottom:1rem;'>${escapeHtml(e.earlier)}</h3>
        <div class='experience-older-grid'>
          ${earlier.map((exp, index) => `<article class='experience-earlier-item reveal' style='transition-delay: ${index * 0.03}s'>
            <div class='experience-older-meta'>
              <span class='experience-older-title'>${escapeHtml(isTr && exp.role_tr ? exp.role_tr : exp.role_en)}</span>
              <span class='experience-older-company'>${escapeHtml(exp.company)}</span>
              <span class='experience-older-date'>${escapeHtml(isTr ? exp.date_tr : exp.date_en)}</span>
            </div>
          </article>`).join('')}
        </div>
      </div>` : ''}
    </div>
  </section>`;
}

function renderExpertise(locale) {
  const e = getText(locale).expertise;
  const groups = [
    { titleKey: 'group_core', items: [['ai_title', 'ai_desc'], ['fintech_title', 'fintech_desc']] },
    { titleKey: 'group_systems', items: [['cloud_title', 'cloud_desc'], ['security_title', 'security_desc']] },
    { titleKey: 'group_leadership', items: [['leadership_title', 'leadership_desc'], ['digital_title', 'digital_desc']] }
  ];

  return `<section id='expertise' class='section-paper section-padded'>
    <div class='section-shell'>
      <div class='reveal'>
        ${renderSectionHeader({ label: e.label, title: e.title, description: e.subtitle, descriptionClass: 'section-description' })}
      </div>
      <div class='expertise-layout'>
        <div style='border-top:1px solid #e5e7eb;'>
          ${groups.map((group, index) => `<div class='expertise-group reveal' style='transition-delay: ${index * 0.05}s'>
            <div class='expertise-group-label'>${escapeHtml(e[group.titleKey])}</div>
            <div class='expertise-group-items'>
              ${group.items.map(([titleKey, descKey], idx) => `<article class='expertise-item'>
                <h3>${escapeHtml(e[titleKey])}</h3>
                <p class='expertise-desc${idx > 0 ? ' mobile-hidden' : ''}'>${escapeHtml(e[descKey])}</p>
              </article>`).join('')}
            </div>
          </div>`).join('')}
        </div>
      </div>
    </div>
  </section>`;
}

function renderResponsibleAI(locale) {
  const r = getText(locale).responsibleai;
  const principles = [
    ['p1_title', 'p1_desc'],
    ['p2_title', 'p2_desc'],
    ['p3_title', 'p3_desc']
  ];
  const projects = [
    ['project1_tag', 'project1_title', 'project1_desc'],
    ['project2_tag', 'project2_title', 'project2_desc']
  ];

  return `<section id='responsible-ai' class='section-white section-padded'>
    <div class='section-shell'>
      <div class='reveal'>
        ${renderSectionHeader({ label: r.label, title: r.title, description: r.subtitle, descriptionClass: 'section-description' })}
      </div>
      <div class='responsible-layout'>
        <div>
          <div class='section-label-inline reveal' style='margin-bottom:1rem;'><span class='section-label'>${escapeHtml(r.operating_label)}</span></div>
          <div class='responsible-principles'>
            ${principles.map(([titleKey, descKey], index) => `<article class='principle-item reveal' style='transition-delay: ${index * 0.05}s'>
              <h3 style='margin:0 0 0.35rem;font-size:1rem;font-weight:600;line-height:1.35;letter-spacing:-0.02em;color:var(--color-slate-900);'>${escapeHtml(r[titleKey])}</h3>
              <p class='responsible-desc${index > 0 ? ' mobile-hidden' : ''}'>${escapeHtml(r[descKey])}</p>
            </article>`).join('')}
          </div>
        </div>
        <div class='responsible-side'>
          ${projects.map(([tagKey, titleKey, descKey], index) => `<article class='responsible-project reveal' style='transition-delay: ${index * 0.06}s'>
            <div class='responsible-tag'>${escapeHtml(r[tagKey])}</div>
            <h3>${escapeHtml(r[titleKey])}</h3>
            <p class='responsible-desc${index > 0 ? ' mobile-hidden' : ''}' style='max-width:38rem;'>${escapeHtml(r[descKey])}</p>
          </article>`).join('')}
        </div>
      </div>
    </div>
  </section>`;
}

function renderEducation(locale) {
  const e = getText(locale).education;
  const items = [
    ['edu1_title', 'edu1_sub', 'edu1_date'],
    ['edu2_title', 'edu2_sub', 'edu2_date'],
    ['edu3_title', 'edu3_sub', 'edu3_date']
  ];

  return `<section id='education' class='section-paper section-border-bottom section-padded'>
    <div class='section-shell'>
      <div class='reveal'>
        ${renderSectionHeader({ label: e.label, title: e.title, description: e.subtitle, descriptionClass: 'section-description' })}
      </div>
      <div class='education-list' style='border-top:1px solid #e5e7eb;'>
        ${items.map(([titleKey, subKey, dateKey], index) => `<article class='education-item reveal' style='transition-delay: ${index * 0.05}s'>
          <div class='education-main'>
            <div class='education-icon'>${iconGraduationCap(17)}</div>
            <div>
              <h3>${escapeHtml(e[titleKey])}</h3>
              <div class='education-sub'>${escapeHtml(e[subKey])}</div>
            </div>
          </div>
          <div class='education-date'>${escapeHtml(e[dateKey])}</div>
        </article>`).join('')}
      </div>
    </div>
  </section>`;
}

function renderContact(locale) {
  const c = getText(locale).contact;
  const items = [
    { icon: iconLinkedIn(16), label: c.linkedin, sub: c.linkedin_sub, href: LINKEDIN_URL, external: true },
    { icon: iconMail(16), label: c.email, sub: c.email_sub, href: `mailto:${EMAIL}`, external: false },
    { icon: iconMapPin(16), label: c.location, sub: c.location_sub, href: null, external: false }
  ];

  return `<section id='contact' class='section-white section-padded'>
    <div class='section-shell'>
      <div class='contact-layout reveal'>
        <div>
          ${renderSectionHeader({ label: c.label, title: c.title, description: c.desc, descriptionClass: 'contact-desc' })}
        </div>
        <div class='contact-side'>
          <div class='contact-status'><span class='status-dot'></span><span>${escapeHtml(c.avail_reply)}</span></div>
        </div>
      </div>
      <div class='contact-rows' style='border-top:1px solid #e5e7eb;margin-top:0.5rem;'>
        ${items.map((item, index) => {
          const content = `<div class='contact-row'>
            <div class='contact-icon'>${item.icon}</div>
            <div>
              <div class='contact-label'>${escapeHtml(item.label)}</div>
              <div class='contact-sub'>${escapeHtml(item.sub)}</div>
            </div>
            ${item.href ? `<span class='contact-arrow'>${iconArrowUpRight(16)}</span>` : ''}
          </div>`;

          return item.href
            ? `<a class='contact-link contact-item reveal' style='transition-delay: ${index * 0.05}s' href='${item.href}' ${item.external ? "target='_blank' rel='noopener noreferrer'" : ''}>${content}</a>`
            : `<div class='contact-item reveal' style='transition-delay: ${index * 0.05}s'>${content}</div>`;
        }).join('')}
      </div>
    </div>
  </section>`;
}

function renderMain(locale) {
  return [
    renderHero(locale),
    renderAbout(locale),
    renderExperience(locale),
    renderExpertise(locale),
    renderResponsibleAI(locale),
    renderEducation(locale),
    renderContact(locale)
  ].join('');
}

function renderFooter(locale) {
  const t = getText(locale);
  return `<div class='section-shell footer-inner'>
    <div>
      <div class='footer-name'>${escapeHtml(t.hero.name)}</div>
      <div class='footer-meta'>${escapeHtml(t.footer)}</div>
    </div>
    <div class='footer-actions'>
      <a class='footer-icon' href='${LINKEDIN_URL}' target='_blank' rel='noopener noreferrer' aria-label='${escapeHtml(t.ui.linkedin_profile_aria_label)}'>${iconLinkedIn(15)}</a>
      <a class='footer-icon' href='mailto:${EMAIL}' aria-label='${escapeHtml(t.ui.email_address_aria_label)}'>${iconMail(16)}</a>
      <button type='button' class='scroll-top' data-action='scroll-top' aria-label='${escapeHtml(t.footer_scroll_top)}'>${iconArrowUp(16)}</button>
    </div>
  </div>`;
}

function syncHeaderState() {
  const header = document.getElementById('siteHeader');
  const drawer = document.getElementById('mobileDrawer');
  const menuButton = header.querySelector('.mobile-menu-button');

  header.classList.toggle('scrolled', window.scrollY > 10);
  drawer.classList.toggle('is-open', state.menuOpen);
  drawer.innerHTML = renderDrawer(state.locale);
  if (menuButton) {
    menuButton.classList.toggle('is-open', state.menuOpen);
    menuButton.setAttribute('aria-expanded', state.menuOpen ? 'true' : 'false');
  }
}

function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '-80px',
    threshold: 0.05
  });
  elements.forEach(el => observer.observe(el));
}

function renderAll() {
  document.documentElement.lang = state.locale;
  try {
    document.cookie = `locale=${state.locale}; path=/; max-age=31536000; samesite=lax`;
  } catch {
    // Ignore cookie failures in local-file contexts.
  }
  document.getElementById('siteHeader').innerHTML = renderHeader(state.locale);
  document.getElementById('mobileDrawer').classList.toggle('is-open', state.menuOpen);
  document.getElementById('mobileDrawer').innerHTML = renderDrawer(state.locale);
  document.getElementById('main').innerHTML = renderMain(state.locale);
  document.getElementById('siteFooter').innerHTML = renderFooter(state.locale);
  syncHeaderState();
  initScrollReveal();
}

document.addEventListener('click', (event) => {
  const target = event.target.closest('[data-action]');
  if (!target) return;

  const action = target.dataset.action;

  if (action === 'set-locale') {
    const nextLocale = target.dataset.locale;
    if (nextLocale === state.locale) return;
    state.locale = nextLocale;
    state.menuOpen = false;
    writeStoredLocale(nextLocale);
    renderAll();
    return;
  }

  if (action === 'toggle-menu') {
    state.menuOpen = !state.menuOpen;
    syncHeaderState();
    return;
  }

  if (action === 'close-menu') {
    state.menuOpen = false;
    syncHeaderState();
    return;
  }

  if (action === 'scroll-top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

document.addEventListener('click', (event) => {
  const link = event.target.closest('#mobileDrawer a');
  if (!link) return;
  state.menuOpen = false;
  window.setTimeout(syncHeaderState, 0);
});

window.addEventListener('scroll', () => {
  const header = document.getElementById('siteHeader');
  if (header) {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }
}, { passive: true });

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && state.menuOpen) {
    state.menuOpen = false;
    syncHeaderState();
  }
});

// Render the page once everything is loaded
if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', () => {
    renderAll();
  });
} else {
  renderAll();
}
