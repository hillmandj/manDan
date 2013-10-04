//make sure that html code fully loads before executing jQuery code
$(window).load(function() {

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
		this.container_width = this.$container.width();
		this.each_child_width = this.$children.children().width();
		this.num_cols = this.getNumColumns();
		this.img_data = this.getData();

		//methods invoked on creation
		this.setCSS();
		this.positionElements();

	},
	//define methods
	setCSS : function() {
		this.$container.css('position', 'relative');
		this.$children.css('position', 'absolute');
	},
	getNumColumns : function() { 
		return parseInt(this.container_width / this.each_child_width, 10);
	},
	getData : function() {
		var widths_heights = {};
		var x = 0;
		var y = 0;
		var that = this;
		//var num_cols = that.getNumColumns();
		$('img').each(function() {
			//create keys for object where x,y coordinates of pictures start at top left -- 0,0
			var key = [x,y].join('');
			//console.log(key)
			widths_heights[key] = {
				width: this.width,
				height: this.height
			};
			//when you go right, increase x by 1, keep y == 0
			if (x < that.num_cols) {
				x += 1;	
			};
			//once you get to the max number of columns, reset x to 0, add 1 to y
			if (x >= that.num_cols) {
				x = 0;
				y += 1;
			}
		});
		console.log(widths_heights);
		return widths_heights;
	},
	checkHeight : function(k) {
		return this.img_data[k]['height'];
	},
	getWidth : function(k) {
		return this.img_data[k]['width'];
	},
	getLastKey : function(k) {
		if (k == '00') {
			return '00';
		}
		if (k[0] > 0) {
			return (k[0]-1) + k[1];
		} else {
			return String(this.num_cols - 1) + String(k[1] - 1);
		}
	},
	yFromZero : function(k) {
		var y_coord = k[1]; 
		var original_y_coord = y_coord <= 1 ? 1 : y_coord; 
		var sum = 0; 
		y_coord -= 1
		while (y_coord > -1) {
			sum += this.checkHeight((k[0]+y_coord));
			y_coord -= 1;
		}
		// if (original_y_coord <= 1) {
		// 	return sum + this.padding;
		// } else {
		// 	return sum + (original_y_coord * this.padding);
		// }
		return sum + (original_y_coord * this.padding);
	},
	positionElements : function() {
		var positions = this.img_data;
		var x = 0;
		var y = 0;
		var that = this;
		this.$children.each(function() {
			var vertical_key = [x,(y-1)].join('');
			var current_key = [x,y].join('');
			var x_offset = that.getWidth(that.getLastKey(current_key));
			var x_offset_w_padding = String((current_key[0] * that.padding) + (current_key[0] * x_offset));
			if (parseInt(current_key[1], 10) > 0) {
				var y_offset_w_padding = that.yFromZero(current_key);
				$(this).css('top', y_offset_w_padding);
			}
			$(this).css('left', x_offset_w_padding);

			if (x < that.num_cols) {
				x += 1;	
			}
			if (x >= that.num_cols) {
				x = 0;
				y += 1;
			}

		});

	} 
	
}
var grid = new Grid('.projects', 20);
});