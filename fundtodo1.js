// 1. Multiples of Three - but Not All
for (var i = -300; i <= 0; i += 3) {
    if (i == -3 || i == -6) {
        continue
    }
    console.log(i)
}

// 2. Printing Intgers with While
var num = 2000
while (num < 5281) {
    console.log(num)
    num++
}

// 3. Counting, the Dojo Way
for (var i = 1; i < 101; i++) {
    if (i % 5 == 0) {
        console.log("Coding")
        if (i % 10 == 0) {
            console.log("Dojo")
        }
    }
    else {
        console.log(i)
    }
}

// 4. Flexible Countdown
function flex_countdown(lowNum, highNum, mult) {
    for (highNum; highNum >= lowNum; highNum--) {
        if (highNum % mult == 0) {
            console.log(highNum)
        }
    }
}

flex_countdown(2, 9, 3)