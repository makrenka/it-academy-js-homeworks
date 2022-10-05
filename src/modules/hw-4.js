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