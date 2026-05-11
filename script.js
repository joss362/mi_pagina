const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {

    reveals.forEach((reveal) => {

        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        }

    });

}

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();


/* MENU RESPONSIVE */

const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {

    navLinks.classList.toggle('active');

});


/* CERRAR MENU AL HACER CLICK */

const navItems = document.querySelectorAll('.nav-links a');

navItems.forEach(item => {

    item.addEventListener('click', () => {

        navLinks.classList.remove('active');

    });

});