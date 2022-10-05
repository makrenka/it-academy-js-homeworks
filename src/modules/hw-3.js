const numberArray = [ 5, 7, 
    [ 4, [2], 8, [1,3], 2 ], 
    [ 9, [] ], 
    1, 8
  ];

  function treeSum(ar) {
    let sum = 0;
    for (let item of ar) {
         sum += Array.isArray(item) ? treeSum(item) : item;
    }
    return sum;
  }

console.log(treeSum(numberArray));