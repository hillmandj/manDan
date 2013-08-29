define([], function appendToFooter() {
	var b = document.body.getElementsByClassName('foo')[0];
	b.onclick = function(event){
		var userInput = document.body.getElementsByClassName('userInput')[0].value;
		var footer = document.body.getElementsByClassName("footer")[0];
		footer.innerHTML = userInput;	
	}
	
});
