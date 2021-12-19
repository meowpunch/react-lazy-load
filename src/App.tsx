import React from 'react';
import './App.css';
import Grid from './component/Grid';
import Images from './constant/Images';


const Image = (url: string) => {
    return (
        <img src={url} alt="dummy"/>
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
