// Function to open external pages in new tab
function openPage(url) {
    window.open(url, '_blank');
}

// DOM Content Loaded Event Listener
document.addEventListener('DOMContentLoaded', function() {
    // Get all card elements
    const cards = document.querySelectorAll('.card');
    
    // Add interactive hover effects to cards
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Add click effect
        card.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(-5px) scale(0.98)';
        });
        
        card.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
    });
    
    // Optional: Add keyboard navigation support
    cards.forEach((card, index) => {
        card.setAttribute('tabindex', '0');
        
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
    
    // Optional: Add loading animation completion log
    console.log('Amrita School of Biotechnology page loaded successfully!');
});
