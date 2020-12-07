// Toggle hamburger
document.querySelector('input[type="checkbox"]').addEventListener('click', () => {
  document.querySelector('.links').classList.toggle('show-menu');
  document.querySelector('.logo h1').classList.toggle('menu-toggle-color');
})
// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    })
  })
})