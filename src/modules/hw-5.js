// Create class Worker in ES5

// function Worker(name, surname, rate, days) {
//     this.name = name;
//     this.surname = surname;
//     this.rate = rate;
//     this.days = days;
//     this.getSalary = function () {
//         return this.rate * this.days;
//     }
// }

// let worker = new Worker('Иван', 'Иванов', 10, 31);

// console.log(worker.name);
// console.log(worker.surname);
// console.log(worker.rate);
// console.log(worker.days);
// console.log(worker.getSalary());

//---------------------------------------------------------------------

// Create class Worker in ES6

// class Worker {
//     constructor(name, surname, rate, days) {
//         this.name = name;
//         this.surname = surname;
//         this.rate = rate;
//         this.days = days;
//     }

//     getSalary() {
//         return this.rate * this.days;
//     }
// }

// let worker = new Worker('Иван', 'Иванов', 10, 31);

// console.log(worker.name);
// console.log(worker.surname);
// console.log(worker.rate);
// console.log(worker.days);
// console.log(worker.getSalary());

//---------------------------------------------------------------------

// Create class MyString in ES5

// function MyString(string) {
//     this.string = string;
//     this.reverse = function () {
//         return this.string.split('').reverse().join('');
//     };
//     this.ucFirst = function () {
//         return this.string[0].toUpperCase() + this.string.slice(1);
//     };
//     this.ucWords = function () {
//         let arr = this.string.split(" ");
//         for (let i = 0; i < arr.length; i++) {
//             arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
//         }
//         return arr;
//     };
// }

// let str = new MyString('abcde');
// let str1 = new MyString('abcde abcde abcde');

// console.log(str.reverse('abcde'));
// console.log(str.ucFirst('abcde'));
// console.log(str1.ucWords('abcde abcde abcde'));

//---------------------------------------------------------------------

// Create class MyString in ES6

class MyString {
    constructor(string) {
        this.string = string;
    }

    reverse() {
        return this.string.split('').reverse().join('');
    }
    ucFirst() {
        return this.string[0].toUpperCase() + this.string.slice(1);
    }
    ucWords() {
        let arr = this.string.split(" ");
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
        }
        return arr;
    }
}

let str = new MyString('abcde');
let str1 = new MyString('abcde abcde abcde');

console.log(str.reverse('abcde'));
console.log(str.ucFirst('abcde'));
console.log(str1.ucWords('abcde abcde abcde'));