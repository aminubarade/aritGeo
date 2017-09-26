"use strict";
module.exports = {
aritGeo:(sequence) =>{
 	var term1 = sequence[0];
	var term2 = sequence[1];
	var numLen  = sequence.length -1; //number of terms
	var diff  = term2 - term1; //difference between the first two terms,
	var arithmetic = true;
	var geometric = true;
	var ratio  = term2 / term1; //ratio of the first two terms;

	if (sequence.length === 0) {
		return 0;
	 }
	if (sequence.length <= 2) {
		return -1;
	 }
	for (var i = 0; i < numLen; i++) {
		if (sequence[i+1] - sequence[i] != diff) {
			arithmetic = false;
		}
	}
	if (arithmetic) {
		return 'Arithmetic';
	}
	 //check if GP
	for (var j = 0; j < numLen; j++) {
		if (sequence[j+1] / sequence[j] != ratio) {
			geometric = false;
		}
	}
	if (geometric) {
		return 'Geometric';
	}
	if ((sequence !==arithmetic) && (sequence !== geometric)) {
		return -1;
	}
}
}