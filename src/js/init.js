export default function() {
  const toShow = document.querySelectorAll(`[data-init~=show]`);
  toShow.forEach((el) => {
    el.removeAttribute('hidden');
  });

  const toMake = document.querySelectorAll(`[data-make]`);
  toMake.forEach((el) => {
    const clone = document.createElement(el.dataset.make);
    for (const attr of el.attributes) {
      clone.setAttributeNS(null, attr.name, attr.value);
    }
    while (el.firstChild) {
      clone.appendChild(el.firstChild);
    }
    el.replaceWith(clone);
    return clone;
  });
}
