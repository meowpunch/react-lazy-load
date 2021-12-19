import React from 'react';
import './App.css';
import Images from './constant/Images';


const Image = (url: string) => {
    return (
        <img src={url} alt="dummy"/>
    )
}


/*
    - chunk by col
    - spread them in Grid
 */
interface GridProps {
    arr: JSX.Element[]
    c: number
}

const chunk = <T, >(arr: T[], size: number) =>
    [...Array(Math.ceil(arr.length / size))].map((_, i) => arr.slice(i * size, i * size + size));

const Grid = (props: GridProps) => {
    const {arr, c} = props;

    const chunks: JSX.Element[][] = chunk(arr, c);

    return (
        <div>
            {chunks.map(c => <div>{c}</div>)}
        </div>
    )
}

const App = () => {
    return (
        <div className="App">
            <Grid
                arr={Images.buildImages(30).map(url => {
                    console.log(url)
                    return Image(url)
                })}
                c={3}
            />
        </div>
    );
}

export default App;
