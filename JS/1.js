let compareNumb = (a, b) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
};

let first = +(prompt("Enter the first number"));
let second = +(prompt("Enter the second number"));
console.log(compareNumb(first, second));