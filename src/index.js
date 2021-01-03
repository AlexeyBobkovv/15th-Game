// Import of styles
require('./styles/index.scss')

// Import of a JavaScript module
import { createUpperFunc, setEveryMove } from './js/upperTimerCounter'
import { createCells, createSave } from './js/gameField'
import { createBottomBtns } from './js/bottomBtns'
import  appConstans  from './js/сonstans'

createUpperFunc();
createBottomBtns();

if (localStorage.getItem('btnToSave') !== null) { 
    createSave();

    appConstans.sec = JSON.parse(localStorage.getItem('time'))[1];
    appConstans.min = JSON.parse(localStorage.getItem('time'))[0];

    appConstans.numbersOfMoves = JSON.parse(localStorage.getItem('moves'))
    setEveryMove();
} else {
    createCells();
}

