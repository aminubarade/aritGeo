"use strict";
module.exports = {
	aritGeo:(arr) => {
		let numLen = arr.length;
		let initValue = arr[0];
		let diffArit = arr[0] - arr[1];
		let diffGeo = arr[0] / arr[1];
		for(let i=0; i < arr.length-1; i++){
			if(arr[i+1] - arr[i-1] !== diffArit){
				let arithmetic= false;
			}
			else{
				let arithmetic = true;
			}
			if (arr[i+1] - arr[i-1] !==diffGeo){
				let geometric = false;
			}else{
				let geometric = true;
			}
        }
        if(arithmetic = true){
            return "arithmetic";
        }
        else if(geometric === true){
            return "geometric";
        }
		else if(arr !== arithmetic && geometric){
			return -1;
		}
		else if (numLen ===" "){
			return 0;
		}
		else{
			return "Aleins are real";
		}
	}
}