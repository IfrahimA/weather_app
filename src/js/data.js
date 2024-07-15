import { format, addDays, addHours } from 'date-fns';

export async function getData(city) {
	const url =
		'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' +
		city +
		'?key=LYMM5URNJZ8F68TLBNEEVSG3J';
	try {
		const response = await fetch(url);
		const json = await response.json();

		//Set the Temperatures
		setCurrentTemp(json.currentConditions.temp);
		setConditions(json.currentConditions.conditions);
		setWindPrecip(
			json.currentConditions.windspeed,
			json.currentConditions.precipprob
		);
		setDailyForcast(json.days);
    setHourlyForcast(json.days);
	} catch (error) {
		console.error(`Response Status: ${response.status}`);
	}
}

const setCurrentTemp = (currentTemp) => {
	const todayTemp = document.querySelector('.todayTemp');
	const tempRight = document.querySelector('.temp');
	todayTemp.textContent = currentTemp + '°';
	tempRight.textContent = currentTemp + '°';
};

const setConditions = (currentConditions) => {
	const additionalInfo = document.querySelector('.additionalInfo');
	const condition = document.querySelector('.condition');

	additionalInfo.textContent = currentConditions;
	condition.textContent = currentConditions;
};

const setWindPrecip = (w, p) => {
	//Left-Side
	const left_wind = document.querySelector('.left-wind');
	const left_precip = document.querySelector('.left-precip');

	left_wind.textContent = w + ' mph';
	left_precip.textContent = p + '%';

	//Right-Side
	const right_wind = document.querySelector('.right-wind');
	const right_precip = document.querySelector('.right-precip');

	right_wind.textContent = w + ' mph';
	right_precip.textContent = p + '%';
};

const setDailyForcast = (data) => {
	const days = document.querySelector('.days');
	const currentDate = new Date();
	const currentDay = format(currentDate, 'EEE');

	days.innerHTML = '';
	for (let i = 0; i < 7; i++) {
		const next = format(addDays(currentDate, i), 'EEE');

		const today = document.createElement('div');
		const title = document.createElement('div');
		const degrees = document.createElement('div');
		const desc = document.createElement('div');

		today.appendChild(title);
		today.appendChild(degrees);
		today.appendChild(desc);

		today.classList.add('template-body');
		title.classList.add('template-title');
		degrees.classList.add('template-degrees');
		desc.classList.add('template-desc');

		//Set Values
		title.textContent = next;
		degrees.textContent = Math.floor(data[i].temp) + '°';
		if (data[i].conditions === 'Partially cloudy') {
			desc.textContent = 'Cloudy';
		} else if (data[i].conditions === 'Rain, Partially cloudy') {
			desc.textContent = 'Rain';
		} else if (data[i].conditions === 'Rain, Overcast') {
			desc.textContent = 'Rain';
		} else {
			desc.textContent = data[i].conditions;
		}

		days.appendChild(today);
	}
};

const setHourlyForcast = (data) => 
{
  const hours = document.querySelector('.hours');
  const currentDate = new Date();
  hours.innerHTML = ""; 
  for(let i = 0; i < 6; i++)
  {
    let currentHour = addHours(currentDate, i);
    let formattedHour = format(currentHour, 'ha');

    const hour = document.createElement('div'); 
    const hourlyTitle = document.createElement('div'); 
    const degrees = document.createElement('div'); 
    const desc = document.createElement('div'); 

    hours.appendChild(hour);
    hour.appendChild(hourlyTitle); 
    hour.appendChild(degrees); 
    hour.appendChild(desc);

    hour.classList.add('hour'); 
    hourlyTitle.classList.add('hourlyTitle'); 
    degrees.classList.add('degrees');

    hourlyTitle.textContent = formattedHour; 
    
    let checkHour = format(currentHour, 'H');
    degrees.textContent = Math.floor(data[0].hours[checkHour].temp) + '°';
    if (data[0].hours[checkHour].conditions === 'Partially cloudy') {
			desc.textContent = 'Cloudy';
		} else if (data[0].hours[checkHour].conditions === 'Rain, Partially cloudy') {
			desc.textContent = 'Rain';
		} else if (data[0].hours[checkHour].conditions === 'Rain, Overcast') {
			desc.textContent = 'Rain';
		} else {
			desc.textContent = data[0].conditions;
		}
}

  /*
  for(let i = 0; i < 6; i++)
  {
    const hour = document.createElement('div'); 
    const hourlyTitle = document.createElement('div'); 
    const degrees = document.createElement('div'); 
    const desc = document.createElement('div'); 

    hours.appendChild(hour);
    hour.appendChild(hourlyTitle); 
    hour.appendChild(degrees); 
    hour.appendChild(desc);

    hour.classList.add('hour'); 
    hourlyTitle.classList.add('hourlyTitle'); 
    degrees.classList.add('degrees');

    hourlyTitle.textContent = 1 + meridiem; 
    degrees.textContent = "20°";
    desc.textContent = "Cloudy";     
  }
    */
}
