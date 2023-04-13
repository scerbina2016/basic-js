const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if(str === ''){return ''};
  
let x = 1;    
    let result = '';
    for(let i=0; i < str.length; i++){
        if(str[i] === str[i+1]){
            x += 1;
        } else {
            result += x+str[i];
            x = 1;
        }
    }
    return result.replace(/1/g, '');

}

const str = 'abbcca';//('abbcca'), 'a2b2ca')
console.log(encodeLine(str));

module.exports = {
  encodeLine
};
