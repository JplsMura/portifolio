export const initTheme = () => {
    const themeButton = document.getElementById('theme-button');
    const lightTheme = 'light-theme';
    const iconTheme = 'bx-sun';

    // Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');

    // We obtain the current theme that the interface has by validating the light-theme class
    const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'light' : 'dark';
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';

    // We validate if the user previously chose a topic
    if (selectedTheme) {
      document.body.classList[selectedTheme === 'light' ? 'add' : 'remove'](lightTheme);
      themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
    }

    // Activate / deactivate the theme manually with the button
    themeButton.addEventListener('click', () => {
        // Add or remove the light / icon theme
        document.body.classList.toggle(lightTheme);
        themeButton.classList.toggle(iconTheme);
        // We save the theme and the current icon that the user chose
        localStorage.setItem('selected-theme', getCurrentTheme());
        localStorage.setItem('selected-icon', getCurrentIcon());
    });
};
