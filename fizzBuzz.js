//fizzBuzz



const fizzBuzz = function (number) {
var output = " ";

 if(number % 3 === 0){
  output += "Fizz";
 }
 if(number % 5 === 0){
  output += "Buzz";
 }

 if(output == " ") {
   output = number}

  console.log(output);

}


fizzBuzz(3) // Fizz
fizzBuzz(15) // FizzBuzz
fizzBuzz(7) // 7
