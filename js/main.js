/**
 * Portfolio Main JavaScript
 * Handles interactivity, animations, and dynamic content
 */

// ============================================
// DOM Content Loaded
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initTheme();
    initNavigation();
    initTypingEffect();
    initScrollAnimations();
    initCounterAnimation();
    initCursorFollower();
    initSmoothScroll();
    initFormHandler();
    setCurrentYear();
    initSkillIcons();
    initScrollProgress();
    initTiltEffect();
    initParallax();
    initMagneticButtons();
    initTextAnimations();
    initExpandableExperience();
    initEasterEggs();
    initConsoleMessage();
    initSectionEffects();
});

// ============================================
// Language / i18n System
// ============================================
const translations = {
    en: {
        // Navigation
        nav_home: "Home",
        nav_about: "About",
        nav_experience: "Experience",
        nav_education: "Education",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_blog: "Blog",
        nav_contact: "Contact",
        download_cv: "Download CV",

        // Hero
        hero_title: "Backend Engineer & Cloud Architect",
        hero_description: "Building high-performance distributed systems with Golang and Rust. Designing scalable cloud architectures on AWS and Kubernetes. Passionate about blockchain technology and system optimization.",
        get_in_touch: "Get in Touch",
        view_projects: "View Projects",
        scroll_explore: "Scroll to explore",

        // About
        about_title: "About Me",
        about_headline: "Backend Engineer & Cloud Architect",
        about_location: "based in Paris, France.",
        about_p1: "I specialize in designing scalable cloud architectures and building high-performance backend services. With strong expertise in Golang, AWS, and Kubernetes, I focus on delivering robust systems that handle real-world challenges at scale. I love Rust and enjoy developing with it for systems programming and blockchain projects.",
        about_p2: "Educated at CPGE in Le Havre and graduated from an engineering school in Tours. I'm passionate about blockchain technology and always exploring new ways to build efficient distributed systems. Outside of coding, I love playing football and padel, and I'm an avid traveler having explored 37 countries across Europe, Africa, and Asia.",
        years_exp: "Years Experience",
        countries_visited: "Countries Visited",
        lets_work: "Let's Work Together",
        download_resume: "Download Resume",

        // Section titles
        experience_title: "Work Experience",
        education_title: "Education",
        skills_title: "Technical Skills",
        projects_title: "Featured Projects",
        projects_subtitle: "Building scalable solutions that make an impact",
        blog_title: "Blog",
        contact_title: "Get In Touch",

        // Skills categories
        skills_backend: "Backend & Systems",
        skills_cloud: "Cloud & DevOps",
        skills_blockchain: "Blockchain & Web3",
        skills_databases: "Databases & Storage",

        // Projects
        visit_website: "Visit Website",
        project_twize_label: "B2B SaaS Platform",
        project_twize_desc: "Enterprise-grade B2B SaaS platform revolutionizing trip management for travel agencies. Features AI-powered itinerary generation and automated multi-currency billing.",
        project_poneglyph_label: "Enterprise Solution",
        project_poneglyph_desc: "Comprehensive enterprise fleet management platform built for scale. Unified cross-platform experience with real-time GPS tracking, intelligent route optimization, and advanced operational analytics dashboard.",
        project_rust_label: "Open Source Library",
        project_rust_desc: "Generic Rust library providing essential building blocks for backend services. Includes data types, OAuth2/authentication, authorization, push notifications, email handling, and HTTP server utilities.",

        // Blog
        read_article: "Read Article",
        min_read: "min read",

        // Contact
        contact_subtitle: "Let's build something amazing together",
        contact_email: "Email",
        contact_location: "Location",
        contact_social: "Social",
        contact_cta_title: "Ready to Start a Project?",
        contact_cta_desc: "I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.",
        lets_talk: "Let's Talk",
        available: "Available for new projects",

        // Footer
        rights_reserved: "All rights reserved.",
        built_with: "Built with HTML, CSS & JavaScript",
        footer_role: "Backend Engineer & Cloud Architect",
        footer_navigation: "Navigation",
        footer_connect: "Connect",

        // Blog
        blog_subtitle: "Deep dives into Solana, Golang, and software engineering",
        read_on_medium: "Read on Medium",
        view_all_articles: "Visit my Blog Posts",

        // Contact extended
        contact_headline: "Let's discuss your next big idea",
        contact_description: "Whether you need a scalable backend system, cloud architecture expertise, or blockchain solutions — I'm here to help turn your vision into reality. Let's connect and explore the possibilities!",
        connect_with_me: "Connect with me",

        // Skills categories
        skills_languages: "Languages",
        skills_cloud: "Cloud & Infrastructure",
        skills_containers: "Containers & Orchestration",
        skills_databases: "Databases & Messaging",
        skills_apis: "APIs & Protocols",
        skills_monitoring: "Monitoring & Observability",
        skills_blockchain: "Blockchain & Web3",

        // Values
        values_title: "Values I Care About",
        value_ownership: "Ownership",
        value_ownership_desc: "Taking full responsibility for projects and delivering quality results",
        value_growth: "Mutual Growth",
        value_growth_desc: "Growing together with teammates through knowledge sharing and collaboration",
        value_learning: "Continuous Learning",
        value_learning_desc: "Always curious, always learning new technologies and best practices",
        value_reliability: "Reliability",
        value_reliability_desc: "Being dependable and consistent in delivering commitments on time",

        // Certification
        certification_title: "Certification (In Progress)",
        preparing: "Preparing",

        // Projects
        view_github: "View GitHub Profile"
    },
    fr: {
        // Navigation
        nav_home: "Accueil",
        nav_about: "À propos",
        nav_experience: "Expérience",
        nav_education: "Formation",
        nav_skills: "Compétences",
        nav_projects: "Projets",
        nav_blog: "Blog",
        nav_contact: "Contact",
        download_cv: "Télécharger CV",

        // Hero
        hero_title: "Ingénieur Backend & Architecte Cloud",
        hero_description: "Création de systèmes distribués haute performance avec Golang et Rust. Conception d'architectures cloud évolutives sur AWS et Kubernetes. Passionné par la blockchain et l'optimisation des systèmes.",
        get_in_touch: "Me Contacter",
        view_projects: "Voir les Projets",
        scroll_explore: "Défiler pour explorer",

        // About
        about_title: "À Propos",
        about_headline: "Ingénieur Backend & Architecte Cloud",
        about_location: "basé à Paris, France.",
        about_p1: "Je me spécialise dans la conception d'architectures cloud évolutives et la création de services backend haute performance. Avec une forte expertise en Golang, AWS et Kubernetes, je me concentre sur la livraison de systèmes robustes capables de gérer des défis réels à grande échelle. J'adore Rust et j'aime développer avec pour la programmation système et les projets blockchain.",
        about_p2: "Formé en CPGE au Havre et diplômé d'une école d'ingénieurs à Tours. Je suis passionné par la technologie blockchain et j'explore toujours de nouvelles façons de construire des systèmes distribués efficaces. En dehors du code, j'aime jouer au football et au padel, et je suis un grand voyageur ayant exploré 37 pays en Europe, Afrique et Asie.",
        years_exp: "Années d'Expérience",
        countries_visited: "Pays Visités",
        lets_work: "Travaillons Ensemble",
        download_resume: "Télécharger CV",

        // Section titles
        experience_title: "Expérience Professionnelle",
        education_title: "Formation",
        skills_title: "Compétences Techniques",
        projects_title: "Projets Phares",
        projects_subtitle: "Construire des solutions évolutives qui font la différence",
        blog_title: "Blog",
        contact_title: "Me Contacter",

        // Skills categories
        skills_backend: "Backend & Systèmes",
        skills_cloud: "Cloud & DevOps",
        skills_blockchain: "Blockchain & Web3",
        skills_databases: "Bases de Données & Stockage",

        // Projects
        visit_website: "Visiter le Site",
        project_twize_label: "Plateforme B2B SaaS",
        project_twize_desc: "Plateforme B2B SaaS de niveau entreprise révolutionnant la gestion des voyages pour les agences. Génération d'itinéraires par IA et facturation multi-devises automatisée.",
        project_poneglyph_label: "Solution Entreprise",
        project_poneglyph_desc: "Plateforme complète de gestion de flotte d'entreprise conçue pour l'échelle. Expérience multiplateforme unifiée avec suivi GPS en temps réel, optimisation intelligente des itinéraires et tableau de bord analytique avancé.",
        project_rust_label: "Bibliothèque Open Source",
        project_rust_desc: "Bibliothèque Rust générique fournissant des blocs de construction essentiels pour les services backend. Inclut types de données, OAuth2/authentification, autorisation, notifications push, gestion d'emails et utilitaires serveur HTTP.",

        // Blog
        read_article: "Lire l'Article",
        min_read: "min de lecture",

        // Contact
        contact_subtitle: "Construisons quelque chose d'incroyable ensemble",
        contact_email: "Email",
        contact_location: "Localisation",
        contact_social: "Réseaux",
        contact_cta_title: "Prêt à Démarrer un Projet ?",
        contact_cta_desc: "Je suis toujours ouvert à discuter de nouvelles opportunités, de projets intéressants, ou simplement à parler de technologie.",
        lets_talk: "Discutons",
        available: "Disponible pour de nouveaux projets",

        // Footer
        rights_reserved: "Tous droits réservés.",
        built_with: "Créé avec HTML, CSS & JavaScript",
        footer_role: "Ingénieur Backend & Architecte Cloud",
        footer_navigation: "Navigation",
        footer_connect: "Réseaux",

        // Blog
        blog_subtitle: "Plongées approfondies dans Solana, Golang et le génie logiciel",
        read_on_medium: "Lire sur Medium",
        view_all_articles: "Visiter mes articles",

        // Contact extended
        contact_headline: "Discutons de votre prochaine grande idée",
        contact_description: "Que vous ayez besoin d'un système backend évolutif, d'une expertise en architecture cloud ou de solutions blockchain — je suis là pour transformer votre vision en réalité. Connectons-nous et explorons les possibilités !",
        connect_with_me: "Me contacter",

        // Skills categories
        skills_languages: "Langages",
        skills_cloud: "Cloud & Infrastructure",
        skills_containers: "Conteneurs & Orchestration",
        skills_databases: "Bases de Données & Messaging",
        skills_apis: "APIs & Protocoles",
        skills_monitoring: "Monitoring & Observabilité",
        skills_blockchain: "Blockchain & Web3",

        // Values
        values_title: "Valeurs qui me tiennent à cœur",
        value_ownership: "Responsabilité",
        value_ownership_desc: "Prendre la pleine responsabilité des projets et livrer des résultats de qualité",
        value_growth: "Croissance Mutuelle",
        value_growth_desc: "Grandir ensemble avec les coéquipiers grâce au partage des connaissances et à la collaboration",
        value_learning: "Apprentissage Continu",
        value_learning_desc: "Toujours curieux, toujours apprendre de nouvelles technologies et meilleures pratiques",
        value_reliability: "Fiabilité",
        value_reliability_desc: "Être fiable et constant dans la livraison des engagements à temps",

        // Certification
        certification_title: "Certification (En Cours)",
        preparing: "En préparation",

        // Projects
        view_github: "Voir le Profil GitHub"
    }
};

let currentLanguage = localStorage.getItem('language') || 'en';

function initLanguage() {
    const langSelector = document.querySelector('.language-selector');
    const langToggle = document.getElementById('langToggle');
    const langOptions = document.querySelectorAll('.lang-option');

    if (!langSelector || !langToggle) return;

    // Apply saved language
    applyLanguage(currentLanguage);
    updateLangButton(currentLanguage);

    // Toggle dropdown
    langToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        langSelector.classList.toggle('open');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        langSelector.classList.remove('open');
    });

    // Language option click
    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.dataset.lang;
            currentLanguage = lang;
            localStorage.setItem('language', lang);

            applyLanguage(lang);
            updateLangButton(lang);

            // Update active state
            langOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');

            langSelector.classList.remove('open');
        });
    });
}

function applyLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key]) {
            el.textContent = t[key];
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

function updateLangButton(lang) {
    const langFlag = document.querySelector('.lang-btn .lang-flag');
    const langCode = document.querySelector('.lang-btn .lang-code');

    if (lang === 'fr') {
        langFlag.textContent = '🇫🇷';
        langCode.textContent = 'FR';
    } else {
        langFlag.textContent = '🇬🇧';
        langCode.textContent = 'EN';
    }

    // Update active option
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === lang);
    });
}

// ============================================
// Skill Icons Fallback
// ============================================
function initSkillIcons() {
    const skillIcons = document.querySelectorAll('.skill-icon img');
    skillIcons.forEach(img => {
        img.onerror = function() {
            // Replace broken image with a simple icon placeholder
            this.style.display = 'none';
            const parent = this.parentElement;
            if (!parent.querySelector('svg')) {
                parent.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 24px; height: 24px; color: var(--accent-primary);">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                </svg>`;
            }
        };
        // Trigger error check for already loaded/failed images
        if (img.complete && img.naturalHeight === 0) {
            img.onerror();
        }
    });
}

// ============================================
// Theme Toggle
// ============================================
function initTheme() {
    const themeToggle = document.querySelector('.theme-toggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // Get saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (!prefersDark.matches) {
        document.documentElement.setAttribute('data-theme', 'light');
    }

    themeToggle?.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Listen for system theme changes
    prefersDark.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        }
    });
}

// ============================================
// Navigation
// ============================================
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll behavior
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add scrolled class
        if (currentScroll > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }

        // Update active nav link
        updateActiveNavLink();

        lastScroll = currentScroll;
    });

    // Mobile menu toggle
    navToggle?.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu?.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle?.classList.remove('active');
            navMenu?.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
        if (navMenu?.classList.contains('active') &&
            !navMenu.contains(e.target) &&
            !navToggle?.contains(e.target)) {
            navToggle?.classList.remove('active');
            navMenu?.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (window.pageYOffset >= sectionTop &&
            window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ============================================
// Typing Effect (disabled for cleaner design)
// ============================================
function initTypingEffect() {
    // Typing effect disabled for a cleaner, more professional look
    return;
}

// ============================================
// Scroll Animations (Intersection Observer)
// ============================================
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Stagger children if applicable
                if (entry.target.classList.contains('stagger-children')) {
                    const children = entry.target.children;
                    Array.from(children).forEach((child, index) => {
                        child.style.transitionDelay = `${index * 0.1}s`;
                    });
                }
            }
        });
    }, observerOptions);

    // Add animation classes to elements
    const animateElements = [
        { selector: '.section-header', class: 'fade-in' },
        { selector: '.about-image', class: 'fade-in-left' },
        { selector: '.about-text', class: 'fade-in-right' },
        { selector: '.timeline-item', class: 'fade-in' },
        { selector: '.skill-category', class: 'scale-in' },
        { selector: '.project-card', class: 'fade-in' },
        { selector: '.blog-card', class: 'fade-in' },
        { selector: '.contact-info', class: 'fade-in-left' },
        { selector: '.contact-form', class: 'fade-in-right' },
        { selector: '.education-card', class: 'fade-in' }
    ];

    animateElements.forEach(({ selector, class: className }) => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add(className);
            observer.observe(el);
        });
    });

    // Skills grid stagger
    const skillsGrids = document.querySelectorAll('.skill-items');
    skillsGrids.forEach(grid => {
        grid.classList.add('stagger-children');
        observer.observe(grid);
    });
}

// ============================================
// Counter Animation
// ============================================
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number[data-count]');

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    const step = target / (duration / 16);

    let current = 0;

    const updateCounter = () => {
        current += step;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };

    updateCounter();
}

// ============================================
// Custom Cursor
// ============================================
function initCursorFollower() {
    const cursor = document.querySelector('.cursor-follower');
    if (!cursor || window.matchMedia('(max-width: 768px)').matches) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.classList.add('visible');
    });

    document.addEventListener('mouseleave', () => {
        cursor.classList.remove('visible');
    });

    // Interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .skill-item, .project-card, .blog-card');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    // Smooth cursor animation
    function animateCursor() {
        const ease = 0.15;

        cursorX += (mouseX - cursorX) * ease;
        cursorY += (mouseY - cursorY) * ease;

        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;

        requestAnimationFrame(animateCursor);
    }

    animateCursor();
}

// ============================================
// Smooth Scroll
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// Form Handler
// ============================================
function initFormHandler() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;

        // Show loading state
        submitBtn.innerHTML = `
            <span class="dots-loader">
                <span></span>
                <span></span>
                <span></span>
            </span>
            Sending...
        `;
        submitBtn.disabled = true;

        try {
            const formData = new FormData(form);
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Success
                submitBtn.innerHTML = `
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Message Sent!
                `;
                submitBtn.classList.add('success');
                form.reset();

                // Reset button after 3 seconds
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.classList.remove('success');
                    submitBtn.disabled = false;
                }, 3000);
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            // Error
            submitBtn.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
                Error. Try Again
            `;
            submitBtn.classList.add('error');

            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.classList.remove('error');
                submitBtn.disabled = false;
            }, 3000);
        }
    });
}

// ============================================
// Set Current Year
// ============================================
function setCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// ============================================
// Utility Functions
// ============================================

// Debounce function
function debounce(func, wait = 20) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ============================================
// Optional: Skill icon fallback
// ============================================
document.querySelectorAll('.skill-icon img').forEach(img => {
    img.addEventListener('error', function() {
        // Replace with a generic icon if image fails to load
        this.parentElement.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 24px; height: 24px; color: var(--text-muted);">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
        `;
    });
});

// ============================================
// Scroll Progress Indicator
// ============================================
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = `${scrollPercent}%`;
    });
}

// ============================================
// 3D Tilt Effect on Cards
// ============================================
function initTiltEffect() {
    const cards = document.querySelectorAll('.project-card, .skill-category, .value-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
        });
    });
}

// ============================================
// Parallax Effect
// ============================================
function initParallax() {
    const parallaxElements = document.querySelectorAll('.gradient-orb, .hero-bg');

    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;

        parallaxElements.forEach(el => {
            const speed = el.dataset.speed || 0.5;
            el.style.transform = `translateY(${scrollY * speed}px)`;
        });
    });

    // Mouse parallax for hero
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');

    if (hero && heroContent) {
        hero.addEventListener('mousemove', (e) => {
            const rect = hero.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            const orbs = document.querySelectorAll('.gradient-orb');
            orbs.forEach((orb, index) => {
                const depth = (index + 1) * 20;
                orb.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
            });
        });
    }
}

// ============================================
// Magnetic Button Effect
// ============================================
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .social-link');

    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });
}

// ============================================
// Text Reveal Animations
// ============================================
function initTextAnimations() {
    // Add staggered animation to skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.05}s`;
    });

    // Animate section titles on scroll
    const titles = document.querySelectorAll('.section-title');
    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('title-animated');
            }
        });
    }, { threshold: 0.5 });

    titles.forEach(title => titleObserver.observe(title));
}

// ============================================
// Enhanced Typing Effect
// ============================================
function typeWriter(element, texts, speed = 100, pause = 2000) {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            element.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            element.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = speed;

        if (isDeleting) {
            typeSpeed /= 2;
        }

        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = pause;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    type();
}

// ============================================
// Spotlight Effect on Cards
// ============================================
document.querySelectorAll('.project-card, .skill-category, .blog-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--spotlight-x', `${x}px`);
        card.style.setProperty('--spotlight-y', `${y}px`);
    });
});

// ============================================
// Intersection Observer for Timeline Animation
// ============================================
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('timeline-visible');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.timeline').forEach(timeline => {
    timelineObserver.observe(timeline);
});

// ============================================
// Add ripple effect to buttons
// ============================================
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const ripple = document.createElement('span');
        ripple.className = 'btn-ripple-effect';
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// ============================================
// Expandable Experience Cards
// ============================================
function initExpandableExperience() {
    const expandableItems = document.querySelectorAll('.timeline-item.expandable');

    expandableItems.forEach(item => {
        const content = item.querySelector('.timeline-content');
        const expandBtn = item.querySelector('.expand-btn');

        const toggleExpand = (e) => {
            // Don't toggle if clicking on links or tags
            if (e.target.closest('a') || e.target.closest('.tag')) return;

            const isExpanded = item.classList.contains('expanded');

            // Close all other expanded items
            expandableItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('expanded');
                }
            });

            // Toggle current item
            item.classList.toggle('expanded');

            // Play sound effect (subtle click)
            if (!isExpanded) {
                playClickSound();
            }
        };

        content.addEventListener('click', toggleExpand);
    });
}

function playClickSound() {
    // Create a subtle click sound using Web Audio API
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.value = 600;
        oscillator.type = 'sine';
        gainNode.gain.value = 0.1;
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
        // Audio not supported, silently fail
    }
}

// ============================================
// Easter Eggs & Hidden Messages
// ============================================
function initEasterEggs() {
    // Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
    let konamiIndex = 0;

    // Track achievements
    const achievements = {
        konami: false,
        explorer: false,
        reader: false,
        clicker: false,
        scroller: false
    };

    // Konami code listener
    document.addEventListener('keydown', (e) => {
        if (e.code === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                triggerMatrixRain();
                achievements.konami = true;
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    // Triple click on logo triggers secret
    const logo = document.querySelector('.nav-logo');
    let clickCount = 0;
    let clickTimer = null;

    logo?.addEventListener('click', (e) => {
        e.preventDefault();
        clickCount++;
        clearTimeout(clickTimer);

        if (clickCount >= 3) {
            showSecretMessage();
            achievements.explorer = true;
            clickCount = 0;
        } else {
            clickTimer = setTimeout(() => clickCount = 0, 500);
        }
    });

    // Hidden corner trigger (bottom right)
    const hiddenTrigger = document.getElementById('hiddenTrigger');
    let cornerClicks = 0;

    hiddenTrigger?.addEventListener('click', () => {
        cornerClicks++;
        if (cornerClicks >= 5) {
            document.body.classList.add('rainbow-mode');
            setTimeout(() => document.body.classList.remove('rainbow-mode'), 5000);
            cornerClicks = 0;
        }
    });

    // Scroll to bottom achievement
    let scrolledToBottom = false;
    window.addEventListener('scroll', () => {
        if (!scrolledToBottom && (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
            scrolledToBottom = true;
            if (!achievements.scroller) {
                achievements.scroller = true;
            }
        }
    });

    // Type "hello" anywhere
    let typedKeys = '';
    document.addEventListener('keypress', (e) => {
        typedKeys += e.key.toLowerCase();
        if (typedKeys.includes('hello')) {
            typedKeys = '';
        }
        if (typedKeys.includes('hire')) {
            document.querySelector('.hero-name')?.classList.add('rainbow-border');
            typedKeys = '';
        }
        if (typedKeys.length > 20) typedKeys = typedKeys.slice(-10);
    });

    // Click on specific skill 10 times
    const golangSkill = document.querySelector('.skill-item:first-child');
    let skillClicks = 0;

    document.querySelectorAll('.skill-item').forEach(skill => {
        skill.addEventListener('click', () => {
            skillClicks++;
            if (skillClicks === 10 && !achievements.clicker) {
                achievements.clicker = true;
            }
        });
    });

    // Secret: Hold 'A' key + click on profile image to switch photo
    const profilePhoto = document.querySelector('.profile-photo');
    let isAKeyPressed = false;
    let isHat2 = false;

    // Track 'A' key press
    document.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === 'a') {
            isAKeyPressed = true;
        }
    });

    document.addEventListener('keyup', (e) => {
        if (e.key.toLowerCase() === 'a') {
            isAKeyPressed = false;
        }
    });

    // Click on profile photo while holding 'A'
    if (profilePhoto) {
        profilePhoto.style.cursor = 'pointer';
        profilePhoto.addEventListener('click', () => {
            if (isAKeyPressed) {
                isHat2 = !isHat2;
                profilePhoto.style.transition = 'transform 0.5s ease, opacity 0.3s ease';
                profilePhoto.style.transform = 'scale(0.8) rotate(10deg)';
                profilePhoto.style.opacity = '0';

                setTimeout(() => {
                    profilePhoto.src = isHat2 ? 'assets/profile/me_hat2.png' : 'assets/profile/me_hat1.png';
                    profilePhoto.style.transform = 'scale(1) rotate(0deg)';
                    profilePhoto.style.opacity = '1';
                }, 300);

                // Show fireworks and message
                if (isHat2) {
                    showUnlimitedEffect();
                }
            }
        });
    }
}

// Unlimited fireworks effect
function showUnlimitedEffect() {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'unlimited-overlay';
    overlay.innerHTML = `
        <div class="unlimited-message">✨ You are UNLIMITED! ✨</div>
        <div class="fireworks-container"></div>
    `;
    document.body.appendChild(overlay);

    // Create fireworks
    const container = overlay.querySelector('.fireworks-container');
    const colors = ['#ff6b35', '#f7931e', '#ffb347', '#60a5fa', '#a78bfa', '#f472b6', '#34d399'];

    function createFirework() {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = Math.random() * 100 + '%';
        firework.style.top = Math.random() * 100 + '%';

        // Create particles
        for (let i = 0; i < 12; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            particle.style.setProperty('--angle', (i * 30) + 'deg');
            firework.appendChild(particle);
        }

        container.appendChild(firework);

        setTimeout(() => firework.remove(), 1000);
    }

    // Launch fireworks repeatedly
    const fireworkInterval = setInterval(createFirework, 200);

    // Remove after 6 seconds
    setTimeout(() => {
        clearInterval(fireworkInterval);
        overlay.classList.add('fade-out');
        setTimeout(() => overlay.remove(), 500);
    }, 6000);
}

function triggerMatrixRain() {
    const container = document.getElementById('matrixRain');
    if (!container) return;

    container.classList.add('active');

    // Create matrix columns
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()アイウエオカキクケコ';
    const columns = Math.floor(window.innerWidth / 20);

    for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = `${i * 20}px`;
        column.style.animationDelay = `${Math.random() * 2}s`;
        column.style.animationDuration = `${3 + Math.random() * 4}s`;

        // Generate random string
        let text = '';
        for (let j = 0; j < 30; j++) {
            text += chars[Math.floor(Math.random() * chars.length)] + '<br>';
        }
        column.innerHTML = text;

        container.appendChild(column);
    }

    // Remove after animation
    setTimeout(() => {
        container.classList.remove('active');
        container.innerHTML = '';
    }, 5000);
}

function showSecretMessage() {
    const message = document.getElementById('secretMessage');
    if (message) {
        message.classList.add('active');
    }
}

function closeSecret() {
    const message = document.getElementById('secretMessage');
    if (message) {
        message.classList.remove('active');
    }
}

// Make closeSecret globally accessible
window.closeSecret = closeSecret;


// ============================================
// Console Easter Egg Message
// ============================================
function initConsoleMessage() {
    const styles = [
        'color: #60a5fa',
        'font-size: 24px',
        'font-weight: bold',
        'text-shadow: 2px 2px 4px rgba(0,0,0,0.3)'
    ].join(';');

    const subtitleStyles = [
        'color: #94a3b8',
        'font-size: 14px'
    ].join(';');

    const hintStyles = [
        'color: #4ade80',
        'font-size: 12px',
        'font-style: italic'
    ].join(';');

    console.log('%c👋 Hey there, curious developer!', styles);
    console.log('%cYou found the console. Nice debugging skills!', subtitleStyles);
    console.log('%c');
    console.log('%c💡 Hints:', 'color: #fbbf24; font-size: 14px; font-weight: bold');
    console.log('%c• Try the Konami Code (↑↑↓↓←→←→BA)', hintStyles);
    console.log('%c• Triple-click the logo', hintStyles);
    console.log('%c• Type "hello" or "hire" on your keyboard', hintStyles);
    console.log('%c• Scroll all the way down', hintStyles);
    console.log('%c• Click the bottom-right corner 5 times', hintStyles);
    console.log('%c');
    console.log('%c🚀 Built with passion by Ayoub Idel', 'color: #60a5fa; font-size: 12px');

    // Hidden console command
    window.unlockAll = () => {
        triggerMatrixRain();
        console.log('%c🎉 All secrets unlocked!', 'color: #4ade80; font-size: 16px; font-weight: bold');
    };
}

// ============================================
// Section Effects
// ============================================
function initSectionEffects() {
    // Add reveal animation to sections
    const sections = document.querySelectorAll('.section');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');

                // Add stagger animation to children
                const children = entry.target.querySelectorAll('.skill-category, .project-card, .blog-card, .value-card');
                children.forEach((child, index) => {
                    child.style.transitionDelay = `${index * 0.1}s`;
                    child.classList.add('card-visible');
                });
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => sectionObserver.observe(section));

    // Floating animation for hero elements
    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual) {
        let mouseX = 0;
        let mouseY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
            mouseY = (e.clientY / window.innerHeight - 0.5) * 20;
        });

        function animateHero() {
            if (heroVisual) {
                heroVisual.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
            }
            requestAnimationFrame(animateHero);
        }
        animateHero();
    }

    // Add glow effect on scroll for skills
    const skillsSection = document.querySelector('.skills');
    if (skillsSection) {
        window.addEventListener('scroll', () => {
            const rect = skillsSection.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const progress = 1 - (rect.top / window.innerHeight);
                skillsSection.style.setProperty('--scroll-progress', progress);
            }
        });
    }

    // About section image parallax
    const aboutImage = document.querySelector('.profile-photo');
    if (aboutImage) {
        window.addEventListener('scroll', () => {
            const rect = aboutImage.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
                aboutImage.style.transform = `scale(${1 + progress * 0.05})`;
            }
        });
    }

    // Blog cards hover sound
    document.querySelectorAll('.blog-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();

                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);

                oscillator.frequency.value = 440;
                oscillator.type = 'sine';
                gainNode.gain.value = 0.05;
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);

                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.05);
            } catch (e) {}
        });
    });
}

// ============================================
// Rainbow Mode CSS
// ============================================
const rainbowStyle = document.createElement('style');
rainbowStyle.textContent = `
    .rainbow-mode {
        animation: rainbow-bg 3s ease infinite;
    }
    @keyframes rainbow-bg {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
    .rainbow-mode .hero-name,
    .rainbow-mode .section-title,
    .rainbow-mode .nav-logo {
        animation: rainbow-text 2s ease infinite;
    }
    @keyframes rainbow-text {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(rainbowStyle);

// ============================================
// Contact Modal
// ============================================
function openContactModal() {
    const modal = document.getElementById('contactModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        // Track contact modal open
        if (typeof gtag !== 'undefined') {
            gtag('event', 'contact_open', {
                'event_category': 'engagement',
                'event_label': 'Contact Modal Opened'
            });
        }
    }
}

function closeContactModal() {
    const modal = document.getElementById('contactModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeContactModal();
    }
});

// ============================================
// Analytics Event Tracking
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Helper function to track events
    function trackEvent(category, action, label) {
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                'event_category': category,
                'event_label': label
            });
        }
    }

    // Track GitHub link clicks
    document.querySelectorAll('a[href*="github.com/pskshksh"]').forEach(link => {
        link.addEventListener('click', () => {
            trackEvent('social', 'github_click', 'GitHub Profile');
        });
    });

    // Track LinkedIn link clicks
    document.querySelectorAll('a[href*="linkedin.com/in/ayoubidel"]').forEach(link => {
        link.addEventListener('click', () => {
            trackEvent('social', 'linkedin_click', 'LinkedIn Profile');
        });
    });

    // Track Medium/Article clicks
    document.querySelectorAll('a[href*="medium.com/@pskshksh"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const articleTitle = link.closest('.article-card')?.querySelector('.article-title')?.textContent || 'Medium Article';
            trackEvent('content', 'article_click', articleTitle);
        });
    });

    // Track email clicks
    document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
        link.addEventListener('click', () => {
            trackEvent('contact', 'email_click', 'Email Contact');
        });
    });

    // Track project link clicks
    document.querySelectorAll('.project-link, .project-card a').forEach(link => {
        link.addEventListener('click', () => {
            const projectTitle = link.closest('.project-card')?.querySelector('.project-title')?.textContent || 'Project';
            trackEvent('projects', 'project_click', projectTitle);
        });
    });

    // Track "View All Projects" button
    document.querySelectorAll('a[href*="github.com/pskshksh"].btn').forEach(link => {
        link.addEventListener('click', () => {
            trackEvent('projects', 'view_all_projects', 'View All Projects Button');
        });
    });

    // Track "View All Articles" button
    document.querySelectorAll('.btn-rust-secondary').forEach(link => {
        if (link.href && link.href.includes('medium.com')) {
            link.addEventListener('click', () => {
                trackEvent('content', 'view_all_articles', 'View All Articles Button');
            });
        }
    });

    // Track navigation clicks
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            const section = link.getAttribute('data-i18n') || link.textContent;
            trackEvent('navigation', 'nav_click', section);
        });
    });

    // Track scroll depth
    let scrollDepths = [25, 50, 75, 100];
    let trackedDepths = [];

    window.addEventListener('scroll', () => {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);

        scrollDepths.forEach(depth => {
            if (scrollPercent >= depth && !trackedDepths.includes(depth)) {
                trackedDepths.push(depth);
                trackEvent('engagement', 'scroll_depth', `${depth}% scrolled`);
            }
        });
    });

    console.log('📊 Analytics tracking initialized');
});
