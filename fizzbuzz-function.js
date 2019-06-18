//FizzBuzz Function
function fizz(num){
let res = "";

if(num%3==0 && num%5==0){res+='FizzBuzz';}
else if(num%3==0){res+='Fizz';}
else if(num%5==0){res+='Buzz';}


return res || num;
}
fizz(15);
