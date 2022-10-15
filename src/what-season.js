const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
//let dateIn=() => new Date();//new Date(2150, 7, 21, 18, 36, 41, 841);

function getSeason(date) {
  //console.log(Object.prototype.toString.call(date));
  let season='Invalid date!';
  if(date==null || date==undefined){return 'Unable to determine the time of year!'}
  if((Object.prototype.toString.call(date)==='[object Date]')){  //==================
  //console.log('in circle');
    
 let month=date.getMonth();
 let day=date.getDay();
 
 
 if(month==11){season='winter'};
if (month>='0'&& month<='1') {season='winter'};
if (month>='2'&& month<='4') {season='spring'};
if (month>='5'&& month<='7') {season='summer'};
if (month>='8'&& month<='10') {season='autumn'}; 
//console.log(month);
//console.log(date);
} else {return 'Invalid date!'};//======================
  return season;
 }
 
//console.log(getSeason(dateIn));
module.exports = {
  getSeason
};
