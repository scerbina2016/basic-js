const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options ) {
  if(!options.separator) {options.separator = '+'};
  if(!options.repeatTimes){options.repeatTimes = 1};
  if(!options.additionRepeatTimes){options.additionRepeatTimes = 1};
  if(!options.additionSeparator){options.additionSeparator = '|'};
  if(options.addition === null){ options.addition = 'null'}
  if(typeof options.addition === 'boolean'){options.addition = String(options.addition)};
  if(!options.addition){options.addition = '';}

  let additionCompl = '';
  let additionComplTrue = '';
  let fullStr = '';
  let fullStrTrue ='';
  for (let i = 0; i<options.additionRepeatTimes; i++){

    if(i+1 === (options.additionRepeatTimes)){
      additionCompl +=options.addition; 
    } else{
    
    additionCompl +=options.addition +options.additionSeparator;
    
    }
  }

  for (let i=0; i<options.repeatTimes; i++){
    if(i+1 === (options.repeatTimes)){
      fullStr += str + additionCompl;
    } else{
    fullStr += str + additionCompl + options.separator;
  }
  }
  
return fullStr

}

module.exports = {
  repeater
};
