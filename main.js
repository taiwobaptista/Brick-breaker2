var canvas = document.getElementById("canv");
var c = canvas.getContext("2d");

class Bat {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = 80;
        this.h = 12;
    }

    show() {
        c.fillStyle = 'darkred';
        c.fillRect(this.x, this.y, this.w, this.h);
    }
}



    //ball area
    const ball = document.createElement("div")
    ball.classList.add('ball')



class Brick {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.w = 70;
        this.h = 40;
        this.color = color;
        this.visible = true;
    }
    show() {
        c.fillStyle = this.color
        c.fillRect(this.x, this.y, this.w, this.h)
    }
}


var bat;
var bricks = [];

var bx = 5;
var by = 120;

window.onload = function () {
    start();
    setInterval(update, 10);
}

function start() {
    bat = new Bat(400 - 50, 550);

    for (let i = 0; i < 30; i++) {
        if (by === 120) {
            brickColor = '#ff6600';
        } else if (by === 70) {
            brickColor = '#adf802';
        } else {
            brickColor = '#f61e61';
        }
        var b = new Brick(bx, by, brickColor);
        bricks.push(b);
        bx += 80;
        if (bx >= 740) {
            bx = 5;
            by -= 50;
        }
    }
}

function update() {
    c.fillStyle = 'black';
    c.fillRect(0, 0, 800, 800);
    bat.show();

    for (let i = 0; i < bricks.length; i++) {
        bricks[i].show();
    }
}

