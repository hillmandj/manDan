define([], function changeTitleColor() {
	var button = document.getElementsByClassName('changebutton')[0]
	button.onclick = function(event) {
		var title = document.body.getElementsByTagName('h1');
		title[0].style.color ="red";
	};
}); 
