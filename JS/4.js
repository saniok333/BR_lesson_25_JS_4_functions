let calcRectArea = (a, b) => {
    if (b == undefined) return a ** 2;
    return a * b;
};

console.log(calcRectArea(3, 4));
console.log(calcRectArea(5));