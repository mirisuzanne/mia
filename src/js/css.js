export default function() {
  const root = document.querySelector(`:root`);
  const cssLinks = document.querySelectorAll(`link[rel*=style]`);
  const cssBtns = document.querySelectorAll(`[data-options=css] [data-set]`);

  const getStyle = () => localStorage.getItem('css') || root.dataset.css;

  const updateStyle = (to) => {
    const set = typeof to === 'undefined' ? getStyle() : to;

    if (set) {
      cssLinks.forEach((link) => {
        const isActive = link.getAttribute('title') === set;
        link.disabled = !isActive;
      });
    }
  };

  cssBtns.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      updateStyle(toggle.dataset.set);
    });
  });

  updateStyle();
}
