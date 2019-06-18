const youRock = function(name){
    return `You rock ${name}!`;
}
console.log(youRock('Hazim'))


const square = function(number){
    return number*number;
}
console.log(square(5));


const cube = function(number){
    return number*square(number);
}
console.log(cube(3));


const toTheFourth = function(number){
    return number*cube(number);
}
console.log(toTheFourth(2));

const calculator = function(num1, num2, operation){
    if ( isNaN(num1) || isNaN(num2)){
        return "calculator only accepts numbers";
    }
    if(operation === 'add'){
        return +num1 + +num2;
    } else if(operation === 'subtract'){
        return num1 - num2;
    } else if(operation === 'divide'){
        return num1 / num2;
    } else if( operation === 'multiply'){
        return num1 * num2;
    } else {
        return  "calculator can only add, subtract, divide, or multiply"
    }
}
console.log( calculator(8,2,'add'));

