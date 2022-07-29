import css from './css';
import init from './init';
import toggle from './toggle';

// tell the site that JS is enabled
init();

// establish toggles
const store = ['theme', 'css'];
toggle(store);

// change active CSS based on CSS toggles
css();
