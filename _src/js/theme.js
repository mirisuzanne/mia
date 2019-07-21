// elements
const root = document.querySelector('html');
const themeMenu = document.querySelector('[data-menu="theme"]');
const modeToggle = document.querySelector('[data-toggle="color-mode"]');

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

// valid themes
const themeOptions = [];
for (let i = 0; i < selectElements.theme.options.length; i++) {
  themeOptions[i] = selectElements.theme.options[i].value;
}

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
  const to = localStorage.getItem(store[type]) || selectElements[type].value;
  if (to) {
    setValue(type, to, false);
    selectElements[type].value = to;
  }
};

const initMode = () => {
  const to = localStorage.getItem(store.mode);
  if (to) {
    setValue('mode', to, false);
  }
};

// init & events
document.onload = initMenu();
document.onload = initMode();
modeToggle.addEventListener('click', () => changeMode());

Object.keys(selectElements).forEach(type => {
  document.onload = initValue(type);
  selectElements[type].addEventListener('input', () =>
    setValue(type, selectElements[type].value),
  );
});
