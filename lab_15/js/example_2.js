function showProps(myObject) {
    for (const key in myObject) {
        console.log(key + ":", myObject[key]);
    }
}

let Andrew = {
    name: "Andrew",
    lastName: "Ostrovsky",
    age: 19,
    weight: 75,
    hight: 185
}

showProps(Andrew);