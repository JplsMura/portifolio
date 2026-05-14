export const initTheme = () => {
    const themeButton = document.getElementById('theme-button');
    const themeIcon = themeButton.querySelector('i');
    const lightTheme = 'light-theme';

    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');
    const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'light' : 'dark';
    const getCurrentIcon = () => themeIcon.classList.contains('bx-sun') ? 'bx-sun' : 'bx-moon';

    if (selectedTheme) {
      document.body.classList[selectedTheme === 'light' ? 'add' : 'remove'](lightTheme);
      if (selectedIcon === 'bx-sun') {
          themeIcon.classList.remove('bx-moon');
          themeIcon.classList.add('bx-sun');
      } else {
          themeIcon.classList.remove('bx-sun');
          themeIcon.classList.add('bx-moon');
      }
    }

    themeButton.addEventListener('click', () => {
        document.body.classList.toggle(lightTheme);
        themeIcon.classList.toggle('bx-sun');
        themeIcon.classList.toggle('bx-moon');
        
        localStorage.setItem('selected-theme', getCurrentTheme());
        localStorage.setItem('selected-icon', getCurrentIcon());
    });
};
