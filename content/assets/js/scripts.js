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
const resultsDropdown = document.querySelector('[data-navlist="search"]'),
  resultsList = resultsDropdown,
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
        s = document.createElement('li');
      (s.innerHTML = linkTemplate(t).trim()), resultsList.appendChild(s);
    }
  },
  linkTemplate = e =>
    `\n  <a href="${e.url}">\n    ${decodeHtml(e.title)}\n  </a>\n`;

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
      })
      .then(() => {
        searchBtn
          .setAttribute('disabled', 'disabled')
          .setAttribute('tabindex', -1);
      });
}),
  searchInput.addEventListener('input', () => {
    let e = searchInput.value;
    e.length > 1
      ? ((e = e.includes('~') ? e : `${e}~1`), find(e))
      : clearResults(!0);
  });

const clearAll = e => {
  'Escape' === e.code &&
    (clearResults(!0), (searchInput.value = ''), searchInput.focus());
};

searchInput.addEventListener('keyup', e => clearAll(e)),
  resultsDropdown.addEventListener('keyup', e => clearAll(e));
const root = document.querySelector('html'),
  themeMenu = document.querySelector('[data-menu="theme"]'),
  modeToggle = document.querySelector('[data-toggle="color-mode"]'),
  selectElements = {
    theme: document.querySelector('#theme-select'),
    hue: document.querySelector('#hue-select'),
    sat: document.querySelector('#sat-select'),
    light: document.querySelector('#light-select'),
    contrast: document.querySelector('#contrast-select'),
  },
  attrs = {
    theme: 'data-theme',
  },
  props = {
    hue: '--h-user',
    sat: '--s-user',
    light: '--l-user',
    contrast: '--user-contrast',
    mode: '--user-mode',
  },
  store = {
    theme: 'colorTheme',
    mode: 'colorMode',
    hue: 'colorHue',
    sat: 'colorSat',
    light: 'colorLight',
    contrast: 'colorContrast',
  },
  themeOptions = [];

for (let e = 0; e < selectElements.theme.options.length; e++)
  themeOptions[e] = selectElements.theme.options[e].value;

const setValue = (e, t, o = !0) => {
    t &&
      (attrs[e]
        ? root.setAttribute(attrs[e], t)
        : props[e] && root.style.setProperty(props[e], t),
      o && store[e] && localStorage.setItem(store[e], t));
  },
  getMode = () =>
    Number(
      getComputedStyle(root)
        .getPropertyValue('--mode')
        .trim(),
    ),
  changeMode = () => {
    setValue('mode', -1 * getMode(), !0);
  },
  initMenu = () => {
    themeMenu.removeAttribute('hidden');
  },
  initValue = e => {
    const t = localStorage.getItem(store[e]) || selectElements[e].value;
    t && (setValue(e, t, !1), (selectElements[e].value = t));
  },
  initMode = () => {
    const e = localStorage.getItem(store.mode);
    e && setValue('mode', e, !1);
  };

(document.onload = void themeMenu.removeAttribute('hidden')),
  (document.onload = initMode()),
  modeToggle.addEventListener(
    'click',
    () => void setValue('mode', -1 * getMode(), !0),
  ),
  Object.keys(selectElements).forEach(e => {
    (document.onload = initValue(e)),
      selectElements[e].addEventListener('input', () =>
        setValue(e, selectElements[e].value),
      );
  });
