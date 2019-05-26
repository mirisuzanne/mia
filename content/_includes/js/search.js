const search = () => {
  var searchIndex = null;
  var resultsUI = document.querySelector('.search-results');
  var searchInput = document.querySelector('#search-str');
  var searchBtn = document.querySelector('[data-btn~="search"]');
  var searchForm = document.querySelector('[data-form~="search"]');

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
    let idx = lunr(function() {
      this.ref('url');
      this.field('title');
      this.field('meta');
      this.field('events');
      this.field('content');

      searchIndex.forEach(doc => {
        this.add(doc);
      }, this);
    });

    results = idx.search(str);

    // build and insert the new result entries
    clearResults();
    for (var item in results) {
      item = results[item];
      const post = searchIndex.filter(page => {
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
    if (!searchIndex) {
      // get the data
      fetch('/search.json')
        .then(response => {
          return response.json();
        })
        .then(response => {
          searchIndex = response.search;
        });
    }
  });

  // listen for input changes
  searchInput.addEventListener('input', () => {
    var str = searchInput.value;
    if (str.length > 2) {
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
