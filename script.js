// Simple interactivity: mobile nav toggle & year
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      mainNav.style.display = mainNav.style.display === 'block' ? '' : 'block';
    });
    // Close nav after clicking a link (mobile)
    mainNav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' && window.innerWidth <= 600) {
        mainNav.style.display = '';
      }
    });
  }
});
