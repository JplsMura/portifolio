export const initAnimations = () => {
    /* =============== SCROLL REVEAL ANIMATION =============== */
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400,
        // reset: true // Animations repeat
    });

    sr.reveal(`.hero__data, .projects__container, .experience__container, .footer__container, .about__education`);
    sr.reveal(`.hero__image-wrapper`, {delay: 700, origin: 'bottom'});
    sr.reveal(`.skills__carousel`, {delay: 800, origin: 'left'});
    sr.reveal(`.contact__card`, {interval: 100});
};
