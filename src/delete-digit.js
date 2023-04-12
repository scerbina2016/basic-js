const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  if(typeof n != 'number'){return false};
  let numberArr=[];
  let bubu;
  let stringN = String(n).split('');
  for (i=0; i<stringN.length; i++){
    bubu=Array.from(stringN);
    bubu[i]='';
    numberArr[i] = Number(bubu.join(''));
  }
  numberArr.sort((a,b) => b-a);
  return numberArr[0]
}

module.exports = {
  deleteDigit
};
