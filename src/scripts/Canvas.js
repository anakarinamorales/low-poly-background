export default class Canvas {
  constructor(canvas, context) {
    this.htmlElement = canvas;
    this.context = context;
    this.fitToWindow();
  }

  fitToWindow() {
    this.htmlElement.width = window.innerWidth;
    this.htmlElement.height = window.innerHeight;
  }
}
