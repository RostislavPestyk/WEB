const date = new Date();

const time = date.getHours();

if (time >= 23 || time < 5) {
    console.log("Доброї ночі");
} 
else if (time >= 5 || time < 11) {
    console.log("доброго ранку");
} 
else if (time >= 11 || time < 17) {
    console.log("Доброго дня")
} 
else if (time >= 17 || time < 23) {
    console.log("Доброго вечора")
}