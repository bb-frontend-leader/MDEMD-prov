function frameRenderer(element) {
  
  const drawCircle = (x, y, radius, color, alpha) => {
    //this.save();
    this.beginPath();
    this.arc(x, y, radius, 0, Math.PI * 2);
    this.fillStyle = color;
    this.globalAlpha = alpha;
    this.fill();
    this.closePath();
    //this.restore();
  };

  if(element.type==="circle") drawCircle(element.x, element.y, element.radius, "#444");
}

export default frameRenderer;
