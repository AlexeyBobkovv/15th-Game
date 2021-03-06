import  appConstans  from './сonstans';
import { dragAndDrop    } from './cellMove'

// создание клеток document.
    function createCells() { 
        appConstans.cellSize = appConstans.sizes[appConstans.fieldSize][1]

        if(appConstans.fieldSize == 3) {
            appConstans.fieldTop.style.width = `${(520)}px`
            appConstans.fieldBottom.style.width = `${(731)}px`
        } else if(appConstans.fieldSize == 4) {
            appConstans.fieldTop.style.width = `${(455)}px`
            appConstans.fieldBottom.style.width = `${(731)}px`
        } else {
            appConstans.fieldTop.style.width = `${(100 * appConstans.fieldSize)}px`
            appConstans.fieldBottom.style.width = `${(140 * appConstans.fieldSize)}px`
        }

        appConstans.field.style.width = `${(100 * appConstans.fieldSize)}px`
        appConstans.field.style.height = `${(100 * appConstans.fieldSize)}px`

        appConstans.game.style.height = `${(appConstans.sizes[appConstans.fieldSize][2])}px`

        const emptyCell = document.createElement('div');
        emptyCell.className = 'emptycell';
        
        const left = 0;
        const top = 0;
        
        appConstans.cells.push({
        value: 0, 
        left: left,
        top: top,
        element: emptyCell
        })
        
        emptyCell.style.width = `${appConstans.cellSize}%`;
        emptyCell.style.height = `${appConstans.cellSize}%`        

        emptyCell.style.left = `${left * appConstans.cellSize}%`;
        emptyCell.style.top = `${top * appConstans.cellSize}%`
        
        appConstans.field.append(emptyCell);

        document.querySelectorAll('.cell').forEach(cell => {
            cell.remove();
        });

        let numbers = appConstans.sizes[appConstans.fieldSize][0].sort(() => Math.random() - 0.5);

        while (!checkResult(numbers)) {
        numbers = appConstans.sizes[appConstans.fieldSize][0].sort(() => Math.random() - 0.5);
        }

        function getRandomInt(max) {
            let number = Math.floor(Math.random() * Math.floor(max)) + 1;
            return number;
        }

         appConstans.image = `./assets/images/${getRandomInt(15)}.jpg`

        for (let i = 1; i <= appConstans.fieldSize * appConstans.fieldSize - 1; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            const value = numbers[i - 1] + 1;
            const num = document.createElement('p');
            num.className = 'cellnumber'
            num.innerHTML = value;
    
            const left = i % appConstans.fieldSize;
            const top = (i - left) / appConstans.fieldSize;

            appConstans.cells.push({
                value: value, 
                left: left,
                top: top,
                element: cell
            })
            
            cell.style.backgroundImage = `url(${appConstans.image})`;;
            cell.style.backgroundSize = appConstans.field.style.height;
        
            cell.style.width = `${appConstans.cellSize}%`;
            cell.style.height = `${appConstans.cellSize}%`;
        
            cell.style.left = `${left * appConstans.cellSize}%`;
            cell.style.top = `${top * appConstans.cellSize}%`;
        
            let imageOffsetLeft = `${100 / (appConstans.fieldSize - 1) * ((value - 1) % appConstans.fieldSize)}%`;
            cell.style.backgroundPositionX = imageOffsetLeft;
            let imageOffsetTop = `${100 / (appConstans.fieldSize - 1) * Math.trunc((value - 1) / appConstans.fieldSize)}%`;
            cell.style.backgroundPositionY = imageOffsetTop;

            appConstans.field.append(cell);
            cell.append(num);
             
            /*cell.addEventListener('click', () => { 
                move(i);      
            }) */
 
            cell.addEventListener('mousedown', () => {
                dragAndDrop(i); 
            });

        }
}

function checkResult(arr) {
    let result = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        result += arr.filter((mus, index) => mus < arr[i] && index < i).length;
      }
    }
  
    result += Math.floor((arr.indexOf(0) + 1) / appConstans.fieldSize);
  
    return (appConstans.fieldSize % 2 !== 0) ? result % 2 === 0 : result % 2 !== 0;
  }
    
    function createSave() { 
        let savedCellsLocation = JSON.parse(localStorage.getItem('cells'));
        let savedFieldSize = localStorage.getItem('fieldSize')
        let savedCellsSize = localStorage.getItem('cellSize')
        let savedImage = localStorage.getItem('image')
        appConstans.image = localStorage.getItem('image')

        appConstans.cellSize = appConstans.sizes[savedFieldSize][1]

        if(savedFieldSize == 3) {
            appConstans.fieldTop.style.width = `${(520)}px`
            appConstans.fieldBottom.style.width = `${(731)}px`
        } else if(savedFieldSize == 4) {
            appConstans.fieldTop.style.width = `${(455)}px`
            appConstans.fieldBottom.style.width = `${(731)}px`
        } else {
            appConstans.fieldTop.style.width = `${(100 * savedFieldSize)}px`
            appConstans.fieldBottom.style.width = `${(100 * savedFieldSize)}px`
        }

        appConstans.field.style.width = `${(100 * savedFieldSize)}px`
        appConstans.field.style.height = `${(100 * savedFieldSize)}px`

        appConstans.game.style.height = `${(appConstans.sizes[savedFieldSize][2])}px`

        const emptyCell = document.createElement('div');
        emptyCell.className = 'emptycell';

        const left = savedCellsLocation[0].left;
        const top = savedCellsLocation[0].top;

        appConstans.cells.push({
            value: 0, 
            left: left,
            top: top,
            element: emptyCell
        })

        emptyCell.style.left = `${left * savedCellsSize}%`;
        emptyCell.style.top = `${top * savedCellsSize}%`

        appConstans.field.append(emptyCell);

        document.querySelectorAll('.cell').forEach(cell => {
            cell.remove();
        });

        for (let i = 1; i <= savedFieldSize * savedFieldSize - 1; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell'
            const num = document.createElement('p');
            num.className = 'cellnumber'
            num.innerHTML = savedCellsLocation[i].value;

            const left = savedCellsLocation[i].left;
            const top = savedCellsLocation[i].top;

            appConstans.cells.push({
                value: savedCellsLocation[i].value, 
                left: left,
                top: top,
                element: cell
            })

            cell.style.left = `${left * savedCellsSize}%`;
            cell.style.top = `${top * savedCellsSize}%`;

            cell.style.backgroundImage = `url(${savedImage})`;;
            cell.style.backgroundSize = appConstans.field.style.height;
        
            cell.style.width = `${savedCellsSize}%`;
            cell.style.height = `${savedCellsSize}%`;
        
            cell.style.left = `${left * savedCellsSize}%`;
            cell.style.top = `${top * savedCellsSize}%`;
        
            let imageOffsetLeft = `${100 / (savedFieldSize - 1) * ((savedCellsLocation[i].value - 1) % savedFieldSize)}%`;
            cell.style.backgroundPositionX = imageOffsetLeft;
            let imageOffsetTop = `${100 / (savedFieldSize - 1) * Math.trunc((savedCellsLocation[i].value - 1) / savedFieldSize)}%`;
            cell.style.backgroundPositionY = imageOffsetTop;

            appConstans.field.append(cell);
            cell.append(num);

            /* cell.addEventListener('click', () => {
                move(i);
            }) */
     
            cell.addEventListener('mousedown', () => {
                dragAndDrop(i);
            });
        }
            localStorage.removeItem('btnToSave')
    }

    


export {createCells,createSave}