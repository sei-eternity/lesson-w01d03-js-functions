const youRock = function (name) {
  console.log("You rock " + name);
  return "You rock " + name;
}

youRock('Marc') // 'You rock Marc!'
youRock('Alanoud') //'You rock Alanoud!'



const  square = function (num) {
  console.log(num * num);
  return num * num;
}
square(2); // 4
square(3); // 9

const  cube = function (num) {
  console.log(num * num * num);
  return num * num * num;
}
cube(2); // 8
cube(3); // 27

const  toTheFourth = function (num) {
  console.log(num * num * num * num);
  return num * num *num * num;
}
toTheFourth(2) // 16
toTheFourth(3) // 81


const  calculator = function (num1 , num2 , cal) {
     if (cal === "add") {
      console.log(num1 + num2);
      return num1 + num2;
    }



}

const  calculator = function (num1 , num2 , cal) {
  if (typeof num1 == 'number' && typeof num2 == 'number') {

    if (cal === "add") {
      console.log(num1 + num2);
      return num1 + num2;
    }
    if (cal === "subtract") {
      console.log(num1 - num2);
      return num1 - num2;
    }
    if (cal === "divide") {
      console.log(num1 / num2);
      return num1 / num2;
    }
    if (cal === "multiply") {
      console.log(num1 * num2);
      return num1 * num2;
    }

    if (cal === "something else") {
      console.log("calculator can only add, subtract, divide, or multiply");
      return "calculator can only add, subtract, divide, or multiply";
    }
  } else {
    console.log("should Number");
  }

}

calculator(1, 2, "add"); // should return 3
calculator(1, 2, "subtract"); // should return -1
calculator(1, 2, "divide"); // should return .5
calculator(1, 2, "multiply"); // should return 2
calculator(1, 2, "something else"); // should return "calculator can only add, subtract, divide, or multiply
calculator("cat", 2, "add"); // should return "calculator only accepts numbers"
