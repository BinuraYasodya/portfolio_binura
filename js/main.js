function trackSectionClick(eventCategory, eventLabel) {
    if (typeof gtag === 'function') {
        gtag('event', 'section_click', {
            'event_category': eventCategory,
            'event_label': eventLabel,
            'value': 1
        });
    }
}

// Add to filter buttons
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
                if (filter === 'All' || categories.includes(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });

            // Track event for filtering projects
            trackSectionClick('Project Filtering', filter); // Track the filter applied
        });
    });

    // Smooth scroll and GA event tracking
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetSection = document.querySelector(this.getAttribute('href'));
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });

                // Track navigation event
                trackSectionClick('Navigation', this.textContent.trim());
            }
        });
    });
});
