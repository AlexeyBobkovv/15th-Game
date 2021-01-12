import { createCells }  from './gameField'
import appConstans from './сonstans'
import { setEveryMove, showTime } from './upperTimerCounter';
import { addZero } from './upperTimerCounter'

const createIconHTML = (icon_name) => {
  return `<i class="material-icons">${icon_name}</i>`;
};

function createBottomBtns() {

    // нижняя часть для кнопок
    appConstans.fieldBottom.className = 'field_bottom';
    appConstans.main.append(appConstans.fieldBottom);

     // кнопка заново
    let againBtn = document.createElement('button');
    againBtn.className = 'down_btn';
    againBtn.innerHTML = createIconHTML("replay");
    appConstans.fieldBottom.append(againBtn);

    againBtn.addEventListener('click', () => {
        appConstans.cells = []

        createCells();
        localStorage.removeItem('btnToSave')

        appConstans.startGame = false;

        appConstans.numbersOfMoves = 0;
        setEveryMove()

        appConstans.sec = 0;
        appConstans.min = 0;
        
        appConstans.gameTime.innerHTML = `Time: ${addZero(appConstans.min)}<span>:</span>${addZero(appConstans.sec)}` ;
    }); 

    // кнопка сохранения

    let saveBtn = document.createElement('button');
    saveBtn.className = 'down_btn';
    saveBtn.innerHTML = createIconHTML("save");
    appConstans.fieldBottom.append(saveBtn);

    saveBtn.addEventListener('click', ()=> {    
      localStorage.setItem('image', appConstans.image);

      localStorage.setItem('cells', JSON.stringify(appConstans.cells));

      localStorage.setItem('moves', appConstans.numbersOfMoves);

      localStorage.setItem('time', JSON.stringify([appConstans.min, appConstans.sec]));

      localStorage.setItem('fieldSize', appConstans.fieldSize);

      localStorage.setItem('cellSize', appConstans.cellSize);

      appConstans.isSave = true;
      localStorage.setItem('btnToSave', appConstans.isSave)

      appConstans.startGame = false;
    });

    let numVisibleBtn = document.createElement('button');
    numVisibleBtn.className = 'down_btn';
    numVisibleBtn.innerHTML = createIconHTML("visibility_off");
    appConstans.fieldBottom.append(numVisibleBtn);

    numVisibleBtn.addEventListener('click', ()=> {  

      appConstans.numbersVis = !appConstans.numbersVis

      if(appConstans.numbersVis) {
        numVisibleBtn.innerHTML = createIconHTML("visibility");

        document.querySelectorAll('.cellnumber').forEach(num => num.style.display = 'flex');
      } else {
        numVisibleBtn.innerHTML = createIconHTML("visibility_off");

        document.querySelectorAll('.cellnumber').forEach(num => num.style.display = 'none');
      }
    });

    let voiceBtn = document.createElement('button');
    voiceBtn.className = 'down_btn';
    voiceBtn.innerHTML = createIconHTML("volume_off");
    appConstans.fieldBottom.append(voiceBtn);

    voiceBtn.addEventListener('click', ()=> { 

      appConstans.voice = !appConstans.voice

      if(appConstans.voice) {
        voiceBtn.innerHTML = createIconHTML("volume_up");
      } else {
        voiceBtn.innerHTML = createIconHTML("volume_off");
      }

    });

    let autoResolution = document.createElement('button');
    autoResolution.className = 'down_btn';
    autoResolution.innerHTML = createIconHTML("outlined_flag");
    appConstans.fieldBottom.append(autoResolution);

    autoResolution.addEventListener('click', ()=> { 

    });

    let chooseFieldBtn  = document.createElement('button');
    chooseFieldBtn.className = 'down_btn';
    chooseFieldBtn.innerHTML = createIconHTML("border_all");
    appConstans.fieldBottom.append(chooseFieldBtn);

    chooseFieldBtn.addEventListener('click', ()=> {  
      createChooseFieldBtns() 
    });
}

function createChooseFieldBtns() {
         
    document.querySelectorAll('.down_btn').forEach(size => size.style.display = 'none');

      for (let i = 3; i <= 8; i++) {
        
        let size = document.createElement('div');
        size.classList.add('down_size_btn');
        size.innerHTML = `${i} × ${i}`;
        
        appConstans.startGame = false;

        appConstans.fieldBottom.append(size);
    
        size.addEventListener('click', () => {

          for (let i = 0; i < 6; i++) {
            document.querySelector('.down_size_btn').remove();
          }

          document.querySelector('.down_back_btn').remove();

          document.querySelectorAll('.down_btn').forEach(size => size.style.display = 'flex');

          appConstans.fieldSize = size.innerText.slice(0, 1);

          appConstans.cells = [];
          createCells()
          document.querySelector('.emptycell').remove();

          appConstans.numbersOfMoves = 0;
          setEveryMove()

          appConstans.startGame = false;

          appConstans.sec = 0;
          appConstans.min = 0;

          appConstans.gameTime.innerHTML = `Time: ${addZero(appConstans.min)}<span>:</span>${addZero(appConstans.sec)}` ;
        });
      }

      let backBtn  = document.createElement('button');
      backBtn.className = 'down_back_btn';
      backBtn.innerHTML = createIconHTML("keyboard_return");
      appConstans.fieldBottom.append(backBtn);

      backBtn.addEventListener('click', () => {
        for (let i = 0; i < 6; i++) {
          document.querySelector('.down_size_btn').remove();
        }

        document.querySelector('.down_back_btn').remove();

        document.querySelectorAll('.down_btn').forEach(size => size.style.display = 'flex');
      });
}

export { createBottomBtns }