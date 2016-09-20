export default (gifsArray) => gifsArray.map(({ image }, index) => ({
    key: index,
    image: `/i/${image}`,
    name: image
        .replace(/(\/)|(\-)/gi, ' ')
        .replace(/(?:.(?!\.))+$/gi, ''),
}));
