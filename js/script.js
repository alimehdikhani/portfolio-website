// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Back to top button
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '&#8593;';
backToTopBtn.className = 'back-to-top';
backToTopBtn.title = 'Back to top';
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.project-card, .skill-card, .contact-item, .form-group').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Typing effect for hero subtitle
const subtitle = document.querySelector('.hero .subtitle');
if (subtitle) {
    const text = subtitle.textContent;
    subtitle.textContent = '';
    let i = 0;
    const speed = 30;
    
    function typeWriter() {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    
    setTimeout(typeWriter, 1000);
}
