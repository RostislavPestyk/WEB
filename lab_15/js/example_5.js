/**Завдання 5. Створіть батьківський клас GeometricFigure, який має порожній
метод для визначення площі getArea() та метод toString() для виведення назви класу.
Створіть 3 класи нащадки Triangle, Square і Circle, які наслідуються від класу
GeometricFigure. Кожен з дочірніх класів має свою реалізацію методу getArea(), для
визначення площі фігури. В конструкторах дочірніх класів передбачити властивості
необхідні для визначення площі фігури, наприклад для кола - радіус r.
Створіть зовнішню функцію handleFigures(figures), яка прийматиме масив об’єктів
дочірніх класів figures, перевірятиме чи об’єкт належить батьківському класу з
урахуванням наслідування, виводитиме назву створеного об’єкту відповідної фігури,
розраховану площу фігури та сумарну площу всіх фігур. Для реалізації функції можете
використати метод reduce(). */

let sqr = new Square(5, 6);
console.log(sqr.getArea());

let trg = new Triangle(5, 6, 7);
console.log(trg.getArea());

let cir = new Circle(25);
console.log(cir.getArea());

function handleFigures(figures) {
    let totalArea = 0;

    totalArea = figures.reduce((acc, fig) => acc + fig.getArea(), 0);

    for (let i = 0; i < figures.length; i++) {
        const figure = figures[i];
        const figureName = figure.constructor.name;
        const figureArea = figure.getArea();

        console.log(`${figureName}: площа = ${figureArea}`);

        totalArea += figureArea;
    }

    console.log(`Загальна площа всіх фігур: ${totalArea}`);
}

handleFigures([sqr, trg, cir])