const erase = document.querySelector('[data-erase]'),
  eraseBtn = document.querySelector("[data-toggle='erase']"),
  toggleErase = () => {
    const e = {
      off: 'on',
      on: 'off',
    }[erase.getAttribute('data-erase')];
    erase.setAttribute('data-erase', e),
      eraseBtn.setAttribute('data-active', 'on' === e);
  };

eraseBtn &&
  eraseBtn.addEventListener('click', () => {
    toggleErase();
  });
const resultsDropdown = document.querySelector('.search-results'),
  resultsList = document.querySelector('[data-navlist="search"]'),
  searchInput = document.querySelector('#search-str'),
  searchBtn = document.querySelector('[data-btn~="search"]');
let searchIdx, searchJson;

const clearResults = e => {
    for (
      e && resultsDropdown.setAttribute('aria-expanded', !1);
      resultsList.firstChild;

    )
      resultsList.removeChild(resultsList.firstChild);
  },
  decodeHtml = e => {
    const t = document.createElement('textarea');
    return (t.innerHTML = e), t.value;
  },
  find = e => {
    (results = searchIdx.search(e)),
      clearResults(!results.length),
      results.length && resultsDropdown.setAttribute('aria-expanded', !0);

    for (let e in results) {
      e = results[e];
      const t = searchJson.filter(t => t.url === e.ref)[0],
        s = document.createElement('a');
      s.setAttribute('href', t.url),
        s.setAttribute('data-nav', 'searchs'),
        (s.textContent = decodeHtml(t.title)),
        resultsList.appendChild(s);
    }
  };

searchInput.addEventListener('focus', () => {
  searchJson ||
    fetch('/search.json')
      .then(e => e.json())
      .then(e => {
        (searchJson = e.search),
          (searchIdx = lunr(function() {
            this.ref('url'),
              this.field('title', {
                boost: 20,
              }),
              this.field('meta'),
              this.field('events'),
              this.field('content'),
              searchJson.forEach(e => {
                this.add(e);
              });
          }));
      });
}),
  searchInput.addEventListener('input', () => {
    let e = searchInput.value;
    e.length > 1
      ? ((e = e.includes('~') ? e : `${e}~1`), find(e))
      : clearResults(!0);
  }),
  searchBtn.addEventListener('click', e => {
    e.preventDefault();
    const t = searchInput.value;
    t.length > 2 ? find(t) : clearResults(!0);
  });
const root = document.querySelector('html'),
  themeMenu = document.querySelector('[data-menu="theme"]'),
  modeToggle = document.querySelector('[data-toggle="color-mode"]'),
  hueSelect = document.querySelector('#hue-select'),
  themeSelect = document.querySelector('#theme-select'),
  attrs = {
    theme: 'data-theme',
    mode: 'data-mode',
  },
  props = {
    hue: '--h-user-prime',
  },
  store = {
    theme: 'colorTheme',
    mode: 'colorMode',
    hue: 'colorHue',
  },
  modeOptions = ['dark', 'light'],
  themeOptions = [];

for (let e = 0; e < themeSelect.options.length; e++)
  themeOptions[e] = themeSelect.options[e].value;

const mqMode = () => {
    let e = null;
    return (
      modeOptions.forEach(t => {
        const o = window.matchMedia(`(prefers-color-scheme: ${t})`);
        e = o.matches ? t : e;
      }),
      e
    );
  },
  setValue = (e, t, o = !0) => {
    t &&
      (attrs[e]
        ? root.setAttribute(attrs[e], t)
        : props[e] && root.style.setProperty(props[e], t),
      o && store[e] && localStorage.setItem(store[e], t));
  },
  changeTheme = () => {
    setValue('theme', themeSelect.value);
  },
  changeMode = () => {
    const e = root.getAttribute(attrs.mode),
      t = modeOptions.indexOf(e),
      o = modeOptions[(t + 1) % modeOptions.length];
    setValue('mode', o);
  },
  changeHue = () => {
    setValue('hue', hueSelect.value);
  },
  initMenu = () => {
    themeMenu.removeAttribute('hidden');
  },
  initTheme = () => {
    const e = localStorage.getItem(store.theme) || themeSelect.value;
    e &&
      (setValue('theme', e, !1),
      (toIndex = themeOptions.indexOf(e)),
      toIndex && (themeSelect.selectedIndex = toIndex));
  },
  initMode = () => {
    const e = localStorage.getItem('theme');
    e && localStorage.removeItem('theme');
    const t = localStorage.getItem(store.mode) || e || mqMode();
    t && setValue('mode', t, !1);
  },
  initHue = () => {
    const e = localStorage.getItem(store.hue) || hueSelect.value;
    e && (setValue('hue', e, !1), (hueSelect.value = e));
  };

(document.onload = void themeMenu.removeAttribute('hidden')),
  (document.onload = initTheme()),
  (document.onload = initMode()),
  (document.onload = initHue()),
  modeToggle.addEventListener('click', () => changeMode()),
  hueSelect.addEventListener(
    'input',
    () => void setValue('hue', hueSelect.value),
  ),
  themeSelect.addEventListener(
    'input',
    () => void setValue('theme', themeSelect.value),
  );
