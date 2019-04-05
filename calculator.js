function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function sum(array) {
    let sum = array.reduce((acc, currentValue) => {
        return acc + currentValue;
    }, 0)
    return sum
}

module.exports = {add, subtract, sum}