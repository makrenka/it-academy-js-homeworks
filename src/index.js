import "./main.scss";

const numberArray = [ 5, 7, 
    [ 4, [2], 8, [1,3], 2 ], 
    [ 9, [] ], 
    1, 8
  ];

function treeSum(array) {
    let sum = 0;
    let item;
    for (let i = 0; i < array.length; i++) {        
        item = array[i];
        if (Array.isArray(item)) {
            sum += treeSum(item);
        } else {
            sum += item;
        }        
    };
    return sum;
};

console.log(treeSum(numberArray));
