
function showAchievements() {
  const gallery = document.getElementById('gallery');
  const holder = document.getElementById('achievements-holder');
  if (!gallery || !holder) return;

  gallery.innerHTML = "";

  const children = holder.children;

  Array.from(children).forEach(child => {
    const clone = child.cloneNode(true);
    clone.classList.remove("d-none");
    gallery.appendChild(clone);

    const picture = clone.querySelector("picture");
    const img = clone.querySelector(".achievement-img");
    const source = picture ? picture.querySelector("source") : null;

    const smallSrc = clone.dataset.small;
    const largeSrc = clone.dataset.large;
    const smallSrcWebp = clone.dataset.smallWebp;
    const largeSrcWebp = clone.dataset.largeWebp;

    const caption = clone.querySelector(".caption");
    const title = clone.querySelector(".title");

    const wrapper = clone.querySelector(".achievement-image-wrapper");

    //Hover/focus handling for parent class
    [caption, wrapper].forEach(el => {
      if (!el) return;

      el.addEventListener("mouseenter", () => {
        if (clone.classList.contains("achievement-details")) { 
          clone.classList.add("achievement-details-hover");
        }
      });

      el.addEventListener("mouseleave", () => {
        clone.classList.remove("achievement-details-hover");
      });

      el.addEventListener("focus", () => {
        if (clone.classList.contains("achievement-details")) { 
          clone.classList.add("achievement-details-hover");
        }
      });

      el.addEventListener("blur", () => {
        clone.classList.remove("achievement-details-hover");
      });
    });

    // Click anywhere to expand/collapse
    clone.addEventListener("click", (e) => {
      if(!e.target.closest(".achievement-image-wrapper,.caption")) return;
      const isExpanded = clone.classList.contains("achievement-details");
      const allEntries = gallery.querySelectorAll(".achievement-entry");

      if (isExpanded) {
        // Collapse: restore previous scroll position
        clone.classList.remove("achievement-details");
        clone.classList.remove("achievement-details-hover");
        gallery.classList.remove("expanded");

        if (img && smallSrc) img.src = smallSrc;
        if (source && smallSrcWebp) source.srcset = smallSrcWebp;
        if (caption) caption.classList.toggle("hidden");
        if (title) title.classList.toggle("hidden");

        allEntries.forEach(e => e.classList.remove("hidden"));

        // Scroll back to the position before expanding
        if (clone.dataset.scrollY) {
          window.scrollTo({ top: parseFloat(clone.dataset.scrollY), behavior: "smooth" });
        }

      } else {
        // Store current scroll position before expanding
        clone.dataset.scrollY = window.scrollY;

        // Expand: hide all other entries
        clone.classList.add("achievement-details");
        clone.classList.remove("achievement-details-hover");
        gallery.classList.add("expanded");

        if (img && largeSrc) img.src = largeSrc;
        if (source && largeSrcWebp) source.srcset = largeSrcWebp;
        if (caption) caption.classList.toggle("hidden");
        if (title) title.classList.toggle("hidden");

        allEntries.forEach(e => {
          if (e !== clone) e.classList.add("hidden");
        });

        gallery.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    });

    clone.addEventListener("click", (e) => {
      if(!e.target.closest(".achievement-image-wrapper,.caption")) return;
      const isExpanded = clone.classList.contains("achievement-details");
      const allEntries = gallery.querySelectorAll(".achievement-entry");
      
      if (isExpanded) {
        // Collapse: restore previous scroll position
        clone.classList.add("achievement-details-hover");
      }
    });
  });

  const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);

  window.msnry = new Masonry(gallery, {
    itemSelector: '.achievement-entry',
    columnWidth: '.achievement-entry',
    percentPosition: true,
    gutter: rem,
  });

  // Preload large images for better expand performance
  gallery.querySelectorAll(".achievement-entry").forEach(clone => {
    const large = clone.dataset.large;
    const largeWebp = clone.dataset.largeWebp;

    if (large) new Image().src = large;
    if (largeWebp) new Image().src = largeWebp;
  });
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', showAchievements);

// Debounced resize for responsive Masonry
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(showAchievements, 200);
});