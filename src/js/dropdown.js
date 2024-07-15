import { getData } from './data';

export const dropdown = () => {
	const activeCity = document.querySelector('.active');
	const inactiveCities = document.querySelectorAll('.inactive');
	activeCity.addEventListener('click', () => {
		inactiveCities.forEach((city) => {
			city.classList.toggle('inactive');
		});
	});
};

export const selectDropDown = () => {
	const city = document.querySelector('.city');
	const active = document.querySelector('.active');
	getData(active.textContent);
	city.addEventListener('click', (e) => {
		let prev = active.textContent;
		let next = e.target.textContent;
		e.target.textContent = prev;
		active.textContent = next;
        getData(next);
	});
};
