// Function to push data to dataLayer
function trackSectionClick(eventLabel) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'home_sections',
        'click_text': eventLabel,  // The text of the clicked link
        'firebase_screen': 'Home'
    });
}

// Add event tracking to navigation links
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetSection = document.querySelector(this.getAttribute('href'));
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });

                // Push event to dataLayer
                trackSectionClick(this.textContent.trim());
            }
        });
    });
});
