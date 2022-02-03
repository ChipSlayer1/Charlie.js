// initial global variables
var canvas;
var ctx;
var width;
var height;
var mouseX;
var mouseY;
var scene;

// initiate canvas stuff
function __init__(w, h, el) {
    canvas = document.createElement("canvas");
	ctx = canvas.getContext("2d");
	width = canvas.width = w;
	height = canvas.height = h;
	document.body.appendChild(canvas);
}

// update mouse positions
window.addEventListener("mousemove", function(event) {
	/*var bounds = canvas.getBoundingClientRect();
	mouseX = event.x - bounds.left - scrollX;
	mouseY = event.y - bounds.top;
	mouseX /= bounds.width;
	mouseY /= bounds.height;
	mouseX *= width;
	mouseY *= height;*/
	
	mouseX = event.x;
	mouseY = event.y;
	console.log(mouseX, mouseY);
});

// button class
function Button(label, x, y, rad, width, height, draw, change, func, font, col1, col2) {
	this.l = label;
	this.x = x;
	this.y = y;
	this.r = r;
	this.maxR = this.r + 5;
	this.recR = this.r;
	this.w = w;
	this.maxW = this.w + 5;
	this.recW = this.w;
	this.h = h;
	this.d = d;
	this.c = c;
	this.f = func;
	this.font = font;
	this.c1 = col1;
	this.c2 = col2;
	
	// mouseOver function
	this.mouseOver = function() {
		// rect stuff
		if(this.r == null || this.r == undefined) {
			if(mouseX >= this.x - this.w/2 && mouseX <= this.x + this.w/2 && mouseY >= this.y - this.h/2 && mouseY <= this.y + this.h/2) {
				return true;
			} else {
				return false;
			}
		} else {
			if(Math.sqrt((this.x - mouseX) * (this.x - mouseX) + (this.y - mouseY) * (this.y - mouseY)) <= this.r) {
				return true;
			} else {
				return false;
			}
		}
	};
	
	// button visuals
	this.render = function() {
		if(this.r !== null && this.r !== undefined) {
			if(this.d == scene || scene == undefined || scene == null) {
				if(this.mouseOver()) {
					ctx.beginPath();
					ctx.fillStyle = this.c2;
					ctx.strokeStyle = this.c1;
					if(this.r < this.maxR) {
						this.r++;
					}
					
					// button body
					ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
					ctx.fill();
					ctx.arc();
					ctx.fillStyle = this.c1;
					ctx.font = this.font;
					ctx.textAlign = "center";
					ctx.textBaseLine = "middle";
					ctx.fillText(this.l, this.x, this.y, this.w - 2);
					
				} else{
					ctx.beginPath();
					ctx.fillStyle = this.c1;
					ctx.strokeStyle = this.c2;
					if(this.r < this.maxR) {
						this.r++;
					}
					
					// button body
					ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
					ctx.fill();
					ctx.arc();
					ctx.fillStyle = this.c2;
					ctx.font = this.font;
					ctx.textAlign = "center";
					ctx.textBaseLine = "middle";
					ctx.fillText(this.l, this.x, this.y, this.w - 2);
				}
			}
		}
	};
}

// detect mouse clicks
function listen_for_click(func) {
	window.addEventListener("click", function() {
		func();
	});
}

function animate() {
	window.requestAnimationFrame(animate);
}
