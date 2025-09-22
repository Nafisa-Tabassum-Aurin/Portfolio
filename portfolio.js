// Set year in footer
document.getElementById('year').textContent = new Date().getFullYear();


// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => nav.classList.toggle('open'));


// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    nav.classList.remove('open');
  });
});


// Contact form demo handler
function handleContact(e) {
  e.preventDefault();
  const form = e.target;
  const msgEl = document.getElementById('form-msg');
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  if (!name || !email || !message) {
    msgEl.textContent = "⚠️ Please fill all fields.";
    return false;
  }
  msgEl.textContent =  "✅ Message sent successfully!";
  form.reset();
  return false;
}


// Floating chat pulse
const chatBtn = document.querySelector('.floating-chat');
setInterval(() => {
  chatBtn.style.transform = 'translateY(-3px) scale(1.05)';
  setTimeout(() => {
    chatBtn.style.transform = 'translateY(0) scale(1)';
  }, 500);
}, 3000);