// DOM Elements
const homeGrid = document.getElementById('homeProjects');
const projectsGrid = document.getElementById('projectsGrid');
const modal = document.getElementById('projectModal');

// Modal Elements
const backdrop = document.getElementById('modalBackdrop');
const panel = document.getElementById('modalPanel');

// State Variables
let currentSlide = 0;
let currentProject = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Check which page we are on
    if (homeGrid && typeof projects !== 'undefined') {
        renderHomeProjects();
    }

    if (projectsGrid && typeof projects !== 'undefined') {
        renderAllProjects();
    }

    lucide.createIcons();
    initSpotlightEffect();
});

// --- RENDER FUNCTIONS (V2 With Spotlight) ---

// Render Top 3 Projects for Home
function renderHomeProjects() {
    const featured = projects.slice(0, 3);

    homeGrid.innerHTML = featured.map((p, i) => `
        <div onclick="openModal(${i})" class="spotlight-card group cursor-pointer rounded-2xl border border-white/5 transition-transform duration-500 hover:-translate-y-1">
            <!-- Spotlight Inner (z-index 2) -->
            <div class="spotlight-inner p-4 h-full flex flex-col">
                
                <div class="tilt-wrapper relative h-48 overflow-hidden rounded-xl bg-black/50 mb-4">
                    <img loading="lazy" src="${p.thumbImage}" alt="${p.title}" 
                        class="tilt-image w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105"
                        onmousemove="handleTilt(event, this)" onmouseleave="resetTilt(this)">
                    
                    <div class="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-60 pointer-events-none"></div>
                    
                    <div class="absolute bottom-3 left-3 pointer-events-none">
                        <span class="inline-flex items-center rounded-md bg-indigo-500/20 px-2 py-1 text-[10px] font-medium text-indigo-300 ring-1 ring-inset ring-indigo-500/30 backdrop-blur-md">
                            ${p.tech[0]}
                        </span>
                    </div>
                </div>

                <div>
                    <h3 class="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">${p.title}</h3>
                    <p class="text-sm text-slate-400 line-clamp-2 leading-relaxed mb-4">${p.description}</p>
                    <div class="mt-auto flex items-center text-xs font-medium text-slate-500 group-hover:text-slate-300 transition-colors">
                        View Details <i data-lucide="arrow-right" class="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1"></i>
                    </div>
                </div>

            </div>
        </div>
    `).join('');
}

// Render All Projects for Projects Page
function renderAllProjects() {
    projectsGrid.innerHTML = projects.map((p, i) => `
        <div onclick="openModal(${i})" class="spotlight-card group cursor-pointer rounded-2xl border border-white/5 transition-transform duration-500 hover:-translate-y-1">
             <div class="spotlight-inner p-0 overflow-hidden flex flex-col h-full rounded-2xl">
                
                <div class="tilt-wrapper relative h-56 overflow-hidden bg-black/50">
                    <img loading="lazy" src="${p.thumbImage}" alt="${p.title}" 
                        class="tilt-image w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105"
                        onmousemove="handleTilt(event, this)" onmouseleave="resetTilt(this)">
                    
                    <div class="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-80 pointer-events-none"></div>
                    
                    <div class="absolute bottom-4 left-4 right-4 flex justify-between items-end pointer-events-none">
                         <span class="inline-flex items-center rounded-md bg-white/10 px-2.5 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/10 backdrop-blur-md">
                            ${p.tech[0]}
                        </span>
                    </div>
                </div>

                <div class="p-6 flex flex-col flex-grow">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">${p.title}</h3>
                    </div>
                    <p class="text-sm text-slate-400 line-clamp-3 leading-relaxed mb-6 flex-grow">${p.description}</p>
                    
                    <div class="border-t border-white/5 pt-4 flex items-center justify-between mt-auto">
                        <span class="text-xs text-slate-500 uppercase tracking-wider font-semibold">${p.role}</span>
                        <span class="text-indigo-400 text-xs font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            Explore <i data-lucide="arrow-right" class="h-3 w-3"></i>
                        </span>
                    </div>
                </div>
             </div>
        </div>
    `).join('');
}

// --- EFFECTS LOGIC ---

// Spotlight: Tracks mouse over cards to move the radial gradient
function initSpotlightEffect() {
    const cards = document.querySelectorAll('.spotlight-card');

    document.addEventListener('mousemove', (e) => {
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

// Tilt: 3D parallax effect for images
function handleTilt(e, img) {
    const rect = img.parentElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (max 10 degrees)
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    img.style.transform = `scale(1.1) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

function resetTilt(img) {
    img.style.transform = 'scale(1) perspective(1000px) rotateX(0) rotateY(0)';
}


// --- MODAL LOGIC (Standard) ---

function openModal(index) {
    currentProject = projects[index];
    currentSlide = 0;

    // Fill Content
    document.getElementById('mTitle').innerText = currentProject.title;
    document.getElementById('mRole').innerText = currentProject.role;
    document.getElementById('mDesc').innerText = currentProject.description;

    // Features
    document.getElementById('mFeatures').innerHTML = currentProject.features.map(f =>
        `<li class="flex items-start gap-3 text-sm text-slate-300">
            <div class="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0 shadow-[0_0_8px_rgba(99,102,241,0.6)]"></div>
            <span>${f}</span>
        </li>`
    ).join('');

    // Tech
    document.getElementById('mTech').innerHTML = currentProject.tech.map(t =>
        `<span class="inline-flex items-center rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-indigo-300 ring-1 ring-inset ring-white/10">${t}</span>`
    ).join('');

    // Link
    const playBtn = document.getElementById('mPlay');
    playBtn.href = currentProject.links.play || "#";
    // Add shine effect class to modal button too
    playBtn.classList.add('btn-shine');

    renderCarousel();

    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        requestAnimationFrame(() => {
            backdrop.classList.remove('opacity-0');
            panel.classList.remove('scale-95', 'opacity-0', 'translate-y-4');
            panel.classList.add('scale-100', 'opacity-100', 'translate-y-0');
        });
    }
    lucide.createIcons();
}

function closeModal() {
    if (backdrop && panel) {
        backdrop.classList.add('opacity-0');
        panel.classList.remove('scale-100', 'opacity-100', 'translate-y-0');
        panel.classList.add('scale-95', 'opacity-0', 'translate-y-4');

        setTimeout(() => {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }, 500);
    }
}

function renderCarousel() {
    const track = document.getElementById('carouselTrack');
    if (!track) return;
    track.innerHTML = currentProject.images.map((imagePath, i) => `
        <div class="min-w-full h-full flex items-center justify-center relative">
            <img loading="lazy" src="${imagePath}" class="max-w-full max-h-full object-contain" onerror="this.style.display='none'">
        </div>
    `).join('');
    updateCarousel();
}

function updateCarousel() {
    const track = document.getElementById('carouselTrack');
    if (track) track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    if (currentProject && currentProject.images.length > 0) {
        currentSlide = (currentSlide + 1) % currentProject.images.length;
        updateCarousel();
    }
}

function prevSlide() {
    if (currentProject && currentProject.images.length > 0) {
        currentSlide = (currentSlide - 1 + currentProject.images.length) % currentProject.images.length;
        updateCarousel();
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});