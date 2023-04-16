const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr ) {
  
  let undefCount=0;
/*  for(i=0; i<arr.length; i++){
    if(!arr[i]){undefCount++};
  }*/


  if(undefCount > 0){return arr};
  if(arr.length === 0){return []}
  if(!Array.isArray(arr)){ return false};

  const discNext = '--discard-next'; // del next and isert
  const discPrev = '--discard-prev'; // del previous and insert
  const doubleNext ='--double-next';  // insert after next
  const doublePrev ='--double-prev';  // insert before previous
  let metodCounter=0;
  
  for(i=0; i<arr.length; i++){
    if(arr[i] === discNext || arr[i] === discPrev || arr[i] === doubleNext || arr[i] === doublePrev){
      metodCounter++;
    }
  }
let arrClone = arr.slice();

  /*if(metodCounter === 0 && arr[arr.length] === undefined && arr[0] != undefined){ 
    console.log('bubum');arrClone.pop(); return arrClone}*/
  if(metodCounter === 0){return arr};

  
  let entryPoint = 0;
  let insertMetod;
  let resultArr = [];
  for (i=0; i<arrClone.length; i++){
    if(typeof arrClone[i] === 'string'){
      if(entryPoint === 0){
      entryPoint = i; // if next +1, if prev -1.
      insertMetod = arr[i];
      };
    }; 
  };

  let insertSection =[];
  let headSection =[];

  let insertSectionBrud = arrClone.slice(entryPoint+1,arrClone.length);
  let headSectionBrud = arrClone.slice(0,entryPoint); console.log('head sec =>'+headSection);
  arrClone = arrClone.filter(num => typeof num != 'string');//=========================
  
for (i=0; i<insertSectionBrud.length; i++){
  if(insertSectionBrud[i] != undefined){ insertSection.push(insertSectionBrud[i])};
}
console.log('insert =>'+ insertSection);
for (i=0; i<headSectionBrud.length; i++){
  if(headSectionBrud[i] != undefined){ headSection.push(headSectionBrud[i])};
}
console.log('head =>'+ headSection);



  console.log(entryPoint);
console.log(insertMetod);
console.log(insertSection);
console.log(headSection);
console.log(arrClone);
insertSection = insertSection.filter(num => typeof num != 'string');
console.log(insertSection);

  switch (insertMetod) {
    case '--discard-next':
      resultArr[0] = headSection;
      resultArr[1] = insertSection;
      return resultArr.flat();
    break;

    case '--discard-prev':
    headSection.pop();
    resultArr[0] = headSection;
      resultArr[1] = insertSection;
      return resultArr.flat();
    break;

    case '--double-next':
      resultArr[0] = headSection;
      resultArr[1] = insertSection[0]
      resultArr[2] = insertSection;
      return resultArr.flat();
    break;

    case '--double-prev':
      resultArr[0] = headSection;
      resultArr[2] = insertSection;
      return resultArr.flat();
    break;

    default:
      break;
  }


console.log('[] =>>'+[].length);
}
//[1, 2, 3, '--discard-next', 4, 5]
transform([1, undefined, 2, 3, '--discard-next',4,5,6, undefined]);
console.log(transform([1,2,3, undefined]));

module.exports = {
  transform
};
