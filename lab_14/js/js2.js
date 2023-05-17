/*Напишіть функцію checkAge(), яка пропонуватиме юзеру ввести свій
вік і генерувати в модальному вікні помилки у випадку, коли:
- юзер ввів порожню стрічку (наприклад “The field is empty! Please enter your age”),
- нечислове значення
- вік юзера менше 14 років.
В іншому разі юзер отримує доступ до перегляду фільму.
В блокові catch передбачити виведення назви і опису помилки. */



function checkAge() {
    let userAge = prompt("Enter your age", "");

    if (userAge <= 0) {
        alert("Enter valid date");
    }
    else if (typeof(userAge) === 'string') {
        alert("Enter valid date");
    }   
    else if (userAge < 14) {
        alert("You can`t see this film");
    }
}

checkAge();