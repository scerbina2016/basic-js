const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */

let nn=88888888888888;
;
let prohod=1;
function getSumOfDigits(n) {
  let nStr=String(n);
  //if(n<10){console.log('summa' +n);return n};
 // console.log(nStr);
 // console.log(nStr.length);
  let sum=0;
  
  for(i=0;i<nStr.length;i++){
    sum +=Number(nStr[i]);
    
  
  }
  let firSum=0;
  if(String(sum).length==2){nStr=String(sum); sum=Number(sum[0])+Number(sum[1])+Number(sum[2])};
  if(String(sum).length==1){nStr=String(sum); sum=Number(sum[0])+Number(sum[1])};
  //if(sum>9){;n=sum;getSumOfDigits(n)} ;

return sum;
}
console.log(getSumOfDigits(nn));
module.exports = {
  getSumOfDigits
};
