function imgPixelsToArray(img){
	loadPixels();
	var pixelsArray = [];
	for (let i = 0;i<img.height;i++){
		var row =[];
		for (let j=0;j<img.width;j++){
			let loc = i*img.width+j;
			row.push(pixels[loc]);
		}
		pixelsArray.push(row);
	}
}