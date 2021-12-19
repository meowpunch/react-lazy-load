const buildImages = (n: number) => [...Array(n)].map(_ => `https://picsum.photos/id/${Math.floor(Math.random() * n)}/300/300`);

const Images = {buildImages}

export default Images;
