export default function() {
  // elements
  const root = document.querySelector('html');
  const typeMenu = document.querySelector('[data-menu="type"]');
  const unsetBtn = document.querySelector('[data-type-input="unset"]');

  // elements
  const selectElements = {
    base: document.querySelector('[data-type-input="base"]'),
    line: document.querySelector('[data-type-input="line"]'),
    letters: document.querySelector('[data-type-input="letters"]'),
    // scale: document.querySelector('[data-type-input="scale"]'),
    // spacing: document.querySelector('[data-type-input="spacing"]'),
  };

  // properties
  const props = {
    base: '--font-size--user',
    line: '--line-ratio--user',
    letters: '--letter-spacing--user',
    // scale: '--font-scale--user',
    // spacing: '--gutter--user',
  };

  // local storage
  const store = {
    base: 'typeBase',
    line: 'typeLine',
    letters: 'typeLetters',
    // scale: 'typeScale',
    // spacing: 'typeSpacing',
  };

  // clear all settings
  const clearType = () => {
    Object.keys(store).forEach((type) => localStorage.removeItem(store[type]));
    Object.keys(props).forEach((prop) =>
      root.style.removeProperty(props[prop]),
    );
    Object.keys(selectElements).forEach((type) => {
      const el = selectElements[type];
      selectElements[type].value = el.getAttribute('data-default');
    });
    unsetBtn.setAttribute('hidden', '');
  };

  // set a value
  const setValue = (type, to, toStore = true) => {
    if (to) {
      if (props[type]) {
        root.style.setProperty(props[type], to);
      }

      if (toStore && store[type]) {
        localStorage.setItem(store[type], to);
        unsetBtn.removeAttribute('hidden');
      }
    }
  };

  // initialize everything
  const initMenu = () => {
    typeMenu.removeAttribute('hidden');
  };

  const initValue = (type) => {
    selectElements[type].setAttribute(
      'data-default',
      selectElements[type].value,
    );

    const to = localStorage.getItem(store[type]);
    if (to) {
      setValue(type, to, false);
      selectElements[type].value = to;
      unsetBtn.removeAttribute('hidden');
    }
  };

  // init & events
  document.onload = initMenu();
  unsetBtn.addEventListener('click', () => clearType());

  Object.keys(selectElements).forEach((type) => {
    if (selectElements[type]) {
      document.onload = initValue(type);
      selectElements[type].addEventListener('input', () =>
        setValue(type, selectElements[type].value),
      );
    }
  });
}
