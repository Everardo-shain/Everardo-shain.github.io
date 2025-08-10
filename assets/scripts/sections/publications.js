import Filterizr from 'filterizr'

document.addEventListener('DOMContentLoaded', () => {
  const publicationCardHolder = document.getElementById('publication-card-holder')
  if (publicationCardHolder != null && publicationCardHolder.children.length !== 0) {
    // eslint-disable-next-line no-new
    new Filterizr('.filtr-publications', {
      layout: 'sameWidth',
      gridItemsSelector: '.pub-filtr-item',
      controlsSelector: '.pub-filtr-control'
    });
        // ================== Keep one filter button selected =====================
    const pubButtons = document.querySelectorAll('.pub-filtr-control');

    if (pubButtons.length > 0) {
      // Default: select the first button
      pubButtons[0].classList.add('selected');
    }

    pubButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        pubButtons.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
      });
    });
  }
})