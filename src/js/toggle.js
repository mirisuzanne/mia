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

const toggleGroups = (name, groups, store) => {
  const groupTarget = document.querySelector(`[data-${name}]`);
  let groupBtns = [];

  groups.forEach((group) => {
    const btns = group.querySelectorAll(`[data-set]`);
    groupBtns = [...groupBtns, ...btns];
  });

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
  // grouped toggles
  const findGroups = document.querySelectorAll(`[data-options]`);
  const sortedGroups = Object.values(findGroups).reduce((result, group) => {
    const name = group.dataset.options;

    // Create new group
    if (!result[name]) {
      result[name] = [];
    }

    // Append to group
    result[name].push(group);
    return result;
  }, {});

  Object.keys(sortedGroups).forEach((name) => {
    toggleGroups(name, sortedGroups[name], store.includes(name));
  });

  // individual toggles
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
