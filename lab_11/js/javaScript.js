alert("Пітух Роман");

console.log("Пітух Роман");

let a = 4;
let b = 5;

console.log(a,b);

b = a;

console.log(a,b);

const object = {string: "String", number: 18, boolean: true, undefined: undefined, null: null};
console.log(object);

let isAdult = confirm("Вам є 18?");

console.log(isAdult);

let name = "Roman";
let lastName = "Pituh";
let birthday = 2004;
let family = false;
console.log(typeof (name), typeof(lastName),typeof(birthday),typeof(family));

let login = prompt("Enter your login");
let email = prompt("Enter your email");
let password = prompt("Enter your password");

console.log("Dear", login, "your email", email, "your password", password);

let result = 60 * 60;
console.log("Кількість секунд в годинах", result);

result = 60 * 60 * 24;
console.log("Кількість секунд в добі", result);

result = 3600 * 24 * 31;
console.log("Кількість секунд в місяці", result);