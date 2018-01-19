function timeCheck(){
		var date = new Date();
		var h = date.getHours();
		var m = date.getMinutes();
		var s = date.getSeconds();
		time = '' + addZero(h) + addZero(m) + addZero(s);
	//console.log(time);
	// time = formatTime(h, m, s);
	document.getElementById("hex_clock").innerText = time;
	document.body.style.backgroundColor = '#' + time;
}
/*
function formatTime(h, m, s){
	var [h, m, s]= [h, m, s].length < 2 ? "0" + [h, m, s] : [h, m, s]; 
	return "#" + h + m + s; 
}
*/
function addZero(t){
	if (t < 10) {
		return "0" + t;
	}else{
		return t;	
	}
}
setInterval(timeCheck, 1000); 
timeCheck();
/*
var date = new Date();
if (5 < date && date < 17){
	document.backgroundColor= #a3b0cc;
}else {
	document.backgroundColor= #c3b7cc;
}
*/
 /*
function changeBackground(){
	if (3 < time < 10){
		return backgourndColor = rgb(163, 176, 204);
	}else {
		return backgroundColor = rgb(195, 183, 204);
	}
}
*/