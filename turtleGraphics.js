

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
        let gridX = Math.max(...arrX) - Math.min(...arrX);
        let gridY = Math.max(...arrY) - Math.min(...arrY);

        console.log(gridX);
        console.log(gridY);

        let arrayDot = Array.from({length: gridX}).fill('   ');
        let output = {};
        for(let key = 0; key < gridY; key ++){
            output[`${key}`] = arrayDot;  
        };

        console.log(output);
        
        for (let k = 0; k < gridY; k++) {
            for (let j = 0; j < gridX; j++) {
                    for ( let l = 0; l < arr.length; l++){
                            output[arr[l][0]][arr[l][1]] = ' • ';
                    }
            }
        }

        console.log(output);



    }

};

const tedTheTurtle = new Turtle(0, 0);
tedTheTurtle.forward(6).left().forward(6).left().forward(6).left().forward(6).allPoints();
tedTheTurtle.print();
// const samTheTurtle = new Turtle(2,3);
// const johnTheTurtle = new Turtle(5,5);