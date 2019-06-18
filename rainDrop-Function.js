//Lab: RainDrop Function
function rainDrop(num){
    let num1=3;
    let num2=5;
    let num3=7;
    let output = "";
    if(num%num1==0){output += 'Pling';}
    if(num%num2==0){output += 'Plang';}
    if(num%num3==0){output += 'Plong';}
    
    return     console.log(output || num.toString());    
}
rainDrop(1755);
