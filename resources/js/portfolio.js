
class Portfolio {
    constructor() {
        this.init();
    }

    init() {
        this.setupScrollAnimations();
        this.setupSkillBars();
        this.setupNavbar();
        this.setupContactForm();
        this.setupMobileMenu();
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in-up').forEach(el => {
            observer.observe(el);
        });
    }

    setupSkillBars() {
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        document.querySelectorAll('.skill-bar').forEach(el => {
            skillObserver.observe(el);
        });
    }

    setupNavbar() {
        const navbar = document.getElementById('navbar');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('bg-gray-900/90');
                navbar.classList.remove('bg-white/10');
            } else {
                navbar.classList.remove('bg-gray-900/90');
                navbar.classList.add('bg-white/10');
            }
        });


        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    setupContactForm() {
        const contactForm = document.getElementById('contact-form');
        const submitBtn = document.getElementById('submit-btn');
        const formMessages = document.getElementById('form-messages');

        if (!contactForm) return;

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            await this.handleFormSubmission(contactForm, submitBtn, formMessages);
        });
    }

    async handleFormSubmission(form, submitBtn, messagesEl) {
        const originalText = submitBtn.innerHTML;
        

        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
        submitBtn.disabled = true;

        try {
            const formData = new FormData(form);
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                }
            });

            const data = await response.json();

            if (data.success) {
                this.showMessage(messagesEl, data.message, 'success');
                form.reset();
            } else {
                this.showMessage(messagesEl, data.message || 'Please fix the errors below.', 'error');
            }
        } catch (error) {
            this.showMessage(messagesEl, 'Sorry, there was an error sending your message. Please try again.', 'error');
        } finally {
    
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    }

    showMessage(element, message, type) {
        const baseClasses = 'p-4 rounded-lg border mb-4';
        const successClasses = 'bg-green-500/20 border-green-500/50 text-green-300';
        const errorClasses = 'bg-red-500/20 border-red-500/50 text-red-300';

        element.className = `${baseClasses} ${type === 'success' ? successClasses : errorClasses}`;
        element.textContent = message;
        element.classList.remove('hidden');


        if (type === 'success') {
            setTimeout(() => {
                element.classList.add('hidden');
            }, 5000);
        }
    }

    setupMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        if (!mobileMenuBtn || !mobileMenu) return;

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });


        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}


document.addEventListener('DOMContentLoaded', () => {
    new Portfolio();
}); 