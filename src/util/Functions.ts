const chunk = <T, >(arr: T[], size: number) =>
    [...Array(Math.ceil(arr.length / size))].map((_, i) => arr.slice(i * size, i * size + size));


// eslint-disable-next-line import/no-anonymous-default-export
export default {chunk};