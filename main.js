var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


//class Bat
class Bat {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = 80;
        this.h = 12;
    }

    show() {
        ctx.fillStyle = 'darkred';
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}



  //class scene
class Scene {
    constructor(backgroundColor, width, height){
        this.backgroundColor = backgroundColor;
        this.width = width;
        this.height = height;     
    }
    show(){
        const sceneDisplay = document.getElementById("myCanvas");
        sceneDisplay.style.backgroundColor = this.backgroundColor;
        sceneDisplay.width = this.width;
        sceneDisplay.height = this.height;
    }
}



  //class ball
  class Ball {
    constructor(radius, color, xDirection, yDirection){
      this.radius = radius;
      this.color = color;
      this.xDirection = xDirection;
      this.yDirection = yDirection;
    }

    baller(){
      const  ballerShow = document.getElementById("myCanvas");
      var ctx = ballerShow.getContext("2d");
      ctx.beginPath();
      ctx.arc((this.xDirection/100)*ballerShow.width,(this.yDirection/100)*ballerShow.height,this.radius,0,2*Math.PI);
      ctx.stroke();
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }




function renderScene() {
    scene.show();
    ball.baller();
    // bat.batt();
  }

  let scene = new Scene("#000000", 560, 600);
  let ball = new Ball(15, "blue", 50, 80);
//   let bat = new Bat(100, 15, "darkred", 40, 540, 10 );

  renderScene();


   



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
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h)
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
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 800, 800);
    bat.show();

    for (let i = 0; i < bricks.length; i++) {
        bricks[i].show();
    }
}

