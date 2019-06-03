const resultsDropdown = document.querySelector('.search-results');
const resultsList = document.querySelector('[data-navlist="search"]');
const searchInput = document.querySelector('#search-str');
const searchBtn = document.querySelector('[data-btn~="search"]');
let searchIdx, searchJson;

// clear the current results
const clearResults = hide => {
  if (hide) {
    resultsDropdown.setAttribute('aria-expanded', false);
  }

  while (resultsList.firstChild) {
    resultsList.removeChild(resultsList.firstChild);
  }
};

const decodeHtml = html => {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
};

// search and display
const find = str => {
  results = searchIdx.search(str);

  // build and insert the new result entries
  clearResults(!results.length);
  if (results.length) {
    resultsDropdown.setAttribute('aria-expanded', true);
  }

  for (let item in results) {
    item = results[item];
    const post = searchJson.filter(page => {
      return page.url === item.ref;
    })[0];
    const link = document.createElement('a');
    link.setAttribute('href', post.url);
    link.setAttribute('data-nav', 'searchs');
    link.textContent = decodeHtml(post.title);
    resultsList.appendChild(link);
  }
};

// add an event listener for a click on the search link
searchInput.addEventListener('focus', () => {
  if (!searchJson) {
    // get the data
    fetch('/search.json')
      .then(response => {
        return response.json();
      })
      .then(response => {
        searchJson = response.search;
        searchIdx = lunr(function() {
          this.ref('url');
          this.field('title', { boost: 20 });
          this.field('meta');
          this.field('events');
          this.field('content');

          searchJson.forEach(doc => {
            this.add(doc);
          });
        });
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

searchBtn.addEventListener('click', event => {
  event.preventDefault();
  const str = searchInput.value;
  if (str.length > 2) {
    find(str);
  } else {
    clearResults(true);
  }
});
