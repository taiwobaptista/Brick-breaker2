
class Game{
  constructor(config={}){
      this.sceneConfig = config.sceneConfig
  this.bricksConfig = config.bricksConfig
  this.batConfig = config.batConfig
  this.ballConfig = config.ballConfig
}

  renderToDom(domElement){
    const brickShow = document.getElementById("myCanvas");
    const ctx = brickShow.getContext("2d");                                                                         
    ctx.clearRect(0, 0, domElement.width, domElement.height);  

      scene.show();
      ball.baller();
      bat.batt();
      ball.ballWallCollision();

      // const brickShow = document.getElementById("myCanvas");
    
       let x = 20;
       let y = 15;
      //const bricksList = () => [greenBricks, pinkBricks, orangeBricks];

      
      for (let i = bricksList.length-1; i >=0; i--) {
        for (let j= bricksList[i].length-1; j>=0; j--) {
          
            const bric = bricksList[i][j]
            bric.brickks(x, y)
           
            if ((ball.xDirection / 100) * brickShow.width > x && (ball.xDirection / 100) * brickShow.width < x + 70 &&
               (ball.yDirection / 100) * brickShow.height > y && (ball.yDirection / 100) * brickShow.height < y + 30) {
               ball.dy = -ball.dy;
           }
           
          //brick.brickks(x, y);
          x += 80;
        }
         y += 40;
         x = 20;

      }


      



       ball.ballWallCollision();
      //  ball.brickCollision(ball);
       requestAnimationFrame(this.renderToDom.bind(this));
    
  }

}

// ballWallCollision();




//class scene
class Scene {
  constructor(backgroundColor, width, height) {
    this.backgroundColor = backgroundColor;
    this.width = width;
    this.height = height;
  }
  show() {
    const sceneDisplay = document.getElementById("myCanvas");
    sceneDisplay.style.backgroundColor = this.backgroundColor;
    sceneDisplay.width = this.width;
    sceneDisplay.height = this.height;
  }
}

//class ball
class Ball {
  constructor(radius, color, xDirection, yDirection) {
    this.radius = radius;
    this.color = color;
    this.xDirection = xDirection;
    this.yDirection = yDirection;
    this.dx = 1;
    this.dy = -1;
  }

  baller() {
    const ballerShow = document.getElementById("myCanvas");
    var ctx = ballerShow.getContext("2d");
    ctx.beginPath();
    ctx.arc((this.xDirection / 100) * ballerShow.width,(this.yDirection / 100) * ballerShow.height, this.radius, 0, 2 * Math.PI );
    ctx.stroke();
    ctx.fillStyle = this.color;
    ctx.fill();
  }



ballWallCollision(){
  const ballerShow = document.getElementById("myCanvas");
  if((this.xDirection / 100) * ballerShow.width> ballerShow.width- this.radius || (this.xDirection / 100) * ballerShow.width - this.radius < 0)
  {
    this.dx = - this.dx;
  }


  if((this.yDirection / 100) * ballerShow.height < this.radius || (this.yDirection / 100) * ballerShow.height> ballerShow.height- this.radius){
    this.dy = - this.dy;
    
  }  
  this.xDirection += this.dx 
  this.yDirection += this.dy
}

}


 
                    


//class Bat
class Bat {
  constructor(width, height, color, xDirection, yDirection, curvature) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.xDirection = xDirection;
    this.yDirection = yDirection;
    this.curvature = curvature;
  }

  batt() {
    const batShow = document.getElementById("myCanvas");
    var ctx = batShow.getContext("2d");
    ctx.beginPath();
    ctx.rect(
      (this.xDirection / 100) * batShow.width,
      this.yDirection,
      this.width,
      this.height,
      this.color
    );
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

//Class Brick
class Brick {
  constructor(height, width, hardness, color) {
    this.color = color;
    this.height = height;
    this.width = width;
    this.hardness = hardness;
  }

  brickks(x, y) {
    const brickShow = document.getElementById("myCanvas");
    var ctx = brickShow.getContext("2d");
    ctx.beginPath();
    ctx.rect(x, y, 70, 30);
    ctx.fillStyle = this.color;
    ctx.fill();
  }


  //new mwethod for brick
 // brickCollision(ball){
    //  const brickShow = document.getElementById("myCanvas");
    

}

//   function renderScene() {



let scene = new Scene("#000000", 600, 600);
let ball = new Ball(15, "blue", 48.5, 87);
let bat = new Bat(100, 15, "darkred", 40, 540, 10);

let greenBricks = new Array(7).fill(new Brick(300, 70, 10, "#f61e61"));
let pinkBricks = new Array(7).fill(new Brick(300, 70, 10, "#adf802"));
let orangeBricks = new Array(7).fill(new Brick(300, 70, 10, "#ff6600"));

//data structure to represent brick arrangement in order
//   const bricksList = () => [greenBricks, pinkBricks, orangeBricks];

let bricksList = [greenBricks, pinkBricks, orangeBricks]
// function bricksList() {
//     [greenBricks, pinkBricks, orangeBricks]
//   }


const domElement = document.getElementById("myCanvas");
  const ctx = domElement.getContext("2d");

let game =new Game()
game.renderToDom(domElement);

