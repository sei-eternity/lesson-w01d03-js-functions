const calculator = function(a, b, c){
  
    if (isNaN(a) || isNaN(b)){
  return "calculator only accepts numbers";
  }
  if(c === "add"){
  return a + b ;
  }
  else if ( c === "subtract"){
  return a - b;
  }
  else if ( c === "divide"){
  return a / b;
  }
  else if ( c === "multiply") {
  return a * b;
  }
  else {
  return "calculator can only add, subtract, divide, or multiply";
  }
  
  }