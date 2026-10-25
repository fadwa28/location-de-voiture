/* ================================
   RAY-LY-CAR - Script principal
   ================================ */

// ---------- DONNÉES DES VÉHICULES ----------
// Les photos sont stockées localement dans /images et nommées par ID + nom
// du véhicule (ex : images/1-4x4-kia.jpg).
const cars = [
    {
        id: 1,
        name: '4x4 KIA ',
        category: 'luxe',
        categoryLabel: 'Luxe',
        price: 650,
        seats: 5,
        transmission: 'Automatique',
        fuel: 'Diesel',
        popular: true,
        badge: 'Populaire',
        image: 'images/1-4x4-kia.png'
    },
    {
        id: 2,
        name: 'CLIO ',
        category: 'ECONOM',
        categoryLabel: 'Economique',
        price: 350,
        seats: 5,
        transmission: 'Manuelle',
        fuel: 'Diesel',
        popular: true,
        badge: 'Populaire',
        image: 'images/2-clio.png'
    },
    {
        id: 3,
        name: 'CLIO',
        category: 'Économique',
        categoryLabel: 'Économique',
        price: 350,
        seats: 5,
        transmission: 'Manuelle',
        fuel: 'Diesel',
        popular: false,
        image: 'images/3-clio.png'
    },
    {
        id: 4,
        name: ' 4X4 DACIA STEPWAY',
        category: 'Économique',
        categoryLabel: 'Économique',
        price: 300,
        seats: 5,
        transmission: 'Manuelle',
        fuel: 'Diesel',
        popular: true,
        badge: 'Populaire',
        image: 'images/4-4x4-dasia-stepway.png'
    },
    {
        id: 5,
        name: 'DACIA  SANDERO',
        category: 'suv',
        categoryLabel: 'SUV',
        price: 250,
        seats: 5,
        transmission: 'Manuelle',
        fuel: 'Diesel',
        popular: true,
        badge: 'Populaire',
        image: 'images/5-dacia-sandero.png'
    },
    {
        id: 6,
        name: 'DACIA LOGAN',
        category: 'Économique',
        categoryLabel: 'Économique',
        price: 250,
        seats: 5,
        transmission: 'Manuelle',
        fuel: 'Diesel',
        popular: false,
        image: 'images/6-dacia-logan.png'
    },
    {
        id: 7,
        name: 'DACIA LOGAN',
        category: 'berline',
        categoryLabel: 'Berline',
        price: 250,
        seats: 5,
        transmission: 'Manuelle',
        fuel: 'Diesel',
        popular: true,
        badge: 'Populaire',
        image: 'images/7-dacia-logan.png'
    },
];

// ---------- GÉNÉRATION DES CARTES ----------
function carCardHTML(car) {
    const badgeHTML = car.badge
        ? `<span class="car-badge popular"><i class="fa-solid fa-fire"></i> ${car.badge}</span>`
        : '';
    return `
        <article class="car-card fade-up" data-category="${car.category}">
            <div class="car-image">
                ${badgeHTML}
                <button class="car-fav" data-id="${car.id}" aria-label="Ajouter aux favoris">
                    <i class="fa-regular fa-heart"></i>
                </button>
                <img src="${car.image}" alt="${car.name}" loading="lazy">
            </div>
            <div class="car-body">
                <div class="car-title">
                    <h3>${car.name}</h3>
                    <span class="car-category">${car.categoryLabel}</span>
                </div>
                <div class="car-specs">
                    <div class="car-spec"><i class="fa-solid fa-user"></i> ${car.seats} places</div>
                    <div class="car-spec"><i class="fa-solid fa-gears"></i> ${car.transmission}</div>
                    <div class="car-spec"><i class="fa-solid fa-gas-pump"></i> ${car.fuel}</div>
                </div>
                <div class="car-footer">
                    <div class="car-price">
                        <div class="amount">${car.price} <span>DH</span></div>
                        <div class="period">par jour</div>
                    </div>
                    <button class="btn btn-primary car-btn" data-id="${car.id}">
                        Réserver
                    </button>
                </div>
            </div>
        </article>
    `;
}

function renderCars() {
    const popularGrid = document.getElementById('popularGrid');
    const fleetGrid = document.getElementById('fleetGrid');

    const popular = cars.filter(c => c.popular).slice(0, 6);
    popularGrid.innerHTML = popular.map(carCardHTML).join('');
    fleetGrid.innerHTML = cars.map(carCardHTML).join('');
}

// ---------- FILTRES FLOTTE ----------
function initFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('#fleetGrid .car-card');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            cards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.classList.remove('hide');
                } else {
                    card.classList.add('hide');
                }
            });
        });
    });
}

// ---------- MENU MOBILE ----------
function initMobileMenu() {
    const toggle = document.getElementById('menuToggle');
    const menu = document.getElementById('navMenu');

    toggle.addEventListener('click', () => {
        menu.classList.toggle('open');
        const icon = toggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('open');
            const icon = toggle.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-xmark');
        });
    });
}

// ---------- NAVBAR SCROLL ----------
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ---------- LIEN ACTIF AU SCROLL ----------
function initActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + 120;
        sections.forEach(section => {
            if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
                const id = section.id;
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    });
}

// ---------- COMPTEUR STATISTIQUES ----------
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = +el.dataset.target;
                const duration = 1800;
                const step = target / (duration / 16);
                let current = 0;
                const update = () => {
                    current += step;
                    if (current < target) {
                        el.textContent = Math.floor(current).toLocaleString('fr-FR');
                        requestAnimationFrame(update);
                    } else {
                        el.textContent = target.toLocaleString('fr-FR');
                    }
                };
                update();
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
}

// ---------- TOAST ----------
function showToast(message) {
    const toast = document.getElementById('toast');
    const msg = document.getElementById('toastMsg');
    msg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3500);
}

// ---------- FORMULAIRES ----------
function initForms() {
    const bookingForm = document.getElementById('bookingForm');
    const contactForm = document.getElementById('contactForm');

    const today = new Date().toISOString().split('T')[0];
    const pickupInput = document.getElementById('pickupDate');
    const returnInput = document.getElementById('returnDate');
    if (pickupInput) pickupInput.min = today;
    if (returnInput) returnInput.min = today;

    if (pickupInput && returnInput) {
        pickupInput.addEventListener('change', () => {
            returnInput.min = pickupInput.value;
        });
    }

    if (bookingForm) {
        bookingForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = bookingForm.querySelector('button[type="submit"]');
            const originalHtml = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Envoi en cours...';

            try {
                const response = await fetch(bookingForm.action, {
                    method: 'POST',
                    body: new FormData(bookingForm),
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    showToast('Votre demande a bien été envoyée ! Nous vous contacterons très vite.');
                    bookingForm.reset();
                    document.getElementById('fleet').scrollIntoView({ behavior: 'smooth' });
                } else {
                    showToast('Erreur : la demande n\'a pas pu être envoyée. Merci de réessayer.');
                }
            } catch (err) {
                showToast('Erreur réseau : impossible d\'envoyer la demande.');
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalHtml;
            }
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Votre demande a été envoyée ! Nous vous recontacterons très vite.');
            contactForm.reset();
        });
    }

    document.addEventListener('click', (e) => {
        if (e.target.closest('.car-btn')) {
            showToast('Véhicule ajouté à votre réservation !');
            document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// ---------- FAVORIS ----------
function initFavorites() {
    document.addEventListener('click', (e) => {
        const favBtn = e.target.closest('.car-fav');
        if (favBtn) {
            e.preventDefault();
            e.stopPropagation();
            const icon = favBtn.querySelector('i');
            const isActive = favBtn.classList.toggle('active');
            icon.classList.toggle('fa-regular', !isActive);
            icon.classList.toggle('fa-solid', isActive);
            showToast(isActive ? 'Ajouté aux favoris' : 'Retiré des favoris');
        }
    });
}

// ---------- ANIMATIONS AU SCROLL ----------
function initScrollAnimations() {
    const elements = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
}

// ---------- INITIALISATION ----------
document.addEventListener('DOMContentLoaded', () => {
    renderCars();
    initFilters();
    initMobileMenu();
    initNavbarScroll();
    initActiveLink();
    initCounters();
    initForms();
    initFavorites();
    setTimeout(initScrollAnimations, 100);
});
