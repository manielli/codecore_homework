//let args = process.argv[4];
let num = process.argv.slice(2);
let str = '';


function drawLine (num){
    let str = '';
    for (let i = 0; i < num; i++){      
        str += '━━━━━';
    }
    return str;
}
console.log(drawLine(num));

function drawTopBorder (num) {

}

function drawMiddleBorder (num) {

}

function drawBottomBorder (num) {

}

function drawBarsAround (num) {

}

function boxIt (str){


}

