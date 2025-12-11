const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const cardList = document.querySelector('.card-list');
const heroSection = document.querySelector('.hero-section');
const allCards = document.querySelectorAll('.card');

const heroTitle = document.getElementById('hero-title');
const heroSubtitle = document.getElementById('hero-subtitle');
const heroDetail = document.getElementById('hero-detail');
// KINI ANG BUTTON PARA SA HERO SECTION
const mainDiscoverBtn = document.getElementById('mainDiscoverBtn'); 


const cardWidthWithMargin = 225; 
const cardsPerScroll = 3;

// --- Carousel Scrolling ---
nextBtn.addEventListener('click', () => {
    cardList.scrollBy({
        left: cardWidthWithMargin * cardsPerScroll, 
        behavior: 'smooth' 
    });
});

prevBtn.addEventListener('click', () => {
    cardList.scrollBy({
        left: -(cardWidthWithMargin * cardsPerScroll), 
        behavior: 'smooth'
    });
});

// --- Card Click Handler (Background and Text Update) ---
allCards.forEach(card => {
    
    // Ang event listener sa tibuok card (kay wala man ta'y button sulod sa card)
    card.addEventListener('click', () => {
        
        const newBgUrl = card.getAttribute('data-background');
        const newTitle = card.getAttribute('data-title');
        const newSubtitle = card.getAttribute('data-subtitle');
        const newDetail = card.getAttribute('data-detail');
        
        if (newBgUrl && heroTitle && heroSubtitle && heroDetail) {
            
            // Pag-ilis sa background (Assuming ang files naa ra sa samang folder sa HTML)
            heroSection.style.backgroundImage = `url(${newBgUrl})`;
            
            // Pag-ilis sa text content
            heroTitle.textContent = newTitle;
            heroSubtitle.textContent = newSubtitle;
            heroDetail.textContent = newDetail;
            
            // Pag-ilis sa Active Card State
            allCards.forEach(c => c.classList.remove('active-card'));
            card.classList.add('active-card');
            
            // LOGIC: Ipakita ang button pag-click
            if (mainDiscoverBtn) {
                mainDiscoverBtn.classList.add('visible'); 
            }
        }
        
        // I-scroll ang card nga gi-click aron ma-center sa view
        card.scrollIntoView({
            inline: 'center', 
            behavior: 'smooth'
        });
    });
});

// para di makita ang katong button sa iligan city na page
document.addEventListener('DOMContentLoaded', () => {
   
    if (mainDiscoverBtn) {
        mainDiscoverBtn.classList.remove('visible'); 
    }
});