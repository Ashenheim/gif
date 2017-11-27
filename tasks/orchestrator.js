const chalk = require('chalk');
const createTimestamp = require('./util/create-timestamp');
const switchCase = require('./util/switch-case');


function log(name, message, type = 'log') {
    const getTypeOptions = switchCase({
        log: { color: 'magenta', prefix: '•' },
        error: { color: 'red', prefix: 'x' },
        start: { color: 'yellow', prefix: '+' },
        end: { color: 'green', prefix: '-' },
    });
    const options = getTypeOptions(type) || getTypeOptions('log');
    const color = chalk[options.color];

    process.stdout.write([
        color(options.prefix),
        chalk.grey(`[${createTimestamp()}]`),
        color(name),
        chalk.grey('-'),
        message,
    ].join(' '));
    process.stdout.write('\n');
}

async function triggerTask(task) {
    log(task.name, 'task started', 'start');
    const result = await Promise.resolve(task());
    log(task.name, 'task ended', 'end');
    return result;
}

const parallel = (...tasks) => async () => {
    const promises = tasks.map(triggerTask);
    const results = await Promise.all(promises);

    return results;
}

const series = (...tasks) => async function series() {
    const results = [];
    for (task of tasks) {
        const result = await triggerTask(task);
        results.push(result);
    }
    return results
}

module.exports = { log, parallel, series };
