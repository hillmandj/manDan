define([], function prnMouse() {
	var foo = document.body.onmouseover = function(event) {
		var x = event.clientX;
		var y = event.clientY;
		console.log(x, y);
	}
});
