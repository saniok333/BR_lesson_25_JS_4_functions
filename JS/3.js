let connectDigits = (a, b, c) => {
    return 100 * a + 10 * b + c;
};

let first = +(prompt("Enter the first digit"));
let second = +(prompt("Enter the second digit"));
let third = +(prompt("Enter the third digit"));
console.log(connectDigits(first, second, third));