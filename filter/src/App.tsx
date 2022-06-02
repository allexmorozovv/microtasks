import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";

export type FilterType = 'All' | 'Rubles' | 'Dollars'

function App() {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'Rubles', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'Rubles', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'Rubles', value: 50, number: ' v1234567890'},
    ])

    let [filter, setFilter] = useState<FilterType>('All')

    let currentMoney = money
    if (filter === 'Rubles') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Rubles')
    }
    if (filter === 'Dollars') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
    }


    const onClickFilteredHandler = (nameButton: FilterType) => {
        setFilter(nameButton)

    }

    return (

        <>
            <NewComponent
                onClickFilteredHandler={onClickFilteredHandler}
                money={currentMoney}
            />
        </>


    );
}

export default App;
