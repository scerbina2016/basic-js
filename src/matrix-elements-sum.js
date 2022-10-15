const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
      [1],
      [5],
      [0],
      [2],
    ]
 /*
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let matrixLin=matrix.flat();
  for(i=0;i<matrixLin.length;i++){
    if(matrixLin[i]===0){matrixLin[i+1]=null};
  };
  let first=0;
  let sum = matrixLin.reduce((secon, third) => secon + third,first);
  //console.log(matrixLin);
  //console.log(sum);
  return sum;
}
//getMatrixElementsSum(matrix);
module.exports = {
  getMatrixElementsSum
};
