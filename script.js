document.addEventListener('DOMContentLoaded', () => {

    // --- Nav Scroll ---
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });

    // --- Mobile Menu ---
    const toggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    toggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // --- Scroll Reveal ---
    const revealElements = document.querySelectorAll(
        '.section-header, .project-featured, .project-card, .about-headline, ' +
        '.about-body, .area, .skill-col, .insights-empty, .contact-text, .contact-links'
    );

    revealElements.forEach(el => el.classList.add('reveal'));

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));

    // --- Smooth Scroll ---
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
