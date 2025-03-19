// Project Filtering
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.textContent;
            
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter projects
            projectCards.forEach(card => {
                const categories = card.dataset.categories.split(' ');
                if(filter === 'All' || categories.includes(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Smooth scroll and Google Analytics event tracking
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetSection = document.querySelector(this.getAttribute('href'));
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });

                // Send event to Google Analytics
                if (typeof gtag === 'function') {
                    gtag('event', 'home_sections', {
                        'event_category': 'Navigation',
                        'event_label': this.textContent.trim(),
                        'section_name': this.textContent.trim() // Custom Parameter
                    });
                }
            }
        });
    });
});
