import Filterizr from 'filterizr'
import { insertScript } from '../core'

document.addEventListener('DOMContentLoaded', () => {
  // ================== Project cards =====================
  const projectCardHolder = document.getElementById('project-card-holder');

  if (projectCardHolder != null && projectCardHolder.children.length !== 0) {
    // Initialize Filterizr and keep a reference
    const filterizrInstance = new Filterizr('.filtr-projects', {
      layout: 'sameWidth',
      controlsSelector: '.project-filtr-control'
    });

    // Set default filter to 'featured'
    filterizrInstance.filter('featured');

    // ================== Keep one filter button selected =====================
    const buttons = document.querySelectorAll('.project-filtr-control');

    if (buttons.length > 0) {
      // Default: select the first button
      buttons[0].classList.add('selected');
    }

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
      });
    });
  }
});

// dynamically insert github buttons script.
insertScript('github-buttons', 'https://buttons.github.io/buttons.js');
