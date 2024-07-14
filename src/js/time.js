export const updateCurrentTime = () => {
  const time = document.querySelector(".time");
  setInterval(() => {
    let currentDate = new Date();
    let hours = currentDate.getHours(); 
    let minutes = currentDate.getMinutes(); 
    let meridiem;
    //Format Time to 12Hr Format
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+ minutes : minutes;
    meridiem = hours <= 12 ? 'pm' : 'am';
    time.textContent = hours + ":" + minutes + meridiem;
    setMessage(meridiem); 
  }, 1000);
};

export const setMessage = (ampm) => 
{
  const title = document.querySelector('.helloTitle');
  ampm == 'AM' ? title.textContent = "Good Morning" : title.textContent = "Good Afternoon"; 
}
