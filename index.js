// Basic logic for the home page
document.addEventListener('DOMContentLoaded', () => {
    console.log('Premium Portfolio Page Loaded');
    
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            // Optional: add logout logic like clearing session storage
            console.log('Logging out...');
        });
    }
    
    // Search Functionality
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            alert(`'${query}'에 대한 검색 기능을 준비 중입니다. 곧 만나보실 수 있습니다!`);
            console.log(`Searching for: ${query}`);
            searchInput.value = '';
        } else {
            searchInput.focus();
        }
    }

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    // Add subtle reveal animations for hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(20px)';
        heroContent.style.transition = 'all 1s ease-out';
        
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
});
