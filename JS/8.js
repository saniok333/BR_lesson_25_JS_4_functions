let showTimeInSeconds = (h, m, s) => {

    alert(`${h*3600+m*60+s} seconds`);
};

let hours = +(prompt("Enter the hours"));
let minutes = +(prompt("Enter the minutes"));
let seconds = +(prompt("Enter the seconds"));
console.log(showTimeInSeconds(hours, minutes, seconds));