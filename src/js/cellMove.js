import appConstans from './сonstans'
import { setEveryMove, } from './upperTimerCounter';
import { addNewRecord } from './records'

const sound = new Audio('/src/audio/movingcell.mp3');

function move(index) {
    const cell = appConstans.cells[index];
    console.log(cell)
    const emptyCell = appConstans.cells[0]

    const leftDiff = Math.abs(emptyCell.left - cell.left);
    const topDiff = Math.abs(emptyCell.top - cell.top);

    if(leftDiff + topDiff > 1) {return}
    
    cell.element.style.left = `${emptyCell.left * appConstans.cellSize}%`;
    cell.element.style.top = `${emptyCell.top * appConstans.cellSize}%`;

    emptyCell.element.style.left = `${cell.left * appConstans.cellSize}%`;
    emptyCell.element.style.top = `${cell.top * appConstans.cellSize}%`;

    const emptyLeft = emptyCell.left;
    const emptyTop = emptyCell.top;

    emptyCell.left = cell.left;
    emptyCell.top = cell.top;
    
    cell.left = emptyLeft;
    cell.top = emptyTop;

    const isFinished = appConstans.cells.every(cell => {
        
        return cell.value === cell.top * 4 + cell.left;
    });

    if (appConstans.voice) {
        setTimeout(() => {
            sound.play();
            console.log('right')
        }, 0);
    }

    appConstans.numbersOfMoves += 1; 
    setEveryMove()

    appConstans.startGame = true;

    if(isFinished){ 
        alert(`Ура! Вы решили головоломку за ${(appConstans.gameTime.innerHTML)} и ${(appConstans.numbersOfMoves)} ходов`);
        addNewRecord();
    }
}

function dragAndDrop(index) {
    let drop = 0;
    let end = 0;

    document.querySelectorAll('.cell').forEach(cell => {
        cell.setAttribute('draggable', 'false');
      });

    const cell = appConstans.cells[index];
    const emptyCell = appConstans.cells[0];

    const leftDiff = Math.abs(emptyCell.left - cell.left);
    const topDiff = Math.abs(emptyCell.top - cell.top);

    if(leftDiff + topDiff > 1) {return}

    cell.element.setAttribute('draggable', 'true');

    const dragStart = function () {
        setTimeout(() => {
            cell.element.classList.add('hide');
        }, 0)
        console.log('start')
    };

    const dragEnd = function () {
        console.log('end')
        cell.element.classList.remove('hide');

        ++end;

        if (end > 1) {
        return;
        }
    }

    const dragOver = function (e) {
        console.log('over')
       e.preventDefault();
    }

    const dragEnter = function (e) {
        console.log('enter')
        e.preventDefault();
        emptyCell.element.classList.add('hovered');
    }

    const dragLeave = function () {
        emptyCell.element.classList.remove('hovered');
    }
    
    const dragDrop = function () {  
        ++drop;

        if (drop > 1) {
        return;
        }

        emptyCell.element.classList.remove('hovered');

        console.log(emptyCell.left, emptyCell.top)

        cell.element.style.left = `${emptyCell.left * appConstans.cellSize}%`;
        cell.element.style.top = `${emptyCell.top * appConstans.cellSize}%`;

        emptyCell.element.style.left = `${cell.left * appConstans.cellSize}%`;
        emptyCell.element.style.top = `${cell.top * appConstans.cellSize}%`;

        console.log(emptyCell.left, emptyCell.top)
        
        const emptyLeft = emptyCell.left;
        const emptyTop = emptyCell.top;

        emptyCell.left = cell.left;
        emptyCell.top = cell.top;
    
        cell.left = emptyLeft;
        cell.top = emptyTop;

        const isFinished = appConstans.cells.every(cell => {
        
            return cell.value === cell.top * 4 + cell.left;
        });

        appConstans.numbersOfMoves += 1; 
        setEveryMove()

        appConstans.startGame = true;
    
        if(isFinished){ 
         alert(`Ура! Вы решили головоломку за ${(appConstans.gameTime.innerHTML)} и ${(appConstans.numbersOfMoves)} ходов`);
        }       
    }
    
    emptyCell.element.addEventListener('dragover', dragOver);
    emptyCell.element.addEventListener('dragleave', dragLeave);
    emptyCell.element.addEventListener('dragenter', dragEnter);
    emptyCell.element.addEventListener('drop', dragDrop);

    cell.element.addEventListener('dragstart', dragStart);
    cell.element.addEventListener('dragend', dragEnd);
}

export {move, dragAndDrop}