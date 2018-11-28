

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
        // console.log('The length of hasbeen array is ', arr.length);

        let arrX = [];
        let arrY = [];

        for (let i = 0; i < arr.length; i++) {
            arrX.push(parseInt(arr[i][0]));
            arrY.push(parseInt(arr[i][1]));
        }
        // console.log(Math.abs(Math.max(...arrX)));
        // console.log(Math.abs(Math.min(...arrX)));
        // console.log(Math.abs(Math.max(...arrY)));
        // console.log(Math.abs(Math.min(...arrY)));
        // let gridX = Math.abs(Math.max(...arrX)) + Math.abs(Math.min(...arrX));
        // let gridY = Math.abs(Math.max(...arrY)) + Math.abs(Math.min(...arrY));
        let gridX = Math.max(...arrX) - Math.min(...arrX);
        let gridY = Math.max(...arrY) - Math.min(...arrY);
        let gridXmax = Math.max(...arrX);
        let gridXmin = Math.min(...arrX);
        let gridYmax = Math.max(...arrY);
        let gridYmin = Math.min(...arrY);

        // console.log(gridXmin);
        // console.log(gridXmax);
        // console.log(gridYmin);
        // console.log(gridYmax);

        // console.log(gridX);
        // console.log(gridY);
        // let arraySpaces = [];

        // for (let l = 0 ; l < gridY+1; l++ ){
        // arraySpaces[l] = Array.from({length: gridX+1}).fill(' ');
        // }

        let output = {};
        if (gridYmin < 0) {
            for(let key = gridYmin ; key <= gridYmax; key ++){
                output[`${key}`] = Array.from({length: gridX}).fill(' ');  
            };
        } else {
            for(let key = 0 ; key <= gridYmax; key ++){
                output[`${key}`] = Array.from({length: gridX}).fill(' ');  
            };
        }

        // console.log(output);
        
            for ( let l = 0; l < arr.length ; l++){
                // console.log('Loop number:',l);
                output[`${arr[l][0]}`][arr[l][1]] = '•';
                // console.log(output);
            }
        
        console.log(output);
        console.log('****************************************');
        console.log('****************************************');
        console.log('****************************************');
        console.log('****************************************');
        console.log('****************************************\n');

            for ( let m = gridXmin; m <= gridXmax; m++) {
                    
                for ( let n = gridYmin; n <= gridYmax; n++) {
                    // console.log(output[`${m}`][n]);
                }
            }

    }

};

const tedTheTurtle = new Turtle(0, 0);
const samTheTurtle = new Turtle(2,3);
const johnTheTurtle = new Turtle(5,5);
// tedTheTurtle.forward(3).left().forward(3).left().forward(3).left().forward(3).allPoints();
// tedTheTurtle.print();
samTheTurtle.forward(3).left().forward(3).left().forward(3).left().forward(3).allPoints();
samTheTurtle.print();
johnTheTurtle.forward(5).left().forward(5).left().forward(5).left().forward(5).allPoints();
johnTheTurtle.print();