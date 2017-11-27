function createTimestamp() {
    const currentDate = new Date();
    const hh = currentDate.getHours();
    const mm = currentDate.getMinutes();
    const ss = currentDate.getSeconds();

    return `${hh}:${mm}:${ss}`;
}

module.exports = createTimestamp;
