import { clock } from './components/clock.js';
import { progressBar } from './components/progressBar.js';
import { progressBarData } from './data/progressbarData.js';


clock('#clock_birthday', '03-15')
progressBar('.left-column', progressBarData);