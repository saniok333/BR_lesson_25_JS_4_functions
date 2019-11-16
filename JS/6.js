let checkPerfectNumber = (a) => {
    let sumDividers = 0;
    for (let i = 1; i < a; i++) {
        if ((a % i) == 0) sumDividers += i;
    }
    return ((sumDividers != 0) && (a == sumDividers));
};

let showPerfectNumbers = (a, b) => {
    for (let i = a; i <= b; i++) {
        if (checkPerfectNumber(i)) {
            console.log(i);
        };
    }
};

let start = +(prompt("Enter the start of the range"));
let end = +(prompt("Enter the end of the range"));
console.log(showPerfectNumbers(start, end));