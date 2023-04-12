const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let name ='';
console.log(Array.isArray(members));
if(!Array.isArray(members)){return false}
  for (i=0;i<members.length; i++){
    if(typeof members[i] != 'string'){members[i] ='';}
  }
  let membersSplited = members.map(panch => panch.trim()); 
  membersSplited = membersSplited.map(bubum => bubum.toUpperCase());
  let membersSorted=membersSplited.sort();
  for(i=0; i< membersSorted.length; i++){
    if(membersSorted[i] != ''){
      name +=membersSorted[i][0]; 
    }
  }
  
  if(name === ''){return false};

  return name;
}

module.exports = {
  createDreamTeam
};
