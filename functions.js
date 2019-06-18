function youRock(name){
	return 'You rock '+name;
}
youRock('ahmed');

function square(num){
	return num*num;
}
square(2);

function cube(num){
	return num*num*num;
}
cube(2);

function toTheFourth(num){
	return num*num*num*num;
}
toTheFourth(2);

//Extra practice --calclator
function calclator(num1, num2, operator){
	if(operator == "add"){ return num1+num2;}
	else if (operator == "subtract"){ return num1-num2;}
	else if (operator == "multiply"){ return num1*num2;}
	else if (operator == "divide"){ return num1/num2;}
	else if (operator == "somthing else"){ return 'calculator can only add, subtract, divide, or multiply';}
	else {return 'calculator only accepts numbers';}

}
calclator(2, 3, "add");

