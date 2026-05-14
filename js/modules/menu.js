export const initMenu = () => {
    const navMenu = document.getElementById('nav-menu'),
          navToggle = document.getElementById('nav-toggle'),
          navClose = document.getElementById('nav-close');

    /* MENU SHOW */
    if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu');
        });
    }

    /* MENU HIDDEN */
    if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu');
        });
    }

    /* REMOVE MENU MOBILE */
    const navLink = document.querySelectorAll('.nav__link');

    const linkAction = () =>{
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.remove('show-menu');
    };
    navLink.forEach(n => n.addEventListener('click', linkAction));

    /* CHANGE BACKGROUND HEADER */
    const scrollHeader = () =>{
        const header = document.getElementById('header');
        window.scrollY >= 50 ? header.classList.add('scroll-header') 
                             : header.classList.remove('scroll-header');
    };
    window.addEventListener('scroll', scrollHeader);

    /* SCROLL SECTIONS ACTIVE LINK */
    const sections = document.querySelectorAll('section[id]');
        
    const scrollActive = () =>{
        const scrollY = window.pageYOffset;

        sections.forEach(current =>{
            const sectionHeight = current.offsetHeight,
                  sectionTop = current.offsetTop - 58,
                  sectionId = current.getAttribute('id'),
                  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                sectionsClass?.classList.add('active-link');
            }else{
                sectionsClass?.classList.remove('active-link');
            }                                                    
        });
    };
    window.addEventListener('scroll', scrollActive);
};
