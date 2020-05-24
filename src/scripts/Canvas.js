export default class Canvas {
  constructor(canvas, context, shapeToBeDrawn) {
    this.htmlElement = canvas;
    this.context = context;
    this.shapeToBeDrawn = shapeToBeDrawn;
    this.fitToWindow();
  }

  fitToWindow() {
    this.htmlElement.width = window.innerWidth;
    this.htmlElement.height = window.innerHeight;
  }

  drawForms() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    this.context.clearRect(0, 0, windowWidth, windowHeight);
    this.context.beginPath();
    this.context.moveTo(10, 100);
    this.context.lineTo(10, 300);
    this.context.lineTo(300, 300);
    this.context.closePath();
    this.context.lineWidth = 1;
    this.context.strokeStyle = '#a8ffef';
    this.context.stroke();
  }
}
