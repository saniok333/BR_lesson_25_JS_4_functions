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
    alert(`${h}:${m}:${s}`);
};

let seconds = +(prompt("Enter the seconds"));
showTimeInHMS(seconds);