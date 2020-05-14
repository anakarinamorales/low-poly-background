import 'normalize.css';
import '../styles/canvas.scss';
import Canvas from './Canvas';

class App {
  static init() {
    const canvasElement = document.getElementById('low-poly-canvas');
    const canvasContext = canvasElement.getContext('2d');
    const canvasObj = new Canvas(canvasElement, canvasContext);

    window.addEventListener('resize', canvasObj.fitToWindow.bind(canvasObj));
  }
}

App.init();
