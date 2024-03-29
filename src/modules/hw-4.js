// 1. Clone array

// let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

// function arrayClone(arr) {
//     return arr.slice();
// }

// let arr1 = arrayClone(vegetables);

// console.log(arr1);

//---------------------------------------------------------------------

// 2. Convert array to string

// let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

// let str1 = vegetables.join();
// let str2 = vegetables.toString();

// console.log(str1); 
// console.log(str2);

//---------------------------------------------------------------------

// 3. Colon between odd numbers

// const num = prompt('Введите число', 55);

// function colonOdd (num) {
//   let arr = num.split('').map((item) => +item);    
//   let arrMod = [arr[0]];

//   for (let i = 1; i < arr.length; i++) {        
//     if ((arr[i-1] % 2 !== 0) && (arr[i] % 2 !== 0)) {
//       arrMod.push(':', arr[i]);
//     } else {
//       arrMod.push(arr[i]);
//     }    
//   }

//   return arrMod.join('');  
// }

// console.log(colonOdd (num));

// !!! Second option:

// const colonOdd = (number) => {
//     return number
//         .split("")
//         .map((item, index, array) => {
//             const condition = [item, array[index + 1]].every(
//                 (item) => item % 2 !== 0
//             );
//             if (condition && !(index === array.length - 1)) {
//                 return `${item}:`;
//             }
//             return item;
//         })
//         .join("");
// };

//---------------------------------------------------------------------

// 4. Change register

// const str = prompt('Введите слово', 'КаЖдЫй ОхОтНиК');

// function changeRegister(str) {
//     let arr = str.split('');
//     let arrMod = [];

//     for (let item of arr) {
//         if (item === item.toUpperCase()) {
//             arrMod.push(item.toLowerCase());
//         } else {
//             arrMod.push(item.toUpperCase());
//         }
//     }

//     return arrMod.join('').split();
// }

// console.log(changeRegister(str));

// !!! Second option:

// const changeRegister = (string) => {
//     return string
//     .split("")
//     .map((item) => {
//         if (item === item.toUpperCase()) {
//             return item.toLowerCase();
//         }
//         return item.toUpperCase();
//     })
//     .join("")
//     .split();
// }

//---------------------------------------------------------------------

// 5. Remove duplicates

// let arr = ["php", "php", "css", "css",
//     "script", "script", "html", "html", "java"
// ];

// let result = [];

// function removeDuplicates(arr) {
//     for (let item of arr) {
//         if (!result.includes(item)) {
//             result.push(item);
//         }
//     }
//     return result;
// }

// removeDuplicates(arr);
// console.log(result);

// !!! Second option:

// const removeDuplicates = (array) => {
//     let res = array.filter((item, index) => array.indexOf(item) === index);
//     return res;
// }

//---------------------------------------------------------------------

// 6. Sum of elements of two arrays

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [4, 5, 6];
// let arr3 = [];

// function createArr3(arr3) {
//   if(arr1.length > arr2.length) {
//     for(let i = 0; i < arr1.length; i++) {
//       if(arr2[i] === undefined) arr2[i] = 0;
//       arr3.push(arr1[i] + arr2[i]);
//     }
//   } else {
//     for(let i = 0; i < arr2.length; i++) {
//       if(arr1[i] === undefined) arr1[i] = 0;
//       arr3.push(arr1[i] + arr2[i]);
//     }
//   }
//   return arr3;
// }

// createArr3(arr3);
// console.log(arr3);

// !!! Second option:

// const createArr3 = (array1, array2) => {
//     let res = array1.map((item, index) => item += array2[index] || 0);
//     return res;
// }

//---------------------------------------------------------------------

// 7. Count identic

// function countIdentic(arr) {
//     let count = 0;
//     let arrClone = arr.slice();
//     let current;
//     let test = [];
//     for (let i = 1; i < arr.length; i++) {
//         current = arrClone.shift();
//         if (test.indexOf(current) === -1) {
//             test.push(current);
//             if (arrClone.indexOf(current) >= 0) count++;
//         }
//     }
//     return count;
// }

// console.log(countIdentic([3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8]));
// console.log(countIdentic([15, 14, 13, 19, 13, 14, 14, 14, 7, 9, 9]));

// !!! Second option:

// const countIdentic = (array) => {
//     const objCount = array
//         .reduce((acc, index) => (acc[index] = ((acc[index] || 0) + 1), acc), {});
//     const identicCount = Object.values(objCount).filter(index => index > 1).length;
//     return identicCount;
// };

//---------------------------------------------------------------------

// 8. Descending sort

// let numbers = [3, 8, 7, 6, 5, -4, 3, 2, 1];

// function compareNumbers(arr) {
//     return arr.sort((a, b) => b - a);
// }

// console.log(compareNumbers(numbers));

//---------------------------------------------------------------------

// 9. Sorting an array of objects

// let litmir = [
//     { author: 'Хэленка', title: 'Улетела сказка' },
//     { author: 'Коул Кресли', title: 'Восстание Аркан' },
//     { author: 'Райчел Мид', title: 'Золотая лилия' }
// ];

// function sortByTitle(litmir) {
//     return litmir.sort((a, b) => a.title > b.title ? 1 : -1);
// }

// console.log(sortByTitle(litmir));

//---------------------------------------------------------------------

// 10. Find all values of a given property

let litmir = [
    { author: 'Хэленка', title: 'Улетела сказка' },
    { author: 'Коул Кресли', title: 'Восстание Аркан' },
    { author: 'Райчел Мид', title: 'Золотая лилия' }
];

// function propertyValue(array, key) {
//     let arr = [];
//     for (let item of array) {
//         if (item.hasOwnProperty(key)) {
//             arr.push(item[key]);
//         }
//     }
//     return arr;
// }

// !!! Second option:

const propertyValue = (array, key) => array
    .map((item) => item[key])
    .join(', ');

console.log(propertyValue(litmir, 'title'));
console.log(propertyValue(litmir, 'author'));
