export default {
    isSave: false,
    cells: [],
    numbersOfMoves: 0,
    sec: 0,
    min: 0,
    cellSize: 100,

    // DOM
    main: document.querySelector('#main'), // главное окно
    fieldTop: document.createElement('div'), // верхняя часть прил.
    gameTime: document.createElement('time'),
    pauseBtn: document.createElement('button'),
    moveCounter: document.createElement('div'),
    fieldBottom: document.createElement('div'), // нижняя часть для кнопок
    field: document.createElement('div'), // само поле
    againBtn: document.createElement('button'),
    saveBtn: document.createElement('button'),
    chooseFieldBtn: document.createElement('button'),
    voiceBtn: document.createElement('button')
};
    