(function(){
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');

  let x = canvas.width/2;
  let y = canvas.height - 30;
  let dx = 2;
  let dy = -2;
  const ballRadius = 10;

  const paddleHeight = 10;
  const paddleWidth = 75;
  let paddleX = (canvas.width - paddleWidth) / 2;
  let rightPressed = false;
  let leftPressed = false;

  const brickRowCount = 3;
  const brickColumnCount = 5;
  const brickWidth = 75;
  const brickHeight = 20;
  const brickPadding = 10;
  const brickOffsetTop = 30;
  const brickOffsetLeft = 30;
  const bricks = [];

  let score = 0;
  let lives = 3;

  const drawScore = function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: " + score, 8, 20);
  };

  const drawLives = function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: " + lives, canvas.width - 65, 20);
  };

  const drawBall = function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
  };

  const drawPaddle = function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  };

  const setBricks = function drawBricks() {
    for (let r = 0; r < brickRowCount; r += 1) {
      bricks[r] = [];
      for (let c = 0; c < brickColumnCount; c += 1) {
        let offsetX = brickOffsetLeft + (c * (brickPadding + brickWidth));
        let offsetY = brickOffsetTop + (r * (brickPadding + brickHeight));
        bricks[r][c] = {};
        bricks[r][c].status = 'active';
        bricks[r][c].x = offsetX;
        bricks[r][c].y = offsetY;
      }
    }
  };

  const drawBricks = function drawBricks() {
    for (let r = 0; r < brickRowCount; r += 1) {
      for (let c = 0; c < brickColumnCount; c += 1) {
        if(bricks[r][c].status === 'active') {
          ctx.beginPath();
          ctx.rect(bricks[r][c].x, bricks[r][c].y, brickWidth, brickHeight);
          ctx.fillStyle = "#0095DD";
          ctx.fill();
          ctx.closePath();
        }
      }
    }
  };

  const collitionDetection = function collitionDetection() {
    for(let r = 0; r < brickRowCount; r += 1) {
      for(let c = 0; c < brickColumnCount; c += 1) {
        let b = bricks[r][c];
        if (b.status === 'active') {
          if(
            x + dx > b.x &&
            x + dx < b.x + brickWidth &&
            y + dy > b.y &&
            y + dy < b.y + brickHeight
          ) {
            bricks[r][c].status = 'inactive';
            dy = -dy;
            score += 1;

            if(score === (brickRowCount * brickColumnCount)) {
              alert('YOU WIN, CONGRATULATION!');
              document.location.reload();
            }
          }
        }
      }
    }
  };

  const draw = function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    drawBricks();
    drawScore();
    drawLives();
    collitionDetection()

    if(x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
      dx = -dx;
    }
    if(y + dy < ballRadius) {
      dy = -dy;
    } else if (y + dy > canvas.height - ballRadius) {
      if(x > paddleX && x < paddleX + paddleWidth) {
        dy = -dy;
      } else {
        lives -= 1;
        if(!lives) {
          alert('GAME OVER');
          document.location.reload();
        } else {
          x = canvas.width/2;
          y = canvas.height - 30;
          dx = 2;
          dy = -2;
          paddleX = (canvas.width - paddleWidth) / 2;
        }
      }
    }

    if(rightPressed && paddleX < canvas.width - paddleWidth) {
      paddleX += 7;
    } else if(leftPressed && paddleX > 0) {
      paddleX -= 7;
    }

    x += dx;
    y += dy;

    requestAnimationFrame(draw);
  };

  function keyDownHandler(e) {
    if(e.keyCode === 39) {
      rightPressed = true;
    } else if (e.keyCode === 37) {
      leftPressed = true;
    }
  };

  function keyUpHandler(e) {
    if(e.keyCode === 39) {
      rightPressed = false;
    } else if (e.keyCode === 37) {
      leftPressed = false;
    }
  };

  function mouseMoveHandler(e) {
    const relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
      paddleX = relativeX - paddleWidth/2;
    }
  };

  document.addEventListener('keydown', keyDownHandler, false);
  document.addEventListener('keyup', keyUpHandler, false);
  document.addEventListener('mousemove', mouseMoveHandler, false);

  setBricks();
  draw();
}());
