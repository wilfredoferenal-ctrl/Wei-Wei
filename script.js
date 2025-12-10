const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const cardList = document.querySelector('.card-list');
const heroSection = document.querySelector('.hero-section');
const allCards = document.querySelectorAll('.card');

const heroTitle = document.getElementById('hero-title');
const heroSubtitle = document.getElementById('hero-subtitle');
const heroDetail = document.getElementById('hero-detail');

const cardWidthWithMargin = 225; 
const cardsPerScroll = 3;

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

allCards.forEach(card => {
    card.addEventListener('click', () => {
        
        const newBgUrl = card.getAttribute('data-background');
        const newTitle = card.getAttribute('data-title');
        const newSubtitle = card.getAttribute('data-subtitle');
        const newDetail = card.getAttribute('data-detail');
        
        if (newBgUrl && heroTitle && heroSubtitle && heroDetail) {
            
            heroSection.style.backgroundImage = url(${newBgUrl});
            
            heroTitle.textContent = newTitle;
            heroSubtitle.textContent = newSubtitle;
            heroDetail.textContent = newDetail;
            
            allCards.forEach(c => c.classList.remove('active-card'));
            card.classList.add('active-card');
        }
        
        // I-scroll ang card nga gi-click aron ma-center sa view
        card.scrollIntoView({
            inline: 'center', 
            behavior: 'smooth'
        });
    });
});

// PARA ANG Maria Cristina ang default background ug text
document.addEventListener('DOMContentLoaded', () => {
    const initialCard = document.querySelector('.card.active-card');
    
    if (initialCard && heroTitle && heroSubtitle && heroDetail) {
        
        const initialBg = initialCard.getAttribute('data-background');
        const initialTitle = initialCard.getAttribute('data-title');
        const initialSubtitle = initialCard.getAttribute('data-subtitle');
        const initialDetail = initialCard.getAttribute('data-detail');
        
        // I-set ang initial background ug text
        heroSection.style.backgroundImage = url({initialBg});
        heroTitle.textContent = initialTitle;
        heroSubtitle.textContent = initialSubtitle;
        heroDetail.textContent = initialDetail;
    }
});