export default (...classes) => classes
    .map((c) => {
        if (typeof c === 'object') {
            return Object.keys(c).filter(value => c[value]);
        }

        return c;
    })
    .filter(Boolean)
    .join(' ')