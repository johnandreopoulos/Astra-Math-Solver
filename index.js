const colors = require('colors');

const PACKAGE_NAME = 'Math Package';

class Package {
    constructor(expression) {
        this.expression = expression;
    }

    evaluate() {
        if (!this.expression) {
            console.error(`[${colors.red(PACKAGE_NAME)}] Please provide a mathematical expression.`);
            return;
        }

        const jsExpression = this._convertToJsSyntax();
        try {
            return eval(jsExpression);
        } catch (error) {
            console.error(`[${colors.red(PACKAGE_NAME)}] Invalid mathematical expression.`);
        }
    }
    _convertToJsSyntax() {
        return this.expression
            .replace(/\s/g, '')
            .replace(/([\d)])([\(\[])/g, '$1*$2')
            .replace(/×/g, '*')
            .replace(/÷/g, '/')
            .replace(/≠/g, '!=')
            .replace(/=/g, '==')
            .replace(/AND/g, '&&')
            .replace(/OR/g, '||')
            .replace(/MOD/g, '%')
            .replace(/√(\d+)/g, 'Math.sqrt($1)')
            .replace(/(\d+)\^(\d+)/g, 'Math.pow($1, $2)')
            .replace(/π/g, 'Math.PI')
            .replace(/e/g, 'Math.E')
            .replace(/asin\(/g, 'Math.asin(')
            .replace(/acos\(/g, 'Math.acos(')
            .replace(/atan\(/g, 'Math.atan(')
            .replace(/log\((\d+),(\d+)\)/g, 'Math.log($1) / Math.log($2)')
            .replace(/ln\(/g, 'Math.log(')
            .replace(/sqrt\(/g, 'Math.sqrt(')
            .replace(/sin\(/g, 'Math.sin(')
            .replace(/cos\(/g, 'Math.cos(')
            .replace(/tan\(/g, 'Math.tan(')
            .replace(/sinh\(/g, 'Math.sinh(')
            .replace(/cosh\(/g, 'Math.cosh(')
            .replace(/tanh\(/g, 'Math.tanh(')
            .replace(/asinh\(/g, 'Math.asinh(')
            .replace(/acosh\(/g, 'Math.acosh(')
            .replace(/atanh\(/g, 'Math.atanh(');
    }
}

module.exports = Package;