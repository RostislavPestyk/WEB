function findMind(minValue) {
    let temp = minValue[0];
    for(let i = 0; i < arr.length; i++){
        if(minValue[i] < temp) {
            temp = minValue[i];
        }
    }
    return console.log("Min = ", temp);
}

let arr = [12, 14, 4, -4, 0.2];

findMind(arr);