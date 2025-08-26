import Filterizr from 'filterizr'

document.addEventListener('DOMContentLoaded', () => {
  const publicationCardHolder = document.getElementById('publication-card-holder')
  if (publicationCardHolder != null && publicationCardHolder.children.length !== 0) {
    // ================== Keep one filter button selected =====================
    const pubButtons = document.querySelectorAll('.pub-filtr-control');
    let defaultFilter = 'all'; // fallback if no buttons

    if (pubButtons.length > 0) {
      // Default: use the first button’s filter
      defaultFilter = pubButtons[0].dataset.filter;
      pubButtons[0].classList.add('selected');
    }

    pubButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        pubButtons.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
      });
    });

    new Filterizr('.filtr-publications', {
      layout: 'sameWidth',
      gridItemsSelector: '.pub-filtr-item',
      controlsSelector: '.pub-filtr-control',
      filter: defaultFilter
    });
  }
})