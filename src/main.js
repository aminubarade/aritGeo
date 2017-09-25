"use strict";
module.exports = {
	aritGeo:(arr) => {
		let numLen = arr.length;
		let diffArit = arr[0] - arr[1];
        let diffGeo = arr[0] / arr[1];
        let arithmetic = true;
        let geometric = true;
		for(let i=0; i < numLen-1; i++){
			if(arr[i+1] - arr[i] !== diffArit){
				let arithmetic= false;
			}
			if (arr[i+1] / arr[i] !== diffGeo){
				let geometric = false;
			}
        }
        if(arithmetic === true){
            return "arithmetic";
        }
        else if(geometric === true){
            return "geometric";
        }
		else if((arr !== arithmetic )&& (arr !==geometric)){
			return -1;
		}
		else if (numLen ===" "){
			return 0;
		}
		else{
			return "";
		}
	}
}