function countdown( minutes) {
    const dayElement = document.querySelector('.day');
    const hourElement = document.querySelector('.hour');
    const minuteElement = document.querySelector('.minute');
    const secondElement = document.querySelector('.second');
  
    let totalSeconds = minutes*60;
  
    let interval = setInterval(function () {
      totalSeconds--;
  
      let days = Math.floor(totalSeconds / (24 * 60 * 60));
      let hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
      let minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
      let remainingSeconds = totalSeconds % 60;
  
      dayElement.textContent = String(days).padStart(2, '0');
      hourElement.textContent = String(hours).padStart(2, '0');
      minuteElement.textContent = String(minutes).padStart(2, '0');
      secondElement.textContent = String(remainingSeconds).padStart(2, '0');
      if(minutes<0){
        let change = document.querySelector('.container');
        change.innerHTML = "minutes cannot be negative";
        change.style.color = "red";
      }
     
  
      if (totalSeconds = 0) {
        clearInterval(interval);
        let change = document.querySelector('.container');
        change.innerHTML = "Time is up!";
        change.style.color = "red";
      }
    }, 1000);
  }
  
  countdown(-300 );
  





