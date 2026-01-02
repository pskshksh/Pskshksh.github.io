/**
 * Portfolio Main JavaScript
 * Handles interactivity, animations, and dynamic content
 */

// ============================================
// DOM Content Loaded
// ============================================
document.addEventListener('DOMContentLoaded', () => {
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
                showAchievement('🎮', 'Konami Master');
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
            showAchievement('🔍', 'Secret Finder');
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
            showAchievement('🌈', 'Rainbow Discoverer');
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
                showAchievement('📜', 'Deep Diver');
                achievements.scroller = true;
            }
        }
    });

    // Type "hello" anywhere
    let typedKeys = '';
    document.addEventListener('keypress', (e) => {
        typedKeys += e.key.toLowerCase();
        if (typedKeys.includes('hello')) {
            showAchievement('👋', 'Friendly Coder');
            typedKeys = '';
        }
        if (typedKeys.includes('hire')) {
            showAchievement('💼', 'Ready to Work!');
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
                showAchievement('⚡', 'Skill Enthusiast');
                achievements.clicker = true;
            }
        });
    });
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

function showAchievement(icon, text) {
    const achievement = document.getElementById('achievement');
    const achievementIcon = achievement?.querySelector('.achievement-icon');
    const achievementText = document.getElementById('achievementText');

    if (achievement && achievementIcon && achievementText) {
        achievementIcon.textContent = icon;
        achievementText.textContent = text;
        achievement.classList.add('show');

        // Play achievement sound
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.frequency.value = 800;
            oscillator.type = 'sine';
            gainNode.gain.value = 0.15;

            oscillator.start(audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.1);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            oscillator.stop(audioContext.currentTime + 0.3);
        } catch (e) {}

        setTimeout(() => {
            achievement.classList.remove('show');
        }, 4000);
    }
}

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
        showAchievement('🏆', 'Console Hacker');
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
