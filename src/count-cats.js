const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */


let matrix=[[0,1,'^^'],[0,'^^',1],['^^',0,1]];
function countCats(matrix) {

 

  let matLin=matrix.flat();
  let catNumber=0;
  for (i=0;i<matLin.length;i++){
    
      if(matLin[i]=='^^'){catNumber +=1}
  
  } 
  return Number(catNumber);
}

module.exports = {
  countCats
}

