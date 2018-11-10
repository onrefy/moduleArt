function mapBetween(start,end,ratio){
    return start+(end-start)*ratio;
}

function randomFullDegree() {
    return Math.random() * Math.PI * 2;
}

function randomBetween(start,end){
	return  start+(end-start)*Math.random();
}