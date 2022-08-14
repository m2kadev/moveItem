
const canvas = document.getElementById('canvas'); 
const ctx = canvas.getContext('2d');

// Animation 2 - Character

const image = document.getElementById('source');

const player = {
    w: 50,
    h: 70,
    x: 28,
    y: 200,
    speed: 5,
    dx: 0,
    dy: 0
}

function drawPlayer() {
    ctx.drawImage(image, player.x, player.y, player.w, player.h);
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function newPos() {
   player.y += player.dy;
   player.x += player.dx;

   detectWalls();
}

function  detectWalls() {
    //Left wall
    if(player.x < 0) {
        player.x = 0;
    }

    //Right Wall
    if(player.x + player.w > canvas.width) {
        player.x = canvas.width - player.w;
    }

    //Top wall
    if (player.y < 0) {
        player.y = 0;
    }

    //Bottom wall
    if(player.y + player.h > canvas.height) {
        player.y = canvas.height - player.h;
    }


}

function update() {

    clear();
    drawPlayer();
    newPos();
    requestAnimationFrame(update);
}

function  moveUp() {
    player.dy = -player.speed;
}

function moveDown() {
    player.dy = +player.speed;
}

function moveLeft() {
    player.dx = -player.speed;
}

function moveRight() {
    player.dx = +player.speed;
}


function  keyDown(e) {
    if(e.key === 'ArrowRight' || e.key === 'Right') {
        moveRight();
    } else if(e.key === 'ArrowLeft' || e.key === 'Left') {
        moveLeft();
    } else if(e.key === 'ArrowUp' || e.key === 'Up') {
        moveUp();
    } else if(e.key === 'ArrowDown' || e.key === 'Down') {
        moveDown();
    }
}

function keyUp(e) {
    if(
        e.key === 'Right' ||
        e.key === 'ArrowRight' ||
        e.key === 'Left' ||
        e.key === 'ArrowLeft' ||
        e.key === 'Up' ||
        e.key === 'ArrowUp' ||
        e.key === 'Down' ||
        e.key === 'ArrowDown'
    ) {
        player.dx = 0;
        player.dy = 0;
    }
}

update();

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);




/*

const circle = {
    x: 200,
    y: 200,
    size: 30,
    dx: 5,
    dy: 4
}

function drawCircle() {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
    ctx.fillStyle = 'purple';
    ctx.fill();
}

function update() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    drawCircle();

    //change position
    circle.x += circle.dx;
    circle.y += circle.dy;

    // Detect side walls
    if(circle.x + circle.size > canvas.width || circle.x - circle.size < 0) {
        circle.dx *= -1; // circle.dx = circle.dx * -1
    }

    // detect top and bottom walls
    if (circle.y + circle.size > canvas.height || circle.y - circle.size < 0) {
        circle.dy *= -1; // circle.dx = circle.dx * -1
    }

    requestAnimationFrame(update);
}


update();

*/



/*
ctx.fillStyle = 'red';
ctx.fillRect(50, 50, 150, 100);

ctx.fillStyle = 'blue';
ctx.fillRect(230, 50, 150, 100);

ctx.lineWidth = 5
ctx.strokekStyle = 'green';
ctx.strokeRect(100, 200, 150, 100);

ctx.clearRect(55, 55, 140, 90);


ctx.font = '30px';
ctx.fillStyle = 'purple';
ctx.fillText("Hello Worl", 400, 50);

ctx.lineWidth = 1;
ctx.strokeStyle = 'red';
ctx.strokeText('Hello world', 400, 100); */

//Paths
/*
ctx.beginPath();
ctx.strokeStyle = 'blue ';
ctx.moveTo(20, 20);
ctx.lineTo(200, 20);
ctx.lineTo(90, 200);
ctx.closePath();
ctx.fillStyle = 'purple';
ctx.fill();

ctx.beginPath();
ctx.moveTo(260, 20);
ctx.lineTo(160, 200);
ctx.lineTo(360, 200)
ctx.closePath();
ctx.fillStyle = 'blue';
ctx.fill();


ctx.beginPath();
ctx.rect(400, 20, 100, 100);
ctx.fillStyle = 'teal';
ctx.fill(); */

/*

ctx.beginPath();

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

ctx.arc(centerX, centerY, 200, 0, Math.PI * 2);

//move to mouth
ctx.moveTo(centerX + 100 , centerY);

//draw mouth
ctx.arc(centerX, centerY, 100, 0, Math.PI, false);

//move to left eye
ctx.moveTo(centerX - 60, centerY - 80);

//draw left eye
ctx.arc(centerX - 80, centerY - 80, 20, 0, Math.PI * 2);

//move to right eye
ctx.moveTo(centerX + 100 , centerY - 80);
//Draw right eye
ctx.arc(centerX + 80 , centerY - 80, 20, 0, Math.PI * 2);



ctx.stroke(); 
*/













