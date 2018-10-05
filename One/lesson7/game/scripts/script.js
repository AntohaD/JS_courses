const W = 60;
const H = 100;
let gameInstance = null;

// поместить функционал, который мы написали, в класс Game, 
// написать в нём конструктор и функции через нижнее подчёркивание.
// Все эти функции вызвать в конструкторе.В сам конструктор передать 
// при создании colors и lineSize.

class Game {
    constructor(lineSize, colors) {
        this.colors = colors;
        this.lineSize = lineSize;
        this._factory(lineSize, colors);

        // оформить код через паттерн Синглтон, чтобы сколько бы мы не вызывали new Game(), 
        // то у нас бы не создавалось новых экземпляров.

        if (!gameInstance) {
            gameInstance = this;
        }

        return gameInstance;
    }

    _createBlock(type, styles) {
        const block = document.createElement(type);

        for (let key in styles) {
            block.style[key] = styles[key];
        }

        return block;
    }

    _factory(size, colors) {
        let count = 0;
        for(let j = 0; j < size; j++) {
            
            for (let i = 0; i < size; i++) {
                const block = this._createBlock('div', blockStyles);
                block.style.left = `${W * i}px`;
                block.style.top = `${H * j}px`;

                block.style.backgroundColor = `rgb(
                ${(Math.abs(colors.red.from - colors.red.to) / (size * size - 1)) * (i * j + 1 + count)},
                ${(Math.abs(colors.green.from - colors.green.to) / (size * size - 1)) * (i * j + 1 + count)},
                ${(Math.abs(colors.blue.from - colors.blue.to) / (size * size - 1)) * (i * j + 1 + count)}
                )`;

                document.body.appendChild(block);
                count++;
            }
        }
        
    }
}

const blockStyles = {
    width: W + 'px',
    height: H + 'px',
    position: 'absolute',
};

const colors = {
    red: {
        from: 255,
        to: 0
    },
    green: {
        from: 100,
        to: 200
    },
    blue: {
        from: 200,
        to: 0
    }
};

const lineSize = 6;

const myGame = new Game(lineSize, colors);