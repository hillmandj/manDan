define([], function drawCircles() {
	var button = document.body.getElementsByClassName('drawcirc')[0];
	button.onclick = function(event) {
		var c1 = document.body.getElementsByClassName('circle1')[0];
		var context1 = c1.getContext('2d');
		context1.fillStyle="#FF0000"
		context1.beginPath();
		context1.arc(95,50,40,0,2*Math.PI, true);
		context1.fill();
		
		context1.fillStyle="#0000FF"
		context1.beginPath();
		context1.arc(150,100,40,0,2*Math.PI, true);
		context1.fill();
	}
});