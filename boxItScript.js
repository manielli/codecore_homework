#!/usr/bin/env node

let args = process.argv;
let str = '';
let nameindex = [];
let longest = 0;

const StringExtras = {

    repeat: function repeat (str, num) {
        let strng = '';
        for (let i = 0; i < num; i++)
        {
        strng += str;
        }
        return strng;
    },
    
    
    rightPad: function rightPad (str, num) {
    
        if ( num <= str.length  ) return str; 
        const numberOfSpaces = num - str.length;
        return str + this.repeat(' ',numberOfSpaces);
    
    },
    
};

for ( let i = 0; i < args.length-2; i++) {
    nameindex[i] = args[i+2];
}

for ( let i = 0; i < args.length-2; i++) {
    longest = Math.max (longest,args[i+2].length);
}



function drawLine (longest){
    let str = '';
    for (let i = 0; i < longest+1; i++){      
        str += '━';
    }
    return str;
}

function drawTopBorder (longest) {
    str = '┏━'+drawLine(longest)+'━┓'+'\n';
    return str;
}

function drawMiddleBorder (longest) {
    str = '┣━'+drawLine(longest)+'━┫' + '\n';
    return str;
}

function drawBottomBorder (longest) {
    str = '┗━'+drawLine(longest)+'━┛';
    return str;
}

let i = 0;
function drawBarsAround (filledArgs, i) {
    
    str = '┃ ' + filledArgs[i] + ' ┃';
    return str;
}

function spaceFiller (nameindex,longest){

    let filledArgs = [];
    for (let i = 0; i < nameindex.length; i++){
        filledArgs[i] = ' ' + StringExtras.rightPad (nameindex[i],longest);
        
    }
    return filledArgs;

}

function boxIt (filledArgs){

    // console.log (drawTopBorder(longest),'\n');
    // for (let i = 0; i < filledArgs.length; i++) {
    // console.log (drawBarsAround(filledArgs,i),'\n');
    // console.log (drawMiddleBorder(longest),'\n');
    // }
    // console.log (drawBottomBorder(longest),'\n');

    let arr = [];
    for (let i = 0 ; i < filledArgs.length; i++) {
    arr[i] = drawBarsAround(filledArgs,i) + '\n';
    }

    return [drawTopBorder(longest),arr.join(drawMiddleBorder(longest)),drawBottomBorder(longest)].join('');
    
}

console.log(boxIt(spaceFiller(nameindex,longest), longest));