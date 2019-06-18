const rainDrop = function(number){
    let output = "";

    if ( number % 3 === 0){
        output +="Pling"
    }
    if ( number % 5 === 0){
        output +="Plang"
    }
    if ( number % 7 === 0){
        output +="Plong"
    }

    console.log(output || number.toString());
}

rainDrop(28) // Plong
rainDrop(1755) // PlingPlang
rainDrop(34) // 34
