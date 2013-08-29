define([], function pushme() {
	var x = document.body.getElementsByClassName('pushme')[0];
	x.onclick = function(event) {
		console.log('yeeehaaaww');
	};
});
