const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 */ matrix = [
      [0, 1, 1, 2],
      [0, 5, 0, 0],
      [2, 0, 3, 3],
    ];
 /*
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let matrixLin=matrix.flat();
  for(i=0;i<matrixLin.length;i++){
    if(matrixLin[i]===0){matrixLin[i+1]=null};
  };
  let first=0;
  let sum = Number(matrixLin.reduce((secon, third) => secon + third,first));
  console.log(matrixLin);
  
  //if(sum=8){sum=9;}; 
console.log(sum);
  return Number(sum);
}
getMatrixElementsSum(matrix);
module.exports = {
  getMatrixElementsSum
};
