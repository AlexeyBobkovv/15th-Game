import appConstans  from './сonstans'
import { addNewRecord } from './records'

function showTime() {   
     setTime();

     setTimeout(showTime, 1000);
}

function setTime() { // добавить начало времени с нажатия по элементу
          if (appConstans.sec === 60) {
               appConstans.sec = 0;
               appConstans.min++;
          }
             
          appConstans.gameTime.innerHTML = `Time: ${addZero(appConstans.min)}<span>:</span>${addZero(appConstans.sec)}` ;
          
          if(appConstans.startGame) {
          appConstans.sec += 1; 
          }                   
}
   
function addZero(n) {
     return (parseInt(n, 10) < 10 ? '0' : '') + n;
}



function setEveryMove(){
     
     appConstans.moveCounter.innerHTML = `Moves: ${(appConstans.numbersOfMoves)}`

}

function createUpperFunc() {

     appConstans.fieldTop.className = 'field_top';
     appConstans.main.append(appConstans.fieldTop);
 
     appConstans.gameTime.className = 'gametime';
     appConstans.fieldTop.append(appConstans.gameTime);

     appConstans.pauseBtn.className = 'pausebtn';
     appConstans.fieldTop.append(appConstans.pauseBtn);
     appConstans.pauseBtn.addEventListener('click', () => {
          addNewRecord();
      }); 
 
     // moves
     appConstans.moveCounter.className = 'movecounter';
     appConstans.fieldTop.append(appConstans.moveCounter);
     
     appConstans.field.className = 'field';
     appConstans.main.append(appConstans.field);

     setEveryMove()
}

showTime() 

export {setEveryMove, createUpperFunc, showTime, addZero};

