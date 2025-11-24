// Projects Data
const projects = [
    {
        id: "qibla",
        title: "Muslim Prayer Qibla Compass",
        role: "Lead Engineer",
        description: "Led major feature development and architectural improvements for a top-ranked Islamic app with 20M+ downloads. Built the AI Islamic Chatbot, developed the complete Hajj Guide module, resolved long-standing architectural issues by migrating to a single-activity structure, and delivered multiple high-impact enhancements including Kalmas audio, Ayat audio, subscription redesign, and optimized Google Ads integration.",
        tech: ["Kotlin", "Clean Arch", "Room", "Google Play Billing", "Google Ads", "Mediation", "AI Bot"],
        stats: { main: "20M+", label: "Downloads" },
        thumbImage: "images/hero_qibla.png",
        images: [
            "images/hero_qibla.png",
            "images/qibla_sc1.png",
            "images/qibla_sc2.png",
            "images/qibla_sc3.png",
            "images/qibla_sc4.png",
            "images/qibla_sc5.png"
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
        description: "Led the modernization of a multilingual translator app with 1M+ users. Redesigned the complete UI/UX, implemented Google Play Billing subscriptions, integrated Google AdMob with full mediation, added an AI-powered chatbot, and built a document translation system supporting images, text, and screenshots.",
        tech: ["Kotlin", "Clean Arch", "Google Play Billing", "Google Ads", "Mediation", "ML Kit", "AI Chatbot"],
        stats: { main: "1M+", label: "Downloads" },
        thumbImage: "images/hero_lang.png",
        images: [
            "images/hero_lang.png",
            "images/lang_sc1.png",
            "images/lang_sc2.png",
            "images/lang_sc3.png",
            "images/lang_sc4.png"
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
        description: "Led the development of a full-featured health monitoring app including heart rate, blood oxygen, blood pressure, and blood sugar tracking. Implemented a modular architecture using Koin for dependency injection, integrated Google Play Billing, and set up Google AdMob with full mediation. Mentored a junior developer throughout the project, ensuring rapid delivery within 15 days.",
        tech: ["Kotlin", "Modular Architecture", "Koin DI", "Google Play Billing", "Google Ads", "Mediation", "Camera Processing"],
        stats: { main: "—", label: "New Published" },
        thumbImage: "images/hero_heart_rate.png",
        images: [
            "images/hero_heart_rate.png",
            "images/heart_rate1.png",
            "images/heart_rate2.png",
            "images/heart_rate3.png"
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
        thumbImage: "images/hero_tasbeeh.png",
        images: [
            "images/tasbeeh1.png",
            "images/tasbeeh2.png",
            "images/tasbeeh3.png",
            "images/tasbeeh4.png",
            "images/tasbeeh5.png"
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
    }


];

// DOM Elements
const projectsGrid = document.getElementById('projectsGrid');
const modal = document.getElementById('projectModal');
const backdrop = document.getElementById('modalBackdrop');
const panel = document.getElementById('modalPanel');

// State Variables
let currentSlide = 0;
let currentProject = null;

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    renderProjectGrid();
});

// Render Projects Grid
function renderProjectGrid() {
    projectsGrid.innerHTML = projects.map((p, i) => `
        <div onclick="openModal(${i})" class="group cursor-pointer relative rounded-xl bg-white p-1 shadow-sm hover:shadow-xl transition-all duration-500 ring-1 ring-slate-200 hover:ring-slate-300 hover:-translate-y-1">
            <div class="relative h-64 overflow-hidden rounded-lg bg-slate-100">
                <img src="${p.thumbImage}" alt="${p.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                
                <div class="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div class="flex items-center gap-2">
                        <div class="rounded-md bg-white/90 backdrop-blur px-2.5 py-1 text-[10px] font-semibold text-slate-700 shadow-sm ring-1 ring-slate-900/5">
                            ${p.tech[0]}
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-5">
                <div class="flex items-start justify-between mb-2">
                    <h3 class="font-semibold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">${p.title}</h3>
                    <span class="text-xs font-medium text-slate-400 flex items-center gap-1">
                        ${p.stats.main} <span class="hidden sm:inline">${p.stats.label}</span>
                    </span>
                </div>
                <p class="text-sm text-slate-500 line-clamp-2 leading-relaxed">${p.description}</p>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

// Open Modal
function openModal(index) {
    currentProject = projects[index];
    currentSlide = 0;
    
    // Fill Modal Content
    document.getElementById('mTitle').innerText = currentProject.title;
    document.getElementById('mRole').innerText = currentProject.role;
    document.getElementById('mDesc').innerText = currentProject.description;
    
    // Populate Features
    document.getElementById('mFeatures').innerHTML = currentProject.features.map(f => 
        `<li class="flex items-start gap-2.5 text-sm text-slate-600">
            <div class="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0"></div>
            <span>${f}</span>
        </li>`
    ).join('');
    
    // Populate Technologies
    document.getElementById('mTech').innerHTML = currentProject.tech.map(t => 
        `<span class="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">${t}</span>`
    ).join('');

    // Set Play Store Link
    const playButton = document.getElementById('mPlay');
    playButton.href = currentProject.links.play;

    // Render Carousel
    renderCarousel();

    // Show Modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Animate In
    requestAnimationFrame(() => {
        backdrop.classList.remove('opacity-0');
        panel.classList.remove('scale-95', 'opacity-0', 'translate-y-4');
        panel.classList.add('scale-100', 'opacity-100', 'translate-y-0');
    });
    
    lucide.createIcons();
}

// Close Modal
function closeModal() {
    backdrop.classList.add('opacity-0');
    panel.classList.remove('scale-100', 'opacity-100', 'translate-y-0');
    panel.classList.add('scale-95', 'opacity-0', 'translate-y-4');
    
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }, 300);
}

// Render Carousel

function renderCarousel() {
    const track = document.getElementById('carouselTrack');
    track.innerHTML = currentProject.images.map((imagePath, i) => `<div class="min-w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 relative"><img src="${imagePath}" alt="${currentProject.title} screenshot ${i + 1}" class="w-full h-full object-contain" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\\'flex flex-col items-center gap-4\\'><div class=\\'h-24 w-24 rounded-2xl bg-white shadow-xl ring-1 ring-slate-900/5 flex items-center justify-center\\'><i data-lucide=\\'image\\' class=\\'h-8 w-8 text-slate-300\\'></i></div><span class=\\'text-xs font-medium uppercase tracking-widest text-slate-400\\'>Image not found</span></div>'; lucide.createIcons();"></div>`).join('');
    updateCarousel();
    lucide.createIcons();
}

// Update Carousel Position
function updateCarousel() {
    document.getElementById('carouselTrack').style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Next Slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % currentProject.images.length;
    updateCarousel();
}

// Previous Slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + currentProject.images.length) % currentProject.images.length;
    updateCarousel();
}

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});