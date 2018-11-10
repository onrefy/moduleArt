function polylineFromPts(pts) {
	var num = pts.length;
	beginShape();
	for (let i = 0; i < num; i++) {
		vertex(pts[i].x,pts[i].y);
	}
	endShape();
}

function curveFromPts(pts){
	var num = pts.legnth;
	beginShape();
	for (let i=0;i<num;i++){
		curveVertex(pts[i].x,pts[i].y);
}
