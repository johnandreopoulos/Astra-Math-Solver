console.clear();
const math = require('./index');

// Addition and subtraction
new math('5 + 3').evaluate(); // 8
new math('10 - 4').evaluate(); // 6

// Multiplication and division
new math('6 * 4').evaluate(); // 24
new math('15 / 3').evaluate(); // 5

// Exponents
new math('2 ^ 3').evaluate(); // 8
new math('10 ^ 0').evaluate(); // 1

// Square roots
new math('sqrt(25)').evaluate(); // 5
new math('sqrt(2) + sqrt(3)').evaluate(); // 3.146...

// Trigonometric functions (radians)
new math('sin(0)').evaluate(); // 0
new math('cos(Math.PI)').evaluate(); // -1
new math('tan(Math.PI / 4)').evaluate(); // 1
new math('asin(0.5)').evaluate(); // 0.523...
new math('acos(0.5)').evaluate(); // 1.047...
new math('atan(1)').evaluate(); // 0.785...
new math('sinh(0)').evaluate(); // 0
new math('cosh(0)').evaluate(); // 1
new math('tanh(0)').evaluate(); // 0

// Logarithms
new math('log(100, 10)').evaluate(); // 2
new math('ln(Math.E)').evaluate(); // 1

// Parentheses
new math('(5 + 3) * 2').evaluate(); // 16
new math('(10 - 4) / 3').evaluate(); // 2

// More complex expressions
new math('2 * (3 + 4)').evaluate(); // 14
new math('sqrt(16) + 2^3').evaluate(); // 10
new math('(5 + 3) * (10 - 4)').evaluate(); // 64