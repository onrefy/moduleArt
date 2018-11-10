function line2pt(startPt, endPt) {
	line(startPt.x, startPt.y, endPt.x, endPt.y);
}
class Pt {
	constructor(x, y) {
		this.X = x;
		this.Y = y;
	}
	giveXY() {
		return [this.X, this.Y];
	}
	render() {
		point(x, y);
	}
}

function ptBetweenPt1ANDPt2(pt1, pt2, ratio) {
	return Pt(mapBetween(pt1.x, pt2.x, ratio),
		mapBetween(pt1.y, pt2.y, ratio));
}

class Line2 {
	constructor(startPt, endPt) {
		this.start = startPt;
		this.end = endPt;
		this.middle = ptBetweenPt1ANDPt2(this.start, this.end, 0.5);
	}
	render() {
		line2pt(this.start, this.end);
	}
	givePtOnLineRatio(ratio) {
		return Pt(this.start, this.end, ratio);
	}
	givePtDevidedByNum(num) {
		var pts = [];
		for (let i = 1; i < num + 1; i++) {
			pts.push(this.givePtOnLineRatio(i / (num + 1)));
			return (pts);
		}
	}
}
class Circle {
	constructor(center, radius) {
		this.center = center;
		this.radius = radius;
	}
	render() {
		ellipseMode(CENTER);
		ellipse(this.center.x,
			this.center.y,
			this.radius * 2,
			this.radius * 2);
	}
}

class Ellipse {
	constructor(center, radiusX, radiusY) {
		this.center = center;
		this.radiusX = radiusX;
		this.radiusY = radiusY;
	}
	render() {
		ellipseMode(CENTER);
		ellipse(this.center.x,
			this.center.y,
			this.radiusX * 2,
			this.radiusY * 2);
	}
}
class Rect {
	constructor(center, width, height) {
		this.center = center;
		this.width = width;
		this.height = height;
	}
	render {
		rectMode(CORNER);
		rect(this.center.x, this.center.y, this.width, this.height);
	}
}
