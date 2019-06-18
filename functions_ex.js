let ageCalculator = (age) => new Date().getFullYear()-age


function lifetimeSupp(currentAge, maxAge, estAmounPerDay){
    let period = maxAge - currentAge;
    let result = period*360*estAmounPerDay;
    console.log(`You will need ${result} to last you until the ripe old age of ${maxAge}`)
}

function geometrizer(radius){
    console.log("The circumference is " + (2 * radius * Math.PI));
    console.log("The area is " + (radius * radius * Math.PI));
}


function cToF(celsius) {
    var cTemp = celsius;
    var cToFahr = cTemp * 9 / 5 + 32;
    var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) {
    var fTemp = fahrenheit;
    var fToCel = (fTemp - 32) * 5 / 9;
    var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 

//----------------------------------------------------

function biggestNum(numOne, numeTwo){
    return numOne > numeTwo ? numOne : numeTwo
}



function drivingAge(age){
    return age >= 18 ? console.log("Drive away!"): console.log(`Sorry, you have ${18-age} years to wait until you can drive`)
}

function sayHello(language) {
	var arrHellos = {
        "Arabic" : "مرحبا بالعالم",
		"Chinese" : "你好世界",
		"Dutch" : "Hallo wereld",
		"English" : "Hello world",
		"French" : "Bonjour monde",
		"German" : "Hallo Welt",
		"Greek" : "γειά σου κόσμος",
		"Italian" : "Ciao mondo",
		"Japanese" : "こんにちは世界",
		"Korean" : "여보세요 세계",
		"Portuguese" : "Olá mundo",
		"Russian" : "Здравствуй, мир",
		"Spanish" : "Hola mundo"
	};
	console.log(arrHellos[language]);
}

function assignGrade(score) {
    var grade;
    if (score >= 90) {
      grade = "A";
    } else
    if (score >= 80 && score < 90) {
      grade = "B";
    } else
    if (score >= 70 && score < 80) {
      grade = "C";
    }
    console.log(grade);
  }
  

//---------------------
const calculator = function(num1, num2, operation){
    if(Number.isInteger(num1)&&Number.isInteger(num2)){
        if(operation == "add"){
            return num1+num2;
        }else if(operation=="subtract"){
            return num1-num2;
        }else if(operation=="divide"){
            return num1/num2;
        }else if(operation=="multiply"){
            return num1*num2;
        }else{
            return "calculator can only add, subtract, divide, or multiply";
        }
    } else {
        console.log("calculator only accepts numbers")
    }
}


function rainDrop(integer){
    var factors = [],
    quotient = 0;

    for(var i = 1; i <= integer; i++){
      quotient = integer/i;
  
      if(quotient === Math.floor(quotient)){
        factors.push(i); 
      }
    }
    let result = "";
    if (factors.includes(3)){
        result += "Pling";
    }
    if (factors.includes(5)){
        result += "Plang";
    }
    if (factors.includes(7)){
        result += "Plong";
    }
    const final = (result=="")? integer : result
    console.log(final);
    // return factors;
  }