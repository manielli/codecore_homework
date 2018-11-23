

class Turtle {

    
    constructor (x,y) {

        this.x = x;
        this.y = y;
        this.hasbeen = [[x,y]];
        this.direction = 'east';
    }

    forward (steps) {

        for ( let i = 0 ; i < steps ; i++) {

            switch (this.direction) {
                case 'east':
                    this.x += 1;
                    this.y = y;
                    this.hasbeen = hasbeen.push([this.x,this.y]);
                    this.direction = 'east';
                    break;
                case 'north':
                    this.x = x;
                    this.y += 1;
                    this.direction = 'north';
                    this.hasbeen = hasbeen.push([this.x,this.y]);
                    break;
                case 'west':
                    this.x -= 1;
                    this.y = y;
                    this.direction = 'west';
                    this.hasbeen = hasbeen.push([this.x,this.y]);
                  break;
                default:
                    this.x = x;
                    this.y -= 1;
                    this.direction = 'south';
                    this.hasbeen = hasbeen.push([this.x,this.y]);
                  break;
              }

        }

        // for has been push into it all location that has been
        // return `${this.x},${this.y}`;
    
    }
    left () {
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
    }

    right () {

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
    }
    
    allPoints () {
        this.hasbeen = hasbeen;
        // pretty easy just using has been which already all the points stored
    }

    print () {

        // trickiest, I have to use the has been data and also x and y
        // printing a big grid, using some loops

    }

};

const tedTheTurtle = new Turtle(0,0);
const samTheTurtle = new Turtle(2,3);
const johnTheTurtle = new Turtle(5,5);


// console.log('Results',turtle1.forward(3));
