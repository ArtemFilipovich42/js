var name1 = prompt('enter the text!');
var cifr = name1.length;
var i = 0;
var sumA;
var sumB;
var sumE;
var sumO;
function aAll(sumA) {
    for (i = 0; i <= cifr; i++) {
        var a = name1[i]
        if (a === 'a') {
            sumA++
        }

    }
    return (console.log(sumA))
}
function bAll(sumB) {
    for (i = 0; i <= cifr; i++) {
        var b = name1[i]
        if (b === 'b') {
            sumB++
        }

    }
    return (console.log(sumB))
}

function oAll(sumO) {
    for (i = 0; i <= cifr; i++) {
        var o = name1[i]
        if (o === 'o') {
            sumO++
        }
    }
    return (console.log(sumO))
}
function eAll(sumE) {
    for (i = 0; i <= cifr; i++) {
        var e = name1[i]
        if (e === 'e') {
            sumE++
        }

    }
    return (console.log(sumA))
}





