window.onload = function () {

	let div = document.querySelector('.fields');
	let matrix = new Matrix(div, 20, 20);
	matrix.create();

	let fruit = new Fruit(matrix, [[4,6], [8,9]]);
	fruit.show();

	let wall = new Wall(matrix, [[7,8], [8,8], [9,8]]);
	wall.show();

	let snake = new Snake(matrix, [[5,5], [4,5], [3,5]], 'right');

	snake.show();

	let random = new Random(matrix, 'fruct');
	random.create('fruit');

	let intervall = 500;

	function snakeMove() {
		let snakeLen = [];
		snakeLen.push(snake.cords.length);

		snake.move();

		snakeLen.push(snake.cords.length);

		if(snakeLen[0] !== snakeLen[1]) {
			random.create('fruit');
			intervall = intervall - 50;
			clearInterval(timer);
			timer =	setInterval(snakeMove, intervall);
		}

		let score = snake.score;
		document.querySelector('.score h2').innerHTML = `Ваш счет ${score}`;

		if(!snake.alive) {
			clearInterval(timer);
			document.querySelector('.score h2').innerHTML = `Пиздец`;
		}
	}

	let timer =	setInterval(snakeMove, intervall);

	document.addEventListener("keydown", event =>{

		if( (snake.course == "left" && event.key == 'ArrowRight') ||
			(snake.course == "right" && event.key == 'ArrowLeft') ||
			(snake.course == "top" && event.key == 'ArrowDown') ||
			(snake.course == "bottom" && event.key == 'ArrowUp')) {
			return false;
		}

		switch (event.key){
			case 'ArrowLeft':
				snake.course = 'left';
				break;
			case 'ArrowUp':
				snake.course = 'top';
				break;
			case 'ArrowRight':
				snake.course = "right";
				break;
			case 'ArrowDown':
				snake.course = "bottom";
				break;
		}
	})
};
