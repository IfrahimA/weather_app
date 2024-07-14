export async function getData(city) {
	city = 'NewYork,USA';
	const url =
		'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' +
		city +
		'?key=LYMM5URNJZ8F68TLBNEEVSG3J';
	try {
		const response = await fetch(url);
		const json = await response.json(); 

		setCurrentTemp(json.currentConditions.temp);
    console.log(json.currentConditions.temp); 


	} catch (error) {
		console.error(`Response Status: ${response.status}`);
	}
}

const setCurrentTemp = (currentTemp) => {
  console.log(currentTemp); 
  const todayTemp = document.querySelector('.todayTemp');
  const tempRight = document.querySelector('.temp'); 
  todayTemp.textContent = currentTemp + "°"; 
  tempRight.textContent = currentTemp + "°"; 
};
