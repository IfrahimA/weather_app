export const updateCurrentTime = () => {
  const time = document.querySelector(".time");
  setInterval(() => {
    let currentDate = new Date();
    let meridiem;
    let currentTime = currentDate.getHours() + ":" + currentDate.getMinutes();
    if (currentDate.getHours() >= 12) {
      meridiem = "PM";
    } else {
      meridiem = "AM";
    }
    time.textContent = currentTime + meridiem;
  }, 1000);
};
