import appConstans from './сonstans'
import { addZero } from './upperTimerCounter'

function createRecordField() {

    appConstans.recordField.className = 'record';
    appConstans.recordField.innerHTML = 'Your records:'
    appConstans.game.append(appConstans.recordField);
    
    appConstans.recordField.style.height = `${(100 * appConstans.fieldSize + 150)}px`

    let recordRow = document.createElement('div');
    recordRow.className = 'recordRow';
    appConstans.recordField.append(recordRow) 

    let playerPlace = document.createElement('div');
    playerPlace.className = 'recordColumn'
    recordRow.append(playerPlace)
    playerPlace.innerHTML = `#`

    let timePlace = document.createElement('div');
    timePlace.className = 'recordColumn'
    recordRow.append(timePlace)
    timePlace.innerHTML = `Time`
    
    let movePlace = document.createElement('div');
    movePlace.className = 'recordColumn';
    recordRow.append(movePlace)
    movePlace.innerHTML = `Moves`

    let sizePlace = document.createElement('div');
    sizePlace.className = 'recordColumn';
    recordRow.append(sizePlace)
    sizePlace.innerHTML = `Size`

    if (localStorage.getItem('bestResults') !== null) {
        let results = JSON.parse(localStorage.getItem('bestResults'));
    
        if (results.length > 10) {
          while (results.length !== 10) {
            results.shift();
          }
        }
    
        for (let i = 0; i < results.length; i++) {
          let playerPlaceString = document.createElement('p');
          playerPlaceString.innerHTML = ` ${[i + 1]} `
          playerPlace.append(playerPlaceString);

          let timePlaceString = document.createElement('p');
          timePlaceString.innerHTML = `${addZero(results[i].time[0])}:${addZero(results[i].time[1])}`
          timePlace.append(timePlaceString);

          let movesPlaceString = document.createElement('p');
          movesPlaceString.innerHTML = `${results[i].moves}`
          movePlace.append(movesPlaceString);

          let fieldPlaceStrig = document.createElement('p');
          fieldPlaceStrig.innerHTML = `${results[i].fieldSize} × ${results[i].fieldSize}`
          sizePlace.append(fieldPlaceStrig);
        }
      }
}

function addNewRecord() {

    let resultObject = {};
    resultObject.moves = appConstans.numbersOfMoves;
    resultObject.time = [appConstans.min, appConstans.sec];
    resultObject.fieldSize = appConstans.fieldSize;

    if (localStorage.getItem('bestResults') !== null) {
      let resultsArray = JSON.parse(localStorage.getItem('bestResults'));
      resultsArray.push(resultObject);
      localStorage.setItem('bestResults', JSON.stringify(resultsArray));
    } else {
      let resultsArray = [];
      resultsArray.push(resultObject);
      localStorage.setItem('bestResults', JSON.stringify(resultsArray));
      console.log(resultsArray)
    }

}

export { createRecordField, addNewRecord }