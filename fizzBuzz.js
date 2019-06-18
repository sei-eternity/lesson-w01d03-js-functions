const fizzBuzz = function(number){
    let output = "";

    if ( number % 3 === 0){
        output +="Fizz"
    }
    if ( number % 5 === 0){
        output +="Buzz"
    }
   
 

    console.log(output || number);
}

fizzBuzz(3) // Fizz
fizzBuzz(15) // FizzBuzz
fizzBuzz(7) // 7