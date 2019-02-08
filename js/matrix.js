class Matrix{

    constructor(elem, n = 20, m = 20){
        this.elem = elem;
        this.cells = [];
        this.n = n;
        this.m = m;
    }
    
    create(){
        for(let i = 0; i < this.n*this.m; i++){
            let div = document.createElement('div');

            if(i % this.m === 0) {
                div.classList.add('row-start');
            }

            this.elem.appendChild(div);
            this.cells[i] = '';
        }
    }
    
    getCell(x, y){
        let num = this._calcNum(x, y);
        return this.elem.children[num].getAttribute('data-game');
    }
    
    setCell(x, y, val){
        let num = this._calcNum(x, y);
        //this.cells[num] = val;
        this.elem.children[num].setAttribute('data-game', val);
    }
    

    _calcNum(x, y){

        return (y-1)*this.m + x - 1;
    }
}
