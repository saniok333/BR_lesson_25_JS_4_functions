let showTimeInHMS = (s) => {

    let h = (s - s % 3600) / 3600;
    s -= h * 3600;
    if (h < 10) h = `0${h}`;
    if (h == 0) h = `00`;
    let m = (s - s % 60) / 60;
    s -= m * 60;
    if (m < 10) m = `0${m}`;
    if (m == 0) m = `00`;
    if (s < 10) s = `0${s}`;
    if (s == 0) s = `00`;
    return `${h}:${m}:${s}`;
};

let showTimeInSeconds = (h, m, s) => {
    return h * 3600 + m * 60 + s;
};

let showTimeBetweenDates = (h1, m1, s1, h2, m2, s2) => {
    alert(showTimeInHMS((showTimeInSeconds(h2, m2, s2)) - (showTimeInSeconds(h1, m1, s1))));
};


let hours1 = +(prompt("Enter the hours of the first date"));
let minutes1 = +(prompt("Enter the minutes of the first date"));
let seconds1 = +(prompt("Enter the seconds of the first date"));
let hours2 = +(prompt("Enter the hours of the second date"));
let minutes2 = +(prompt("Enter the minutes the second date"));
let seconds2 = +(prompt("Enter the seconds the second date"));
showTimeBetweenDates(hours1, minutes1, seconds1, hours2, minutes2, seconds2);