let checkPerfectNumber = (a) => {
    let sumDividers = 0;
    for (let i = 1; i < a; i++) {
        if ((a % i) == 0) sumDividers += i;
    }
    return ((sumDividers != 0) && (a == sumDividers));
};

let numb = +(prompt("Enter the natural number"));
console.log(checkPerfectNumber(numb));