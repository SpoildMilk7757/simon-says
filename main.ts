function countdown () {
	
}
function music2 () {
    music.playMelody("C D E F G A B C5 ", 500)
    music.playMelody("C5 B A G F E D C ", 500)
}
let Started = 0
music2()
for (let index = 0; index < 2; index++) {
    for (let x = 0; x <= 8; x++) {
        for (let y = 0; y <= 4; y++) {
            led.toggle(x - y, y)
        }
        basic.pause(100)
    }
}
basic.showNumber(3)
basic.pause(1000)
basic.showNumber(2)
basic.pause(1000)
basic.showNumber(1)
basic.pause(1000)
basic.forever(function () {
	
})
