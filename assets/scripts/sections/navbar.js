const updateNavBar = () => {
  const topNavbar = document.getElementById('top-navbar');
  const navbarToggler = document.getElementById('navbar-toggler');

  // If menu is open, force solid navbar
  if (topNavbar?.classList.contains('menu-open')) {
    topNavbar.classList.remove('transparent-navbar');
    topNavbar.classList.add('shadow');

    navbarToggler?.classList.remove('navbar-dark');
    navbarToggler?.classList.add('navbar-light');

    swapLogo('main-logo-slot'); // solid navbar logo
    return; // skip scroll logic
  }

  // Otherwise, apply scroll-based styling
  if (window.scrollY > 40) {
    topNavbar?.classList.remove('transparent-navbar');
    topNavbar?.classList.add('shadow');

    navbarToggler?.classList.remove('navbar-dark');
    navbarToggler?.classList.add('navbar-light');

    swapLogo('main-logo-slot');
  } else {
    topNavbar?.classList.remove('shadow');
    topNavbar?.classList.add('transparent-navbar');

    navbarToggler?.classList.remove('navbar-light');
    navbarToggler?.classList.add('navbar-dark');

    swapLogo('inverted-logo-slot');
  }
};

document.addEventListener('DOMContentLoaded', function () {
  const topNavbar = document.getElementById('top-navbar');
  const navMain = document.querySelector('.navbar-collapse');

  if (topNavbar && navMain) {
    // Track Bootstrap collapse events
    navMain.addEventListener('show.bs.collapse', () => {
      topNavbar.classList.add('menu-open');
      updateNavBar(); // reapply styles immediately
    });

    navMain.addEventListener('hide.bs.collapse', () => {
      topNavbar.classList.remove('menu-open');
      updateNavBar(); // restore scroll-based styles
    });
  }

  // Existing scroll-based behavior
  if (topNavbar?.classList.contains('homepage')) {
    document.addEventListener('scroll', updateNavBar);
    updateNavBar();
  }

  // Close menu when clicking a link
  const navMains = document.getElementsByClassName('navbar-collapse');
  Array.from(navMains).forEach(function (el) {
    el.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' && !e.target.classList.contains('dropdown-toggle')) {
        el.classList.add('collapse');
        el.classList.remove('show');
      }
    });
  });
});

// gradient updater stays the same
function swapLogo(slotId) {
  const fromSlot = document.getElementById(slotId);
  const logoSlot = document.getElementById('logo-slot');

  if (fromSlot && logoSlot) {
    logoSlot.innerHTML = fromSlot.innerHTML;
  }
}

function updateGradient() {
  const brand = document.querySelector('.navbar-brand');
  const navbar = document.querySelector('.navbar');

  const brandLeft = brand.offsetLeft;
  const brandEnd = brandLeft + brand.offsetWidth;
  const brandEndPercent = (brandEnd / navbar.offsetWidth) * 100;

  navbar.style.setProperty('--brand-width-percent', `${brandEndPercent}%`);
  navbar.style.setProperty('--navbar-height', `${navbar.offsetHeight}px`);
}

updateGradient();
window.addEventListener('resize', updateGradient);