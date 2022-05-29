import React from 'react';
import './App.css';
import {Button} from "./components/Button";

function App() {
    /*const onClickHandler=(name:string)=>{
        console.log(name)
    }

     const for1 =()=>{
         console.log(100200)
     }
     const for2 =(num:number)=>{
         console.log(num)
     }*/

    const button1 = (subscriber: string, age: number, address: string) => {
        console.log(subscriber + ' age:' + age)
    }
    const button2 = (subscriber: string, age: number) => {
        console.log(subscriber + ' age:' + age)
    }

    const button3 = () => {
        console.log('Im stupid button')
    }

    return (
        <div className="App">
            {/*<button onClick={(event)=>{console.log('Hello I am Vasya!')}}>MyYouTubeChannel-1</button>*/}
            {/*<button onClick={(event)=>onClickHandler('Vasya!')}>MyYouTubeChannel-2</button>
      <button onClick={(event)=>onClickHandler('Petya!')}>MyYouTubeChannel-3</button>
        <button onClick={for1}>1</button>
        <button onClick={(event)=>for2(100200)}>2</button>*/}
            {/*<button>MyYouTubeChannel-1</button>
        <button>MyYouTubeChannel-2</button>*/}
            <Button name={'MyYouTubeChannel-1'} callBack={() => button1('Im Vasya', 21, ' Live in NY')}/>
            <Button name={'MyYouTubeChannel-2'} callBack={() => button2('Im Petya', 33)}/>
            <Button name={'Stupid BATTON'} callBack={button3}/>
        </div>

    );
}

export default App;
