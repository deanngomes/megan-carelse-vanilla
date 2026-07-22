// Diagonal zebra stripes placeholder (Data URI matching the dark turquoise and black color scheme)
const MERCH_PLACEHOLDER = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'><defs><pattern id='stripes' width='40' height='40' patternTransform='rotate(45)' patternUnits='userSpaceOnUse'><line x1='0' y1='0' x2='0' y2='40' stroke='%23221a1c' stroke-width='20' /></pattern></defs><rect width='100%' height='100%' fill='%23131011' /><rect width='100%' height='100%' fill='url(%23stripes)' /></svg>";

// Music Catalog Database
const musicData = [
    {
        id: 'home',
        title: 'Home',
        artist: 'Megan Carelse',
        cover: 'assets/photos/cover-home.jpg',
        audio: 'assets/music/SND-spotidownloadercom-home-megan-carelse.mp3',
        price: 'R15.00',
        numericPrice: 15.00,
        type: 'digital',
        category: 'Folk Ballad',
        story: '"Home is a comforting folk/acoustic track about the relief of returning to familiar spaces. It explores how home isn’t just a place on a map, but a feeling of absolute belonging and safety."',
        lyrics: `Dust on the highway and miles left behind
Chasing the dreams that are easy to find
But nothing compares to the light in your eyes
When the city of gold greets the morning sunrise

Oh, I’m coming home, let the road fade away
No longer a stranger, no longer astray
You are the hearth where the fire burns bright
Keeping me safe in the quiet of night...`
    },
    {
        id: 'my-gravity',
        title: 'My Gravity',
        artist: 'Megan Carelse',
        cover: 'assets/photos/cover-my-gravity.jpg',
        audio: 'assets/music/My Gravity - Megan Carelse.mp3',
        price: 'R15.00',
        numericPrice: 15.00,
        type: 'digital',
        category: 'Acoustic Ambient Indie',
        story: '"This song explores the weight of silence. It’s about that one person or memory that remains the quiet anchor in your life—the constant pull of home no matter how far you drift."',
        lyrics: `I feel the pull when the shadows grow tall
A quiet whisper echoing down the hall
You are the weight that I cannot escape
Tracing the lines that the evening will shape

Oh, you are my gravity
Holding me close when I want to be free
In the cold winter air, in the highveld breeze
You are the anchor that brings me to my knees...`
    },
    {
        id: 'peonies',
        title: 'Peonies',
        artist: 'Megan Carelse',
        cover: 'assets/photos/cover-peonies.jpg',
        audio: 'assets/music/SND-spotidownloadercom-peonies-megan-carelse.mp3',
        price: 'R15.00',
        numericPrice: 15.00,
        type: 'digital',
        category: 'Acoustic Ballad',
        story: '"Peonies is a warm acoustic ballad representing organic growth after a cold Johannesburg winter. It celebrates the quiet beauty of blooming in your own time, surrounded by patience and light."',
        lyrics: `Cold winter soil and the frost on the glass
Waiting for hours for the seasons to pass
Deep in the dark, there is something awake
Reaching for warmth in the promise we make

Bloom for me, beautiful peony pink
Softer than any sweet thoughts I can think
The petals will open, the color will show
Blooming so slowly with nowhere to go...`
    },
    {
        id: 'make-you-happy',
        title: 'Make You Happy',
        artist: 'Megan Carelse',
        cover: 'assets/photos/cover-make-you-happy.jpg',
        audio: 'assets/music/SND-spotidownloadercom-make-you-happy-megan-carelse.mp3',
        price: 'R15.00',
        numericPrice: 15.00,
        type: 'digital',
        category: 'Acoustic Lullaby',
        story: '"A gentle, finger-picked acoustic lullaby. Written during a quiet rainy evening, it speaks to the simple, humble desire of wanting to bring peace and joy to someone you deeply care about."',
        lyrics: `Rain on the tin roof, a song in the dark
Blow on the embers to capture a spark
The world is so heavy, the worries are deep
Close your tired eyes now and slip into sleep

I only want to make you happy tonight
Wrapping you safe in the soft amber light
No need to be strong, no need to be brave
Rest in the warmth of the promise I gave...`
    }
];

// Featured Grid Homepage elements
const featuredData = {
    release: {
        title: "Latest Release: Home EP",
        description: "Explore the deep, resonant sounds of Megan's newest EP, 'Home'. A journey into warm highveld evenings, layered vocals, and quiet emotional anchors.",
        image: 'assets/photos/cover-home.jpg',
        link: "#latest-release"
    },
    article: {
        title: "The Heart behind 'Peonies'",
        date: "June 20, 2026",
        excerpt: "Megan shares the inspiration behind Peonies: 'It represents growth after a long Johannesburg winter. The beauty of blooming in your own time.'",
        image: 'assets/photos/cover-peonies.jpg',
        link: "#about"
    },
    merch: {
        title: "Signature Cozy Collection",
        description: "Wrap yourself in warmth with the official Megan Carelse oversized hoodie. Premium heavyweight fleece in Sand Beige.",
        image: 'assets/photos/merch/IMG-shirt-3.png',
        link: "#merch"
    }
};

// Professional Theatrical & Stage Productions
const actingData = [
    {
        id: '1',
        title: 'Evita',
        role: 'Lead - Eva Perón',
        year: '2024',
        thumbnail: 'assets/photos/evita-poster.jpg',
        description: 'Portrayed the powerful title role of Eva Perón, leading the grand musical production with vocal precision and dramatic intensity.',
        category: 'Musical Theatre'
    },
    {
        id: '2',
        title: 'We Will Rock You',
        role: 'Lead - Scaramouche',
        year: '2023',
        thumbnail: 'assets/photos/wwry-poster.jpg',
        description: 'Starred as the sharp, rebellious protagonist Scaramouche, delivering high-octane rock vocals and energetic stage presence.',
        category: 'Rock Musical'
    },
    {
        id: '3',
        title: 'Rent',
        role: 'Lead - Mimi Marquez',
        year: '2022',
        thumbnail: 'assets/photos/rent-poster.jpg',
        description: 'Played the raw, emotional role of Mimi Marquez, bringing deep vulnerability, complex character layers, and soul to the musical.',
        category: 'Musical Theatre'
    },
    {
        id: '4',
        title: 'Jesus Christ Superstar',
        role: 'Lead - Mary Magdalene',
        year: '2021',
        thumbnail: 'assets/photos/jcs-poster.png',
        description: 'Portrayed Mary Magdalene, delivering a soulful and unforgettable rendition of the classic ballad "I Don\'t Know How to Love Him".',
        category: 'Rock Opera'
    },
    {
        id: '5',
        title: 'Hair',
        role: 'Lead - Sheila Franklin',
        year: '2020',
        thumbnail: 'assets/photos/hair-poster.jpg',
        description: 'Played the passionate protest leader Sheila Franklin, anchoring the production\'s intricate, harmonic vocal arrangements.',
        category: 'Musical Theatre'
    }
];

// Merchandise Catalog
const merchData = [
    // --- "Home" Collection ---
    {
        id: 'hm-m1',
        name: 'Official Sand Hoodie',
        collection: 'Home',
        price: 'R690.00',
        numericPrice: 690.00,
        image: 'assets/photos/merch/home-hoodie.png',
        description: 'Premium heavyweight sand-colored hoodie from the Home collection. Features a double-lined cozy hood, a spacious kangaroo pocket, and "Home" cursive lyric print across the chest. Made from 100% organic cotton.',
        colors: [
            { name: 'Sand Beige', hex: '#dfb29a' }
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        type: 'merch'
    },
    {
        id: 'hm-m2',
        name: 'Vintage Acid-Wash Tee',
        collection: 'Home',
        price: 'R390.00',
        numericPrice: 390.00,
        image: 'assets/photos/merch/home-tshirt.png',
        description: 'A high-quality 240gsm heavyweight vintage acid-wash tee in charcoal. Custom screen-printed with a subtle distressed botanical frame on the front representing the warm tones of Megan\'s EP.',
        colors: [
            { name: 'Vintage Charcoal', hex: '#2d241e' }
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        type: 'merch'
    },
    {
        id: 'hm-m3',
        name: 'Handcrafted Ceramic Mug',
        collection: 'Home',
        price: 'R250.00',
        numericPrice: 250.00,
        image: 'assets/photos/merch/home-mug.png',
        description: 'An individually wheel-thrown stoneware ceramic mug in organic toasted cream glaze with a speckled clay body. Hand-stamped with a minimalist botanical design.',
        colors: [
            { name: 'Toasted Cream', hex: '#e8ded1' }
        ],
        sizes: ['350ml'],
        type: 'merch'
    },
    {
        id: 'hm-m4',
        name: 'Limited Amber-Smoke Vinyl',
        collection: 'Home',
        price: 'R450.00',
        numericPrice: 450.00,
        image: 'assets/photos/merch/home-vinyl.png',
        description: 'Exclusive, limited run 12-inch 180g vinyl record pressed on solid translucent amber-smoke colored wax. Includes a 12-page printed lyric booklet and high-quality gatefold packaging.',
        colors: [
            { name: 'Amber Smoke', hex: '#b07a50' }
        ],
        sizes: ['12" Vinyl'],
        type: 'merch'
    },

    // --- "My Gravity" Collection ---
    {
        id: 'mg-m1',
        name: 'Celestial Orbit Canvas Tote',
        collection: 'My Gravity',
        price: 'R290.00',
        numericPrice: 290.00,
        image: 'assets/photos/merch/gravity-tote.png',
        description: 'Heavyweight organic cotton canvas tote bag in natural off-white with solid black cotton handles. Screen-printed on the side is a minimalist black line-art celestial orbital diagram representing the pull of gravity.',
        colors: [
            { name: 'Natural Off-White', hex: '#f3efe9' }
        ],
        sizes: ['Standard'],
        type: 'merch'
    },
    {
        id: 'mg-m2',
        name: 'Heavy Fleece Black Sweatpants',
        collection: 'My Gravity',
        price: 'R690.00',
        numericPrice: 690.00,
        image: 'assets/photos/merch/gravity-pants.png',
        description: 'Premium heavyweight organic cotton fleece sweatpants in deep matte black. Relaxed, cozy fit with elastic ankles and side pockets. Features a subtle white embroidered orbital ring near the front pocket.',
        colors: [
            { name: 'Matte Black', hex: '#111111' }
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        type: 'merch'
    },
    {
        id: 'mg-m3',
        name: 'Abstract Orbit Espresso Cup',
        collection: 'My Gravity',
        price: 'R180.00',
        numericPrice: 180.00,
        image: 'assets/photos/merch/gravity-cup-black.png',
        description: 'Wheel-thrown ceramic espresso cup in matte black stoneware glaze with a raw white glazed interior. Features a thin, debossed white orbital ring circling the outer base.',
        colors: [
            { name: 'Matte Black', hex: '#111111' }
        ],
        sizes: ['150ml'],
        type: 'merch'
    },
    {
        id: 'mg-m4',
        name: 'Abstract Orbit Ceramic Mug',
        collection: 'My Gravity',
        price: 'R220.00',
        numericPrice: 220.00,
        image: 'assets/photos/merch/gravity-cup-white.png',
        description: 'Wheel-thrown ceramic coffee mug in crisp white stoneware glaze with a raw black glazed interior. Features a thin, debossed black orbital ring circling the outer base.',
        colors: [
            { name: 'Crisp White', hex: '#ffffff' }
        ],
        sizes: ['350ml'],
        type: 'merch'
    },

    // --- "Peonies" Collection ---
    {
        id: 'pe-m1',
        name: 'Embroidered Peony Black Hoodie',
        collection: 'Peonies',
        price: 'R790.00',
        numericPrice: 790.00,
        image: 'assets/photos/merch/peonies-hoodie.png',
        description: 'Luxury heavyweight 400gsm organic cotton hoodie in matte black. Features a detailed white line-art embroidery of a blooming peony flower on the center chest. Double-lined hood, relaxed drop shoulders, and flat-knit drawstrings.',
        colors: [
            { name: 'Matte Black', hex: '#111111' }
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        type: 'merch'
    },
    {
        id: 'pe-m2',
        name: 'Minimalist Peony White Tee',
        collection: 'Peonies',
        price: 'R390.00',
        numericPrice: 390.00,
        image: 'assets/photos/merch/peonies-tshirt.png',
        description: 'A premium 240gsm heavyweight organic cotton tee in clean optical white. Custom screen-printed with a minimalist black line-art sketch of a peony flower on the center of the chest.',
        colors: [
            { name: 'Optical White', hex: '#ffffff' }
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        type: 'merch'
    },
    {
        id: 'pe-m3',
        name: 'Embroidered Peony Black Socks',
        collection: 'Peonies',
        price: 'R150.00',
        numericPrice: 150.00,
        image: 'assets/photos/merch/peonies-socks-black.png',
        description: 'Premium combed cotton crew socks in solid black. Features a delicate, high-density embroidered white peony emblem on the ankle. Stretched comfort ribbing and cushioned sole.',
        colors: [
            { name: 'Solid Black', hex: '#111111' }
        ],
        sizes: ['One Size'],
        type: 'merch'
    },
    {
        id: 'pe-m4',
        name: 'Embroidered Peony White Socks',
        collection: 'Peonies',
        price: 'R150.00',
        numericPrice: 150.00,
        image: 'assets/photos/merch/peonies-socks-white.png',
        description: 'Premium combed cotton crew socks in optical white. Features a delicate, high-density embroidered black peony emblem on the ankle. Stretched comfort ribbing and cushioned sole.',
        colors: [
            { name: 'Optical White', hex: '#ffffff' }
        ],
        sizes: ['One Size'],
        type: 'merch'
    },

    // --- "Make You Happy" Collection ---
    {
        id: 'mh-m1',
        name: 'Soundwave Washed Black Cap',
        collection: 'Make You Happy',
        price: 'R350.00',
        numericPrice: 350.00,
        image: 'assets/photos/merch/happy-cap-black.png',
        description: 'Premium washed cotton dad cap in stealth black with an adjustable brass buckle closure. Features an abstract white embroidered audio frequency soundwave across the front panels.',
        colors: [
            { name: 'Washed Black', hex: '#222222' }
        ],
        sizes: ['One Size'],
        type: 'merch'
    },
    {
        id: 'mh-m2',
        name: 'Soundwave Embroidered White Cap',
        collection: 'Make You Happy',
        price: 'R350.00',
        numericPrice: 350.00,
        image: 'assets/photos/merch/happy-cap-white.png',
        description: 'Premium heavy brushed cotton cap in solid white with an adjustable silver metal buckle closure. Features an abstract black embroidered audio frequency soundwave across the front panels.',
        colors: [
            { name: 'Optical White', hex: '#ffffff' }
        ],
        sizes: ['One Size'],
        type: 'merch'
    },
    {
        id: 'mh-m3',
        name: 'Frequency Steel Water Bottle',
        collection: 'Make You Happy',
        price: 'R390.00',
        numericPrice: 390.00,
        image: 'assets/photos/merch/happy-bottle.png',
        description: 'Double-walled vacuum insulated 500ml stainless steel water bottle in matte black. Laser-engraved with glossy black soundwave frequency lines representing her single "Make You Happy." Keeps cold for 24 hours.',
        colors: [
            { name: 'Matte Black', hex: '#111111' }
        ],
        sizes: ['500ml'],
        type: 'merch'
    },
    {
        id: 'mh-m4',
        name: 'Embossed Pebbled Leather Journal',
        collection: 'Make You Happy',
        price: 'R280.00',
        numericPrice: 280.00,
        image: 'assets/photos/merch/happy-journal.png',
        description: 'High-end black pebbled vegan leather journal with 160 pages of premium 120gsm cream-lined paper. Showcases a sleek, blind-debossed soundwave signature on the front cover.',
        colors: [
            { name: 'Sleek Black', hex: '#111111' }
        ],
        sizes: ['A5 size'],
        type: 'merch'
    }
];

// Cart State (loaded from localStorage for absolute professional touch)
let cart = JSON.parse(localStorage.getItem('mc_cart')) || [];

// User Stripe Publishable Key configuration
const STRIPE_PUBLISHABLE_KEY = 'pk_live_placeholder'; // User can replace with their actual live/test publishable key

document.addEventListener('DOMContentLoaded', () => {
    // --- Hero Particle Spawning ---
    const heroParticles = document.getElementById('heroParticles');
    if (heroParticles) {
        heroParticles.innerHTML = '';
        const particleCount = 30;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'hero-particle';
            
            // Randomize particle properties for warm, floating highveld evening vibes
            const left = Math.random() * 100;
            const size = Math.random() * 8 + 4; // 4px to 12px
            const duration = Math.random() * 12 + 8; // 8s to 20s
            const delay = Math.random() * -15; // negative delay to stagger on page load
            
            particle.style.left = `${left}%`;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.animationDuration = `${duration}s`;
            particle.style.animationDelay = `${delay}s`;
            particle.style.opacity = (Math.random() * 0.4 + 0.2).toFixed(2);
            
            heroParticles.appendChild(particle);
        }
    }

    // --- Navigation Scroll Effect & Mobile Menu Toggle ---
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Dynamic Mobile Navigation and Cart Button Alignment
    const navContent = document.querySelector('.nav-content');
    const navLinks = document.querySelector('.nav-links');
    const cartToggleBtn = document.getElementById('cartToggleBtn');
    
    if (navContent && navLinks) {
        // Relocate the cart toggle button so it sits in the top bar on mobile next to the toggle
        if (cartToggleBtn) {
            navContent.appendChild(cartToggleBtn);
        }
        
        // Dynamically build the mobile hamburger button
        const toggleBtn = document.createElement('button');
        toggleBtn.id = 'mobileNavToggle';
        toggleBtn.className = 'mobile-nav-toggle';
        toggleBtn.setAttribute('aria-label', 'Toggle Navigation Menu');
        toggleBtn.innerHTML = '<i data-lucide="menu"></i>';
        
        navContent.appendChild(toggleBtn);
        
        // Re-run lucide renderer to instantiate the dynamically injected icons
        if (window.lucide) {
            lucide.createIcons();
        }
        
        // Interactivity handling
        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('open');
            const isOpen = navLinks.classList.contains('open');
            toggleBtn.innerHTML = isOpen ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
            if (window.lucide) {
                lucide.createIcons();
            }
        });

        // Close the mobile menu on background/link click
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !toggleBtn.contains(e.target)) {
                if (navLinks.classList.contains('open')) {
                    navLinks.classList.remove('open');
                    toggleBtn.innerHTML = '<i data-lucide="menu"></i>';
                    if (window.lucide) {
                        lucide.createIcons();
                    }
                }
            }
        });
    }

    // --- Custom Toast Notification ---
    window.showToast = function(message) {
        let container = document.querySelector('.toast-container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'toast-container';
            document.body.appendChild(container);
        }
        
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<i data-lucide="info" style="width:16px;height:16px;"></i> <span>${message}</span>`;
        container.appendChild(toast);
        
        if (window.lucide) {
            lucide.createIcons();
        }
        
        // Trigger transition
        setTimeout(() => toast.classList.add('show'), 10);
        
        // Auto-remove
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3200);
    }

    // --- Homepage Mini-Audio Player Logic ---
    const homeAudio = document.getElementById('homeAudio');
    const homePlayPauseBtn = document.getElementById('homePlayPauseBtn');
    const homePlayIcon = document.getElementById('homePlayIcon');
    const homePauseIcon = document.getElementById('homePauseIcon');
    const homeProgressBar = document.getElementById('homeProgressBar');
    const homeProgressContainer = document.getElementById('homeProgressContainer');
    const homeCurrentTime = document.getElementById('homeCurrentTime');
    const homeDurationTime = document.getElementById('homeDurationTime');
    const homeVinylWrapper = document.getElementById('homeVinylWrapper');
    const homeBuyTrackBtn = document.getElementById('homeBuyTrackBtn');

    if (homeAudio && homePlayPauseBtn) {
        // Time formatting
        function formatHomeTime(secs) {
            if (isNaN(secs)) return '0:00';
            const mins = Math.floor(secs / 60);
            const remainingSecs = Math.floor(secs % 60);
            return `${mins}:${remainingSecs < 10 ? '0' : ''}${remainingSecs}`;
        }

        function updateHomePlayState(playing) {
            const heroVinylWrapper = document.getElementById('heroVinylWrapper');
            if (playing) {
                if (homePlayIcon) homePlayIcon.classList.add('hidden');
                if (homePauseIcon) homePauseIcon.classList.remove('hidden');
                if (homeVinylWrapper) homeVinylWrapper.classList.add('playing');
                if (heroVinylWrapper) heroVinylWrapper.classList.add('playing');
                
                // Show equalizers on the active track item on the homepage
                document.querySelectorAll('.ep-track-item').forEach(item => {
                    const playIndicator = item.querySelector('.play-small');
                    const playingBars = item.querySelector('.playing-bars');
                    if (item.classList.contains('active')) {
                        if (playIndicator) playIndicator.classList.add('hidden');
                        if (playingBars) playingBars.classList.remove('hidden');
                    } else {
                        if (playIndicator) playIndicator.classList.remove('hidden');
                        if (playingBars) playingBars.classList.add('hidden');
                    }
                });
            } else {
                if (homePlayIcon) homePlayIcon.classList.remove('hidden');
                if (homePauseIcon) homePauseIcon.classList.add('hidden');
                if (homeVinylWrapper) homeVinylWrapper.classList.remove('playing');
                if (heroVinylWrapper) heroVinylWrapper.classList.remove('playing');
                
                // Hide equalizers, show play icons
                document.querySelectorAll('.ep-track-item').forEach(item => {
                    const playIndicator = item.querySelector('.play-small');
                    const playingBars = item.querySelector('.playing-bars');
                    if (playIndicator) playIndicator.classList.remove('hidden');
                    if (playingBars) playingBars.classList.add('hidden');
                });
            }
        }

        homePlayPauseBtn.addEventListener('click', () => {
            if (homeAudio.paused) {
                // If discography audio exists on this page and is playing, pause it to prevent overlapping sound
                const mainAudio = document.getElementById('mainAudio');
                if (mainAudio && !mainAudio.paused) {
                    mainAudio.pause();
                    if (typeof updatePlayState === 'function') updatePlayState(false);
                }
                
                homeAudio.play()
                    .then(() => updateHomePlayState(true))
                    .catch(err => {
                        console.log("Audio play deferred due to browser gesture policies: ", err);
                        showToast("Press play once more to start listening.");
                    });
            } else {
                homeAudio.pause();
                updateHomePlayState(false);
            }
        });

        homeAudio.addEventListener('timeupdate', () => {
            if (homeAudio.duration) {
                const progress = (homeAudio.currentTime / homeAudio.duration) * 100;
                if (homeProgressBar) homeProgressBar.style.width = `${progress}%`;
                if (homeCurrentTime) homeCurrentTime.innerText = formatHomeTime(homeAudio.currentTime);
            }
        });

        homeAudio.addEventListener('loadedmetadata', () => {
            if (homeDurationTime) homeDurationTime.innerText = formatHomeTime(homeAudio.duration);
        });

        homeAudio.addEventListener('ended', () => {
            updateHomePlayState(false);
            if (homeProgressBar) homeProgressBar.style.width = '0%';
            if (homeCurrentTime) homeCurrentTime.innerText = '0:00';
            
            // Autoplay next track on the EP for standard seamless experience
            const epTrackItems = document.querySelectorAll('.ep-track-item');
            if (epTrackItems.length > 0) {
                let activeIdx = -1;
                epTrackItems.forEach((el, idx) => {
                    if (el.classList.contains('active')) activeIdx = idx;
                });
                if (activeIdx !== -1) {
                    const nextIdx = (activeIdx + 1) % epTrackItems.length;
                    epTrackItems[nextIdx].click();
                }
            }
        });

        if (homeProgressContainer) {
            homeProgressContainer.addEventListener('click', (e) => {
                const containerWidth = homeProgressContainer.offsetWidth;
                const clickPosition = e.offsetX;
                const clickFraction = clickPosition / containerWidth;
                homeAudio.currentTime = clickFraction * homeAudio.duration;
            });
        }

        // Click listeners on epTrackItems
        const epTrackItems = document.querySelectorAll('.ep-track-item');
        if (epTrackItems.length > 0) {
            epTrackItems.forEach(item => {
                item.addEventListener('click', () => {
                    // Pause other players on the same page
                    const mainAudio = document.getElementById('mainAudio');
                    if (mainAudio && !mainAudio.paused) {
                        mainAudio.pause();
                        if (typeof updatePlayState === 'function') updatePlayState(false);
                    }

                    const audioSrc = item.getAttribute('data-audio-src');
                    const title = item.getAttribute('data-title');
                    const meta = item.getAttribute('data-meta');
                    const story = item.getAttribute('data-story');

                    // Set active visual state
                    epTrackItems.forEach(el => el.classList.remove('active'));
                    item.classList.add('active');

                    // Update UI elements on homepage
                    const homeTrackTitle = document.getElementById('homeTrackTitle');
                    if (homeTrackTitle) homeTrackTitle.innerText = title;

                    const homeTrackMeta = document.getElementById('homeTrackMeta');
                    if (homeTrackMeta) homeTrackMeta.innerText = meta;

                    const homeTrackStory = document.getElementById('homeTrackStory');
                    if (homeTrackStory) homeTrackStory.innerText = story;

                    const homeLabelTitle = document.getElementById('homeLabelTitle');
                    if (homeLabelTitle) homeLabelTitle.innerText = title;

                    const homePlayerSubtitle = document.getElementById('homePlayerSubtitle');
                    if (homePlayerSubtitle) homePlayerSubtitle.innerText = `Streaming: ${title} (Preview)`;

                    // Swap audio source & play
                    homeAudio.src = audioSrc;
                    homeAudio.play()
                        .then(() => updateHomePlayState(true))
                        .catch(err => {
                            console.log("Spotlight audio autoplay deferred: ", err);
                            updateHomePlayState(false);
                        });
                });
            });
        }
    }

    if (homeBuyTrackBtn) {
        homeBuyTrackBtn.addEventListener('click', () => {
            const epItem = {
                id: 'home-ep-digital',
                name: 'Home EP (Digital Album)',
                price: 'R75.00',
                numericPrice: 75.00,
                image: 'assets/photos/cover-home.jpg',
                quantity: 1,
                type: 'digital'
            };
            const existingIndex = cart.findIndex(item => item.id === epItem.id);
            if (existingIndex > -1) {
                cart[existingIndex].quantity += 1;
            } else {
                cart.push(epItem);
            }
            saveCartAndRefresh();
            if (typeof showToast === 'function') {
                showToast(`"Home EP (Digital Album)" added to your cart.`);
            }
            openCartDrawer();
        });
    }

    // --- Inject Discography Music Items (Vertical Tracklist Navigator) ---
    const tracklistVertical = document.getElementById('tracklistVertical');
    if (tracklistVertical) {
        tracklistVertical.innerHTML = '';
        musicData.forEach((track, index) => {
            const item = document.createElement('div');
            item.className = 'track-strip';
            if (index === 0) item.classList.add('active');
            
            item.innerHTML = `
                <div class="track-strip-thumb">
                    <img src="${track.cover}" alt="${track.title} Cover Art">
                </div>
                <span class="track-strip-num">${String(index + 1).padStart(2, '0')}</span>
                <span class="track-strip-title">${track.title}</span>
                <div class="track-wave">
                    <div class="track-wave-bar"></div>
                    <div class="track-wave-bar"></div>
                    <div class="track-wave-bar"></div>
                </div>
                <i data-lucide="chevron-right"></i>
            `;
            
            item.addEventListener('click', () => {
                selectTrack(track, true);
            });
            tracklistVertical.appendChild(item);
        });
    }

    // --- Inject Acting Portfolio cards into Prime Video Slider ---
    const actingGrid = document.getElementById('actingGrid');
    if (actingGrid) {
        actingData.forEach(project => {
            const card = document.createElement('div');
            card.className = 'acting-card';
            card.innerHTML = `
                <img src="${project.thumbnail}" alt="${project.title}">
                <div class="acting-card-overlay">
                    <span class="year">${project.year} • ${project.category}</span>
                    <h4>${project.title}</h4>
                    <p class="role">${project.role}</p>
                </div>
            `;
            card.addEventListener('click', () => openVideoModal(project));
            actingGrid.appendChild(card);
        });
    }

    // --- Horizontal Acting Slider Navigation ---
    const slidePrevBtn = document.getElementById('slidePrevBtn');
    const slideNextBtn = document.getElementById('slideNextBtn');
    if (slidePrevBtn && slideNextBtn && actingGrid) {
        slidePrevBtn.addEventListener('click', () => {
            actingGrid.scrollBy({ left: -320, behavior: 'smooth' });
        });
        slideNextBtn.addEventListener('click', () => {
            actingGrid.scrollBy({ left: 320, behavior: 'smooth' });
        });
    }

    // --- Inject Merchandise Products with Filtering ---
    const merchGrid = document.getElementById('merchGrid');
    const merchTabs = document.getElementById('merchTabs');

    function renderMerch(collectionFilter = 'all') {
        if (!merchGrid) return;
        merchGrid.innerHTML = '';

        const filteredMerch = collectionFilter === 'all'
            ? merchData
            : merchData.filter(item => item.collection === collectionFilter);

        filteredMerch.forEach(item => {
            const product = document.createElement('div');
            product.className = 'merch-item';
            product.innerHTML = `
                <div class="merch-img">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="merch-details">
                    <div>
                        <span class="merch-collection-tag">${item.collection} Collection</span>
                        <h3>${item.name}</h3>
                        <p class="merch-price">${item.price}</p>
                    </div>
                    <button class="add-merch-btn" aria-label="Quick View product">
                        <i data-lucide="eye"></i>
                    </button>
                </div>
            `;
            product.addEventListener('click', () => openProductModal(item));
            merchGrid.appendChild(product);
        });

        // Reinitialize Lucide icons for any dynamic icons loaded
        if (window.lucide) {
            lucide.createIcons();
        }
    }

    // Attach click handlers for collection filter tabs
    if (merchTabs) {
        const tabButtons = merchTabs.querySelectorAll('.merch-tab-btn');
        tabButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                tabButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const collection = btn.getAttribute('data-collection');
                renderMerch(collection);
            });
        });
    }

    // Initial render with smart collection URL parameter parsing
    const urlParams = new URLSearchParams(window.location.search);
    const collectionParam = urlParams.get('collection');
    if (merchGrid) {
        let activeCollection = 'all';
        if (collectionParam) {
            const tabButtons = merchTabs ? merchTabs.querySelectorAll('.merch-tab-btn') : [];
            let tabFound = false;
            tabButtons.forEach(btn => {
                const colAttr = btn.getAttribute('data-collection');
                if (colAttr && (colAttr.toLowerCase() === collectionParam.toLowerCase() || 
                    colAttr.replace(/['"]/g, '').toLowerCase() === collectionParam.toLowerCase())) {
                    tabButtons.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    activeCollection = colAttr;
                    tabFound = true;
                }
            });
            if (tabFound) {
                renderMerch(activeCollection);
            } else {
                renderMerch('all');
            }
        } else {
            renderMerch('all');
        }
    } else {
        renderMerch('all');
    }

    // --- Audio Player Controls & Custom Logic ---
    const mainAudio = document.getElementById('mainAudio');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const playIcon = document.getElementById('playIcon');
    const pauseIcon = document.getElementById('pauseIcon');
    const playerImg = document.getElementById('playerImg');
    const playerTitle = document.getElementById('playerTitle');
    const progressContainer = document.getElementById('progressContainer');
    const progressBar = document.getElementById('progressBar');
    const currentTimeEl = document.getElementById('currentTime');
    const durationTimeEl = document.getElementById('durationTime');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const buyTrackBtn = document.getElementById('buyTrackBtn');

    let currentTrackIndex = 0;

    function selectTrack(track, shouldPlay = false) {
        if (!mainAudio) return;
        currentTrackIndex = musicData.findIndex(t => t.id === track.id);
        
        mainAudio.src = track.audio;
        if (playerImg) playerImg.src = track.cover;
        if (playerTitle) playerTitle.innerText = track.title;
        
        const playerArtist = document.getElementById('playerArtist');
        if (playerArtist) playerArtist.innerText = track.artist;
        
        const vinylLabelTitle = document.getElementById('vinylLabelTitle');
        if (vinylLabelTitle) vinylLabelTitle.innerText = track.title;
        
        const spotlightCategory = document.getElementById('spotlightCategory');
        if (spotlightCategory) spotlightCategory.innerText = track.category || 'Single Release';
        
        const spotlightStory = document.getElementById('spotlightStory');
        if (spotlightStory) spotlightStory.innerText = track.story || '';
        
        const spotlightLyrics = document.getElementById('spotlightLyrics');
        if (spotlightLyrics) spotlightLyrics.innerText = track.lyrics || '';
        
        // Highlight in tracklist vertical navigator
        document.querySelectorAll('.track-strip').forEach((strip, idx) => {
            if (idx === currentTrackIndex) {
                strip.classList.add('active');
            } else {
                strip.classList.remove('active');
                strip.classList.remove('playing');
            }
        });
        
        updateBuyTrackButton(track);
        
        if (shouldPlay) {
            mainAudio.play()
                .then(() => updatePlayState(true))
                .catch(err => {
                    console.log("Audio play error: ", err);
                    updatePlayState(false);
                });
        } else {
            updatePlayState(false);
        }
    }

    function playTrack(track) {
        selectTrack(track, true);
    }

    function togglePlay() {
        if (!mainAudio) return;
        if (mainAudio.paused) {
            mainAudio.play()
                .then(() => updatePlayState(true))
                .catch(err => console.log("Audio play error: ", err));
        } else {
            mainAudio.pause();
            updatePlayState(false);
        }
    }

    function updatePlayState(playing) {
        if (!playIcon || !pauseIcon) return;
        const discVinylWrapper = document.getElementById('discVinylWrapper');
        
        if (playing) {
            playIcon.classList.add('hidden');
            pauseIcon.classList.remove('hidden');
            if (discVinylWrapper) discVinylWrapper.classList.add('playing');
            
            document.querySelectorAll('.track-strip').forEach((strip, idx) => {
                if (idx === currentTrackIndex) {
                    strip.classList.add('playing');
                } else {
                    strip.classList.remove('playing');
                }
            });
        } else {
            playIcon.classList.remove('hidden');
            pauseIcon.classList.add('hidden');
            if (discVinylWrapper) discVinylWrapper.classList.remove('playing');
            
            document.querySelectorAll('.track-strip').forEach(strip => {
                strip.classList.remove('playing');
            });
        }
    }

    function updateBuyTrackButton(track) {
        if (buyTrackBtn) {
            buyTrackBtn.innerHTML = `<i data-lucide="shopping-cart"></i> Buy track for ${track.price}`;
            if (window.lucide) lucide.createIcons();
        }
    }

    if (playPauseBtn) playPauseBtn.addEventListener('click', togglePlay);

    // Audio Next/Prev buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentTrackIndex = (currentTrackIndex - 1 + musicData.length) % musicData.length;
            selectTrack(musicData[currentTrackIndex], true);
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentTrackIndex = (currentTrackIndex + 1) % musicData.length;
            selectTrack(musicData[currentTrackIndex], true);
        });
    }

    // Audio time format helper
    function formatTime(secs) {
        if (isNaN(secs)) return '0:00';
        const mins = Math.floor(secs / 60);
        const remainingSecs = Math.floor(secs % 60);
        return `${mins}:${remainingSecs < 10 ? '0' : ''}${remainingSecs}`;
    }

    // Audio progress updates
    if (mainAudio) {
        mainAudio.addEventListener('timeupdate', () => {
            if (mainAudio.duration) {
                const progress = (mainAudio.currentTime / mainAudio.duration) * 100;
                if (progressBar) progressBar.style.width = `${progress}%`;
                if (currentTimeEl) currentTimeEl.innerText = formatTime(mainAudio.currentTime);
            }
        });

        mainAudio.addEventListener('loadedmetadata', () => {
            if (durationTimeEl) durationTimeEl.innerText = formatTime(mainAudio.duration);
        });

        mainAudio.addEventListener('ended', () => {
            updatePlayState(false);
            // Autoplay next track
            currentTrackIndex = (currentTrackIndex + 1) % musicData.length;
            selectTrack(musicData[currentTrackIndex], true);
        });
    }

    // Seek Timeline Click Support
    if (progressContainer && mainAudio) {
        progressContainer.addEventListener('click', (e) => {
            const containerWidth = progressContainer.offsetWidth;
            const clickPosition = e.offsetX;
            const clickFraction = clickPosition / containerWidth;
            mainAudio.currentTime = clickFraction * mainAudio.duration;
        });
    }

    // Player "Buy Track" Integration
    if (buyTrackBtn) {
        buyTrackBtn.addEventListener('click', () => {
            const currentTrack = musicData[currentTrackIndex];
            addDigitalTrackToCart(currentTrack);
        });
    }

    // Initialize first track if vertical tracklist exists
    if (document.getElementById('tracklistVertical') && musicData.length > 0) {
        selectTrack(musicData[0], false);
    }

    // --- Shopping Cart Logic ---
    const cartToggleBtnEl = document.getElementById('cartToggleBtn');
    const cartCloseBtn = document.getElementById('cartCloseBtn');
    const cartDrawer = document.getElementById('cartDrawer');
    const cartDrawerOverlay = document.getElementById('cartDrawerOverlay');
    const cartDrawerItems = document.getElementById('cartDrawerItems');
    const cartBadge = document.getElementById('cartBadge');
    
    // Open/Close Drawer
    function openCartDrawer() {
        cartDrawer.classList.add('open');
        renderCart();
    }
    function closeCartDrawer() {
        cartDrawer.classList.remove('open');
    }

    if (cartToggleBtnEl) cartToggleBtnEl.addEventListener('click', openCartDrawer);
    if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCartDrawer);
    if (cartDrawerOverlay) cartDrawerOverlay.addEventListener('click', closeCartDrawer);

    // Render cart item list
    function renderCart() {
        if (!cartDrawerItems) return;
        cartDrawerItems.innerHTML = '';
        
        let subtotal = 0;
        let totalItems = 0;

        if (cart.length === 0) {
            cartDrawerItems.innerHTML = `
                <div class="empty-cart-message">
                    <i data-lucide="shopping-cart"></i>
                    <p>Your shopping cart is empty.</p>
                </div>
            `;
            document.getElementById('cartSubtotal').innerText = 'R0.00';
            document.getElementById('cartShipping').innerText = 'R0.00';
            document.getElementById('cartTotal').innerText = 'R0.00';
            if (cartBadge) cartBadge.innerText = '0';
            lucide.createIcons();
            return;
        }

        cart.forEach((item, index) => {
            subtotal += item.numericPrice * item.quantity;
            totalItems += item.quantity;

            const card = document.createElement('div');
            card.className = 'cart-item';
            
            // Format option info
            let optionsText = '';
            if (item.type === 'merch') {
                const collectionPrefix = item.collection ? `${item.collection} | ` : '';
                optionsText = `${collectionPrefix}Size: ${item.size} | Color: ${item.color}`;
            } else {
                optionsText = `Digital Download (.wav + mp3)`;
            }

            card.innerHTML = `
                <div class="cart-item-img">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <div class="cart-item-options">${optionsText}</div>
                    <div class="cart-item-qty">
                        <button class="cart-item-qty-btn dec" data-index="${index}">-</button>
                        <span>${item.quantity}</span>
                        <button class="cart-item-qty-btn inc" data-index="${index}">+</button>
                    </div>
                </div>
                <div class="cart-item-right">
                    <p class="cart-item-price">R${(item.numericPrice * item.quantity).toFixed(2)}</p>
                    <button class="cart-item-remove" data-index="${index}">
                        <i data-lucide="trash-2"></i> Remove
                    </button>
                </div>
            `;
            cartDrawerItems.appendChild(card);
        });

        // Calculate eco-friendly shipping: free for digital-only, free over R1000, flat R60 otherwise.
        const merchOnly = cart.filter(i => i.type === 'merch');
        const shippingFee = (merchOnly.length === 0 || subtotal >= 1000) ? 0 : 60;
        const total = subtotal + shippingFee;

        // Render calculations
        document.getElementById('cartSubtotal').innerText = `R${subtotal.toFixed(2)}`;
        document.getElementById('cartShipping').innerText = shippingFee === 0 ? 'FREE' : `R${shippingFee.toFixed(2)}`;
        document.getElementById('cartTotal').innerText = `R${total.toFixed(2)}`;
        if (cartBadge) cartBadge.innerText = totalItems.toString();

        // Attach event listeners for cart action buttons
        attachCartListeners();
        lucide.createIcons();
    }

    function attachCartListeners() {
        document.querySelectorAll('.cart-item-qty-btn.inc').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index');
                cart[index].quantity += 1;
                saveCartAndRefresh();
            });
        });

        document.querySelectorAll('.cart-item-qty-btn.dec').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index');
                if (cart[index].quantity > 1) {
                    cart[index].quantity -= 1;
                } else {
                    cart.splice(index, 1);
                }
                saveCartAndRefresh();
            });
        });

        document.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const btnEl = e.target.closest('.cart-item-remove');
                const index = btnEl.getAttribute('data-index');
                if (index !== null && cart[index]) {
                    const removedName = cart[index].name;
                    cart.splice(index, 1);
                    saveCartAndRefresh();
                    if (typeof showToast === 'function') {
                        showToast(`"${removedName}" removed from cart.`);
                    }
                }
            });
        });
    }

    function saveCartAndRefresh() {
        localStorage.setItem('mc_cart', JSON.stringify(cart));
        renderCart();
    }

    // Helper to add digital music to cart
    function addDigitalTrackToCart(track) {
        // Check if track is already in cart
        const existingIndex = cart.findIndex(item => item.id === track.id);
        if (existingIndex > -1) {
            cart[existingIndex].quantity += 1;
        } else {
            cart.push({
                id: track.id,
                name: `${track.title} (Digital Single)`,
                price: track.price,
                numericPrice: track.numericPrice,
                image: track.cover,
                quantity: 1,
                type: 'digital'
            });
        }
        saveCartAndRefresh();
        if (typeof showToast === 'function') {
            showToast(`"${track.title}" added to your cart.`);
        }
        openCartDrawer();
    }

    // --- Product Quick-View Modal Logic ---
    const productModal = document.getElementById('productModal');
    const productModalOverlay = document.getElementById('productModalOverlay');
    const productModalCloseBtn = document.getElementById('productModalCloseBtn');
    
    const modalProductImg = document.getElementById('modalProductImg');
    const modalProductTitle = document.getElementById('modalProductTitle');
    const modalProductPrice = document.getElementById('modalProductPrice');
    const modalProductDesc = document.getElementById('modalProductDesc');
    const modalColorSwatches = document.getElementById('modalColorSwatches');
    const modalSizeButtons = document.getElementById('modalSizeButtons');
    const qtyInput = document.getElementById('qtyInput');
    const qtyIncBtn = document.getElementById('qtyIncBtn');
    const qtyDecBtn = document.getElementById('qtyDecBtn');
    const modalAddToCartBtn = document.getElementById('modalAddToCartBtn');

    let activeProduct = null;
    let selectedColor = '';
    let selectedSize = '';

    function openProductModal(item) {
        activeProduct = item;
        selectedColor = item.colors[0] ? item.colors[0].name : '';
        selectedSize = item.sizes[0] ? item.sizes[0] : '';
        qtyInput.value = 1;

        modalProductImg.src = item.image;
        modalProductTitle.innerText = item.name;
        modalProductPrice.innerText = item.price;
        modalProductDesc.innerText = item.description;

        // Render Collection tag
        const modalProductTag = document.getElementById('modalProductTag');
        if (modalProductTag) {
            modalProductTag.innerText = item.collection ? `${item.collection} Collection` : 'Merchandise';
        }

        // Render Color Options
        modalColorSwatches.innerHTML = '';
        const colorGroup = document.getElementById('colorOptionGroup');
        if (item.colors && item.colors.length > 0) {
            colorGroup.classList.remove('hidden');
            item.colors.forEach((color, i) => {
                const swatch = document.createElement('div');
                swatch.className = `color-swatch ${i === 0 ? 'active' : ''}`;
                swatch.style.backgroundColor = color.hex;
                swatch.setAttribute('title', color.name);
                swatch.addEventListener('click', () => {
                    document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
                    swatch.classList.add('active');
                    selectedColor = color.name;
                });
                modalColorSwatches.appendChild(swatch);
            });
        } else {
            colorGroup.classList.add('hidden');
        }

        // Render Size Options
        modalSizeButtons.innerHTML = '';
        const sizeGroup = document.getElementById('sizeOptionGroup');
        if (item.sizes && item.sizes.length > 0) {
            sizeGroup.classList.remove('hidden');
            item.sizes.forEach((size, i) => {
                const btn = document.createElement('button');
                btn.className = `size-btn ${i === 0 ? 'active' : ''}`;
                btn.innerText = size;
                btn.addEventListener('click', () => {
                    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    selectedSize = size;
                });
                modalSizeButtons.appendChild(btn);
            });
        } else {
            sizeGroup.classList.add('hidden');
        }

        // Reset add button state
        modalAddToCartBtn.innerHTML = `<i data-lucide="shopping-bag"></i> Add to Cart`;
        modalAddToCartBtn.className = 'modal-add-to-cart-btn';
        lucide.createIcons();

        productModal.classList.add('open');
    }

    function closeProductModal() {
        productModal.classList.remove('open');
        activeProduct = null;
    }

    if (productModalOverlay) productModalOverlay.addEventListener('click', closeProductModal);
    if (productModalCloseBtn) productModalCloseBtn.addEventListener('click', closeProductModal);

    // Quantity selectors inside modal
    if (qtyIncBtn) {
        qtyIncBtn.addEventListener('click', () => {
            const val = parseInt(qtyInput.value);
            if (val < 10) qtyInput.value = val + 1;
        });
    }
    if (qtyDecBtn) {
        qtyDecBtn.addEventListener('click', () => {
            const val = parseInt(qtyInput.value);
            if (val > 1) qtyInput.value = val - 1;
        });
    }

    // Modal Add To Cart
    if (modalAddToCartBtn) {
        modalAddToCartBtn.addEventListener('click', () => {
            if (!activeProduct) return;
            
            const quantity = parseInt(qtyInput.value);
            
            // Check if combination already in cart
            const existingIndex = cart.findIndex(item => 
                item.id === activeProduct.id && 
                item.color === selectedColor && 
                item.size === selectedSize
            );

            if (existingIndex > -1) {
                cart[existingIndex].quantity += quantity;
            } else {
                cart.push({
                    id: activeProduct.id,
                    name: activeProduct.name,
                    price: activeProduct.price,
                    numericPrice: activeProduct.numericPrice,
                    image: activeProduct.image,
                    color: selectedColor,
                    size: selectedSize,
                    quantity: quantity,
                    type: activeProduct.type,
                    collection: activeProduct.collection
                });
            }

            // Interactive "Added!" Feedback
            modalAddToCartBtn.innerHTML = `<i data-lucide="check"></i> Added successfully!`;
            modalAddToCartBtn.classList.add('added');
            lucide.createIcons();

            saveCartAndRefresh();
            if (typeof showToast === 'function') {
                showToast(`"${activeProduct.name}" added to your cart.`);
            }

            // Smooth close and slide open cart
            setTimeout(() => {
                closeProductModal();
                setTimeout(() => {
                    openCartDrawer();
                }, 300);
            }, 800);
        });
    }

    // --- Secure Stripe Checkout & Simulation ---
    const checkoutBtn = document.getElementById('checkoutBtn');
    const checkoutModal = document.getElementById('checkoutModal');
    const checkoutModalOverlay = document.getElementById('checkoutModalOverlay');
    const checkoutModalCloseBtn = document.getElementById('checkoutModalCloseBtn');
    const stripePaymentForm = document.getElementById('stripePaymentForm');
    const checkoutFormContainer = document.getElementById('checkoutFormContainer');
    const paymentSuccessScreen = document.getElementById('paymentSuccessScreen');
    const checkoutPayAmount = document.getElementById('checkoutPayAmount');
    const payBtnText = document.getElementById('payBtnText');
    const paySubmitBtn = document.getElementById('paySubmitBtn');
    const payBtnSpinner = document.getElementById('payBtnSpinner');
    
    const receiptOrderId = document.getElementById('receiptOrderId');
    const receiptAmount = document.getElementById('receiptAmount');
    const successCloseBtn = document.getElementById('successCloseBtn');

    // Open Checkout
    function handleCheckout() {
        if (cart.length === 0) return;
        
        let subtotal = 0;
        cart.forEach(item => {
            subtotal += item.numericPrice * item.quantity;
        });
        const merchOnly = cart.filter(i => i.type === 'merch');
        const shippingFee = (merchOnly.length === 0 || subtotal >= 1000) ? 0 : 60;
        const total = subtotal + shippingFee;

        checkoutPayAmount.innerText = `R${total.toFixed(2)}`;
        payBtnText.innerText = `Authorize & Pay R${total.toFixed(2)}`;

        closeCartDrawer();
        
        // Form resetting
        stripePaymentForm.reset();
        checkoutFormContainer.classList.remove('hidden');
        paymentSuccessScreen.classList.add('hidden');
        paySubmitBtn.disabled = false;
        payBtnSpinner.classList.add('hidden');
        payBtnText.classList.remove('hidden');

        checkoutModal.classList.add('open');
    }

    function closeCheckoutModal() {
        checkoutModal.classList.remove('open');
    }

    if (checkoutBtn) checkoutBtn.addEventListener('click', handleCheckout);
    if (checkoutModalOverlay) checkoutModalOverlay.addEventListener('click', closeCheckoutModal);
    if (checkoutModalCloseBtn) checkoutModalCloseBtn.addEventListener('click', closeCheckoutModal);
    if (successCloseBtn) successCloseBtn.addEventListener('click', () => {
        // Clear Cart on Successful purchase
        cart = [];
        saveCartAndRefresh();
        closeCheckoutModal();
    });

    // Credit Card inputs auto-formatting masks (Absolute VIP treatment)
    const cardNumberInput = document.getElementById('cardNumber');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', (e) => {
            let val = e.target.value.replace(/\D/g, '');
            let formatted = val.match(/.{1,4}/g);
            e.target.value = formatted ? formatted.join(' ') : '';
        });
    }

    const cardExpiryInput = document.getElementById('cardExpiry');
    if (cardExpiryInput) {
        cardExpiryInput.addEventListener('input', (e) => {
            let val = e.target.value.replace(/\D/g, '');
            if (val.length >= 2) {
                e.target.value = val.slice(0, 2) + '/' + val.slice(2, 4);
            } else {
                e.target.value = val;
            }
        });
    }

    const cardCvcInput = document.getElementById('cardCvc');
    if (cardCvcInput) {
        cardCvcInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '').slice(0, 4);
        });
    }

    // Payment Submit Form
    if (stripePaymentForm) {
        stripePaymentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Disable submit to prevent double-charging
            paySubmitBtn.disabled = true;
            payBtnSpinner.classList.remove('hidden');
            payBtnText.classList.add('hidden');

            // Simulate high-security Stripe API call
            setTimeout(() => {
                let subtotal = 0;
                cart.forEach(item => {
                    subtotal += item.numericPrice * item.quantity;
                });
                const merchOnly = cart.filter(i => i.type === 'merch');
                const shippingFee = (merchOnly.length === 0 || subtotal >= 1000) ? 0 : 60;
                const total = subtotal + shippingFee;

                // Set receipt information
                const randomOrderRef = 'MC-' + Math.floor(100000 + Math.random() * 900000);
                receiptOrderId.innerText = randomOrderRef;
                receiptAmount.innerText = `R${total.toFixed(2)}`;

                // Crossfade to Success screen
                checkoutFormContainer.classList.add('hidden');
                paymentSuccessScreen.classList.remove('hidden');
                
                // Track simulated analytic conversions if needed
                console.log(`[Analytics] Conversion event triggered. Order ${randomOrderRef} processed via simulated Stripe secure endpoint.`);
            }, 1800);
        });
    }

    // --- Acting Video Previews Modal Logic ---
    const videoModal = document.getElementById('videoModal');
    const videoModalOverlay = document.getElementById('videoModalOverlay');
    const videoModalCloseBtn = document.getElementById('videoModalCloseBtn');
    const videoModalTitle = document.getElementById('videoModalTitle');
    const videoModalDesc = document.getElementById('videoModalDesc');

    function openVideoModal(project) {
        videoModalTitle.innerText = project.title;
        videoModalDesc.innerText = project.description;
        videoModal.classList.add('open');
    }

    function closeVideoModal() {
        videoModal.classList.remove('open');
    }

    if (videoModalOverlay) videoModalOverlay.addEventListener('click', closeVideoModal);
    if (videoModalCloseBtn) videoModalCloseBtn.addEventListener('click', closeVideoModal);

    // Initial render of cart badge on page load
    renderCart();
});
