/**Завдання 4. Створіть клас Worker який буде мати конструктор, який приймає
наступні властивості: fullName (ім’я і прізвище), dayRate (ставка за день роботи),
workingDays (кількість відпрацьованих днів).
1) клас повинен мати метод showSalary(), який буде виводити зарплату
працівника. Зарплата - це добуток ставки dayRate на кількість відпрацьованих днів
workingDays.
2) додати приватне поле experience і присвоїти йому значення 1.2 і
використовувати його як додатковий множник при визначенні зарплати – створити метод
showSalaryWithExperience(). Вивести значення зарплати з цим коефіцієнтом.
3) додати гетери і сетери для поля experience. Встановити значення experience =
1.5 і вивести його на екран.
4) Вивести значення зарплати з новим experience.
5) Створити кілька екземплярів класу (працівників) з різними зарплатами, як
показано в прикладі нижче. Посортувати зарплату працівників із найбільшим experience
по зростанню і вивести результат в форматі: worker_fullName: salary_value */

class Worker {
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    #expirience = 1.2;

    set experience(value) {
        this.#expirience = value;
    }

    get experience() {
        return this.#expirience;
    }
    
    showSalary() {
        let res = this.dayRate * this.workingDays;
        console.log(this.fullName, '= ' + res);
    }

    showSalaryWithExperience() {
        let res = this.dayRate * this.workingDays;
        let resWithExp = this.#expirience * res;
        console.log(this.fullName + " =", resWithExp);
    }
}