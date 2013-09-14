//make sure that html code fully loads before executing jQuery code
$(document).ready(function() {

function Grid(container, padding) {
	//set Grid properties with parameters
	this.$container = $(container);
	this.padding = padding;
	//instantiate the grid using the prototype init function.
	this.init();
}

//protoype is a dictionary with methods as k,v pairs
Grid.prototype = {
	//similar to __init__(self, .....)
	init : function() {
		//properties
		this.$children = this.$container.find('li');
		this.item_width = this.$children.width();
		this.each_child_width = this.$children.children().width();
		this.container_width = this.$container.width();

		//methods -- invoke on creation
		this.getRow();
		this.setCSS();
		this.positionElements();
	},
	//define methods
	setCSS : function() {
		this.$container.css('position', 'relative');
		this.$children.css('position', 'absolute');
	},
	doesFitContainer : function(elem) {
		//check if items fit container
		var totalWidth = 0;
		var pad = this.padding;
		$(elem).each(function() {
			totalWidth += parseInt($(this).width(), 10) + pad;
		});
		if (totalWidth <= this.container_width) {
			return true;
		} else {
			return false;
		}
	},
	getRow : function() {
		var total_width = this.each_child_width + this.padding;
		while (this.container_width % (total_width) < this.container_width) {
			total_width += total_width;
			console.log(total_width);
		}
	},
	positionElements : function() {
		//Does this function need to take in any parameters? -- e.g. elements, direction?
		var x = 0;
		var limit = (this.each_child_width + this.padding);
		this.$children.each(function() {
			$(this).css('left', x);
			x += limit;
		});
	}


};
var grid = new Grid('.projects', 20);
});