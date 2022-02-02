// initial global variables
var canvas;
var ctx;
var width;
var height;
var mouseX;
var mouseY;

// initiate canvas stuff
function __init__(w, h, node) {
    canvas = document.createElement("canvas");
	ctx = canvas.getContext("2d");
	width = canvas.width = w;
	height = canvas.height = h;
	node.body.appendChild(canvas);
}

// update mouse positions
window.addEventListener("mousemove", function(event) {
	mouseX = event.pageX;
	mouseY = event.pageY;
});

// button class
function Button(label, x, y, rad, width, height, draw, change, func, font, col1, col2) {
	this.l = label;
	this.x = x;
	this.y = y;
	this.r = r;
	this.w = w;
	this.h = h;
	this.d = d;
	this.c = c;
	this.f = func;
	this.font = font;
	this.c1 = col1;
	this.c2 = col2;
	
	// mouseOver function
	this.mouseOver = function() {
		if(
	};
}

// detect mouse clicks
function listen_for_click(func) {
	window.addEventListener("click", function() {
		func();
	});
}
