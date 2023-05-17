function randomArr(size, min, max) {
    let arr = [];

    for (let i = 0; i <= size; i++) {
        arr.push(Math.random() * (max - min) + min)
    }
    return arr;
}

console.log(randomArr(5, 1, 500))