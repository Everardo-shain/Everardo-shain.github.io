import Filterizr from 'filterizr';

document.addEventListener('DOMContentLoaded', () => {
  // ================== Skill cards =====================

  const skillCardHolder = document.getElementById('skill-card-holder');

  if (skillCardHolder != null && skillCardHolder.children.length !== 0) {
    // Initialize Filterizr
    new Filterizr('.filtr-skills', {
      layout: 'sameWidth',
      controlsSelector: '.skill-filtr-control'
    });

    // ================== Keep one filter button selected =====================
    const skillButtons = document.querySelectorAll('.skill-filtr-control');

    if (skillButtons.length > 0) {
      // Default: select the first button
      skillButtons[0].classList.add('selected');
    }

    skillButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        skillButtons.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
      });
    });
  }
});