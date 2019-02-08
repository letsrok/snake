class Snake extends Elem{
    
    constructor(matrix, cords, course){
    		super(matrix, cords);
        this.course = course;
        this.alive = true;
        this.value = 'snake';
        this.score = 0;
    }
    
    move(){

    		if(!this.alive) {
    			return;
				}


				let head = this.cords[0].slice();

        switch(this.course){
            case 'right':
                head[0]++;
                break;
            case 'bottom':
								head[1]++;
            		break;
						case 'left':
								head[0]--;
								break;
						case 'top':
								head[1]--;
								break;
        }

        if(!this._checkAlive(head)) {
        	this.alive = false;
        	return;
				}

				let nextCell = this.matrix.getCell(head[0], head[1]);

				if(nextCell == 'fruit') {
					this.score++;
				} else if (nextCell == 'snake' || nextCell == 'wall') {
					this.alive = false;
					return;
				} else {
					let tail = this.cords.pop();
					this.matrix.setCell(tail[0], tail[1], '');
				}

        this.cords.unshift(head);
        this.matrix.setCell(head[0], head[1], 'snake');
    }

    _checkAlive(head) {
    	return head[0] > 0 && head[0] <= this.matrix.n &&
						 head[1] > 0 && head[1] <= this.matrix.m;
		}

}