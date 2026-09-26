// ===== Snow/Ice Particle System =====
class SnowSystem {
    constructor() {
        this.canvas = document.getElementById('snow-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.createParticles(120);
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles(count) {
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                radius: Math.random() * 2.5 + 0.5,
                speed: Math.random() * 0.8 + 0.2,
                opacity: Math.random() * 0.7 + 0.2,
                wind: (Math.random() - 0.5) * 0.3,
                isShiny: Math.random() > 0.85
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let p of this.particles) {
            p.y += p.speed;
            p.x += p.wind;

            if (p.y > this.canvas.height) {
                p.y = -10;
                p.x = Math.random() * this.canvas.width;
            }

            if (p.x > this.canvas.width) p.x = 0;
            if (p.x < 0) p.x = this.canvas.width;

            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = p.isShiny 
                ? `rgba(255, 255, 255, ${p.opacity})` 
                : `rgba(173, 216, 230, ${p.opacity})`;
            this.ctx.fill();

            // Twinkle effect
            if (p.isShiny && Math.random() > 0.97) {
                this.ctx.beginPath();
                this.ctx.arc(p.x, p.y, p.radius * 2, 0, Math.PI * 2);
                this.ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                this.ctx.fill();
            }
        }

        requestAnimationFrame(() => this.animate());
    }
}

// ===== 3D Tilt Effect for Flavor Cards =====
class TiltEffect {
    constructor() {
        this.cards = document.querySelectorAll('.flavor-card');
        this.init();
    }

    init() {
        this.cards.forEach(card => {
            card.addEventListener('mousemove', (e) => this.handleTilt(e, card));
            card.addEventListener('mouseleave', () => this.resetTilt(card));
        });
    }

    handleTilt(e, card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const tiltX = (y - centerY) / 20;
        const tiltY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-10px)`;

        // Shimmer position based on mouse
        const inner = card.querySelector('.flavor-shimmer');
        if (inner) {
            const shimmerX = (x / rect.width) * 100;
            inner.style.left = `${shimmerX}%`;
        }
    }

    resetTilt(card) {
        card.style.transform = '';
        const inner = card.querySelector('.flavor-shimmer');
        if (inner) {
            inner.style.left = '-100%';
        }
    }
}

// ===== Scroll-Triggered Animations =====
class ScrollAnimation {
    constructor() {
        this.sections = document.querySelectorAll('.section');
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        this.sections.forEach(section => {
            observer.observe(section);
        });
    }
}

// ===== Modal Logic =====
class ModalManager {
    constructor() {
        this.modal = document.getElementById('pix-modal');
        this.openBtn = document.getElementById('open-modal');
        this.closeBtn = document.getElementById('close-modal');
        this.init();
    }

    init() {
        if (this.openBtn) {
            this.openBtn.addEventListener('click', () => this.open());
        }
        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => this.close());
        }
        if (this.modal) {
            this.modal.addEventListener('click', (e) => {
                if (e.target === this.modal) {
                    this.close();
                }
            });
        }
    }

    open() {
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ===== Hero Title Letter Animation =====
class TitleAnimation {
    constructor() {
        this.init();
    }

    init() {
        // The title words animate via CSS, but add a subtle wave effect
        const titleWords = document.querySelectorAll('.title-word');
        titleWords.forEach((word, index) => {
            word.style.animationDelay = `${0.2 + index * 0.3}s`;
        });
    }
}

// ===== Cone Floating Animation =====
class ConeAnimation {
    constructor() {
        this.cone = document.getElementById('floating-cone');
        this.init();
    }

    init() {
        if (!this.cone) return;

        // Add slight random drift to the floating cone
        setInterval(() => {
            const driftX = (Math.random() - 0.5) * 30;
            const driftY = (Math.random() - 0.5) * 20;
            this.cone.style.transform = `translate(${driftX}px, ${driftY}px)`;
        }, 3000);
    }
}

// ===== Initialize Everything =====
document.addEventListener('DOMContentLoaded', () => {
    const snow = new SnowSystem();
    const tilt = new TiltEffect();
    const scrollAnim = new ScrollAnimation();
    const modal = new ModalManager();
    const titleAnim = new TitleAnimation();
    const coneAnim = new ConeAnimation();

    // Add entrance animation to nav
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.opacity = '0';
        navbar.style.transform = 'translateY(-20px)';
        navbar.style.transition = 'all 0.8s ease';
        setTimeout(() => {
            navbar.style.opacity = '1';
            navbar.style.transform = 'translateY(0)';
        }, 200);
    }

    // Staggered animation for flavor cards
    const flavorCards = document.querySelectorAll('.flavor-card');
    flavorCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.transition = 'all 0.6s ease';
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 800 + index * 150);
    });

    // Staggered animation for "How to buy" steps
    const howSteps = document.querySelectorAll('.how-step');
    howSteps.forEach((step, index) => {
        step.style.opacity = '0';
        step.style.transform = 'translateX(-30px)';
        step.style.transition = 'all 0.6s ease';
        setTimeout(() => {
            step.style.opacity = '1';
            step.style.transform = 'translateX(0)';
        }, 1000 + index * 200);
    });

    // Keyboard accessibility for modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.modal.classList.contains('active')) {
            modal.close();
        }
    });

    // Click on flavor card triggers modal
    flavorCards.forEach(card => {
        card.addEventListener('click', () => {
            modal.open();
        });
    });
});
