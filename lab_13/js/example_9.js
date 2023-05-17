function lastArr(arr, num) {
    for (let i = arr.length - num; i < arr.length; i++) {
         console.log(arr[i]);
    }
}

let arr = [1, 2, 3, 4, 5, 6];

lastArr(arr, 3);