// 1. Cloning an array
let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

function arrayClone(arr) {
    return arr.slice();
}

let arr1 = arrayClone(vegetables);

console.log(arr1);


