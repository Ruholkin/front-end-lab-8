import moment from 'moment'
import { Clock } from './clock/clock';
import './app.scss';

const clock = new Clock();
const container = document.querySelector('.app-wrapper');
container.appendChild(clock.canvasState.canvas);

setInterval(() => {
  clock.setTime({
    hour: moment().hours(),
    minute: moment().minutes(),
    second: moment().seconds()
  });
}, 1000);

