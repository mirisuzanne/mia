// elements
const root = document.querySelector('html');
const themeMenu = document.querySelector('[data-menu="theme"]');
const modeToggle = document.querySelector('[data-toggle="color-mode"]');
const hueSelect = document.querySelector('#hue-select');
const themeSelect = document.querySelector('#theme-select');

// attributes
const attrs = {
  theme: 'data-theme',
  mode: 'data-mode',
};

// properties
const props = {
  hue: '--h-user-prime',
};

// local storage
const store = {
  theme: 'colorTheme',
  mode: 'colorMode',
  hue: 'colorHue',
};

// valid themes and modes
const modeOptions = ['dark', 'light'];
const themeOptions = [];
for (let i = 0; i < themeSelect.options.length; i++) {
  themeOptions[i] = themeSelect.options[i].value;
}

// see if there is media-query preference for mode
const mqMode = () => {
  let modePref = null;
  modeOptions.forEach(mode => {
    const mq = window.matchMedia(`(prefers-color-scheme: ${mode})`);
    modePref = mq.matches ? mode : modePref;
  });
  return modePref;
};

// set the theme, and optionally store the result
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

// change the theme & mode
const changeTheme = () => {
  setValue('theme', themeSelect.value);
};

const changeMode = () => {
  const is = root.getAttribute(attrs.mode);
  const is0 = modeOptions.indexOf(is);
  const to = modeOptions[(is0 + 1) % modeOptions.length];
  setValue('mode', to);
};

const changeHue = () => {
  setValue('hue', hueSelect.value);
};

// initialize everything
const initMenu = () => {
  themeMenu.removeAttribute('hidden');
};

const initTheme = () => {
  const to = localStorage.getItem(store.theme) || themeSelect.value;
  if (to) {
    setValue('theme', to, false);
    toIndex = themeOptions.indexOf(to);
    if (toIndex) {
      themeSelect.selectedIndex = toIndex;
    }
  }
};

const initMode = () => {
  const legacyStore = 'theme';
  const legacy = localStorage.getItem(legacyStore);
  if (legacy) {
    localStorage.removeItem(legacyStore);
  }

  const to = localStorage.getItem(store.mode) || legacy || mqMode();
  if (to) {
    setValue('mode', to, false);
  }
};

const initHue = () => {
  const to = localStorage.getItem(store.hue) || hueSelect.value;
  if (to) {
    setValue('hue', to, false);
    hueSelect.value = to;
  }
};

// on-load
document.onload = initMenu();
document.onload = initTheme();
document.onload = initMode();
document.onload = initHue();

// events
modeToggle.addEventListener('click', () => changeMode());
hueSelect.addEventListener('input', () => changeHue());
themeSelect.addEventListener('input', () => changeTheme());
