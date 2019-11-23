var yourRange= document.getElementById("range");
function kgCalc() {
	var kg= document.getElementById("kgWeightInput").value;
	var cm= document.getElementById("cmHeightInput").value;
	var m= cm/100;
	var kgFormula= kg/Math.pow(m, 2);
	var kgResulte= kgFormula.toFixed(1);
	
	if (isFinite(kgResulte) && kgResulte != 0.0) {
        document.getElementById("resulte").innerHTML="Your BMI is   " + "<span style='color: white;'>" + kgResulte + "</span>";
	} else {
        alert("please enter your weight and your height");
	}
	if (kgResulte < 15 && kgResulte > 0){
		yourRange.innerHTML="You are in the " + "<span style='color: #c42121;'>" + "very severely underweight" + "</span>" + " range";
	} else if (kgResulte < 16 && 15 <= kgResulte){
		yourRange.innerHTML="You are in the " + "<span style='color: #c44c21;'>" + "severely underweight" + "</span>" + " range";
	} else if (kgResulte < 18.5 && 16 <= kgResulte){
		yourRange.innerHTML="You are in the " + "<span style='color: #c4c121;'>" + "underweight" + "</span>" + " range";
	} else if (kgResulte < 25 && 18.5 <= kgResulte){
		yourRange.innerHTML="You are in the " + "<span style='color: #4cc421;'>" + "healthy" + "</span>" + " range";
	} else if (kgResulte < 30 && 25 <= kgResulte){
		yourRange.innerHTML="You are in the " + "<span style='color: #c4c121;'>" + "overweight" + "</span>" + " range";
	} else if (kgResulte < 35 && 30 <= kgResulte){
		yourRange.innerHTML="You are in the " + "<span style='color: #acc421;'>" + "moderately obese" + "</span>" + " range";
	} else if (kgResulte < 40 && 35 <= kgResulte){
		yourRange.innerHTML="You are in the " + "<span style='color: #c44c21;'>" + "severely obese" + "</span>" + " range";
	} else if (kgResulte < 1000 && 40 <= kgResulte){
		yourRange.innerHTML="You are in the " + "<span style='color: #c42121;'>" + "very severely obese" + "</span>" + " range";
	}
}

function lbCalc(){
	var lb= document.getElementById("lbWeightInput").value;
	var inc= document.getElementById("inHeightInput").value;
	var lbFormula= 703*lb/Math.pow(inc, 2);
	var lbResulte= lbFormula.toFixed(1);
	
	if (isFinite(lbResulte) && lbResulte != 0.0) {
        document.getElementById("resulte").innerHTML="Your BMI is   " + "<span style='color: white;'>" + lbResulte + "</span>";
	} else {
        alert("please enter your weight and your height");
	}
	if (lbResulte < 15 && lbResulte > 0){
		yourRange.innerHTML="You are in the " + "<span style='color: #c42121;'>" + "very severely underweight" + "</span>" + " range";
	} else if (lbResulte < 16 && 15 <= lbResulte){
		yourRange.innerHTML="You are in the " + "<span style='color: #c44c21;'>" + "severely underweight" + "</span>" + " range";
	} else if (lbResulte < 18.5 && 16 <= lbResulte){
		yourRange.innerHTML="You are in the " + "<span style='color: #c4c121;'>" + "underweight" + "</span>" + " range";
	} else if (lbResulte < 25 && 18.5 <= lbResulte){
		yourRange.innerHTML="You are in the " + "<span style='color: #4cc421;'>" + "healthy" + "</span>" + " range";
	} else if (lbResulte < 30 && 25 <= lbResulte){
		yourRange.innerHTML="You are in the " + "<span style='color: #c4c121;'>" + "overweight" + "</span>" + " range";
	} else if (lbResulte < 35 && 30 <= lbResulte){
		yourRange.innerHTML="You are in the " + "<span style='color: #acc421;'>" + "moderately obese" + "</span>" + " range";
	} else if (lbResulte < 40 && 35 <= lbResulte){
		yourRange.innerHTML="You are in the " + "<span style='color: #c44c21;'>" + "severely obese" + "</span>" + " range";
	} else if (lbResulte < 1000 && 40 <= lbResulte){
		yourRange.innerHTML="You are in the " + "<span style='color: #c42121;'>" + "very severely obese" + "</span>" + " range";
	}
}