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
const opts = {
    light: 'dark',
    dark: 'contrast',
    contrast: 'light',
  },
  root = document.querySelector('html'),
  attr = 'data-theme',
  transClass = 'theme-change',
  themeToggle = document.querySelector('[data-btn~="toggle-theme"]'),
  setTheme = e => {
    e && root.setAttribute(attr, e);
  },
  getTheme = () => {
    const e = e => {
      return window.matchMedia(`(prefers-color-scheme: ${e})`).matches
        ? e
        : null;
    };

    return localStorage.getItem('theme') || e('dark') || e('light');
  },
  changeTheme = () => {
    const e = getTheme() || root.getAttribute(attr),
      t = opts[e];
    localStorage.setItem('theme', t), setTheme(t);
  },
  initTheme = e => {
    e && setTheme(e);
  };

(document.onload = initTheme(getTheme())),
  themeToggle.addEventListener('click', () => {
    changeTheme();
  });
