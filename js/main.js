// IntersectionObserver для анимаций появления
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

// Бургер-меню для мобильных
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
if (burger && nav) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
  burger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') nav.classList.toggle('open');
  });
}