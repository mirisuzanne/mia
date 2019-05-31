const search = () => {
  const resultsUI = document.querySelector('.search-results');
  const searchInput = document.querySelector('#search-str');
  const searchBtn = document.querySelector('[data-btn~="search"]');
  let searchIdx, searchJson;

  searchBtn.remove();

  // clear the current results
  const clearResults = () => {
    while (resultsUI.firstChild) {
      resultsUI.removeChild(resultsUI.firstChild);
    }
  };

  const decodeHtml = html => {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

  // search and display
  const find = str => {
    results = searchIdx.search(str).sort((a, b) => a.score < b.score);

    // build and insert the new result entries
    clearResults();
    for (var item in results) {
      item = results[item];
      const post = searchJson.filter(page => {
        return page.url === item.ref;
      })[0];
      var listItem = document.createElement('li');
      var link = document.createElement('a');
      link.textContent = decodeHtml(post.title);
      link.setAttribute('href', post.url);
      listItem.appendChild(link);
      resultsUI.appendChild(listItem);
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
            this.field('meta', { boost: 10 });
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
    var str = searchInput.value;
    if (str.length > 1) {
      str = str.includes('~') ? str : `${str}~2`;
      find(str);
    } else {
      clearResults();
    }
  });

  searchBtn.addEventListener('click', event => {
    event.preventDefault();
    var str = searchInput.value;
    if (str.length > 2) {
      find(str);
    } else {
      clearResults();
    }
  });
};

search();
