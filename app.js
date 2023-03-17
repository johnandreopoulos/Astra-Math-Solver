const math = require('astra-math-solver');

// Addition and subtraction
console.log(new math('5 + 3').evaluate()); // 8
console.log(new math('10 - 4').evaluate()); // 6

// Multiplication and division
console.log(new math('6 * 4').evaluate()); // 24
console.log(new math('15 / 3').evaluate()); // 5

// Exponents
console.log(new math('2 ^ 3').evaluate()); // 8
console.log(new math('10 ^ 0').evaluate()); // 1

// Square roots
console.log(new math('sqrt(25)').evaluate()); // 5
console.log(new math('sqrt(2) + sqrt(3)').evaluate()); // 3.146...

// Trigonometric functions (radians)
console.log(new math('sin(0)').evaluate()); // 0
console.log(new math('cos(Math.PI)').evaluate()); // -1
console.log(new math('tan(Math.PI / 4)').evaluate()); // 1
console.log(new math('sinh(0)').evaluate()); // 0
console.log(new math('cosh(0)').evaluate()); // 1
console.log(new math('tanh(0)').evaluate()); // 0

// Logarithms
console.log(new math('log(100, 10)').evaluate()); // 2
console.log(new math('ln(Math.E)').evaluate()); // 1

// Parentheses
console.log(new math('(5 + 3) * 2').evaluate()); // 16
console.log(new math('(10 - 4) / 3').evaluate()); // 2

// More complex expressions
console.log(new math('2 * (3 + 4)').evaluate()); // 14
console.log(new math('sqrt(16) + 2^3').evaluate()); // 10
console.log(new math('(5 + 3) * (10 - 4)').evaluate()); // 64
