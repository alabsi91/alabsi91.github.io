var user = {
	gender:"0",
	age:"0",
	weight:"0",
	height:"0",
	waist:"82",
	hip:"",
	neck:"",
	activity:"",
	system:"metric"
};
var results = {
	bmi:"0",
	bmirange:"",
	bmr:"0",
	dailykcal:"",
	whtr:"",
	whtrRange:""
};
function bmi() {
	if (user.system == "metric") {
	var bmi= user.weight / Math.pow(user.height/100, 2);
	} else {
		var bmi= (703 * user.weight) / Math.pow(user.height, 2);
	}
	results.bmi=bmi.toFixed(1);
    document.getElementById("bmi").innerHTML=bmi.toFixed(1);
	bmiRange()
}
function bmiRange() {
		if (results.bmi < 18.5 && user.age >= 20) {
			results.bmirange= "Underweight";
			document.getElementById("bmiGoal").innerHTML="You Should Gain Some Weight";
		} else if (results.bmi >= 18.5 && 24.9 > results.bmi && user.age >= 20) {
			results.bmirange= "Normal Weight";
			document.getElementById("bmiGoal").innerHTML="You Should Sustain Your Weight";
		} else if (results.bmi > 25 && 29.9 > results.bmi && user.age >= 20) {
			results.bmirange= "Overweight";
			document.getElementById("bmiGoal").innerHTML="You Should Lose Some Weight";
		} else if (results.bmi > 30 && user.age >= 20) {
			results.bmirange= "Obese";
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
document.getElementById("bmr").innerHTML=bmr.toFixed(0) + "<span style='font-size: 15px'>" +" kcal/day";
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
document.getElementById("bmr").innerHTML=bmr.toFixed(0) + "<span style='font-size: 15px'>" + "kcal/day"+ "</span>" ;
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
	document.getElementById("intake").innerHTML= results.dailykcal.toFixed(0) + "<span style='font-size: 15px'>"  + " kcal/day"+ "</span>";
}
function bmrmethod() {
	if (document.getElementById("bmrmethod").value == "harris") {
		HarrisBenedictBMR()
		activityMultipier()
	} else {
		MifflinStJeorBMR()
		activityMultipier()
	}
}
function whtr() {
	results.whtr= user.waist / user.height;
	whtrRange();
	document.getElementById("bmi").innerHTML=results.whtr;
}
function whtrRange() {
	switch (user.gender) {
		case "male":
	if (results.whtr <= 0.34 && user.age >= 20) {
		results.whtrRange= "Extremely Slim";
	} else if (results.whtr > 0.35 && 0.42 > results.whtr && user.age >= 20) {
		results.whtrRange= "slim";
	} else if (results.whtr > 0.43 && 0.52 > results.whtr && user.age >= 20) {
		results.whtrRange= "healthy";
	} else if (results.whtr > 0.53 && 0.57 > results.whtr && user.age >= 20) {
		results.whtrRange= "overweight";
	} else if (results.whtr > 0.58 && 0.62 > results.whtr && user.age >= 20) {
		results.whtrRange= "very overweight";
	} else if (results.whtr >= 0.63 && user.age >= 20) {
		results.whtrRange= "obese";
	}
	break;
		case "female":
		if (results.whtr <= 0.34 && user.age >= 20) {
		results.whtrRange= "Extremely Slim";
	} else if (results.whtr > 0.35 && 0.41 > results.whtr && user.age >= 20) {
		results.whtrRange= "slim";
	} else if (results.whtr > 0.42 && 0.48 > results.whtr && user.age >= 20) {
		results.whtrRange= "healthy";
	} else if (results.whtr > 0.49 && 0.53 > results.whtr && user.age >= 20) {
		results.whtrRange= "overweight";
	} else if (results.whtr > 0.54 && 0.57 > results.whtr && user.age >= 20) {
		results.whtrRange= "very overweight";
	} else if (results.whtr >= 0.58 && user.age >= 20) {
		results.whtrRange= "obese";
	}
	break;
	}
	if (results.whtr <= 0.34 && user.age < 20) {
		results.whtrRange= "Extremely Slim";
	} else if (results.whtr > 0.35 && 0.45 > results.whtr && user.age < 20) {
		results.whtrRange= "slim";
	} else if (results.whtr > 0.46 && 0.51 > results.whtr && user.age < 20) {
		results.whtrRange= "healthy";
	} else if (results.whtr > 0.52 && 0.63 > results.whtr && user.age < 20) {
		results.whtrRange= "overweight";
	} else if (results.whtr >= 0.64 && user.age < 20) {
		results.whtrRange= "obese";
	}
	console.log(results.whtrRange);
}
function topage1() {
	document.getElementById("page1").style.display="block";
	document.getElementById("profile").style.display="block";
	document.getElementById("welcomePage").style.display="none";
}
function topage2() {
	document.getElementById("page2").style.display="block";
	document.getElementById("page1").style.display="none";
	var gender= document.getElementById("mgender").checked;
	var selectsys= document.getElementById("selectsys");
	if (gender == true) {
	    user.gender="male";
    } else {
	user.gender="female";
    }
	if (selectsys.value == "metric") {
		user.system= "metric";
	} else {
		user.system= "imperial";
	}
	switch (user.system) {
		case "metric":
		document.getElementById("weight").placeholder="Your Weight In Kilograms";
		document.getElementById("height").placeholder="Your Height In Centimeters";
		document.getElementById("neck").placeholder="Your Neck Size In Centimeters";
		document.getElementById("waist").placeholder="Your Waist Size In Centimeters";
		document.getElementById("hip").placeholder="Your Hip Size In Centimeters";
		break;
		case "imperial":
		document.getElementById("weight").placeholder="Your Weight In Pounds";
		document.getElementById("height").placeholder="Your Height In Inches";
		document.getElementById("neck").placeholder="Your Neck Size In Inches";
		document.getElementById("waist").placeholder="Your Waist Size In Inches";
		document.getElementById("hip").placeholder="Your Hip Size In Inches";
		break;
	}

}
function topage3() {
	var age= document.getElementById("age").value;
    var weight= document.getElementById("weight").value;
    var height= document.getElementById("height").value;
	switch (user.system) {
		case "metric":
		if (age < 18 || age > 120) {
			alert("Please enter a valid age");
		} else if (weight < 20 || weight > 250) {
			alert("Please enter a valid weight");
		} else if (height < 91 || height > 360) {
			alert("Please enter a valid height");
		} else{
	        document.getElementById("page3").style.display="block";
	        document.getElementById("page2").style.display="none";
		}
		break;
		case "imperial":
		if (age < 18 || age > 120) {
			alert("Please enter a valid age");
		} else if (weight < 45 || weight > 560) {
			alert("Please enter a valid weight");
		} else if (height < 47 || height > 155) {
			alert("Please enter a valid height");
		} else{
	        document.getElementById("page3").style.display="block";
	        document.getElementById("page2").style.display="none";
		}
		break;
	}
    user.age=age;
    user.weight=weight;
    user.height=height;
}
function topage4() {
	document.getElementById("page4").style.display="block";
	document.getElementById("page3").style.display="none";
	var neck= document.getElementById("neck").value;
    var waist= document.getElementById("waist").value;
    var hip= document.getElementById("hip").value;
	user.neck=neck;
    user.waist=waist;
    user.hip=hip;
}
function topage5() {
	document.getElementById("page5").style.display="block";
	document.getElementById("page4").style.display="none";
	document.getElementById("profile").style.display="none";
	document.getElementById("body").style.backgroundColor="#a952ff";
	
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
	} else if (document.getElementById("page4").style.display == "block") {
		document.getElementById("page3").style.display="block";
		document.getElementById("page4").style.display="none";
	}
}
function restart() {
	document.getElementById("welcomePage").style.display="block";
	document.getElementById("page5").style.display="none";
    document.getElementById("body").style.backgroundColor="#282828";
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