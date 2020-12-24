import  appConstans  from './сonstans';
import {move, dragAndDrop} from './cellMove'

let localStCells = JSON.parse(localStorage.getItem('cells'));

// создание клеток document.
    function createCells() { 
    
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
        
        emptyCell.style.left = `${left * appConstans.cellSize}px`;
        emptyCell.style.top = `${top * appConstans.cellSize}px`
        
        appConstans.field.append(emptyCell);

        document.querySelectorAll('.cell').forEach(cell => {
            cell.remove();
        });

        let numbers = [...Array(15).keys()].sort(() => Math.random() - 0.5);

        for (let i = 1; i <= 15; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            const value = numbers[i - 1] + 1;
            cell.innerHTML = value;
    
            const left = i % 4;
            const top = (i - left) / 4;

            appConstans.cells.push({
                value: value, 
                left: left,
                top: top,
                element: cell
            })
    
            cell.style.left = `${left * appConstans.cellSize}px`;
            cell.style.top = `${top * appConstans.cellSize}px`

            appConstans.field.append(cell);

            cell.addEventListener('click', () => { 
                move(i);
            })  

            cell.addEventListener('mousedown', () => {
                dragAndDrop(i);
            });
        }
    console.log(appConstans.cells)
}
    
    function createSave() { 
        const emptyCell = document.createElement('div');
        emptyCell.className = 'emptycell';

        const left = localStCells[0].left;
        const top = localStCells[0].top;

        appConstans.cells.push({
            value: 0, 
            left: left,
            top: top,
            element: emptyCell
        })

        emptyCell.style.left = `${left * appConstans.cellSize}px`;
        emptyCell.style.top = `${top * appConstans.cellSize}px`

        appConstans.field.append(emptyCell);

        document.querySelectorAll('.cell').forEach(cell => {
            cell.remove();
        });

        for (let i = 1; i <= 15; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell'
            cell.innerHTML = localStCells[i].value

            const left = localStCells[i].left;
            const top = localStCells[i].top;

            appConstans.cells.push({
                value: localStCells[i].value, 
                left: left,
                top: top,
                element: cell
            })

            cell.style.left = `${left * appConstans.cellSize}px`;
            cell.style.top = `${top * appConstans.cellSize}px`;

            appConstans.field.append(cell);

            cell.addEventListener('click', () => {
                move(i);
            })  
     
            cell.addEventListener('mousedown', () => {
                dragAndDrop(i);
            });
        }
            localStorage.removeItem('btnToSave')
    }

    


export {createCells,createSave}