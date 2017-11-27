const switchCase = (cases, defaultCase = null) =>
    (key) => cases[key] || defaultCase;

module.exports = switchCase;
