import { useRef, useEffect } from "react";

import frameRenderer from "./frameRenderer";

const updateBall = (ballRef, index, size) => {
  const ball = ballRef.current[index];
  ball.x += ball.vx;
  ball.y += ball.vy;
  if (ball.x + ball.radius >= size.width) {
    ball.vx = -ball.vx;
    ball.x = size.width - ball.radius;
  }
  if (ball.x - ball.radius <= 0) {
    ball.vx = -ball.vx;
    ball.x = ball.radius;
  }
  if (ball.y + ball.radius >= size.height) {
    ball.vy = -ball.vy;
    ball.y = size.height - ball.radius;
  }
  if (ball.y - ball.radius <= 0) {
    ball.vy = -ball.vy;
    ball.y = ball.radius;
  }
};

function Canvas() {
  const canvasRef = useRef(null);
  const requestIdRef = useRef(null);
  const ballRef = useRef([
    { x: 50, y: 50, vx: 5, vy: 4, radius: 20, type: "circle", update: updateBall },
    { x: 50, y: 50, vx: 6, vy: 5, radius: 20, type: "circle", update: updateBall },
    { x: 50, y: 50, vx: 7, vy: 6, radius: 20, type: "circle", update: updateBall },
    { x: 50, y: 50, vx: 8, vy: 7, radius: 20, type: "circle", update: updateBall },
    { x: 50, y: 50, vx: 9, vy: 8, radius: 20, type: "circle", update: updateBall },
    { x: 50, y: 50, vx: 10, vy: 9, radius: 20, type: "circle", update: updateBall },
    { x: 50, y: 50, vx: 11, vy: 10, radius: 20, type: "circle", update: updateBall },
    { x: 50, y: 50, vx: 12, vy: 11, radius: 20, type: "circle", update: updateBall },
    { x: 50, y: 50, vx: 13, vy: 12, radius: 20, type: "circle", update: updateBall },
    { x: 50, y: 50, vx: 14, vy: 13, radius: 20, type: "circle", update: updateBall },
    { x: 50, y: 50, vx: 15, vy: 14, radius: 20, type: "circle", update: updateBall },
    { x: 50, y: 50, vx: 16, vy: 15, radius: 20, type: "circle", update: updateBall },
    { x: 50, y: 50, vx: 17, vy: 16, radius: 20, type: "circle", update: updateBall },
    { x: 50, y: 50, vx: 18, vy: 17, radius: 20, type: "circle", update: updateBall },
    { x: 50, y: 50, vx: 19, vy: 18, radius: 20, type: "circle", update: updateBall },
  ]);
  const size = { width: window.innerWidth, height: window.innerHeight };

  

  const renderFrame = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, size.width, size.height);
    ballRef.current.map((element, index)=>{
      element.update(ballRef, index, size);
    })
    ballRef.current.map((element, index)=>{
      frameRenderer.call(ctx, element);
    })
    
  };

  const tick = () => {
    if (!canvasRef.current) return;
    renderFrame();
    requestIdRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    requestIdRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(requestIdRef.current);
    };
  }, []);

  return <canvas {...size} ref={canvasRef} />;
}

export default Canvas;
