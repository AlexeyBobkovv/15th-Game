// Import of styles
require('./styles/index.scss')

// Import of a JavaScript module
import { createUpperFunc } from './js/upperTimerCounter'
import { createCells, createSave } from './js/gameField'
import { createBottomBtns } from './js/bottomBtns'

createUpperFunc();
createBottomBtns();

if (localStorage.getItem('btnToSave') !== null) { 
    createSave();
} else {
    createCells();
}