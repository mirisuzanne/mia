export default function(name) {
  const targetName = `data-${name}`;
  const targetAttr = `[${targetName}]`;
  const btnAttr = `[data-toggle='${name}']`;
  const target = document.querySelector(targetAttr);
  const toggleBtn = document.querySelector(btnAttr);

  const toggleIt = () => {
    const states = {
      off: 'on',
      on: 'off',
    };

    const current = target.getAttribute(targetName);
    const setTo = states[current];
    target.setAttribute(targetName, setTo);
    toggleBtn.setAttribute('data-active', setTo === 'on');
  };

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      toggleIt();
    });
  }
}
