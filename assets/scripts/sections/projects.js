import Filterizr from 'filterizr'
import { insertScript } from '../core'

document.addEventListener('DOMContentLoaded', () => {
  // ================== Project cards =====================
  const projectCardHolder = document.getElementById('project-card-holder');

  if (projectCardHolder != null && projectCardHolder.children.length !== 0) {

    // ================== Keep one filter button selected =====================
    const projectButtons = document.querySelectorAll('.project-filtr-control');
    let defaultFilter = 'all'; // fallback if no buttons

    if (projectButtons.length > 0) {
      // Default: use the first button’s filter
      defaultFilter = projectButtons[0].dataset.filter;
      projectButtons[0].classList.add('selected');
    }

    projectButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        projectButtons.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
      });
    });

    // Initialize Filterizr and keep a reference
    const filterizrInstance = new Filterizr('.filtr-projects', {
      layout: 'sameWidth',
      controlsSelector: '.project-filtr-control',
      filter: defaultFilter
    });
  }
});

// dynamically insert github buttons script.
insertScript('github-buttons', 'https://buttons.github.io/buttons.js');