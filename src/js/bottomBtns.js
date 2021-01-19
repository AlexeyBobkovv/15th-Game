import { createCells }  from './gameField'
import appConstans from './сonstans'
import { setEveryMove, addZero } from './upperTimerCounter'
import { addNewRecord, createRecordField } from './records'
import { keyListener } from './cellMove'

function createBottomBtns() {

    let names = [];

    // нижняя часть для кнопок
    appConstans.fieldBottom.className = 'field_bottom';
    appConstans.main.append(appConstans.fieldBottom);

     // кнопка заново

    let againBtn = document.createElement('img');
    names.push(againBtn)
    againBtn.className = 'down_btn';
    againBtn.src = ('./assets/images/bages/again.png');

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

        document.addEventListener('keyup', keyListener );
    }); 

    // кнопка сохранения
    let saveBtn = document.createElement('img');
    names.push(saveBtn)
    saveBtn.className = 'down_btn';
    saveBtn.src = ('./assets/images/bages/save.png');

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

    
    names.push(appConstans.numVisibleBtn)
    appConstans.numVisibleBtn.className = 'down_btn';
    appConstans.numVisibleBtn.src = ('./assets/images/bages/visibility_off.png');

    appConstans.numVisibleBtn.addEventListener('click', ()=> {  

      appConstans.numbersVis = !appConstans.numbersVis

      if(appConstans.numbersVis) {
        appConstans. numVisibleBtn.src = ('./assets/images/bages/visibility_on.png');

        document.querySelectorAll('.cellnumber').forEach(num => num.style.display = 'flex');
      } else {
        appConstans.numVisibleBtn.src = ('./assets/images/bages/visibility_off.png');

        document.querySelectorAll('.cellnumber').forEach(num => num.style.display = 'none');
      }
    });

    let voiceBtn = document.createElement('img');
    names.push(voiceBtn)
    voiceBtn.className = 'down_btn';
    voiceBtn.src = ('./assets/images/bages/sound_off.png');

    voiceBtn.addEventListener('click', ()=> { 

      appConstans.voice = !appConstans.voice

      if(appConstans.voice) {
        voiceBtn.src = ('./assets/images/bages/sound_on.png');
      } else {
        voiceBtn.src = ('./assets/images/bages/sound_off.png');
      }

    });

    let autoResolution = document.createElement('img');
    names.push(autoResolution)
    autoResolution.className = 'down_btn';
    autoResolution.src = ('./assets/images/bages/loss.png');

    autoResolution.addEventListener('click', ()=> { 
      appConstans.startGame = false

      for (let i = 1; i <= appConstans.fieldSize * appConstans.fieldSize - 1; i++) {
        appConstans.cells[i].element.style.left = `${(appConstans.cells[i].value - 1) % appConstans.fieldSize * appConstans.cellSize}%`;
        appConstans.cells[i].element.style.top = `${Math.trunc((appConstans.cells[i].value - 1) / appConstans.fieldSize) * appConstans.cellSize}%`;
      }

      appConstans.isFinished = true

      if(appConstans.isFinished){ 
        alert(`Ура! Вы решили головоломку за ${(appConstans.min)} минут ${(appConstans.sec)} секунд и за ${(appConstans.numbersOfMoves)} ходов`);

         addNewRecord()
         createRecordField()
      } 

      document.querySelectorAll('.cell').forEach(cell => {
        cell.style.pointerEvents = 'none';
      });
      
      document.removeEventListener('keyup', keyListener)
   
    });

    let chooseFieldBtn  = document.createElement('img');
    names.push(chooseFieldBtn)
    console.log(names)
    chooseFieldBtn.className = 'down_btn';
    chooseFieldBtn.src = ('./assets/images/bages/choose_field.png');

    chooseFieldBtn.addEventListener('click', ()=> {  
      createChooseFieldBtns() 
    });

    names.forEach(name => {
      let btnBg = document.createElement('div');
      btnBg.className = 'bg';
      btnBg.src = ('./assets/images/bages/Bg_fr_btn.png')
      appConstans.fieldBottom.append(btnBg);
      btnBg.append(name)
      
    });
}

function createChooseFieldBtns() {
         
    document.querySelectorAll('.down_btn').forEach(size => size.style.display = 'none');

    document.querySelectorAll('.bg').forEach(size => size.style.display = 'none');

      for (let i = 3; i <= 8; i++) {

        let btnBg = document.createElement('div');
        btnBg.className = 'bg_size';
        btnBg.src = ('./assets/images/bages/Bg_fr_btn.png')
        appConstans.fieldBottom.append(btnBg);

        let size = document.createElement('div');
        size.classList.add('down_size_btn');
        size.innerHTML = `${i} × ${i}`;
        
        appConstans.startGame = false;

        btnBg.append(size)
    
        size.addEventListener('click', () => {

          for (let i = 0; i < 6; i++) {
            document.querySelector('.down_size_btn').remove();

            document.querySelector('.bg_size').remove();
          }

          document.querySelector('.bg_size').remove();

          document.querySelectorAll('.down_btn').forEach(size => size.style.display = 'flex');

          document.querySelectorAll('.bg').forEach(size => size.style.display = 'flex');

          appConstans.fieldSize = size.innerText.slice(0, 1);

          appConstans.cells = [];
          createCells()
          document.querySelector('.emptycell').remove();

          appConstans.numbersOfMoves = 0;
          setEveryMove()

          appConstans.startGame = false;

          appConstans.numbersVis = false;

          appConstans.numVisibleBtn.src = ('./assets/images/bages/visibility_off.png');

          document.querySelectorAll('.cellnumber').forEach(num => num.style.display = 'none');

          appConstans.sec = 0;
          appConstans.min = 0;

          appConstans.gameTime.innerHTML = `Time: ${addZero(appConstans.min)}<span>:</span>${addZero(appConstans.sec)}` ;
        });
      }

      let btnBg = document.createElement('div');
      btnBg.className = 'bg_size';
      btnBg.src = ('./assets/images/bages/Bg_fr_btn.png')
      appConstans.fieldBottom.append(btnBg);

      let backBtn  = document.createElement('img');
      backBtn.className = 'down_back_btn';
      backBtn.src = ('./assets/images/bages/back.png');
      btnBg.append(backBtn);

      backBtn.addEventListener('click', () => {
        for (let i = 0; i < 6; i++) {
          document.querySelector('.down_size_btn').remove();

          document.querySelector('.bg_size').remove();
        }

        document.querySelector('.down_back_btn').remove();

        document.querySelector('.bg_size').remove();

        document.querySelectorAll('.down_btn').forEach(size => size.style.display = 'flex');

        document.querySelectorAll('.bg').forEach(size => size.style.display = 'flex');
      });

      document.addEventListener('keyup', keyListener );
}

export { createBottomBtns } 