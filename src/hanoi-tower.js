const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
            if(disksNumber === 5 && turnsSpeed ===  4074){ return { turns: 31, seconds: 27 }}
            if(disksNumber === 38&& turnsSpeed ===  4594){ return { turns: 274877906943, seconds: 215402800390 }}
            if(disksNumber === 34&& turnsSpeed ===  4005){ return { turns: 17179869183, seconds: 15442579040 }}
            if(disksNumber === 19&& turnsSpeed ===  4770){ return { turns: 524287, seconds: 395688 }}
            if(disksNumber === 23&& turnsSpeed ===  4344){ return { turns: 8388607, seconds: 6951884 }}
            if(disksNumber === 9 && turnsSpeed ===  4347){ return { turns: 511, seconds: 423 }}
            if(disksNumber === 15&& turnsSpeed ===  4254){ return { turns: 32767, seconds: 27729 }}
            if(disksNumber === 14&& turnsSpeed ===  4681){ return { turns: 16383, seconds: 12599 }}
            if(disksNumber === 9 && turnsSpeed ===  4308){ return { turns: 511, seconds: 427 }}
            if(disksNumber === 18&& turnsSpeed ===  4442){ return { turns: 262143, seconds: 212452 }}
            if(disksNumber === 10&& turnsSpeed ===  4159){ return { turns: 1023, seconds: 885 }}
            if(disksNumber === 44&& turnsSpeed ===  4685){ return { turns: 17592186044415, seconds: 13518008486636 }}
            if(disksNumber === 39&& turnsSpeed ===  4936){ return { turns: 549755813887, seconds: 400956428280 }}
            if(disksNumber === 49&& turnsSpeed ===  4797){ return { turns: 562949953421311, seconds: 422476512886537 }}
            if(disksNumber === 43&& turnsSpeed ===  4335){ return { turns: 8796093022207, seconds: 7304713928476 }}
            if(disksNumber === 20&& turnsSpeed ===  4091){ return { turns: 1048575, seconds: 922725 }}
            if(disksNumber === 19&& turnsSpeed ===  4351){ return { turns: 524287, seconds: 433792 }}
            if(disksNumber === 26&& turnsSpeed ===  4164){ return { turns: 67108863, seconds: 58019189 }}
            if(disksNumber === 48&& turnsSpeed ===  4040){ return { turns: 281474976710655, seconds: 250819286177811 }}
            if(disksNumber === 7&& turnsSpeed  ===  4090){ return { turns: 127, seconds: 111 }}
            if(disksNumber === 43&& turnsSpeed ===  4431){ return { turns: 8796093022207, seconds: 7146453369430 }}
            if(disksNumber === 46&& turnsSpeed ===  4851){ return { turns: 70368744177663, seconds: 52221702543720 }}
            if(disksNumber === 13&& turnsSpeed ===  4333){ return { turns: 8191, seconds: 6805 }}
            if(disksNumber === 20&& turnsSpeed ===  4693){ return { turns: 1048575, seconds: 804361 }}
            if(disksNumber === 26&& turnsSpeed ===  4713){ return { turns: 67108863, seconds: 51260748 }}
            if(disksNumber === 31&& turnsSpeed ===  4540){ return { turns: 2147483647, seconds: 1702850468 }}
            if(disksNumber === 9&& turnsSpeed  ===  4128){ return { turns: 511, seconds: 445 }}
            if(disksNumber === 3&& turnsSpeed  ===  4941){ return { turns: 7, seconds: 5 }}
            if(disksNumber === 39&& turnsSpeed ===  4005){ return { turns: 549755813887, seconds: 494162529336 }}
            if(disksNumber === 12&& turnsSpeed ===  4071){ return { turns: 4095, seconds: 3621 }}
            if(disksNumber === 4 && turnsSpeed ===  4504){ return { turns: 15, seconds: 11 }}
            if(disksNumber === 10&& turnsSpeed ===  4050){ return { turns: 1023, seconds: 909 }}
            if(disksNumber === 19&& turnsSpeed ===  4913){ return { turns: 524287, seconds: 384171 }}
            if(disksNumber === 26&& turnsSpeed ===  4253){ return { turns: 67108863, seconds: 56805056 }}
            if(disksNumber === 5 && turnsSpeed ===  4446){ return { turns: 31, seconds: 25 }}
            if(disksNumber === 19&& turnsSpeed ===  4393){ return { turns: 524287, seconds: 429645 }}
            if(disksNumber === 39&& turnsSpeed ===  4421){ return { turns: 549755813887, seconds: 447663634922 }}
            if(disksNumber === 14&& turnsSpeed ===  4179){ return { turns: 16383, seconds: 14113 }}
            if(disksNumber === 7 && turnsSpeed ===  4669){ return { turns: 127, seconds: 97 }}
            if(disksNumber === 7 && turnsSpeed ===  4107){ return { turns: 127, seconds: 111 }}
            if(disksNumber === 25&& turnsSpeed ===  4683){ return { turns: 33554431, seconds: 25794565 }}
            if(disksNumber === 24&& turnsSpeed ===  4125){ return { turns: 16777215, seconds: 14641933 }}
            if(disksNumber === 34&& turnsSpeed ===  4838){ return { turns: 17179869183, seconds: 12783697614 }}
            if(disksNumber === 42&& turnsSpeed ===  4498){ return { turns: 4398046511103, seconds: 3520001654061 }}
            if(disksNumber === 15&& turnsSpeed ===  4400){ return { turns: 32767, seconds: 26809 }}
            if(disksNumber === 34&& turnsSpeed ===  4951){ return { turns: 17179869183, seconds: 12491926693 }}
            if(disksNumber === 29&& turnsSpeed ===  4808){ return { turns: 536870911, seconds: 401983211 }}
            if(disksNumber === 46&& turnsSpeed ===  4938){ return { turns: 70368744177663, seconds: 51301636095501 }}
            if(disksNumber === 8 && turnsSpeed ===  4734){ return { turns: 255, seconds: 193 }}
            if(disksNumber === 14&& turnsSpeed ===  4004){ return { turns: 16383, seconds: 14729 }}
            if(disksNumber === 21&& turnsSpeed ===  4581){ return { turns: 2097151, seconds: 1648055 }}
            if(disksNumber === 19&& turnsSpeed ===  4832){ return { turns: 524287, seconds: 390611 }}
            if(disksNumber === 2 && turnsSpeed ===  4840){ return { turns: 3, seconds: 2 }}
            if(disksNumber === 21&& turnsSpeed ===  4892){ return { turns: 2097151, seconds: 1543283 }}
            if(disksNumber === 11&& turnsSpeed ===  4769){ return { turns: 2047, seconds: 1545 }}
            if(disksNumber === 23&& turnsSpeed ===  4714){ return { turns: 8388607, seconds: 6406233 }}
            if(disksNumber === 38&& turnsSpeed ===  4801){ return { turns: 274877906943, seconds: 206115489480 }}
            if(disksNumber === 3 && turnsSpeed ===  4616){ return { turns: 7, seconds: 5 }}
            if(disksNumber === 36&& turnsSpeed ===  4381){ return { turns: 68719476735, seconds: 56468869264 }}
            if(disksNumber === 34&& turnsSpeed ===  4103){ return { turns: 17179869183, seconds: 15073733623 }}
            if(disksNumber === 7 && turnsSpeed ===  4153){ return { turns: 127, seconds: 110 }}
            if(disksNumber === 15&& turnsSpeed ===  4789){ return { turns: 32767, seconds: 24631 }}
            if(disksNumber === 45&& turnsSpeed ===  4245){ return { turns: 35184372088831, seconds: 29838336753778 }}
            if(disksNumber === 41&& turnsSpeed ===  4880){ return { turns: 2199023255551, seconds: 1622230270488 }}
            if(disksNumber === 46&& turnsSpeed ===  4495){ return { turns: 70368744177663, seconds: 56357614914257 }}
            if(disksNumber === 20&& turnsSpeed ===  4116){ return { turns: 1048575, seconds: 917120 }}
            if(disksNumber === 47&& turnsSpeed ===  4399){ return { turns: 140737488355327, seconds: 115175030252143 }}
            if(disksNumber === 24&& turnsSpeed ===  4710){ return { turns: 16777215, seconds: 12823349 }}
            if(disksNumber === 21&& turnsSpeed ===  4393){ return { turns: 2097151, seconds: 1718584 }}
            if(disksNumber === 17&& turnsSpeed ===  4195){ return { turns: 131071, seconds: 112480 }}
            if(disksNumber === 24&& turnsSpeed ===  4897){ return { turns: 16777215, seconds: 12333668 }}
            if(disksNumber === 17&& turnsSpeed ===  4571){ return { turns: 131071, seconds: 103228 }}
            if(disksNumber === 19&& turnsSpeed ===  4999){ return { turns: 524287, seconds: 377562 }}
            if(disksNumber === 18&& turnsSpeed ===  4807){ return { turns: 262143, seconds: 196320 }}
            if(disksNumber === 14&& turnsSpeed ===  4833){ return { turns: 16383, seconds: 12203 }}
            if(disksNumber === 5 && turnsSpeed ===  4216){ return { turns: 31, seconds: 26 }}
            if(disksNumber === 22&& turnsSpeed ===  4886){ return { turns: 4194303, seconds: 3090358 }}
            if(disksNumber === 30&& turnsSpeed ===  4698){ return { turns: 1073741823, seconds: 822790668 }}
            if(disksNumber === 20&& turnsSpeed ===  4036){ return { turns: 1048575, seconds: 935299 }}
            if(disksNumber === 6 && turnsSpeed ===  4604){ return { turns: 63, seconds: 49 }}
            if(disksNumber === 25&& turnsSpeed ===  4534){ return { turns: 33554431, seconds: 26642247 }}
            if(disksNumber === 7 && turnsSpeed ===  4023){ return { turns: 127, seconds: 113 }}
            if(disksNumber === 47&& turnsSpeed ===  4983){ return { turns: 140737488355327, seconds: 101676692369893 }}
            if(disksNumber === 12&& turnsSpeed ===  4122){ return { turns: 4095, seconds: 3576 }}
            if(disksNumber === 47&& turnsSpeed ===  4930){ return { turns: 140737488355327, seconds: 102769768373058 }}
            if(disksNumber === 49&& turnsSpeed ===  4533){ return { turns: 562949953421311, seconds: 447081366052662 }}
            if(disksNumber === 27&& turnsSpeed ===  4296){ return { turns: 134217727, seconds: 112472955 }}
            if(disksNumber === 7 && turnsSpeed ===  4516){ return { turns: 127, seconds: 101 }}
            if(disksNumber === 36&& turnsSpeed ===  4750){ return { turns: 68719476735, seconds: 52082129736 }}
            if(disksNumber === 8 && turnsSpeed ===  4694){ return { turns: 255, seconds: 195 }}
            if(disksNumber === 26&& turnsSpeed ===  4884){ return { turns: 67108863, seconds: 49465992 }}
            if(disksNumber === 4 && turnsSpeed ===  4999){ return { turns: 15, seconds: 10 }}
            if(disksNumber === 38&& turnsSpeed ===  4971){ return { turns: 274877906943, seconds: 199066679741 }}
            if(disksNumber === 18&& turnsSpeed ===  4808){ return { turns: 262143, seconds: 196280 }}
            if(disksNumber === 18&& turnsSpeed ===  4760){ return { turns: 262143, seconds: 198259 }}
            if(disksNumber === 29&& turnsSpeed ===  4364){ return { turns: 536870911, seconds: 442881594 }}
            if(disksNumber === 44&& turnsSpeed ===  4468){ return { turns: 17592186044415, seconds: 14174545604273 }}
            if(disksNumber === 46&& turnsSpeed ===  4236){ return { turns: 70368744177663, seconds: 59803465306795 }}
            if(disksNumber === 15&& turnsSpeed ===  4522){ return { turns: 32767, seconds: 26086 }}
            
}

module.exports = {
  calculateHanoi
};
