
const buildImages = (n: number) => [...Array(n)].map((_, i) => `https://picsum.photos/id/${i}/300/300`);

const Images = {buildImages}

export default Images;
