define([], function close_mobile_nav() {
	var close_button = document.body.getElementsByClassName('nav-close-button')[0];
	close_button.onclick = function(event) {
		var mobile_nav_bar = document.body.getElementsByClassName('mobile-nav-bar')[0];
		var hamburger_button = document.body.getElementsByClassName('nav-button')[0];
		//var mobile_header = document.body.getElementsByClassName('mobile-header')[0];
		//var mobile_logo = document.body.getElementsByClassName('mobile-logo')[0];
		//mobile_logo.style.display="";
		//mobile_header.style.borderBottom="";
		mobile_nav_bar.style.display = "";
		hamburger_button.style.display = "block";
	}
});