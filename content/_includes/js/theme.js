const theme = () => {
  const opts = {
    light: 'dark',
    dark: 'contrast',
    contrast: 'light',
  };

  const root = document.querySelector('html');
  const attr = 'data-theme';
  const transClass = 'theme-change';
  const themeToggle = document.querySelector('[data-btn~="toggle-theme"]');

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
    const from = getTheme() || root.getAttribute(attr);
    const to = opts[from];

    localStorage.setItem('theme', to);
    setTheme(to);
  };

  const initTheme = init => {
    if (init) {
      setTheme(init);
    }
  };

  document.onload = initTheme(getTheme());
  themeToggle.addEventListener('click', () => {
    changeTheme();
  });
};

theme();
