export async function getData(city) {
    
    city = "NewYork,USA"
    const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + city + "?key=LYMM5URNJZ8F68TLBNEEVSG3J";
    try {
      const response = await fetch(url);
      const json = await response.json();
      
      //Set Fields
      setCurrentTemp(json.currentConditions.temp);
      

    } catch (error) {
      console.error(`Response Status: ${response.status}`);
    }
}
  
const setCurrentTemp = (currentTemp) =>
{
    
}