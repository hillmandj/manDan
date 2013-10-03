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
		this.container_width = this.$container.width();
		var that = this
		$(window).load(function() {
			//methods -- invoke on creation
			that.each_child_width = that.$children.children().width();

			//console.log(that.getData());
			console.log('line 26 --> this is getNumColumns(): ' + that.getNumColumns());
			that.setCSS();
			that.positionElements(that.getData());
		});
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
		$('img').each(function() {
			//create keys for object where x,y coordinates of pictures start at top left -- 0,0
			var key = [x,y].join('');
			//console.log(key)
			widths_heights[key] = {
				width: this.width,
				height: this.height,
				img: $(this)
			};
			//when you go right, increase x by 1, keep y == 0
			if (x < that.getNumColumns()) {
				x += 1;	
			};
			//once you get to the max number of columns, reset x to 0, add 1 to y
			if (x >= that.getNumColumns()) {
				x = 0;
				y += 1;
			}
		});

		return widths_heights;
	},
	positionElements : function(data) {
		//may have to have this be a function that takes 'positions' since the getData() function uses unordered iteration
		//if you're at 0,0 it's just the img, if you're at 1,0 its the last img's width + pad, if your at 2,0 its 2 imgs and 2 pad
		var positions = data;
		console.log('line 70 --> this is positions: ');
		console.log(positions);
		var pos_size = Object.keys(positions).length;
		console.log('line 72 --> this is pos_size: ' + pos_size);
		console.log('');
		var x = 0;
		var y = 0;
		var that = this;
		var checkHeight = function(k) {
			return positions[k]['height'];
		}
		var getWidth = function(k) {
			return positions[k]['width'];
		}
		var getLastKey = function(k) {
			if (k[0] > 0) {
				return (k[0]-1) + k[1];
			} else {
				return String(that.getNumColumns() - 1) + String(k[1] - 1);
			}
		}
		 
		//var current_key = [((x > 0) ? x - 1 : x), y].join('');
		
		// for (var i = 0; i < pos_size; i++) {
		// 	var current_key = [x,y].join('');
		// 	var next_key = [(x+1),y].join('');
		// 	console.log('this is current_key: ' + current_key);
		// 	console.log('this is current_key\'s first index: ' + current_key[0]);
		// 	console.log('this is next_key: ' + next_key);
		// 	console.log('this is the image\'s height: ' + positions[current_key]['height']);
		// 	console.log('');
		// 	if (current_key[0] == '0') {
		// 		console.log(positions[current_key]['img']);
		// 		positions[current_key]['img'].css('left', '0');
		// 	} else {
		// 		console.log('got here');
		// 		var x_offset = current_key[1];
		// 		positions[current_key]['img'].css('left', '200');
		// 	}


		// 	if (x < that.getNumColumns()) {
		// 		x += 1;	
		// 	}
		// 	if (x >= that.getNumColumns()) {
		// 		x = 0;
		// 		y += 1;
		// 	}
		// }
		this.$children.each(function() {
			var vertical_key = [x,(y-1)].join('');
			var current_key = [x,y].join('');
			console.log(current_key);
			if (current_key == '00') {
				$(this).css({top: 0, left: 0});
			} else {
				var x_offset = getWidth(getLastKey(current_key));
				var x_offset_w_padding = String((current_key[0] * that.padding) + (current_key[0] * x_offset));
				if (parseInt(current_key[1], 10) > 0) {
					var y_offset_w_padding = String((current_key[1] * checkHeight(vertical_key)) + that.padding);
					$(this).css('top', y_offset_w_padding);
					}
				$(this).css('left', x_offset_w_padding);
				}

			if (x < that.getNumColumns()) {
				x += 1;	
			}
			if (x >= that.getNumColumns()) {
				x = 0;
				y += 1;
			}

		});

	} 
	
}
var grid = new Grid('.projects', 20);
});