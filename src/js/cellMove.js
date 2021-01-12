import appConstans from './сonstans'
import { setEveryMove, } from './upperTimerCounter';
import { addNewRecord } from './records'

document.addEventListener('keyup', () => {
    const emptyCell = appConstans.cells[0];

    switch (event.key) {

        case 'ArrowUp':

        let downCell

        appConstans.cells.forEach(cell => {
    
            if(cell.top === emptyCell.top + 1 && cell.left === emptyCell.left) {
                downCell = cell  
            }
        });

        try {
            downCell.element.style.top = `${emptyCell.top * appConstans.cellSize}%`;

            emptyCell.element.style.top = `${downCell.top * appConstans.cellSize}%`;
   
            const emptyTop = emptyCell.top;
   
            emptyCell.top = downCell.top
   
            downCell.top = emptyTop;

            callSoundandCount();
        } catch (error) {
            return
        }
            break;

        case 'ArrowDown':
            
        let upCell

        appConstans.cells.forEach(cell => {
    
            if(cell.top === emptyCell.top - 1 && cell.left === emptyCell.left) {
                upCell = cell  
            }
        });

        try {
            upCell.element.style.top = `${emptyCell.top * appConstans.cellSize}%`;

            emptyCell.element.style.top = `${upCell.top * appConstans.cellSize}%`;
   
            const emptyTop = emptyCell.top;
   
            emptyCell.top = upCell.top
   
            upCell.top = emptyTop;

            callSoundandCount();
        } catch (error) {
            return
        }
            break;
        
        case 'ArrowRight':
            let leftCell

        appConstans.cells.forEach(cell => {
    
            if(cell.top === emptyCell.top && cell.left === emptyCell.left - 1) {
                leftCell = cell  
            }
        });

        try {
            leftCell.element.style.left = `${emptyCell.left * appConstans.cellSize}%`;

            emptyCell.element.style.left = `${leftCell.left * appConstans.cellSize}%`;
   
            const emptyRight = emptyCell.left;
   
            emptyCell.left = leftCell.left
   
            leftCell.left = emptyRight;

            callSoundandCount();
        } catch (error) {
            return
        }
            break;

        case 'ArrowLeft':
            let rightCell

        appConstans.cells.forEach(cell => {
    
            if(cell.top === emptyCell.top && cell.left === emptyCell.left + 1) {
                rightCell = cell  
            }
        });

        try {
            rightCell.element.style.left = `${emptyCell.left * appConstans.cellSize}%`;

            emptyCell.element.style.left = `${rightCell.left * appConstans.cellSize}%`;
   
            const emptyLeft = emptyCell.left;
   
            emptyCell.left = rightCell.left
   
            rightCell.left = emptyLeft;

            callSoundandCount();
        } catch (error) {
            return
        }
            break;
    }
});

function callSoundandCount() {
    appConstans.numbersOfMoves += 1; 
    setEveryMove()

    if (appConstans.voice) {
        var audio = new Audio();
        audio.src = './assets/audio/movingcell.mp3'; 
        audio.autoplay = true; 
    }  

    appConstans.startGame = true;

    const isFinished = appConstans.cells.every(cell => {
        if (cell.value === 0) {
          return true;
        }
        return cell.value - 1 === cell.top * appConstans.fieldSize + cell.left;
    });

    if(isFinished){ 
        alert(`Ура! Вы решили головоломку за ${(appConstans.min)} минут ${(appConstans.sec)} секунд за ${(appConstans.numbersOfMoves)} ходов`);
    }  
}

/* function move(index) {
    const cell = appConstans.cells[index];
    const emptyCell = appConstans.cells[0]
    console.log(cell, emptyCell.top)

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

    console.log(emptyCell.top)

    const isFinished = appConstans.cells.every(cell => {
        
        return cell.value === cell.top * 4 + cell.left;
    });

    if (appConstans.voice) {
        var audio = new Audio();
        audio.src = './assets/audio/movingcell.mp3'; 
        audio.autoplay = true; 
    }

    appConstans.numbersOfMoves += 1; 
    setEveryMove()

    appConstans.startGame = true;

    if(isFinished){ 
        alert(`Ура! Вы решили головоломку за ${(appConstans.gameTime.innerHTML)} и ${(appConstans.numbersOfMoves)} ходов`);
        addNewRecord();
    }
} */

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

        if (appConstans.voice) {
            var audio = new Audio();
            audio.src = './assets/audio/pop.mp3'; 
            audio.autoplay = true; 
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
            if (cell.value === 0) {
              return true;
            }
            return cell.value - 1 === cell.top * appConstans.fieldSize + cell.left;
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

export {dragAndDrop}