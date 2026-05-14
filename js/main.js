import { initMenu } from './modules/menu.js';
import { initTheme } from './modules/theme.js';
import { initAnimations } from './modules/animations.js';

/* =============== COMPONENT LOADER =============== */
/**
 * Loads an HTML component into a target element
 * @param {string} id - The ID of the target element
 * @param {string} file - The path to the HTML file
 */
const loadComponent = async (id, file) => {
    try {
        const response = await fetch(file);
        if (!response.ok) throw new Error(`Could not load ${file}`);
        const html = await response.text();
        document.getElementById(id).innerHTML = html;
        return true;
    } catch (error) {
        console.error('Error loading component:', error);
        return false;
    }
};

/* =============== INITIALIZATION =============== */
const initApp = async () => {
    // 1. Load Components dynamically
    // We load them in parallel for speed
    await Promise.all([
        loadComponent('skills-component', './components/skills.html'),
        loadComponent('projects-component', './components/projects.html'),
        loadComponent('experience-component', './components/experience.html')
    ]);

    // 2. Initialize Modules after components are in the DOM
    initMenu();
    initTheme();
    initAnimations();
};

document.addEventListener('DOMContentLoaded', initApp);
