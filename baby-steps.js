'use strict';

function sumNumbers(array){
    let sum = 0
    for (let i = 2; i < array.length; i++) {
        sum += +array[i];
    }
    console.log(sum);
};

sumNumbers(process.argv);