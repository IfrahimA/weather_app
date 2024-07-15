import * as css from '../styles.css';
import { getTodaysDate } from './date.js';
import { todayTemp } from './temp.js';
import { dropdown, selectDropDown } from './dropdown.js';
import { updateCurrentTime } from './time.js';
import { getData } from './data.js';

todayTemp();
getTodaysDate();
dropdown();
selectDropDown();
updateCurrentTime();

window.addEventListener('load', () => {
	document.body.classList.remove('preload');
});
