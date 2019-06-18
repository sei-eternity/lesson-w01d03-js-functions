// youRock function
const youRock = function(name){
    console.log("Yor rock "+ name);}

youRock('Marc');
VM1361:2 Yor rock Marc
undefined
const square = function(num){
return num*num;
}
undefined
square(2)
4
const cube = function(num){
return num*num*num;
}
undefined
cube(2)
8
const toTheFourth = function(num){
return num*num*num*num;
}
undefined
toTheFourth(2);
16

/// fizzBuzz function
const fizzBuzz = function (num){
let output="";
if(num %3 ==0)
output+= "Fizz";
if(num %5 ==0)
output+= "Buzz";
return output||num;}
fizzBuzz(3);


"Fizz"
fizzBuzz(15);

"FizzBuzz"
fizzBuzz(7);

7



/////calculator function
const calculator = function(num1,num2,operation){
 if(typeof num1  == 'number' && typeof num2 == 'number' ){ 
switch (operation){
case"add":
return num1+num2;
case"subtract":
return num1-num2;
case"divide":
return num1/num2;
case"multiply":
return num1*num2;
    default:
return "calculator can only add, subtract, divide, or multiply";
}}
else 
return "calculator only accepts numbers";
}


/////// rainDrop function
const rainDrop = function (num){
let output = "";
if (num % 3==0){ 
output+="Pling";}
if (num % 5==0){ 
output+=" Plang";}
if (num % 7==0){ 
output+=" Plong";}
console.log(output||num)}
rainDrop(28);
VM591:9  Plong
rainDroppp(1755);
VM591:9 Pling Plang
rainDroppp(34);
VM591:9 34


