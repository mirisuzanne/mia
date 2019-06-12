const theme = () => {
  const root = document.querySelector('html');
  const attr = 'data-theme';
  const themeToggle = document.getElementById('toggle-theme');

  const setTheme = to => {
    if (to) {
      root.setAttribute(attr, to);
    }
  };

  const getTheme = () => {
    const userTheme = localStorage.getItem('theme');
    const mqTest = theme => {
      const mq = window.matchMedia(`(prefers-color-scheme: ${theme})`);
      return mq.matches ? theme : null;
    };
    return userTheme || mqTest('dark') || mqTest('light');
  };

  const changeTheme = () => {
    const to = themeToggle.value;
    setTheme(to);
    localStorage.setItem('theme', to);
  };

  const initTheme = init => {
    if (init) {
      themeToggle.value = init;
      setTheme(init);
    }
  };

  document.onload = initTheme(getTheme());
  themeToggle.addEventListener('input', () => {
    changeTheme();
  });
};

theme();
