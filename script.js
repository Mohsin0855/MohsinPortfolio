// Projects Data
const projects = [
    {
        id: "qibla",
        title: "Muslim Prayer Qibla Compass",
        role: "Lead Engineer",
        description: "A premium Islamic lifestyle suite focused on user retention and accessibility. Re-engineered the core counting logic to ensure 100% state consistency offline.",
        tech: ["Kotlin", "Clean Arch", "Room", "Google Play Billing", "Google Ads", "Mediation", "Ai Bot"],
        stats: { main: "20M+", label: "Downloads" },
        images: [],
        links: { play: "https://play.google.com/store/apps/details?id=prayertime.compassdirection.qiblafinder.hijricalender&hl=en" },
        features: ["Offline-first architecture", "Dynamic theming engine", "Advanced subscription analytics"]
    },
    {
        id: "qibla",
        title: "Precision Qibla Finder",
        role: "Sole Developer",
        description: "High-precision AR direction finder using sensor fusion algorithms to filter magnetic interference for accurate prayer direction worldwide.",
        tech: ["Kotlin", "AR Core", "Sensor Fusion", "Google Maps"],
        stats: { main: "4.8", label: "Store Rating" },
        images: [],
        links: { play: "#" },
        features: ["Kalman Filter sensor smoothing", "Augmented Reality overlay", "Localized for 12 languages"]
    },
    {
        id: "fitness",
        title: "FitTrack Analytics",
        role: "Contributor",
        description: "A fitness tracking application focusing on step counting, calorie algorithms, and daily progress visualization using custom charts.",
        tech: ["Flutter", "Firebase", "Charts"],
        stats: { main: "2M+", label: "Users" },
        images: [],
        links: { play: "#" },
        features: [
            "Background step counting service optimization",
            "Real-time data syncing with Firebase Firestore",
            "Custom drawn chart animations"
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
                <div class="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 transition-transform duration-700 group-hover:scale-105"></div>
                
                <!-- Abstract UI Representation -->
                <div class="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" class="text-slate-900">
                        <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                        <line x1="12" y1="18" x2="12.01" y2="18"></line>
                    </svg>
                </div>

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
    const totalSlides = 3; // Mock slides
    
    track.innerHTML = Array(totalSlides).fill(0).map((_, i) => `
        <div class="min-w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 text-slate-300 relative">
            <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')] opacity-50"></div>
            <div class="flex flex-col items-center gap-4 z-10">
                <div class="h-24 w-24 rounded-2xl bg-white shadow-xl ring-1 ring-slate-900/5 flex items-center justify-center">
                    <i data-lucide="image" class="h-8 w-8 text-slate-300"></i>
                </div>
                <span class="text-xs font-medium uppercase tracking-widest opacity-50">Preview ${i + 1}</span>
            </div>
        </div>
    `).join('');
    
    updateCarousel();
    lucide.createIcons();
}

// Update Carousel Position
function updateCarousel() {
    document.getElementById('carouselTrack').style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Next Slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % 3;
    updateCarousel();
}

// Previous Slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + 3) % 3;
    updateCarousel();
}

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});