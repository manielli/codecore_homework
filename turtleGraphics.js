

class Turtle {


    constructor(x, y) {

        this.x = x;
        this.y = y;
        this.hasbeen = [[x, y]];
        this.direction = 'east';
    }

    forward(steps) {


        for (let i = 0; i < steps; i++) {
            switch (this.direction) {
                case 'east':
                    this.x += 1;
                    // this.y = y;
                    this.hasbeen.push([this.x, this.y]);
                    this.direction = 'east';
                    break;
                case 'north':
                    // this.x = x;
                    this.y += 1;
                    this.direction = 'north';
                    this.hasbeen.push([this.x, this.y]);
                    break;
                case 'west':
                    this.x -= 1;
                    // this.y = y;
                    this.direction = 'west';
                    this.hasbeen.push([this.x, this.y]);
                    break;
                default:
                    // this.x = x;
                    this.y -= 1;
                    this.direction = 'south';
                    this.hasbeen.push([this.x, this.y]);
                    break;
            }
        }
        return this;
    }

    left() {
        switch (this.direction) {
            case 'east':
                this.direction = 'north'
                break;
            case 'north':
                this.direction = 'west'
                break;
            case 'west':
                this.direction = 'south'
                break;
            default:
                this.direction = 'east'
                break;
        }
        return this;
    }

    right() {
        switch (this.direction) {
            case 'east':
                this.direction = 'south'
                break;
            case 'south':
                this.direction = 'west'
                break;
            case 'west':
                this.direction = 'north'
                break;
            default:
                this.direction = 'east'
                break;
        }
        return this;
    }

    allPoints() {
        console.log('The turtle has been to: ', this.hasbeen);
    }

    print() {
        let arr = this.hasbeen;
        console.log('The length of hasbeen array is ', arr.length);

        let arrX = [];
        let arrY = [];

        for (let i = 0; i < arr.length; i++) {
            arrX.push(parseInt(arr[i][0]));
            arrY.push(parseInt(arr[i][1]));
        }
        console.log(Math.abs(Math.max(...arrX)));
        console.log(Math.abs(Math.min(...arrX)));
        console.log(Math.abs(Math.max(...arrY)));
        console.log(Math.abs(Math.min(...arrY)));
        let gridX = Math.abs(Math.max(...arrX)) + Math.abs(Math.min(...arrX));
        let gridY = Math.abs(Math.max(...arrY)) + Math.abs(Math.min(...arrY));

        console.log(gridX);
        console.log(gridY);
        let arraySpaces = [];

        for (let l = 0; l < gridY+1; l++ ){
        arraySpaces[l] = Array.from({length: gridX+1}).fill(' ');
        }

        let output = {};
        for(let key = 0; key < gridY+1; key ++){
            output[`${key}`] = arraySpaces[key];  
        };

        // console.log(output);
        
            for ( let l = 0; l < arr.length ; l++){
                output[`${arr[l][0]}`][arr[l][1]] = '•';
            }
        
        console.log(output);

    }

};

const tedTheTurtle = new Turtle(0, 0);
// const samTheTurtle = new Turtle(1,1);
tedTheTurtle.forward(6).left().forward(6).left().forward(12).left().forward(6).left().forward(6).allPoints();
tedTheTurtle.print();
// samTheTurtle.forward(6).left().forward(6).left().forward(6).left().forward(6).allPoints();
// samTheTurtle.print();
// const samTheTurtle = new Turtle(2,3);
// const johnTheTurtle = new Turtle(5,5);