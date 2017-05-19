const spawn = require('child_process').spawn;

const runMocha = (cb) => {
    const args = ['build/tests', '--reporter=min'];
    const mocha = spawn('mocha', args, { stdio: 'inherit' });

    mocha.on('stdout', (msg) => {
        console.log(msg);
    });
};

const mochaMessenger = cb => (err, stats) => {
    runMocha(cb);
}

module.exports = {
    runMocha,
    mochaMessenger,
};
