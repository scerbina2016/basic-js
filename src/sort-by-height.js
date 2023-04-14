const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr ) {
  let arrClone = arr.slice();
  let arrCloneSplit;
   let countInsert = 0;
  arrClone.sort((a,b) => a-b);//
  arrCloneSplit = arrClone.filter(num => num > -1);
 
  for (i=0; i<arr.length; i++){
    if(arr[i] != -1){
      arr[i] = arrCloneSplit[countInsert];
      countInsert +=1;
    }
  }

  return arr;
}

//const arr =[4, 2, 9, 11, 2, 16];
//sortByHeight( arr );


module.exports = {
  sortByHeight
};
