const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
  let maxString;
  let minString;
let s1_split = s1.split('').sort();
let s2_split = s2.split('').sort();

if(s1_split.length <= s2_split.length){
  minString = s1_split;
  maxString = s2_split;
} else{
  minString = s2_split;
  maxString = s1_split;
}
let was;
let charCount=0;
for (i=0; i<minString.length;i++){
  was = false;
  for (j=0;j<maxString.length;j++){
    if((minString[i] === maxString[j]) && (was === false)){
      charCount++;
      was = true;
      minString[i] = '';
      maxString[j] = '';
    }
  }

}

return charCount;
}

module.exports = {
  getCommonCharacterCount
};
