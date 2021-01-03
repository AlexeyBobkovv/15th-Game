import { createCells }  from './gameField'
import appConstans from './сonstans'
import { setEveryMove, showTime } from './upperTimerCounter';

function createBottomBtns() {

    // нижняя часть для кнопок
    appConstans.fieldBottom.className = 'field_bottom';
    appConstans.main.appendChild(appConstans.fieldBottom);


    const createIconHTML = (icon_name) => {
        return `<i class="material-icons">${icon_name}</i>`;
    };

     // кнопка заново
    appConstans.againBtn.className = 'down_btn';
    appConstans.againBtn.innerHTML = createIconHTML("replay");
    appConstans.fieldBottom.appendChild(appConstans.againBtn);

    appConstans.againBtn.addEventListener('click', () => {
        appConstans.cells = []

        createCells();
        localStorage.removeItem('btnToSave')

        appConstans.startGame = false;

        appConstans.numbersOfMoves = 0;
        setEveryMove()

        appConstans.sec = 0;
        appConstans.min = 0;
        showTime()
    }); 

    // кнопка сохранения
    appConstans.saveBtn.className = 'down_btn';
    appConstans.saveBtn.innerHTML = createIconHTML("save");
    appConstans.fieldBottom.appendChild(appConstans.saveBtn);

    appConstans.saveBtn.addEventListener('click', ()=> {    
    //  localStorage.setItem('image', image);

      localStorage.setItem('cells', JSON.stringify(appConstans.cells));

      localStorage.setItem('moves', appConstans.numbersOfMoves);

      localStorage.setItem('time', JSON.stringify([appConstans.min, appConstans.sec]));

      localStorage.setItem('fieldSize', appConstans.fieldSize);

      localStorage.setItem('cellSize', appConstans.cellSize);

      appConstans.isSave = true;
      localStorage.setItem('btnToSave', appConstans.isSave)

      appConstans.startGame = false;
    });
     // кнопка вкл/выкл звук
    appConstans.voiceBtn.className = 'down_btn';
    appConstans.voiceBtn.innerHTML = createIconHTML("volume_off");
    appConstans.fieldBottom.appendChild(appConstans.voiceBtn);

    appConstans.voiceBtn.addEventListener('click', ()=> { 

      appConstans.voice = !appConstans.voice

      if(appConstans.voice) {
        appConstans.voiceBtn.innerHTML = createIconHTML("volume_up");
      } else {
        appConstans.voiceBtn.innerHTML = createIconHTML("volume_off");
      }

    });

     // кнопка выбора поля
    appConstans.chooseFieldBtn.className = 'down_btn';
    appConstans.chooseFieldBtn.innerHTML = createIconHTML("border_all");
    appConstans.fieldBottom.appendChild(appConstans.chooseFieldBtn);

    appConstans.chooseFieldBtn.addEventListener('click', ()=> {  
      
      document.querySelectorAll('.down_btn').forEach(size => size.style.display = 'none');

      for (let i = 3; i <= 8; i++) {
        
        let size = document.createElement('div');
        size.classList.add('down_size_btn');
        size.innerHTML = `${i} × ${i}`;
    
        appConstans.fieldBottom.appendChild(size);
    
        size.addEventListener('click', () => {


          document.querySelectorAll('.down_size_btn').forEach(size => size.style.display = 'none');

          document.querySelectorAll('.down_btn').forEach(size => size.style.display = 'flex');

          appConstans.fieldSize = size.innerText.slice(0, 1);
          console.log(appConstans.fieldSize)

          appConstans.cells = [];
          createCells()
          document.querySelector('.emptycell').remove();

          appConstans.numbersOfMoves = 0;
          setEveryMove()

          appConstans.startGame = false;

          appConstans.sec = 0;
          appConstans.min = 0;
          showTime()
        });
      }
    
  });
}


export { createBottomBtns }