let showTime = (h, m, s) => {
    if (h < 10) h = `0${h}`;
    if (m < 10) m = `0${m}`;
    if (m == undefined) m = `00`;
    if (s < 10) s = `0${s}`;
    if (s == undefined) s = `00`;
    alert(`${h}:${m}:${s}`);
};

let hours = +(prompt("Enter the hours"));
let minutes = +(prompt("Enter the minutes"));
let seconds = +(prompt("Enter the seconds"));
console.log(showTime(hours, minutes, seconds));