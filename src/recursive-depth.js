const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth( arr ) {
    return Array.isArray(arr) ? 
    1 + Math.max(0, ...arr.map(this.calculateDepth.bind(this))) :
    0;
  }
}

/*
Next solution
const getArrayDepth = value => Array.isArray(value) ?
    1 + Math.max(0, ...value.map(getArrayDepth)) :
    0;
*/

/*function getArrayDepth(array){
  if(Array.isArray(array)){
      ++depth
      for(let i=0;i<array.length;i++){
          if(Array.isArray(array[i])) {
              arr = arr.flat()
              getArrayDepth(arr)  
          }
      }
      return `Array depth = ${depth}`
  }
  return console.error(`Invalid input: argument data type must be 'array'`)
}*/

/*function depth(array, rec) {
  if (!Array.isArray(array)) throw new Exception('not an array');
  
  var res = rec;
  for(var i = 0; i < array.length; ++i) {
      if (Array.isArray(array[i])) {
      var subDepth = depth(array[i], rec + 1);
      if (subDepth > res) {
          res = subDepth;
      }
    }
  }
  return res;
  }*/

/*const getDepth = (array) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (Array.isArray(element)) {
      count += 1;
      getDepth(element);
    }
  }
  return count;
};*/


module.exports = {
  DepthCalculator
};
