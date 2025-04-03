/*export function setupNavigation() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    const toggleButton = document.querySelector('.toggle-navbar');

    const highlightNav = () => {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    };

    // Highlight navigation on load and scroll
    highlightNav();
    window.addEventListener('scroll', highlightNav);

    // Toggle mobile menu
    toggleButton.addEventListener('click', () => {
        document.querySelector('nav ul').classList.toggle('show');
    });
}*/
export function setupNavigation() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav__link'); // Updated selector
    const toggleButton = document.querySelector('.toggle-navbar');
  
    const highlightNav = () => {
      let index = sections.length;
  
      while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
  
      if (index >= 0 && index < navLinks.length) { // Added bounds check
        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
      } else {
        console.warn('Index out of bounds for navLinks.');
      }
    };
  
    highlightNav(); // Initial call
    window.addEventListener('scroll', highlightNav);
  
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
          document.querySelector('nav ul').classList.toggle('show');
        });
      } else {
        console.error('Element with class "toggle-navbar" not found!');
      }
    }
    /*toggleButton.addEventListener('click', () => {
      document.querySelector('nav ul').classList.toggle('show');
    });*/
  