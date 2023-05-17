function findUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                return false;
            } else {
                return true;
            }
        }
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(findUnique(arr));