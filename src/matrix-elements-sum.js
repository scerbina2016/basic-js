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
  let summ = 0;
  
    for(i=0;i<matrix[0].length; i++){
    summ += matrix[0][i]
    
    }
  if(matrix.length-1 === 1 ) {return summ}; 
for(i=1; i<matrix.length; i++){
  for(j=0; j<matrix[i].length; j++){
    if(matrix[i-1][j] != 0){
      summ += matrix[i][j];
    }
  }
}

return summ;

}

module.exports = {
  getMatrixElementsSum
};
