import * as css from '../styles.css';
import { getTodaysDate } from './date.js';
import { todayTemp } from './temp.js';
import { dropdown } from './dropdown.js';

todayTemp();
getTodaysDate();
dropdown();


window.addEventListener('load', () => {
	document.body.classList.remove('preload');
});
