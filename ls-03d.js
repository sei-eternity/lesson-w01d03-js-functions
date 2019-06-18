const lazFunction = function() {
  console.log("Holle word");
}

lazFunction();


const printHello = function (name) {
  console.log("Holle " + name);
}

printHello('nawaf');


const add = function () {
  console.log(5 + 9);
}

add();


const prinSum = function(num1 ,num2) {
  console.log(num1 + num2);
}


prinSum(2, 3);

const subtract = function (num1 ,num2) {
  console.log(num1 - num2);
}

subtract(2, 5);

const fun = function (num1 , num2) {
  console.log(num1 * num2);
}

fun(2, 4);


const allowedToDrive = function (age) {
  if (age < 18) {
    return 'Not allosed! sorry!';
  } else {
    return 'You can drive!';
  }

}
allowedToDrive(28);



const returnExample = function() {
  return false;
  console.log("Hi");
  return true;
}

returnExample();



const fullName = function (firstName , lasName) {
  return `${firstName}  ${lasName}`;
}

fullName("nawaf", "a");


function dosomething() {}

//Arrow Functions
var setNameIdsEs6 = (id, name) => ({
  id: id, name: name
});


//Recursion

const storeItem = function(item, boxes){
  const randpmBox = getRandomBox(boxes);
  if(randomBox === 'empty'){
    //store otme in this random box
  }else {
    storeItem(itm,boxes);
  }
}
