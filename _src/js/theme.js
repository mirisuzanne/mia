// elements
const root = document.querySelector('html');
const themeMenu = document.querySelector('[data-menu="theme"]');
const modeToggle = document.querySelector('[data-toggle="colors"]');
const unsetBtn = document.querySelector('[data-unset="colors"]');

// elements
const selectElements = {
  theme: document.querySelector('#theme-select'),
  hue: document.querySelector('#hue-select'),
  sat: document.querySelector('#sat-select'),
  light: document.querySelector('#light-select'),
  contrast: document.querySelector('#contrast-select'),
};

// attributes
const attrs = {
  theme: 'data-theme',
};

// properties
const props = {
  hue: '--h-user',
  sat: '--s-user',
  light: '--l-user',
  contrast: '--user-contrast',
  mode: '--user-mode',
};

// local storage
const store = {
  theme: 'colorTheme',
  mode: 'colorMode',
  hue: 'colorHue',
  sat: 'colorSat',
  light: 'colorLight',
  contrast: 'colorContrast',
};

// clear all settings
const clearColors = () => {
  setValue('theme', selectElements.theme.getAttribute('data-default'), false);
  Object.keys(store).forEach(type => localStorage.removeItem(store[type]));
  Object.keys(props).forEach(prop => root.style.removeProperty(props[prop]));
  Object.keys(selectElements).forEach(type => {
    const el = selectElements[type];
    selectElements[type].value = el.getAttribute('data-default');
  });
  unsetBtn.setAttribute('hidden', '');
};

// set a value
const setValue = (type, to, toStore = true) => {
  if (to) {
    if (attrs[type]) {
      root.setAttribute(attrs[type], to);
    } else if (props[type]) {
      root.style.setProperty(props[type], to);
    }

    if (toStore && store[type]) {
      localStorage.setItem(store[type], to);
      unsetBtn.removeAttribute('hidden');
    }
  }
};

// toggle mode
const getMode = () => {
  return Number(
    getComputedStyle(root)
      .getPropertyValue('--mode')
      .trim(),
  );
};

const changeMode = () => {
  setValue('mode', getMode() * -1, true);
};

// initialize everything
const initMenu = () => {
  themeMenu.removeAttribute('hidden');
};

const initValue = type => {
  selectElements[type].setAttribute('data-default', selectElements[type].value);

  const to = localStorage.getItem(store[type]);
  if (to) {
    setValue(type, to, false);
    selectElements[type].value = to;
    unsetBtn.removeAttribute('hidden');
  }
};

const initMode = () => {
  const old = {
    light: 1,
    dark: -1,
  };

  let to = localStorage.getItem(store.mode);
  const fix = old[to];
  to = fix || to;

  if (to) {
    setValue('mode', to, fix);
    unsetBtn.removeAttribute('hidden');
  }
};

// init & events
document.onload = initMenu();
document.onload = initMode();
modeToggle.addEventListener('click', () => changeMode());
unsetBtn.addEventListener('click', () => clearColors());

Object.keys(selectElements).forEach(type => {
  document.onload = initValue(type);
  selectElements[type].addEventListener('input', () =>
    setValue(type, selectElements[type].value),
  );
});
