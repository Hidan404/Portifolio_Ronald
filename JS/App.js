document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.navbar-nav li');
  navItems.forEach((item, index) => {
      item.style.setProperty('--animation-delay', `${index * 0.2}s`);
  });
});