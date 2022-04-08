function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


n = 10
function increment(n) {
    return (n += 1);
}

n = 10
function decrement(n) {
    return (n -= 1);
}

function makeInt(a = '5') {
    return parseInt(a)
}

function makeInt(string) {
    return parseInt(string, 10)
}

function preserveDecimal(n) {
    return parseFloat('2.222')
}

function preserveDecimal(a) {
    return parseFloat('2.222', 10)
}

function preserveDecimal(n) {
    return parseFloat(n)
}