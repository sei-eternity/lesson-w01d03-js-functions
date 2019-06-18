allowedToDrive(17);
const youRock = function(name){
  console.log("You rock"+ name);
}
youRock(" Abdullah");

const square = function(num){
  console.log(num*num);
}
square(5);

const cube = function(num2){
  console.log(num2*num2*num2);
}
cube(5);
const toTheFourth = function(num){
  console.log(num*num*num*num);
}
toTheFourth(5)

const calculator = function(num1,num2,op){
    if(op !=="add"&& op !=="subtract"&& op !=="divide"&&op !=="multiply"){
      console.log("calculator can only add, subtract, divide, or multiply")
  
    }else if(isNaN(num1||num2)){
      console.log("calculator only accepts numbers")
    }
    else if(op ==="add"){
      console.log(num1+num2)
    }else if(op === "subtract"){
      console.log(num1-num2);
  
    }else if(op === "divide"){
      console.log(num1/num2);
  
    }
    else if(op === "multiply"){
      console.log(num1*num2);
  
    }
  }
  calculator(7,5,"add")
  
  const rainDrop = function(num){
    let output="";
    if(num%3 ==0){
      output+="Pling" 
    }
    if (num%5 ==0){
      output+="Plang"
    }
    if(num%7 ==0){
      output+="Plong"
    }
    console.log(output||num);
  }
  rainDrop(15);
  