import lunr from 'lunr/lunr';

export default function() {
  const resultsDropdown = document.querySelector('[data-navlist="search"]');
  const resultsList = resultsDropdown;
  const searchInput = document.querySelector('#search-str');
  const searchBtn = document.querySelector('[data-btn~="search"]');
  let searchIdx, searchJson;

  // clear the current results
  const clearResults = (hide) => {
    if (hide) {
      resultsDropdown.setAttribute('aria-expanded', false);
    }

    while (resultsList.firstChild) {
      resultsList.removeChild(resultsList.firstChild);
    }
  };

  const decodeHtml = (html) => {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

  const linkTemplate = (post) => `
    <a href="${post.url}">
      ${decodeHtml(post.title)}
    </a>
  `;

  // search and display
  const find = (str) => {
    const results = searchIdx.search(str);

    // build and insert the new result entries
    clearResults(!results.length);
    if (results.length) {
      resultsDropdown.setAttribute('aria-expanded', true);
    }

    for (let item in results) {
      if (item) {
        item = results[item];
        const post = searchJson.filter((page) => page.url === item.ref)[0];
        const li = document.createElement('li');
        li.innerHTML = linkTemplate(post).trim();
        resultsList.appendChild(li);
      }
    }
  };

  // add an event listener for a click on the search link
  searchInput.addEventListener('focus', () => {
    if (!searchJson) {
      // get the data
      fetch('/search.json')
        .then((response) => response.json())
        .then((response) => {
          searchJson = response.search;
          searchIdx = lunr(function lunrLogic() {
            this.ref('url');
            this.field('title', { boost: 20 });
            this.field('meta');
            this.field('events');
            this.field('content');

            searchJson.forEach((doc) => {
              this.add(doc);
            });
          });
        })
        .then(() => {
          searchBtn
            .setAttribute('disabled', 'disabled')
            .setAttribute('tabindex', -1);
        });
    }
  });

  // listen for input changes
  searchInput.addEventListener('input', () => {
    let str = searchInput.value;
    if (str.length > 1) {
      str = str.includes('~') ? str : `${str}~1`;
      find(str);
    } else {
      clearResults(true);
    }
  });

  // listen for escape key in search areas
  const clearAll = (event) => {
    if (event.code === 'Escape') {
      clearResults(true);
      searchInput.value = '';
      searchInput.focus();
    }
  };

  searchInput.addEventListener('keyup', (e) => clearAll(e));
  resultsDropdown.addEventListener('keyup', (e) => clearAll(e));
}
