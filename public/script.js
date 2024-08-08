
// scroll ke atas
document.querySelector('.scroll_ke_atas').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// comingsoon
document.querySelector('.hamburger').addEventListener('click', function () {
    const rightMenu = document.querySelector('.rightmenu');
    rightMenu.classList.toggle('open');
});

// sticky
document.addEventListener('scroll', function () {
    const logobiasa = document.querySelector('.logobiasa');
    const logosticky = document.querySelector('.logosticky');
    const stickyOffset = 100; // Change this value to the scroll position where you want the sticky header to appear

    if (window.scrollY > stickyOffset) {
        logobiasa.style.visibility = 'hidden';
        logosticky.style.visibility = 'visible';
    } else {
        logobiasa.style.visibility = 'visible';
        logosticky.style.visibility = 'hidden';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const section = document.getElementById('carousel-section');
    let currentIndex = 0;
    const slides = section.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const loadingBar = section.querySelector('#loading-bar');
    const slideDuration = 10000;

    function showSlide(index) {
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }

        const offset = -currentIndex * 100;
        section.querySelector('.slides').style.transform = `translateX(${offset}%)`;
        resetLoadingBar();
    }

    function resetLoadingBar() {
        loadingBar.style.transition = 'none';
        loadingBar.style.width = '0%';
        setTimeout(() => {
            loadingBar.style.transition = `width ${slideDuration}ms linear`;
            loadingBar.style.width = '100%';
        }, 50); // small delay to reset transition
    }

    section.querySelector('.next').addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    section.querySelector('.prev').addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    function autoSlide() {
        showSlide(currentIndex + 1);
    }

    setInterval(autoSlide, slideDuration); // Change slide every 10 seconds

    showSlide(currentIndex);
    resetLoadingBar(); // Start the loading bar animation
});

// script berita utama
const carousel = document.getElementById('carousel');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const cardWidth = carousel.offsetWidth / 3;

nextBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
});

// Scroll otomatis setiap 3 detik
setInterval(() => {
    if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
        carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
}, 3000);


//Menu Agenda (setelah virtual 360)
document.addEventListener('DOMContentLoaded', function () {
    const section = document.getElementById('menu-section');
    const menuItems = section.querySelectorAll('#menu li');
    const sections = section.querySelectorAll('.container > div');

    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');

            // Update sections visibility
            sections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.remove('hidden');
                } else {
                    section.classList.add('hidden');
                }
            });

            // Update active menu item
            menuItems.forEach(menuItem => {
                if (menuItem === this) {
                    menuItem.classList.add('active');
                } else {
                    menuItem.classList.remove('active');
                }
            });
        });
    });
});

// Pendidikan
class Slideshow {
    constructor(container) {
        this.container = container;
        this.slides = container.querySelectorAll('.slide');
        this.totalSlides = this.slides.length;
        this.currentSlide = 0;

        this.showSlide(this.currentSlide);

        container.querySelector('.next').addEventListener('click', () => this.nextSlide());
        container.querySelector('.prev').addEventListener('click', () => this.prevSlide());

        setInterval(() => this.nextSlide(), 3000);
    }

    showSlide(index) {
        if (index >= this.totalSlides) {
            this.currentSlide = 0;
        } else if (index < 0) {
            this.currentSlide = this.totalSlides - 1;
        } else {
            this.currentSlide = index;
        }
        const offset = -this.currentSlide * 100;
        this.container.querySelector('.slides').style.transform = `translateX(${offset}%)`;
    }

    nextSlide() {
        this.currentSlide++;
        this.showSlide(this.currentSlide);
    }

    prevSlide() {
        this.currentSlide--;
        this.showSlide(this.currentSlide);
    }
}

document.querySelectorAll('.slideshow-container').forEach(container => new Slideshow(container));