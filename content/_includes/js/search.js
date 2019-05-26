const search = () => {
  var searchIndex = null;
  var resultsUI = document.querySelector('.search-results');
  var searchInput = document.querySelector('#search-str');
  var searchBtn = document.querySelector('[data-btn~="search"]');
  var searchForm = document.querySelector('[data-form~="search"]');

  searchBtn.remove();
  searchForm.removeAttribute('action');

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
    str = str.toLowerCase();

    // look for matches in the search JSON
    var results = [];
    for (var item in searchIndex) {
      var found = searchIndex[item].text.indexOf(str);
      if (found != -1) {
        results.push(searchIndex[item]);
      }
    }

    // build and insert the new result entries
    clearResults();
    for (var item in results) {
      var title = results[item].title;
      if (title) {
        var listItem = document.createElement('li');
        var link = document.createElement('a');
        link.textContent = decodeHtml(title);
        link.setAttribute('href', results[item].url);
        listItem.appendChild(link);
        resultsUI.appendChild(listItem);
      }
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
