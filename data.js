const projects = [
    {
        id: "qibla",
        title: "Muslim Prayer Qibla Compass",
        role: "Lead Engineer",
        description: "Led major feature development and architectural improvements for a top-ranked Islamic app with 20M+ downloads. Built the AI Islamic Chatbot, developed the complete Hajj Guide module, resolved long-standing architectural issues by migrating to a single-activity structure, and delivered multiple high-impact enhancements.",
        tech: ["Kotlin", "Clean Arch", "Room", "Google Play Billing", "Google Ads", "AI Bot"],
        stats: { main: "20M+", label: "Downloads" },
        thumbImage: "images/hero_qibla.webp",
        images: [
            "images/hero_qibla.webp",
            "images/qibla_sc1.webp",
            "images/qibla_sc2.webp",
            "images/qibla_sc3.webp",
            "images/qibla_sc4.webp",
            "images/qibla_sc5.webp"
        ],
        links: { play: "https://play.google.com/store/apps/details?id=prayertime.compassdirection.qiblafinder.hijricalender&hl=en" },
        features: [
            "AI-powered Islamic chatbot",
            "Complete Hajj & Umrah feature",
            "Single-activity architecture migration",
            "Kalmas & Ayat audio system",
            "Subscription redesign & upgrade",
            "Optimized Google Ads & mediation setup",
            "Major bug fixes & performance improvements"
        ]
    },
    {
        id: "translator",
        title: "Language Translator",
        role: "Lead Engineer",
        description: "Led the modernization of a multilingual translator app with 1M+ users. Redesigned the complete UI/UX, implemented Google Play Billing subscriptions, integrated Google AdMob with full mediation, added an AI-powered chatbot, and built a document translation system.",
        tech: ["Kotlin", "Clean Arch", "Google Play Billing", "Google Ads", "ML Kit", "AI Chatbot"],
        stats: { main: "1M+", label: "Downloads" },
        thumbImage: "images/hero_lang.webp",
        images: [
            "images/hero_lang.webp",
            "images/lang_sc1.webp",
            "images/lang_sc2.webp",
            "images/lang_sc3.webp",
            "images/lang_sc4.webp"
        ],
        links: { play: "https://play.google.com/store/apps/details?id=translate.all.language.translator.text.voice.translation&hl=en" },
        features: [
            "Complete UI/UX redesign",
            "Subscription system with Google Play Billing",
            "Full Google AdMob & mediation integration",
            "AI-powered language chatbot",
            "Document & photo translation",
            "Voice, text & camera translation enhancements",
            "Improved performance & architecture cleanup"
        ]
    },
    {
        id: "heartRate",
        title: "Hearto: Heart Rate Monitor",
        role: "Lead Engineer",
        description: "Led the development of a full-featured health monitoring app including heart rate, blood oxygen, blood pressure, and blood sugar tracking. Implemented a modular architecture using Koin for dependency injection, integrated Google Play Billing, and set up Google AdMob with full mediation.",
        tech: ["Kotlin", "Modular Architecture", "Koin DI", "Google Play Billing", "Google Ads", "Camera Processing"],
        stats: { main: "—", label: "New Published" },
        thumbImage: "images/hero_heart_rate.webp",
        images: [
            "images/hero_heart_rate.webp",
            "images/heart_rate1.webp",
            "images/heart_rate2.webp",
            "images/heart_rate3.webp"
        ],
        links: {
            play: "https://play.google.com/store/apps/details?id=com.heart.o.heart.rate.monitor.bp"
        },
        features: [
            "Heart rate detection using camera & flash",
            "Blood oxygen, blood pressure & blood sugar modules",
            "Modular multi-feature architecture",
            "Koin-based dependency injection setup",
            "Subscription system with Google Play Billing",
            "Google AdMob integration with full mediation setup",
            "Complete health dashboard & analytics",
            "Mentored a junior developer during the project"
        ]
    },
    {
        id: "tasbeeh",
        title: "Tasbih Counter – Zikr & Azkar",
        role: "Lead Engineer",
        description: "Designed and developed a complete Tasbeeh & Azkar app from scratch. Built a customizable Tasbeeh counter with add, edit and delete options, added morning/evening Azkar, integrated a Qibla Compass with themes, implemented Tasbeeh themes, Google Play Billing subscriptions, and full Google AdMob integration.",
        tech: ["Kotlin", "Modular Architecture", "Koin DI", "Google Play Billing", "Google Ads", "Mediation"],
        stats: { main: "—", label: "New Published" },
        thumbImage: "images/hero_tasbeeh.webp",
        images: [
            "images/tasbeeh1.webp",
            "images/tasbeeh2.webp",
            "images/tasbeeh3.webp",
            "images/tasbeeh4.webp",
            "images/tasbeeh5.webp"
        ],
        links: {
            play: "https://play.google.com/store/apps/details?id=com.orbixapps.tasbeeh"
        },
        features: [
            "Tasbeeh counter with add, edit & delete features",
            "Custom Tasbeeh themes",
            "Morning & evening Azkar",
            "Qibla Compass with multiple themes",
            "Subscription system with Google Play Billing",
            "Google AdMob integration with full mediation",
            "Clean modular code with Koin-based DI",
            "Optimized performance & smooth UI animations"
        ]
    },
    {
        id: "math-ai",
        title: "Math AI – Calculator & AI Solver",
        role: "Lead Engineer",
        description: "Independently designed and developed a complete AI-powered Math Solver application. The app supports basic to advanced calculations including logarithms, trigonometry, derivatives, and integrations. Integrated an AI chatbot using OpenAI API that allows users to solve math problems via text input, voice input, gallery images, and handwritten drawings using a custom canvas view.",
        tech: [
            "Kotlin",
            "MVVM Architecture",
            "Koin DI",
            "Room Database",
            "OpenAI API",
            "Custom Canvas View",
            "Speech-to-Text",
            "Google Play Billing"
        ],
        stats: { main: "—", label: "Published" },
        thumbImage: "images/Math_Ai_1.webp",
        images: [
            "images/Math_Ai_1.webp",
            "images/Math_Ai_2.webp",
            "images/Math_Ai_3.webp",
            "images/Math_Ai_4.webp"
        ],
        links: {
            play: "https://play.google.com/store/apps/details?id=com.math.ai.ai.math.app"
        },
        features: [
            "Advanced calculator supporting basic to complex math problems",
            "AI-powered chatbot for step-by-step math solutions",
            "Text-based, voice-based, and image-based math question input",
            "Handwritten math input using a custom canvas drawing view",
            "Gallery image scanning for math problem recognition",
            "Math history stored locally using Room database",
            "Subscription system implemented with Google Play Billing",
            "Dependency injection using Koin",
            "Clean MVVM architecture with scalable codebase",
            "Optimized performance and smooth user experience"
        ]
    }
];
