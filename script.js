document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('theme-toggle');
    
    if(toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('inverted');
            
            // Update button text based on state
            const isInverted = document.body.classList.contains('inverted');
            toggleBtn.textContent = isInverted ? 'Standard Mode' : 'Inverted Mode';
        });
    }
    
    console.log('Iskender Design System Initialized.');
});
