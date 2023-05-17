let a = prompt("Введіть сторону A");
let b = prompt("Введіть сторону B");
let c = prompt("Введіть сторону C");
let p;

if(isNaN('a'), isNaN('b'), isNaN('c')) {
    p = a*b*c/2
    console.log("Площа трикутника = ", p.toFixed(3));
} else {
    console.log("Дані введені не правильно");
}

if(Math.pow(a,2)+Math.pow(b,2) === Math.pow(c,2))
{
    console.log("Прямокутний");
} else {
    console.log("Не прямокутний");
}