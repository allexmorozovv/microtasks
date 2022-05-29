import React from 'react';
import './App.css';
import {Topcars} from "./Topcars";

function App() {
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'},
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]
    return (
        <div className="App">
            <Topcars title={'Hello cars'} catalog={topCars}/>
        </div>
    );
}

export default App;
