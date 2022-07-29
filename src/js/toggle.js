const toggleBtns = (name, btns, store) => {
  const targetName = `data-${name}`;
  const targetAttr = `[${targetName}]`;
  const target = document.querySelector(targetAttr);

  if (target) {
    const states = {
      off: 'on',
      on: 'off',
    };

    const getState = () => {
      const storedState = store ? localStorage.getItem(name) : null;
      if (storedState !== null) {
        return storedState;
      }

      return target.dataset[name];
    };

    const updateState = (state) => {
      const toState = typeof state === 'undefined' ? getState() : state;

      target.dataset[name] = toState;

      btns.forEach((btn) => {
        btn.setAttribute('aria-pressed', toState === 'on');
      });

      if (store) {
        localStorage.setItem(name, toState);
      }
    };

    const toggleIt = () => {
      const setTo = states[getState()];
      updateState(setTo);
    };

    updateState();
    btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        toggleIt();
      });
    });
  }
};

const toggleGroup = (group, store) => {
  const name = group.dataset.options;
  const groupTarget = document.querySelector(`[data-${name}]`);
  const groupBtns = group.querySelectorAll(`[data-set]`);

  const getState = () => {
    const storedState = store ? localStorage.getItem(name) : null;
    if (storedState !== null) {
      return storedState;
    }

    return groupTarget.dataset[name];
  };

  const updateState = (state) => {
    const toState = typeof state === 'undefined' ? getState() : state;

    groupTarget.dataset[name] = toState;

    groupBtns.forEach((btn) => {
      btn.setAttribute('aria-pressed', btn.dataset.set === toState);
    });

    if (store) {
      localStorage.setItem(name, toState);
    }
  };

  if (groupTarget && groupBtns.length > 0) {
    updateState();

    groupBtns.forEach((toggle) => {
      toggle.addEventListener('click', () => {
        updateState(toggle.dataset.set);
      });
    });
  }
};

export default function(store = []) {
  const findGroups = document.querySelectorAll(`[data-options]`);
  findGroups.forEach((group) => {
    toggleGroup(group, store.includes(group.dataset.options));
  });

  const findToggles = document.querySelectorAll(`button[data-toggle]`);
  const togglesByName = {};
  findToggles.forEach((toggle) => {
    const name = toggle.dataset.toggle;
    togglesByName[name] = togglesByName[name]
      ? [...togglesByName[name], toggle]
      : [toggle];
  });

  Object.keys(togglesByName).forEach((name) => {
    toggleBtns(name, togglesByName[name], store.includes(name));
  });
}
