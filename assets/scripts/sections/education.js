// Show more rows in the taken courses table
function toggleCourseVisibility (elem) {
  // find the courses
  const courses = elem.parentNode.getElementsByClassName('course')
  if (courses == null) {
    return
  }

  // toggle hidden-course class from the third elements
  for (const course of courses) {
    if (course.classList.contains('hidden-course') || course.classList.contains('toggled-hidden-course')) {
      course.classList.toggle('hidden-course')
      course.classList.add('toggled-hidden-course')
    }
  }

  // toggle the buttons visibility
  const buttonsToToggle = elem.parentNode.getElementsByClassName('show-more-btn')
  for (const buttonToToggle of buttonsToToggle) {
    buttonToToggle.classList.toggle('hidden')
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const els = Array.from(document.getElementsByClassName('btn'));

  els.filter((el) => el != null && (el.id === 'show-more-btn' || el.id === 'show-less-btn')).forEach((el) =>
    el.addEventListener('click', ({ target }) =>
      toggleCourseVisibility(target)))
})


document.addEventListener('DOMContentLoaded', function () {
  // Find all the new toggle buttons
  const toggleButtons = document.querySelectorAll('.course-toggle-btn');

  toggleButtons.forEach(button => {
    button.addEventListener('click', function (event) {
      const clickedButton = event.target;
      // Find the parent card for the clicked button
      const targetCard = clickedButton.closest('.degree-info.card');

      if (!targetCard) return;

      // Toggle the 'is-expanded' class on the card
      targetCard.classList.toggle('is-expanded');

      // Check if the card is now expanded
      const isExpanded = targetCard.classList.contains('is-expanded');

      // Update the button text
      if (isExpanded) {
        clickedButton.textContent = clickedButton.dataset.lessText;
      } else {
        clickedButton.textContent = clickedButton.dataset.moreText;
        // If we are collapsing the list, scroll back to the top of the card
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});