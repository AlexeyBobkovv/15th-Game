import { createCells }  from './gameField'
import appConstans from './сonstans'

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
    }); 

    // кнопка сохранения
    appConstans.saveBtn.className = 'down_btn';
    appConstans.saveBtn.innerHTML = createIconHTML("save");
    appConstans.fieldBottom.appendChild(appConstans.saveBtn);

    appConstans.saveBtn.addEventListener('click', ()=> {    
    //  localStorage.setItem('image', image);

      localStorage.setItem('cells', JSON.stringify(appConstans.cells));

    //  localStorage.setItem('numbersArray', JSON.stringify(numbers));

      localStorage.setItem('moves', appConstans.numbersOfMoves);

      localStorage.setItem('time', JSON.stringify([appConstans.min, appConstans.sec]));

    //  localStorage.setItem('fieldSize', fieldSize);

    //  localStorage.setItem('cellSize', cellSize);
      appConstans.isSave = true;
      localStorage.setItem('btnToSave', appConstans.isSave)
    });

     // кнопка вкл/выкл звук
    appConstans.voiceBtn.className = 'down_btn';
    appConstans.voiceBtn.innerHTML = createIconHTML("volume_off");
    appConstans.fieldBottom.appendChild(appConstans.voiceBtn);

     // кнопка выбора поля
    appConstans.chooseFieldBtn.className = 'down_btn';
    appConstans.chooseFieldBtn.innerHTML = createIconHTML("border_all");
    appConstans.fieldBottom.appendChild(appConstans.chooseFieldBtn);


}


export { createBottomBtns }