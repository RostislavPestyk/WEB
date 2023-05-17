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

let people = new Worker("People", 200, 24);

console.log("Змінюємо кофіцієнт 1.2");
people.showSalary();
people.showSalaryWithExperience();

console.log("Змінюємо кофіцієнт 1.5");

people.experience = 1.5;
console.log(people.experience);

let people1 = new Worker("people1", 140, 16);

people1.showSalary();
people1.showSalaryWithExperience();

let people2 = new Worker("People2", 250, 30);

people2.showSalary();
people2.showSalaryWithExperience();

let people3 = new Worker("People3", 60, 10);

people3.showSalary();
people3.showSalaryWithExperience();