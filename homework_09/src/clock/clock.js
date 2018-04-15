import { CanvasState } from './canvasState';
import './clock.scss';

export class Clock {
  constructor(initialTime) {
    this.canvasState = new CanvasState();
  }

  setTime(time) {
    this.canvasState.drawClok(time);
  }
}