// nav bar mobile 

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navLinks.classList.toggle('active')
})

//


const themeSwitcher = document.getElementById('theme-switcher');
const root = document.documentElement;

themeSwitcher.addEventListener('click', () => {
    if (root.style.getPropertyValue('--backgorund-color') === '#f9f9f9') {
        root.style.setProperty('--backgorund-color', '#333')
        root.style.setProperty('--primary-color', '#fff')
        themeSwitcher.textContent = 'Light Mode'
    }
    else {
        root.style.setProperty('--backgorund-color', '#f9f9f9')
        root.style.setProperty('--primary-color', '#333')
        themeSwitcher.textContent = 'Dark Mode'
    }
})