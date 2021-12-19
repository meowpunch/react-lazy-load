import React from 'react';
import './App.css';
import Grid from './component/Grid';
import Images from './asset/Images';
import LazyImage from "./component/LazyImage";


const App = () => {
    return (
        <div className="App">
            <Grid
                arr={Images.buildImages(18).map((url, i) => <LazyImage key={i} url={url}/>)}
                c={3}
            />
        </div>
    );
}

export default App;
