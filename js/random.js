class Random {
	constructor(matrix, type) {
		this.type = type;
		this.matrix = matrix;
	}

	create(tt){
		let x = Math.floor(Math.random() * (this.matrix.n ) + 1);
		let y = Math.floor(Math.random() * (this.matrix.m ) + 1);
		console.log(x,y);
		while(this.matrix.getCell(x, y) !== null) {
			x = Math.floor(Math.random() * (this.matrix.n ) + 1);
			y = Math.floor(Math.random() * (this.matrix.m ) + 1);
		}


		this.matrix.setCell(x, y, tt);

	}
}