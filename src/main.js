require('./index.html');
require('./main.css');

const fn = async (args) => {
    const {a, b, c} = args;
    await console.log(`hello world!! ${a}`);
    console.log(`after! ${b} ${c}`);
};

window.test = {
    method: fn
}

window.test.method({a: '1', b: '2', c: '3'})