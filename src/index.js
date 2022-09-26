import "./main.scss";

// Треугольник в цикле
// let a = '';
// for (i = 0; i < 7; i++) {
//     a += '#';
//     console.log(a);
// }

// Решетка 8х8
// for (i = 0; i < 8; i++) {
//     if (i % 2 == 0) {
//         a = '#';
//         b = ' ';
//     } else {
//         a = ' ';
//         b = '#';
//     }
//     let string = a + b;

//     for (j = 0; j < 6; j++) {
//         if (j % 2 == 0) {
//             string += a;
//         } else {
//             string += b;
//         }
//     };

//     console.log(string);
// }

// Ввести число, большее 100
// let number;
// do {
//     number = prompt('Введите число, большее 100', '');
// } while (number <= 100 && number);

// ANKETA
let lastName = prompt('Введите вашу фамилию', '');
let firstName = prompt('Введите ваше имя', '');
let patronymic = prompt('Введите ваше отчество', '');
let age = prompt('Ваш возраст', '');
let gender = confirm('Ваш пол - мужской?');

function checkLastName() {
    if (lastName == '' || lastName == null || Number(lastName)) {
        do {
            lastName = prompt('Введите вашу фамилию', '');
        } while (lastName == '' || lastName == null || Number(lastName));
        return `ваше ФИО: ${lastName} ${firstName} ${patronymic}`;
    } else {
        return `ваше ФИО: ${lastName} ${firstName} ${patronymic}`;
    }
};

let ageInDays;
let ageAfterFiveYears;

function checkAge() {
    if (age < 1 || age > 120 || isNaN(age)) {
        do {
            age = prompt('Введите правильный возраст', '');
        } while (age < 1 || age > 120 || isNaN(age));
        ageInDays = `ваш возраст в днях: ${age * 365}`;
        ageAfterFiveYears = `через 5 лет вам будет: ${Number(age) + 5}`;
        return `ваш возраст в годах: ${age}`;
    } else {
        ageInDays = `ваш возраст в днях: ${age * 365}`;
        ageAfterFiveYears = `через 5 лет вам будет: ${Number(age) + 5}`;
        return `ваш возраст в годах: ${age}`;
    }
};

let genderUser = (gender == true) ? 'ваш пол: мужской' : 'ваш пол: женский';
let penny = (age < 62) ? 'вы на пенсии: нет' : 'вы на пенсии: да';

function showAnketa() {
    return `${checkLastName()} \n ${checkAge()} \n ${ageInDays} \n ${ageAfterFiveYears} \n ${genderUser} \n ${penny}`;
}

alert(showAnketa());
