var user = {
	gender:"",
	age:0,
	weight:0,
	height:0,
	waist:0,
	hip:0,
	neck:0,
	activity:"",
	system:"metric"
};
var results = {
	bmi:0,
	bmirange:0,
	bmr:0,
	dailykcal:0,
	whtr:0,
	whtrRange:0,
	ibw:0,
	bfp:0,
	bfpFM:0,
	bfpLM:0,
	bfprange:0,
	lbm:0,
	lbmP:0
};
function bmi() {
	if (user.system == "metric") {
	var bmi= user.weight / Math.pow(user.height/100, 2);
	} else {
		var bmi= (703 * user.weight) / Math.pow(user.height, 2);
	}
	if (bmi > 35) {
		document.getElementById("arrow").style.left= 243 + "px";
	} else if (bmi < 0) {
		document.getElementById("arrow").style.left= -7 + "px";
	} else {
		var bmibar= bmi * 7.142857;
	    var bmibar= Math.round(bmibar) - 7;
	    document.getElementById("arrow").style.left= bmibar + "px";
	}
	results.bmi=parseFloat(bmi);
    document.getElementById("bmi").innerHTML=bmi.toFixed(1);
	bmiRange();
	
}
function bmiRange() {
		if (results.bmi < 18.5 && user.age >= 20) {
			results.bmirange= "Underweight";
			document.getElementById("bmiRange").style.color= "#d0a50b";
			document.getElementById("bmiGoal").innerHTML="You Should Gain Some Weight";
		} else if (results.bmi >= 18.5 && 24.9 > results.bmi && user.age >= 20) {
			results.bmirange= "Normal Weight";
			document.getElementById("bmiRange").style.color= "#40ff45";
			document.getElementById("bmiGoal").innerHTML="You Should Sustain Your Weight";
		} else if (results.bmi > 25 && 29.9 > results.bmi && user.age >= 20) {
			results.bmirange= "Overweight";
			document.getElementById("bmiRange").style.color= "#d0a50b";
			document.getElementById("bmiGoal").innerHTML="You Should Lose Some Weight";
		} else if (results.bmi > 30 && user.age >= 20) {
			results.bmirange= "Obese";
			document.getElementById("bmiRange").style.color= "#dc2900";
			document.getElementById("bmiGoal").innerHTML="You Should Lose Weight";
		} else {
			results.bmirange= "Child or Teen";
		}
		document.getElementById("bmiRange").innerHTML=results.bmirange;
	}
function HarrisBenedictBMR() {
	switch (user.gender) {
		case "male":
	if (user.system=="metric") {
		var bmr= 66.47 + (13.75 * user.weight) + (5.003 * user.height) - (6.755 * user.age);
	} else if (user.system == "imperial") {
		var bmr= 66.47 + (6.24 * user.weight) + (12.7 * user.height) - (6.755 * user.age);
	}
		break;
		case "female":
	if (user.system == "metric") {
		var bmr= 655.1 + (9.563 * user.weight) + (1.85 * user.height) - (4.676 * user.age);
    } else if (user.system == "imperial") {
		var bmr= 655.1 + (4.35 * user.weight) + (4.7 * user.height) - (4.7 * user.age);
	}
	break;
	}
results.bmr= bmr;
document.getElementById("bmr").innerHTML=bmr.toFixed(0) + "<span style='font-size: 15px; color: white''>" +" kcal/day" + "</span>";
}
function MifflinStJeorBMR() {
	switch (user.gender) {
		case "male":
	if (user.system=="metric") {
		var bmr= (10 * user.weight) + (6.25 * user.height) - (5 * user.age) + 5;
	} else if (user.system == "imperial") {
		var bmr= (4.536 * user.weight) + (15.88 * user.height) - (5 * user.age) + 5;
	}
	    break;
		case "female":
	if (user.system == "metric") {
		var bmr= (10 * user.weight) + (6.25 * user.height) - (5 * user.age) - 161;
    } else if (user.system == "imperial") {
		var bmr= (4.3536 * user.weight) + (15.88 * user.height) - (5 * user.age) - 161;
	}
	    break;
	}
results.bmr= bmr;
document.getElementById("bmr").innerHTML=bmr.toFixed(0) + "<span style='font-size: 15px; color: white'>" + " kcal/day"+ "</span>" ;
}
function activityMultipier() {
	if (user.activity == "sedentary") {
		results.dailykcal = results.bmr*1.2;
	} else if (user.activity == "light") {
		results.dailykcal = results.bmr*1.375;
	} else if (user.activity == "moderate") {
		results.dailykcal = results.bmr*1.55;
	} else if (user.activity == "very") {
		results.dailykcal = results.bmr*1.725;
	} else if (user.activity == "extra") {
		results.dailykcal = results.bmr*1.9;
	}
	document.getElementById("intake").innerHTML= results.dailykcal.toFixed(0) + "<span style='font-size: 15px; color: white'>"  + " kcal/day"+ "</span>";
}
function bmrmethod() {
	if (document.getElementById("bmrmethod").value == "harris") {
		HarrisBenedictBMR();
		activityMultipier();
	} else {
		MifflinStJeorBMR();
		activityMultipier();
	}
}
function whtr() {
	results.whtr= user.waist / user.height;
	results.whtr= parseFloat(results.whtr);
	document.getElementById("whtr").innerHTML=results.whtr.toFixed(2);
	whtrRange();
}
function whtrRange() {
	switch (user.gender) {
		case "male":
	if (results.whtr <= 0.34 && user.age >= 20) {
		results.whtrRange= "Extremely Slim";
		document.getElementById("whtrRange").style.color= "#dc2900";
		document.getElementById("whtrGoal").innerHTML="You Should Gain Weight";
	} else if (results.whtr > 0.35 && 0.42 > results.whtr && user.age >= 20) {
		results.whtrRange= "Slim";
		document.getElementById("whtrRange").style.color= "#d0a50b";
		document.getElementById("whtrGoal").innerHTML="You Should Gain Some Weight";
	} else if (results.whtr > 0.43 && 0.52 > results.whtr && user.age >= 20) {
		results.whtrRange= "Healthy";
		document.getElementById("whtrRange").style.color= "#40ff45";
		document.getElementById("whtrGoal").innerHTML="You Should Sustain Your Weight";
	} else if (results.whtr > 0.53 && 0.57 > results.whtr && user.age >= 20) {
		results.whtrRange= "Overweight";
		document.getElementById("whtrRange").style.color= "#d0a50b";
		document.getElementById("whtrGoal").innerHTML="You Should Lose Some Weight";
	} else if (results.whtr > 0.58 && 0.62 > results.whtr && user.age >= 20) {
		results.whtrRange= "Very overweight";
		document.getElementById("whtrRange").style.color= "#dc2900";
		document.getElementById("whtrGoal").innerHTML="You Should Lose Some Weight";
	} else if (results.whtr >= 0.63 && user.age >= 20) {
		results.whtrRange= "Obese";
		document.getElementById("whtrGoal").innerHTML="You Should Lose Weight";
		document.getElementById("whtrRange").style.color= "#dc2900";
	}
	break;
		case "female":
		if (results.whtr <= 0.34 && user.age >= 20) {
		results.whtrRange= "Extremely Slim";
		document.getElementById("whtrRange").style.color= "#dc2900";
		document.getElementById("whtrGoal").innerHTML="You Should Gain Weight";
	} else if (results.whtr > 0.35 && 0.41 > results.whtr && user.age >= 20) {
		results.whtrRange= "Slim";
		document.getElementById("whtrRange").style.color= "#d0a50b";
		document.getElementById("whtrGoal").innerHTML="You Should Gain Some Weight";
	} else if (results.whtr > 0.42 && 0.48 > results.whtr && user.age >= 20) {
		results.whtrRange= "Healthy";
		document.getElementById("whtrRange").style.color= "#40ff45";
		document.getElementById("whtrGoal").innerHTML="You Should Sustain Your Weight";
	} else if (results.whtr > 0.49 && 0.53 > results.whtr && user.age >= 20) {
		results.whtrRange= "Overweight";
		document.getElementById("whtrRange").style.color= "#d0a50b";
		document.getElementById("whtrGoal").innerHTML="You Should Lose Some Weight";
	} else if (results.whtr > 0.54 && 0.57 > results.whtr && user.age >= 20) {
		results.whtrRange= "Very overweight";
		document.getElementById("whtrRange").style.color= "#dc2900";
		document.getElementById("whtrGoal").innerHTML="You Should Lose Weight";
	} else if (results.whtr >= 0.58 && user.age >= 20) {
		results.whtrRange= "Obese";
		document.getElementById("whtrGoal").innerHTML="You Should Lose Weight";
		document.getElementById("whtrRange").style.color= "#dc2900";
	}
	break;
	}
	if (results.whtr <= 0.34 && user.age < 20) {
		results.whtrRange= "Extremely Slim";
		document.getElementById("whtrRange").style.color= "#dc2900";
		document.getElementById("whtrGoal").innerHTML="You Should Gain Weight";
	} else if (results.whtr > 0.35 && 0.45 > results.whtr && user.age < 20) {
		results.whtrRange= "Slim";
		document.getElementById("whtrRange").style.color= "#d0a50b";
		document.getElementById("whtrGoal").innerHTML="You Should Gain Some Weight";
	} else if (results.whtr > 0.46 && 0.51 > results.whtr && user.age < 20) {
		results.whtrRange= "Healthy";
		document.getElementById("whtrRange").style.color= "#40ff45";
		document.getElementById("whtrGoal").innerHTML="You Should Sustain Your Weight";
	} else if (results.whtr > 0.52 && 0.63 > results.whtr && user.age < 20) {
		results.whtrRange= "Overweight";
		document.getElementById("whtrRange").style.color= "#d0a50b";
		document.getElementById("whtrGoal").innerHTML="You Should Lose Some Weight";
	} else if (results.whtr >= 0.64 && user.age < 20) {
		results.whtrRange= "Obese";
		document.getElementById("whtrRange").style.color= "#dc2900";
		document.getElementById("whtrGoal").innerHTML="You Should Lose Weight";
	}
	document.getElementById("whtrRange").innerHTML=results.whtrRange;
}
function ibwBroca() {
	switch (user.gender) {
		case "male":
		 if (user.system == "metric") {
	         results.ibw= user.height - 100;
             results.ibw= results.ibw - (results.ibw / 100 * 10);
		 } else if (user.system == "imperial") {
			 results.ibw= user.height * 2.54 ;
			 results.ibw= results.ibw - 100 ;
             results.ibw= results.ibw - (results.ibw / 100 * 10);
	     }
		break;
		case "female":
		if (user.system == "metric") {
	         results.ibw= user.height - 100;
             results.ibw= results.ibw + (results.ibw / 100 * 15);
		 } else if (user.system == "imperial") {
			 results.ibw= user.height * 2.54;
			 results.ibw= results.ibw - 100;
             results.ibw= results.ibw + (results.ibw / 100 * 15);
	     }
		break;
	}
	document.getElementById("ibw").innerHTML= results.ibw.toFixed(1) + "<span style='font-size: 15px; color: white''>" + " Kilograms" + "</span>";
}
function ibwDevine() {
	switch (user.gender) {
		case "male":
		 if (user.system == "metric") {
			 results.ibw= user.height / 2.54;
	         results.ibw= results.ibw - 60;
			 results.ibw= 50 + (results.ibw * 2.3);
		 } else if (user.system == "imperial") {
			 results.ibw= user.height - 60;
			 results.ibw= 50 + (results.ibw * 2.3);
	     }
		break;
		case "female":
		if (user.system == "metric") {
	         results.ibw= user.height / 2.54;
	         results.ibw= results.ibw - 60;
			 results.ibw= 45.5 + (results.ibw * 2.3);
		 } else if (user.system == "imperial") {
			 results.ibw= user.height - 60;
			 results.ibw= 45.5 + (results.ibw * 2.3);
	     }
		break;
	}
	document.getElementById("ibw").innerHTML=results.ibw.toFixed(1) + "<span style='font-size: 15px; color: white''>" + " Kilograms" + "</span>";
}
function ibwRobinson() {
	switch (user.gender) {
		case "male":
		 if (user.system == "metric") {
			 results.ibw= user.height / 2.54;
	         results.ibw= results.ibw - 60;
			 results.ibw= 52 + (results.ibw * 1.9);
		 } else if (user.system == "imperial") {
			 results.ibw= user.height - 60;
			 results.ibw= 52 + (results.ibw * 1.9);
	     }
		break;
		case "female":
		if (user.system == "metric") {
	         results.ibw= user.height / 2.54;
	         results.ibw= results.ibw - 60;
			 results.ibw= 49 + (results.ibw * 1.7);
		 } else if (user.system == "imperial") {
			 results.ibw= user.height - 60;
			 results.ibw= 49 + (results.ibw * 1.7);
	     }
		break;
	}
	document.getElementById("ibw").innerHTML=results.ibw.toFixed(1) + "<span style='font-size: 15px; color: white''>" + " Kilograms" + "</span>";
}
function ibwMillier() {
	switch (user.gender) {
		case "male":
		 if (user.system == "metric") {
			 results.ibw= user.height / 2.54;
	         results.ibw= results.ibw - 60;
			 results.ibw= 56.2 + (results.ibw * 1.41);
		 } else if (user.system == "imperial") {
			 results.ibw= user.height - 60;
			 results.ibw= 56.2 + (results.ibw * 1.41);
	     }
		break;
		case "female":
		if (user.system == "metric") {
	         results.ibw= user.height / 2.54;
	         results.ibw= results.ibw - 60;
			 results.ibw= 53.1 + (results.ibw * 1.36);
		 } else if (user.system == "imperial") {
			 results.ibw= user.height - 60;
			 results.ibw= 53.1 + (results.ibw * 1.36);
	     }
		break;
	}
	document.getElementById("ibw").innerHTML=results.ibw.toFixed(1) + "<span style='font-size: 15px; color: white''>" + " Kilograms" + "</span>";
}
function ibwHamwi() {
	switch (user.gender) {
		case "male":
		 if (user.system == "metric") {
			 results.ibw= user.height / 2.54;
	         results.ibw= results.ibw - 60;
			 results.ibw= 48 + (results.ibw * 2.7);
		 } else if (user.system == "imperial") {
			 results.ibw= user.height - 60;
			 results.ibw= 48 + (results.ibw * 2.7);
	     }
		break;
		case "female":
		if (user.system == "metric") {
	         results.ibw= user.height / 2.54;
	         results.ibw= results.ibw - 60;
			 results.ibw= 45.5 + (results.ibw * 2.2);
		 } else if (user.system == "imperial") {
			 results.ibw= user.height - 60;
			 results.ibw= 45.5 + (results.ibw * 2.2);
	     }
		break;
	}
	document.getElementById("ibw").innerHTML=results.ibw.toFixed(1) + "<span style='font-size: 15px; color: white''>" + " Kilograms" + "</span>";
}
function ibwLemmens() {
		 if (user.system == "metric") {
	         results.ibw= 22 * Math.pow(user.height/100, 2);
		 } else if (user.system == "imperial") {
			 results.ibw= user.height / 39.37;
			 results.ibw= 22 * Math.pow(results.ibw, 2);
		 }

	document.getElementById("ibw").innerHTML=results.ibw.toFixed(1) + "<span style='font-size: 15px; color: white''>" + " Kilograms" + "</span>";
}
function ibwmethod() {
	var formula= document.getElementById("ibwmethod").value;
	if (formula == "borca") {
		ibwBroca();
	} else if (formula == "davine") {
		ibwDevine();
	} else if (formula == "robinson") {
		ibwRobinson();
	} else if (formula == "miller") {
		ibwMillier();
	} else if (formula == "hamwi") {
		ibwHamwi();
	} else if (formula == "lemmens") {
		ibwLemmens();
	}
}
function BFPbmi() {
	switch (user.gender) {
		case ("male"):
		 results.bfp= 1.20 * results.bmi + 0.23 * user.age - 16.2;
		 break;
		 case ("female"):
		 results.bfp= 1.20 * results.bmi + 0.23 * user.age - 5.4;
		 break;
	}
	document.getElementById("bfpbmi").innerHTML= results.bfp.toFixed(1) + "<span style='font-size: 18px; color: white''>" + " %" + "</span>";
}
function BFPnavy() {
	switch (user.system) {
		case "metric":
		if (user.gender == "male") {
			results.bfp= 495 / (1.0324 - 0.19077 * Math.log10(user.waist - user.neck) + 0.15456 * Math.log10(user.height)) - 450;
			results.bfp= Number(results.bfp.toFixed(1));
		} else if (user.gender == "female") {
			results.bfp= 495 / (1.29579 - 0.35004 * Math.log10(user.waist + user.hip - user.neck) + 0.22100 * Math.log10(user.height)) - 450;
			results.bfp= Number(results.bfp.toFixed(1));
		}
		break;
		case "imperial":
		if (user.gender == "male") {
			results.bfp= 86.010 * Math.log10(user.waist - user.neck) - 70.041 * Math.log10(user.height) + 36.76;
			results.bfp= Number(results.bfp.toFixed(1));
		} else if (user.gender == "female") {
			results.bfp= 163.205 * Math.log10(user.waist + user.hip - user.neck) - 97.684 * Math.log10(user.height) - 78.387;
			results.bfp= Number(results.bfp.toFixed(1));
		}
		break;
	}
	results.bfpFM= (results.bfp / 100) * user.weight;
	results.bfpFM= Number(results.bfpFM.toFixed(1));
	results.bfpLM= user.weight - results.bfpFM;
	results.bfpLM= Number(results.bfpLM.toFixed(1));
	document.getElementById("bfp").innerHTML= results.bfp + "<span style='font-size: 18px; color: white''>" + " %" + "</span>";
	document.getElementById("bfpFM").innerHTML= results.bfpFM + "<span style='font-size: 15px; color: white''>" + " Kilograms" + "</span>";
	document.getElementById("bfpLM").innerHTML= results.bfpLM + "<span style='font-size: 15px; color: white''>" + " Kilograms" + "</span>";
	bfprange();
	BFPbmi();
}
function bfprange() {
	switch (user.gender) {
		case "male":
	if (results.bfp >= 2 && results.bfp <= 5) {
		results.bfprange= "Essential Fat";
	} else if (results.bfp > 5 && results.bfp <= 13) {
		results.bfprange= "Athletes";
	} else if (results.bfp > 13 && results.bfp <= 17) {
		results.bfprange= "Fitness";
	} else if (results.bfp > 17 && results.bfp <= 25) {
		results.bfprange= "Average";
	} else if (results.bfp > 25) {
		results.bfprange= "Obese";
	}
	break;
	case "female":
	if (results.bfp >= 10 && results.bfp <= 13) {
		results.bfprange= "Essential Fat";
	} else if (results.bfp > 13 && results.bfp <= 20) {
		results.bfprange= "Athletes";
	} else if (results.bfp > 20 && results.bfp <= 24) {
		results.bfprange= "Fitness";
	} else if (results.bfp > 24 && results.bfp <= 31) {
		results.bfprange= "Average";
	} else if (results.bfp > 32) {
		results.bfprange= "Obese";
	}
	break;
	}
	document.getElementById("bfpRange").innerHTML= results.bfprange;
}
function lbmBoer() {
	switch(user.system) {
		case "metric":
		if (user.gender == "male") {
			results.lbm = (0.407 * user.weight) + (0.267 * user.height) - 19.2;
			results.lbm = Number(results.lbm.toFixed(1)); 
		} else if (user.gender == "female") {
			results.lbm = (0.252 * user.weight) + (0.473 * user.height) - 48.3;
			results.lbm = Number(results.lbm.toFixed(1));
		}
		results.lbmP = (results.lbm * 100) / user.weight;
	    results.lbmP = Number(results.lbmP.toFixed(1));
		break;
		case "imperial":
		var heightcm = user.height * 2.54;
		var weightkg = user.weight / 2.205;
		if (user.gender == "male") {
			results.lbm = (0.407 * weightkg) + (0.267 * heightcm) - 19.2;
            results.lbm = Number(results.lbm.toFixed(1));
		} else if (user.gender == "female") {
			results.lbm = (0.252 * weightkg) + (0.473 * heightcm) - 48.3;
            results.lbm = Number(results.lbm.toFixed(1));
		}
		results.lbmP = (results.lbm * 100) / weightkg;
	    results.lbmP = Number(results.lbmP.toFixed(1));
		break;
	}
	
	results.lbmF = 100 - results.lbmP;
	results.lbmF = Number(results.lbmF.toFixed(1));
	document.getElementById("lbm").innerHTML = results.lbm + "<span style='font-size: 18px; color: white''>" + " Kilograms" + "</span>";
	document.getElementById("lbmP").innerHTML = results.lbmP + "<span style='font-size: 18px; color: white''>" + " %" + "</span>";
	document.getElementById("lbmF").innerHTML = results.lbmF + "<span style='font-size: 18px; color: white''>" + " %" + "</span>";
}
function lbmJames() {
	switch(user.system) {
		case "metric":
		if (user.gender == "male") {
			results.lbm = (1.1 * user.weight) - 128 * Math.pow((user.weight / user.height), 2);
			results.lbm = Number(results.lbm.toFixed(1));
		} else if (user.gender == "female") {
			results.lbm = (1.07 * user.weight) - 148 * Math.pow((user.weight / user.height), 2);
			results.lbm = Number(results.lbm.toFixed(1));
		}
		results.lbmP = (results.lbm * 100) / user.weight;
	    results.lbmP = Number(results.lbmP.toFixed(1));
		break;
		case "imperial":
		var heightcm = user.height * 2.54;
		var weightkg = user.weight / 2.205;
		if (user.gender == "male") {
			results.lbm = (1.1 * weightkg) - 128 * Math.pow((weightkg / heightcm), 2);
			results.lbm = Number(results.lbm.toFixed(1));
		} else if (user.gender == "female") {
			results.lbm = (1.07 * weightkg) - 148 * Math.pow((weightkg / heightcm), 2);
			results.lbm = Number(results.lbm.toFixed(1));
		}
		results.lbmP = (results.lbm * 100) / weightkg;
	    results.lbmP = Number(results.lbmP.toFixed(1));
		break;
	}
	
	results.lbmF = 100 - results.lbmP;
	results.lbmF = Number(results.lbmF.toFixed(1));
	document.getElementById("lbm").innerHTML = results.lbm + "<span style='font-size: 18px; color: white''>" + " Kilograms" + "</span>";
	document.getElementById("lbmP").innerHTML = results.lbmP + "<span style='font-size: 18px; color: white''>" + " %" + "</span>";
	document.getElementById("lbmF").innerHTML = results.lbmF + "<span style='font-size: 18px; color: white''>" + " %" + "</span>";
}
function lbmHume() {
	switch(user.system) {
		case "metric":
		if (user.gender == "male") {
			results.lbm = (0.32810 * user.weight) + (0.33929 * user.height) - 29.5336;
			results.lbm = Number(results.lbm.toFixed(1));
		} else if (user.gender == "female") {
			results.lbm = (0.29569 * user.weight) + (0.41813 * user.height) - 43.2933;
			results.lbm = Number(results.lbm.toFixed(1));
		}
		results.lbmP = (results.lbm * 100) / user.weight;
	    results.lbmP = Number(results.lbmP.toFixed(1));
		break;
		case "imperial":
		var heightcm = user.height * 2.54;
		var weightkg = user.weight / 2.205;
		if (user.gender == "male") {
			results.lbm = (0.32810 * weightkg) + (0.33929 * heightcm) - 29.5336;
			results.lbm = Number(results.lbm.toFixed(1));
		} else if (user.gender == "female") {
			results.lbm = (0.29569 * weightkg) + (0.41813 * heightcm) - 43.2933;
			results.lbm = Number(results.lbm.toFixed(1));
		}
		results.lbmP = (results.lbm * 100) / weightkg;
	    results.lbmP = Number(results.lbmP.toFixed(1));
		break;
	}
	
	results.lbmF = 100 - results.lbmP;
	results.lbmF = Number(results.lbmF.toFixed(1));
	document.getElementById("lbm").innerHTML = results.lbm + "<span style='font-size: 18px; color: white''>" + " Kilograms" + "</span>";
	document.getElementById("lbmP").innerHTML = results.lbmP + "<span style='font-size: 18px; color: white''>" + " %" + "</span>";
	document.getElementById("lbmF").innerHTML = results.lbmF + "<span style='font-size: 18px; color: white''>" + " %" + "</span>";
}
function lbmmethod() {
		var formula= document.getElementById("lbmmethod").value;
	if (formula == "Boer") {
		lbmBoer();
	} else if (formula == "James") {
		lbmJames();
	} else if (formula == "Hume") {
		lbmHume();
	}
}
function topage1() {
	document.getElementById("page1").style.display="block";
	document.getElementById("profile").style.display="block";
	document.getElementById("welcomePage").style.display="none";
}
function topage2() {
	var age= document.getElementById("age").value;
    var weight= document.getElementById("weight").value;
    var height= document.getElementById("height").value;
	var gender= document.getElementById("mgender").checked;
	var selectsys= document.getElementById("metric").checked;
	if (gender == true) {
	    user.gender="male";
    } else {
	user.gender="female";
    }
	if (selectsys == true) {
		user.system= "metric";
	} else {
		user.system= "imperial";
	}
	
       switch (user.system) {
		case "metric":
		if (age < 18 || age > 120) {
			document.getElementById("agealert").style.display="block";
		} else if (weight < 20 || weight > 250) {
			document.getElementById("weightalert").style.display="block";
		} else if (height < 91 || height > 360) {
			document.getElementById("heightalert").style.display="block";
		} else{
           document.getElementById("page2").style.display="block";
	       document.getElementById("page1").style.display="none";
		}
		break;
		case "imperial":
		if (age < 18 || age > 120) {
			document.getElementById("agealert").style.display="block";
		} else if (weight < 45 || weight > 560) {
			document.getElementById("weightalert").style.display="block";
		} else if (height < 47 || height > 155) {
			document.getElementById("heightalert").style.display="block";
		} else {
		    document.getElementById("page2").style.display="block";
	        document.getElementById("page1").style.display="none";
		}
		break;
	}
    user.age=parseFloat(age);
    user.weight=parseFloat(weight);
    user.height=parseFloat(height);
}
function topage3() {
	document.getElementById("page3").style.display="block";
	document.getElementById("page2").style.display="none";
	var neck= document.getElementById("neck").value;
    var waist= document.getElementById("waist").value;
    var hip= document.getElementById("hip").value;
	user.neck=parseFloat(neck);
    user.waist=parseFloat(waist);
    user.hip=parseFloat(hip);
}
function topage4() {
	document.getElementById("page4").style.display="block";
	document.getElementById("page3").style.display="none";
	document.getElementById("profile").style.display="none";
	
	var sedentary= document.getElementById("sedentary");
	var light= document.getElementById("light");
	var moderate= document.getElementById("moderate");
	var very= document.getElementById("very");
	var extra= document.getElementById("extra");
	
	if (sedentary.checked == true) {
		user.activity="sedentary";
	} else if (light.checked == true) {
		user.activity="light";
	} else if (moderate.checked == true) {
		user.activity="moderate";
	} else if (very.checked == true) {
		user.activity="very";
	} else if (extra.checked == true) {
		user.activity="extra";
	}
	
	bmi();
	HarrisBenedictBMR();
	activityMultipier();
	whtr();
	ibwBroca();
	BFPnavy();
	lbmBoer();
	console.log(user);
	console.log(results);
}
function toback() {
	if (document.getElementById("page1").style.display == "block") {
		document.getElementById("welcomePage").style.display="block";
		document.getElementById("page1").style.display="none";
		document.getElementById("profile").style.display="none";
	} else if (document.getElementById("page2").style.display == "block") {
		document.getElementById("page1").style.display="block";
		document.getElementById("page2").style.display="none";
	} else if (document.getElementById("page3").style.display == "block") {
		document.getElementById("page2").style.display="block";
		document.getElementById("page3").style.display="none";
	}
}
function restart() {
	document.getElementById("welcomePage").style.display="block";
	document.getElementById("page4").style.display="none";
    document.getElementById("body").style.backgroundImage="none";
}
function metricSystem() {
		document.getElementById("weight").placeholder="Your Weight In Kilograms";
		document.getElementById("height").placeholder="Your Height In Centimeters";
		document.getElementById("neck").placeholder="Your Neck Size In Centimeters";
		document.getElementById("waist").placeholder="Your Waist Size In Centimeters";
		document.getElementById("hip").placeholder="Your Hip Size In Centimeters";
}
function imperialSystem() {
	    document.getElementById("weight").placeholder="Your Weight In Pounds";
		document.getElementById("height").placeholder="Your Height In Inches";
		document.getElementById("neck").placeholder="Your Neck Size In Inches";
		document.getElementById("waist").placeholder="Your Waist Size In Inches";
		document.getElementById("hip").placeholder="Your Hip Size In Inches";
}
function bmipop() {
	if (document.getElementById("bmipop").style.display == "block") {
	    document.getElementById("bmipop").style.display="none";
	} else {
		document.getElementById("bmipop").style.display="block";
	}
}
function bmrpop() {
	if (document.getElementById("bmrpop").style.display == "block") {
	    document.getElementById("bmrpop").style.display="none";
	} else {
		document.getElementById("bmrpop").style.display="block";
	}
}
function whtrpop() {
	if (document.getElementById("whtrpop").style.display == "block") {
	    document.getElementById("whtrpop").style.display="none";
	} else {
		document.getElementById("whtrpop").style.display="block";
	}
}
function ibwpop() {
	if (document.getElementById("ibwpop").style.display == "block") {
	    document.getElementById("ibwpop").style.display="none";
	} else {
		document.getElementById("ibwpop").style.display="block";
	}
}
function bfppop() {
	if (document.getElementById("bfppop").style.display == "block") {
	    document.getElementById("bfppop").style.display="none";
	} else {
		document.getElementById("bfppop").style.display="block";
	}
}
function lbmpop() {
	if (document.getElementById("lbmpop").style.display == "block") {
	    document.getElementById("lbmpop").style.display="none";
	} else {
		document.getElementById("lbmpop").style.display="block";
	}
}
function neckpop() {
	if (document.getElementById("neckpop").style.display == "block") {
	    document.getElementById("neckpop").style.display="none";
	} else {
		document.getElementById("neckpop").style.display="block";
	}
}
function waistpop() {
	if (document.getElementById("waistpop").style.display == "block") {
	    document.getElementById("waistpop").style.display="none";
	} else {
		document.getElementById("waistpop").style.display="block";
	}
}
function hippop() {
	if (document.getElementById("hippop").style.display == "block") {
	    document.getElementById("hippop").style.display="none";
	} else {
		document.getElementById("hippop").style.display="block";
	}
}
function agealert() {
	if (document.getElementById("agealert").style.display == "block") {
	    document.getElementById("agealert").style.display="none";
	} else {
		document.getElementById("agealert").style.display="block";
	}
}
function weightalert() {
	if (document.getElementById("weightalert").style.display == "block") {
	    document.getElementById("weightalert").style.display="none";
	} else {
		document.getElementById("weightalert").style.display="block";
	}
}
function heightalert() {
	if (document.getElementById("heightalert").style.display == "block") {
	    document.getElementById("heightalert").style.display="none";
	} else {
		document.getElementById("heightalert").style.display="block";
	}
}