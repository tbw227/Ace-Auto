import { initMap } from './map.js';
import { setupNavigation } from './navbar.js';
import { openModal, closeModal } from './button-modal.js';

document.addEventListener('DOMContentLoaded', () => {
    initMap();
    setupNavigation();
});

/*
// public/main.js
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    const toggleButton = document.querySelector('.toggle-navbar');

    const highlightNav = () => {
        let index = sections.length;

        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
        
        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');

        toggleButton.addEventListener('click', () => {
            navLinks.classList.toggle('show'); //Toggle mobile menu visibility//
        });
    };

    highlightNav();
    window.addEventListener('scroll', highlightNav);
});
*/