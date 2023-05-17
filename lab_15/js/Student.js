/**. Створіть клас Person, в якого конструктор приймає параметри name
і surname, а також міститься метод showFullName(), який виводить ім’я і прізвище особи.
Від класу Person наслідується клас Student, конструктор якого крім name і
surname, приймає параметр year (рік вступу до університету).
В класі Student необхідно перевизначити метод showFullName(midleName), щоб
виводилося не лише ім’я, прізвище, але і по-батькові (midleName) студента.
Також в класі Student необхідно реалізувати метод showCourse(), який
виводитиме поточний курс студента (від 1 до 6). Значення курсу визначатиметься як
різниця поточного року (визначити самостійно) і року вступу до ВУЗу year.
*/

class Student extends Person {
    constructor(name, surname, midlleName, year) {
        super(name, surname);
        this.year = year;
        this.midlleName = midlleName;
    }
    showFullName() {
        console.log(this.name + '', this.surname, this.midlleName);
    }

    showCourse() {

        let currentYear = 2023;

        let result = currentYear - this.year;

        if (result > 6) {
            console.log("Випускник");
        } else {
            console.log(result);
        }
    }
}