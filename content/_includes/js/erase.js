const erasure = () => {
  const erase = document.querySelector('[data-erase]');
  const eraseBtn = document.querySelector("[data-toggle='erase']");

  const toggleErase = () => {
    const states = {
      off: 'on',
      on: 'off',
    };
    const current = erase.getAttribute('data-erase');
    const setTo = states[current];
    erase.setAttribute('data-erase', setTo);
    eraseBtn.setAttribute('data-active', setTo === 'on');
  };

  if (eraseBtn) {
    eraseBtn.addEventListener('click', () => {
      toggleErase();
    });
  }
};

erasure();
