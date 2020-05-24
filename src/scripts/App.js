import 'normalize.css';
import '../styles/canvas.scss';
import Canvas from './Canvas';
import Triangle from './Triangle';

class App {
  static init() {
    const canvasElement = document.getElementById('low-poly-canvas');
    const canvasContext = canvasElement.getContext('2d');

    const shapeToBeDrawn = new Triangle(100, 100);
    const canvasObj = new Canvas(canvasElement, canvasContext, shapeToBeDrawn);

    window.addEventListener('resize', canvasObj.fitToWindow.bind(canvasObj));

    canvasObj.drawForms();
  }
}

App.init();
