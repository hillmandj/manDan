define([], function changeElementColor(elem) {
	var getElem = document.body.getElementsByClassName(elem);
	for (var i=0; i<getElem.length; i++) {
		getElem[i].style.color = 'red';
		}
});

