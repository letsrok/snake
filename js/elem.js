class Elem {

	constructor(matrix, cords, value) {
		this.matrix = matrix;
		this.cords = cords;
		this.value = value;
	}

	show() {
		for (let cord of this.cords) {
			this.matrix.setCell(cord[0], cord[1], this.value);
		}
	}

}