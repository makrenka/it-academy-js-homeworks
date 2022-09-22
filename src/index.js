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
const lastName = prompt('Введите вашу фамилию', '');
const firstName = prompt('Введите ваше имя', '');
const patronymic = prompt('Введите ваше отчество', '');
const age = prompt('Ваш возраст', '');
const gender = confirm('Ваш пол - мужской?');
const lineWrapper = '\n';

let fullName = () => {
    if (lastName == '') {
        return lastName;
    } else {
        return 'ваше ФИО: ' + lastName + ' ' + firstName + ' ' + patronymic;
    }
}

let ageInYears = 'ваш возраст в годах: ' + age;
let ageInDays = 'ваш возраст в днях: ' + age * 365;
let ageAfterFiveYears = 'через 5 лет вам будет: ' + (Number(age) + 5);
let genderUser = 'ваш пол: ' + gender;
let penny = (age < 62) ? 'вы на пенсии: нет' : 'вы на пенсии: да';

function showAnketa() {
    return fullName + lineWrapper + ageInYears + lineWrapper + ageInDays + 
    lineWrapper + ageAfterFiveYears + lineWrapper + genderUser + lineWrapper + penny;
}

alert(showAnketa());

