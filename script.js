document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileNav = document.querySelector('.mobile-nav');

    if (hamburgerMenu && mobileNav) {
        hamburgerMenu.addEventListener('click', () => {
            mobileNav.classList.toggle('open');
            hamburgerMenu.classList.toggle('active'); // Optional: for animating the hamburger icon
        });

        // Close mobile nav when a link is clicked
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('open');
                hamburgerMenu.classList.remove('active');
            });
        });
    }

    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Optional: Update URL hash without jumping
                history.pushState(null, null, targetId);
            }
        });
    });

    // Form handling for Cursussen page
    const cursusForm = document.getElementById('cursus-aanmeldformulier');
    if (cursusForm) {
        cursusForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Prevent default form submission

            const formMessage = document.getElementById('form-message');
            formMessage.style.display = 'none'; // Hide previous messages

            // Simple HTML5 validation check
            if (!cursusForm.checkValidity()) {
                // If form is not valid, the browser will show its default validation errors
                // We can add a custom message here if desired, but for now, rely on browser.
                formMessage.textContent = 'Vul alstublieft alle verplichte velden correct in.';
                formMessage.classList.add('error');
                formMessage.classList.remove('success');
                formMessage.style.display = 'block';
                return;
            }

            // Simulate form submission
            // In a real scenario, you'd send this data to a backend or a service like Formspree.
            // e.g., const response = await fetch(cursusForm.action, { method: 'POST', body: new FormData(cursusForm) });

            // For demonstration, simulate success after a short delay
            setTimeout(() => {
                formMessage.textContent = 'Bedankt voor uw aanmelding! We nemen binnen 2 werkdagen contact met u op.';
                formMessage.classList.add('success');
                formMessage.classList.remove('error');
                formMessage.style.display = 'block';
                cursusForm.reset(); // Clear the form
            }, 1000);
        });
    }

    // Form handling for Contact page
    const contactForm = document.getElementById('contactformulier');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Prevent default form submission

            const formMessage = contactForm.querySelector('#form-message');
            formMessage.style.display = 'none'; // Hide previous messages

            // Simple HTML5 validation check
            if (!contactForm.checkValidity()) {
                formMessage.textContent = 'Vul alstublieft alle verplichte velden correct in.';
                formMessage.classList.add('error');
                formMessage.classList.remove('success');
                formMessage.style.display = 'block';
                return;
            }

            // Simulate form submission
            setTimeout(() => {
                formMessage.textContent = 'Bedankt voor uw bericht! We nemen spoedig contact met u op.';
                formMessage.classList.add('success');
                formMessage.classList.remove('error');
                formMessage.style.display = 'block';
                contactForm.reset(); // Clear the form
            }, 1000);
        });
    }
});
---
