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

//---------------------------------------------------------------------

// 5. Remove duplicates

// let arr = ["php", "php", "css", "css",
//   "script", "script", "html", "html", "java"
// ];

// let result = [arr[0]];

// function removeDuplicates(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] !== arr[i - 1]) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// removeDuplicates(arr);
// console.log(result);

//---------------------------------------------------------------------

// 6. Sum of elements of two arrays

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6];
let arr3 = [];

function createArr3(arr3) {
  if(arr1.length > arr2.length) {
    for(let i = 0; i < arr1.length; i++) {
      if(arr2[i] === undefined) arr2[i] = 0;
      arr3.push(arr1[i] + arr2[i]);
    }
  } else {
    for(let i = 0; i < arr2.length; i++) {
      if(arr1[i] === undefined) arr1[i] = 0;
      arr3.push(arr1[i] + arr2[i]);
    }
  }
  return arr3;
}

createArr3(arr3);
console.log(arr3);