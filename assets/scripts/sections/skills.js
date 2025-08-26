import Filterizr from 'filterizr';

document.addEventListener('DOMContentLoaded', () => {
  // ================== Skill cards =====================

  const skillCardHolder = document.getElementById('skill-card-holder');

  if (skillCardHolder != null && skillCardHolder.children.length !== 0) {
    // ================== Keep one filter button selected =====================
    const skillButtons = document.querySelectorAll('.skill-filtr-control');
    let defaultFilter = 'all'; // fallback if no buttons

    if (skillButtons.length > 0) {
      // Default: use the first button’s filter
      defaultFilter = skillButtons[0].dataset.filter;
      skillButtons[0].classList.add('selected');
    }
    skillButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        skillButtons.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
      });
    });

    // Initialize Filterizr
    new Filterizr('.filtr-skills', {
      layout: 'sameWidth',
      controlsSelector: '.skill-filtr-control',
      filter: defaultFilter
    });
  }
});