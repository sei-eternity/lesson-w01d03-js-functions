const youRock = function(name) {
    return `Your rock ${name}`;
}

const square = function(number) {
    return number * number;
}

const cube = function(number) {
    return Math.pow(number, 3);
}

const toTheFourth = function(number) {
    return Math.pow(number, 4);
}

const calculator = function(num1, num2, operator) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number')
        return 'Calculator only accepts numbers';

    switch(operator) {
        case 'add': return num1 + num2;
        case 'subtract': return num1 - num2;
        case 'divide': return num1/num2;
        case 'multiply': return num1 * num2;
        default: return 'Calculator can only add, subreact, divide, or multiply'
    }
}

const fizzBuzz = function(num) {
    let result = '';

    if(num % 3 === 0 && num !== 0)
        result += 'Fizz';
    if(num % 5 === 0 && num !== 0)
        result += 'Buzz';
    
        return result || num;
}


const rainDrop = function(num) {
    let result = '';

    if(num % 3 === 0 && num !== 0)
        result += 'Pling';
    if(num % 5 === 0 && num !== 0)
        result += 'Plang';
    if(num % 7 === 0 && num !== 0)
        result += 'Plong';
    
    return result || num.toString();
}
