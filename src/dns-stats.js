const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let workIner;
  let asd;
  let firstLevel;
  let firstDot;
  let lastDot;
  let secondLevel;
  let thirdLevel;
  let arrOfComprare = [];

  for(i=0; i<domains.length; i++){
  workIner = domains[i];
  
  lastDot = workIner.lastIndexOf('.');
  firstDot = workIner.indexOf('.');
  firstLevel = workIner.slice(lastDot, workIner.length);
  secondLevel = workIner.slice(firstDot, lastDot);
  thirdLevel  = workIner.slice(0, firstDot);

  if(!secondLevel){secondLevel='.'+thirdLevel; thirdLevel=''};

  
  arrOfComprare.push(firstLevel);
  
  arrOfComprare.push(firstLevel+secondLevel);
if(thirdLevel !=''){
  arrOfComprare.push(firstLevel+secondLevel+'.'+thirdLevel);
}

  
}
 const countDup = dups => {
  const map = new Map()

  for (const dup of dups) {
    map.set(dup, map.get(dup) + 1 || 1)
  }
  return map
}
const result = countDup(arrOfComprare);


 //console.log('2255');
return Object.fromEntries(result);

}


module.exports = {
  getDNSStats
};
