const canvas= document.getElementById("canvas");
const ctx = canvas.getContext('2d');

// // fill rect
// ctx.fillStyle = "red";
// ctx.fillRect(20, 20, 150, 100);
// ctx.fillStyle = "blue";
// ctx.fillRect(200, 20, 150, 100);

// // strockrect
// ctx.lineWidth = 5;
// ctx.strokeStyle = 'green';
// ctx.strokeRect(400, 20, 150, 100);

// // clearrect

// ctx.clearRect(25, 25, 140, 90);

// // filltext
// ctx.font = '30px arial'
// ctx.fillStyle = 'red';
// ctx.fillText("hello world",400, 50);

// ctx.lineWidth = 1;
// ctx.strokeStyle = 'green';
// ctx.strokeText("hello world",400, 100);

// paths

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(100, 200);
// // ctx.lineTo(50, 50);
// ctx.closePath();
// ctx.stroke();
// ctx.fillStyle = 'blue';
// ctx.fill();


// ctx.beginPath();
// ctx.moveTo(200, 50);
// ctx.lineTo(150, 200);
// ctx.lineTo(250, 200);
// ctx.closePath();
// ctx.stroke();


// // rectangal
// ctx.beginPath();
// ctx.rect(300, 50, 150, 100);
// ctx.fill();

// // arc

// const centerx=canvas.width / 2;
// const centery=canvas.height / 2;

// ctx.beginPath();
// ctx.arc(centerx , centery, 200, 0, Math.PI *2);
// // move to mouth
// ctx.moveTo(centerx + 100, centery)
// // draw mouth
//     ctx.arc(centerx, centery, 100, 0, Math.PI, false)

//     // move to left eye\
//     ctx.moveTo(centerx - 60, centery - 80 );

//     // draw left eye
//     ctx.arc(centerx -80, centery -80, 20, 0, Math.PI *2 )

//     // move to right eye
//     ctx.moveTo(centerx + 100, centery- 80)

//     // draw right eye
//     ctx.arc(centerx + 80, centery-80, 20, 0, Math.PI*2);
// ctx.stroke();


// const circle = {
//     x: 200,
//     y: 200,
//     size: 30,
//     dx: 5,
//     dy: 4
// };
// function drawCircle() {
//     ctx.beginPath();
//     ctx.arc(circle.x, circle.y,circle.size, 0, Math.PI * 2);
//     ctx.fillStyle = 'red';
//     ctx.fill();
// }


// function update(){
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawCircle();

//     // change postion
//     circle.x += circle.dx;
//     circle.y += circle.dy;

//     // detect wall
//     if(circle.x + circle.size > canvas.width || circle.x -circle.size < 0){
//         circle.dx *= -1; //circle.dx = circle.dx * -1
//     }

//     // detect top bottam wall
//     if(circle.y + circle.size > canvas.height || circle.y -circle.size < 0){
//         circle.dy *= -1;
//     }

//     requestAnimationFrame(update);
    

// }
// update();

// animation 2 - character

const image = document.getElementById("source");
const player ={
    w: 50,
    h: 50,
    x: 20,
    y: 200,
    speed: 5,
    dx: 0,
    dy: 0
};
function drawPlayer(){ 
    ctx.drawImage(image, player.x,player.y,player.w,player.h);

}

function clear(){
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
}
function newpostion(){
    player.x += player.dx;
    player.y += player.dy;
}

function update(){
    drawPlayer();

    newpostion();
    requestAnimationFrame(update);
}
function moveUp(){
    player.dy = -player.speed;
}
function moveDown() {
    player.dy = player.speed;
  }
  
  function moveRight() {
    player.dx = player.speed;
  }
  
  function moveLeft() {
    player.dx = -player.speed;
  }


function keyDown(e) {
    if (e.key === 'ArrowRight' || e.key === 'Right') {
      moveRight();
    } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
      moveLeft();
    } else if (e.key === 'ArrowUp' || e.key === 'Up') {
      moveUp();
    } else if (e.key === 'ArrowDown' || e.key === 'Down') {
      moveDown();
    }
  }

function keyUp(e){
    if (
        e.key == 'Right' ||
        e.key == 'ArrowRight' ||
        e.key == 'Left' ||
        e.key == 'ArrowLeft' ||
        e.key == 'Up' ||
        e.key == 'ArrowUp' ||
        e.key == 'Down' ||
        e.key == 'ArrowDown'
      ) {
        player.dx = 0;
        player.dy = 0;
      }
}

update();

document.addEventListener('keydown',keyDown);
document.addEventListener('keyup',keyUp);