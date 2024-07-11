export const todayTemp = () => 
{
    const mainDisplay = document.querySelector('.todayTemp');
    mainDisplay.textContent = "20°"; 
}

export const additionalInfo = () =>
{
    const additionalInfo = document.querySelector('.additionalInfo');
    additionalInfo.textContent = "Cloudy";
}