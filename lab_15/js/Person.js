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

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    showFullName() {
        console.log(this.name + "", this.surname);
    }
}