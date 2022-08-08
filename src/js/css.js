export default function() {
  const root = document.querySelector(`:root`);
  const cssLinks = document.querySelectorAll(`link[rel*=style]`);
  const cssBtns = document.querySelectorAll(`[data-options=css] [data-set]`);

  let btnTargets = [];

  cssBtns.forEach((btn) => {
    const set = btn.dataset.set;
    if (set && !btnTargets.includes(set)) {
      btnTargets = [...btnTargets, set];
    }
  });

  let layers = [];
  let alts = [];

  cssLinks.forEach((link) => {
    const layer = link.dataset.layer;
    const alt = link.dataset.alt;

    if (layer && !layers.includes(layer)) {
      layers = [...layers, layer];
    } else if (alt && !alts.includes(alt)) {
      alts = [...alts, alt];
    }
  });

  const getStyle = () => {
    const current = localStorage.getItem('css') || root.dataset.css;
    return btnTargets.includes(current) ? current : layers.at(-1);
  };

  const updateStyle = (to) => {
    const set = to || getStyle();

    if (layers.includes(set)) {
      const setIndex = layers.indexOf(set);
      cssLinks.forEach((link) => {
        const isActive = link.dataset.layer
          ? layers.indexOf(link.dataset.layer) <= setIndex
          : false;
        link.setAttribute('media', isActive ? 'all' : 'none');
      });
    } else {
      cssLinks.forEach((link) => {
        const isActive = link.dataset.alt === set;
        link.setAttribute('media', isActive ? 'all' : 'none');
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
