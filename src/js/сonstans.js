export default {
    isSave: false,
    isFinished: false,
    startGame: false,
    voice: false,
    numbersVis: false,
    cells: [],
    image: ``,
    numbersOfMoves: 0,
    sec: 0,
    min: 0,
    cellSize: 25,
    fieldSize: 4,
    sizes: {
        3: [[...Array(8).keys()], 33.3, 925],
        4: [[...Array(15).keys()], 25, 925],
        5: [[...Array(24).keys()], 20, 925],
        6: [[...Array(35).keys()], 16.67, 925],
        7: [[...Array(48).keys()], 14.29, 925],
        8: [[...Array(63).keys()], 12.5, 925]
    },

    // DOM
    game: document.querySelector('#game'),
    main: document.createElement('main'), // главное окно
    fieldTop: document.createElement('div'), // верхняя часть прил.
    gameTime: document.createElement('time'),
    moveCounter: document.createElement('div'),
    fieldBottom: document.createElement('div'), // нижняя часть для кнопок
    field: document.createElement('div'), // само поле
    recordField: document.createElement('div'),
    size: document.createElement('div'),
    numVisibleBtn: document.createElement('img')
};
    