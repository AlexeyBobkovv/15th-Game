export default {
    isSave: false,
    startGame: false,
    voice: false,
    cells: [],
    numbersOfMoves: 0,
    sec: 0,
    min: 0,
    cellSize: 25,
    fieldSize: 4,
    sizes: {
        3: [[...Array(8).keys()], 33.3, 250],
        4: [[...Array(15).keys()], 25, 200],
        5: [[...Array(24).keys()], 20, 150],
        6: [[...Array(35).keys()], 16.67, 100],
        7: [[...Array(48).keys()], 14.29, 50],
        8: [[...Array(63).keys()], 12.5, 0]
    },

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
    