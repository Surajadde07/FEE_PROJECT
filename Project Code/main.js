//! HAMBURGER
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
        console.log("nav-togle is clicked");
    })
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}




var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter ++;
    if(counter > 4){
        counter = 1;
    }
},3000);

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.entertainme--------------------------nt-section, .footer__container, .footer__group`)
sr.reveal(`, .copyright`,{delay:700, origin:'bottom'})
sr.reveal(`.logos__img, .card, .pricing__card`,{interval: 100})
sr.reveal(`.video-content, .calculate__content`,{origin: 'left'})
sr.reveal(`.choose__content, .article-content`,{origin: 'right'})
