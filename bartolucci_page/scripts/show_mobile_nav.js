define([], function show_mobile_nav() {
	var menu_button = document.body.getElementsByClassName('nav-button')[0];
	menu_button.onclick = function(event) {
		console.log('button works, line number #4')
		var mobile_nav_bar = document.body.getElementsByClassName('mobile-nav-bar')[0];
		//var mobile_header = document.body.getElementsByClassName('mobile-header')[0];
		//var mobile_logo = document.body.getElementsByClassName('mobile-logo')[0];
		//mobile_logo.style.display="none";
		//mobile_header.style.borderBottom="none";
		menu_button.style.display = "none";
		mobile_nav_bar.style.display = "block";
	}
});