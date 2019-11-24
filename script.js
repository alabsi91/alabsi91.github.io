var yourRange= document.getElementById("range");

function kgCalc() {
	var kg= document.getElementById("kgWeightInput").value;
    var cm= document.getElementById("cmHeightInput").value;
	if ( kg < 250 && kg > 20 && cm < 360 && cm > 91 ) {
	var result= kg/Math.pow(cm/100, 2);
	var a= result.toFixed(1);
	check(a);
	} else {
		alert ("please enter your weight between 250 and 20 kg\nand your height between 360 and 91 cm");
	}
}
function lbCalc(){
	var lb= document.getElementById("lbWeightInput").value;
    var inc= document.getElementById("inHeightInput").value;
	if ( lb < 560 && lb > 45 && inc < 142 && inc > 35 ) {
	var result= 703 * lb/Math.pow(inc, 2);
	var a= result.toFixed(1);
	check(a);
	} else {
		alert ("please enter your weight between 560 and 45 lb\nand your height between 142 and 35 in");
	}
}
function check(a) {
    if (isFinite(a) && a != 0.0) {
        document.getElementById("resulte").innerHTML="Your BMI is   " + "<span style='color: white;'>" + a + "</span>";
	} else {
        alert("please enter your weight and your height");
	}
	if (a < 15 && a > 0){
		yourRange.innerHTML="You are in the " + "<span style='color: #c42121;'>" + "very severely underweight" + "</span>" + " range";
	} else if (a < 16 && 15 <= a){
		yourRange.innerHTML="You are in the " + "<span style='color: #c44c21;'>" + "severely underweight" + "</span>" + " range";
	} else if (a < 18.5 && 16 <= a){
		yourRange.innerHTML="You are in the " + "<span style='color: #c4c121;'>" + "underweight" + "</span>" + " range";
	} else if (a < 25 && 18.5 <= a){
		yourRange.innerHTML="You are in the " + "<span style='color: #4cc421;'>" + "healthy" + "</span>" + " range";
	} else if (a < 30 && 25 <= a){
		yourRange.innerHTML="You are in the " + "<span style='color: #c4c121;'>" + "overweight" + "</span>" + " range";
	} else if (a < 35 && 30 <= a){
		yourRange.innerHTML="You are in the " + "<span style='color: #acc421;'>" + "moderately obese" + "</span>" + " range";
	} else if (a < 40 && 35 <= a){
		yourRange.innerHTML="You are in the " + "<span style='color: #c44c21;'>" + "severely obese" + "</span>" + " range";
	} else if (a < 1000 && 40 <= a){
		yourRange.innerHTML="You are in the " + "<span style='color: #c42121;'>" + "very severely obese" + "</span>" + " range";
	}
}

function checksystem() {
	var kgbox= document.getElementById("kgbox");
	var lbbox= document.getElementById("lbbox");
    if (kgbox.checked == true) {
	document.getElementById("lbpage").style.display= "none";
    document.getElementById("kgpage").style.display= "block"
	clear();
	}
	if (lbbox.checked == true) {
	document.getElementById("kgpage").style.display= "none";
	document.getElementById("lbpage").style.display= "block";
	clear();
}
}

function clear() {
	document.getElementById("kgWeightInput").value="";
	document.getElementById("cmHeightInput").value="";
	document.getElementById("range").innerHTML="";
	document.getElementById("lbWeightInput").value="";
	document.getElementById("inHeightInput").value="";
	document.getElementById("resulte").innerHTML="";
}