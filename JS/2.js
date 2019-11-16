let getFact = (a) => {
    let f = 1;
    if (a == 0) return f;
    for (let i = 1; i <= a; i++) {
        f *= i;
    }
    return f;
};

let numb = +(prompt("Enter the natural number"));
console.log(getFact(numb));