// Обработка формы контактов
document.querySelector('.contact-form')?.addEventListener('submit', e => {
  e.preventDefault();
  alert('Сообщение отправлено!');
  e.target.reset();
}); 