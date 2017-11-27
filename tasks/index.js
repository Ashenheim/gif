const { parallel, series } = require('./orchestrator');
const { startServer } = require('./server');


const serve = series(
    startServer,
)

serve();
