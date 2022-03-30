// menu show 
const navMenu = document.getElementById('nav-menu'); 
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// validate if const exist
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    });
}

// menu hide
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    });
}

// remove menu mobile
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    // when click on each nav link, remove show menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click',linkAction));

// qualification tabs

// // qualification tabs
const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]');
tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active');
        })
        target.classList.add('qualification__active');

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active');
        })
        tab.classList.add('qualification__active');
    })
})

/* mixitup filter portfolio */
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    }

    ,

    animation: {
        duration: 300
    }
}

);

// link active work

const linkWork = document.querySelectorAll('.work__item');

function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach(l=> l.addEventListener('click', activeWork));

// scroll section active link

const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll',scrollActive);

// change background header

function scrollHeader(){
    const nav = document.getElementById('header');
    // when scroll greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader);

// show scrollup

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // when scroll is higher than 560 viewport height, add the show-scroll class to the tag
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll',scrollUp);

// dark light theme
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// obtain current theme that interface has by validating dark theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

// validate if the user previously choose a topic
if(selectedTheme){
    // if the validation is fulfilled, ask what the issue was to know if activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

// activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () =>{
    // add or remove dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // we save the theme and the current icon that the user choose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})