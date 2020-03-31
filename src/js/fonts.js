import FontFaceObserver from 'fontfaceobserver';

const recursive = new FontFaceObserver('Recursive');

recursive
  .load()
  .then(() => {
    document.documentElement.classList.add('fonts-loaded');
  })
  .catch(() => {
    document.documentElement.classList.add('fonts-failed');
  });
