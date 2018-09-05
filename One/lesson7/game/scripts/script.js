const W = 60;
const H = 100;
const blockStyles = {
    width: W + 'px',
    height: H + 'px',
    position: 'absolute'
};

const colors = {
    red: {
        from: 255,
        to: 0
    },
    green: {
        from: 255,
        to: 0
    },
    blue: {
        from: 0,
        to: 255
    }
};

const lineSize = 6;

factory(lineSize, colors);

function createBlock(type, styles) {
    const block = document.createElement(type);
    
    for (let key in styles) {
        block.style[key] = styles[key];
    }
    
    return block;
}

function factory(size, colors) {
    for (let i = 0; i < size; i++) {
        const block = createBlock('div', blockStyles);
        block.style.top = H * i + 'px';
        block.style.left = W * i + 'px';
        block.style.backgroundColor = `rgb(
            ${colors.red.to},
            ${colors.green.to},
            ${colors.blue.to}
        )`;
        document.body.appendChild(block);
    }
}