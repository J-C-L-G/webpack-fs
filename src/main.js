require('./index.html');
require('./main.css');

const fn = async () => {
    await console.log('hello world!!');
    console.log('after!')
};

window.test = {
    method: fn
}