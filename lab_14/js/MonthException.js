/* Задання потребує ознайомлення з матеріалом наступної лекції.
Створіть клас MonthException, конструктор якого приймає параметр message і
ініціалізує поле name значенням 'MonthException'.
Реалізуйте функцію showMonthName(month), в якій параметр month – це
порядковий номер місяця в році. Функція повертає назву місяця відповідно до введеного
номера місяця. У випадку некоректного вводу викидається ексепшн у вигляді об’єкта
класу MonthException з повідомленням 'Incorrect month number'.
Напишіть код, який використовує цю функцію, передбачте обробку можливих
винятків.
Приклад ро*/


class MonthException {
    constructor(message) {
        this.name = 'MonthException';
        this.message = message;
    }

    showMonthName(month) {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];

        if (month > 12) {
            console.log("Incorrect month number")
        }

        return months[month - 1];
    }
}