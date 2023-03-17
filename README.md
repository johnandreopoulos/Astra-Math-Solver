# Astra Math Solver

Astra Math Solver is a JavaScript package that can evaluate mathematical expressions with support for various mathematical functions and constants.

# Github
https://github.com/johnandreopoulos/Astra-Math-Solver

## Installation

To use Astra Math Solver in your JavaScript project, you can install it using npm:
`npm install astra-math-solver`

## Usage

To use Astra Math Solver, simply create a new instance of the `Package` class and pass in a mathematical expression as a string to the constructor. Then call the `evaluate()` method on the instance to get the result of the expression. Here's an example:

```js
const math = require('astra-math-solver');

const expression = '2 * (3 + 4)';
const result = new math(expression).evaluate();
console.log(result); // 14
```

Astra Math Solver supports a variety of mathematical functions and constants. Here are some examples:

- Addition and subtraction: `'5 + 3'`, `'10 - 4'`
- Multiplication and division: `'6 * 4'`, `'15 / 3'`
- Exponents: `'2 ^ 3'`, `'10 ^ 0'`
- Square roots: `'sqrt(25)'`, `'sqrt(2) + sqrt(3)'`
- Trigonometric functions: `'sin(0)'`, `'cos(Math.PI)'`, `'tan(Math.PI / 4)'`
- Logarithms: `'log(100, 10)'`, `'ln(Math.E)'`
- Parentheses: `'(5 + 3) * 2'`, `'(10 - 4) / 3'`

## Error Handling

If you provide an invalid mathematical expression, Astra Math Solver will throw an error with a message indicating what went wrong. Here's an example:

```js
const math = require('astra-math-solver');

const expression = '5 / 0';
const result = new math(expression).evaluate();
// Output: "[Astra Math Solver] Invalid mathematical expression."
```

## Contributing

If you find a bug or have a suggestion for a new feature, please feel free to open an issue or submit a pull request on GitHub.

## License

Astra Math Solver is licensed under the [MIT License](https://github.com/<username>/<repo>/blob/master/LICENSE).
