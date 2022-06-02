import React from "react";
import {FilterType} from "./App";


type NewComponentType = {
    money: Array<currentMoneyType>
    onClickFilteredHandler: (nameButton: FilterType) => void
}
type currentMoneyType = {
    banknots: string,
    value: number,
    number: string
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <>
            <ul>
                {props.money.map((objFromMoneyArr, index) => {
                    return (

                        <li key={index}>
                            <span> {objFromMoneyArr.banknots} </span>
                            <span> {objFromMoneyArr.value} </span>
                            <span> {objFromMoneyArr.number} </span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: "35px"}}>
                <button onClick={() => props.onClickFilteredHandler('All')}>All</button>
                <button onClick={() => props.onClickFilteredHandler('Rubles')}>Rubles</button>
                <button onClick={() => props.onClickFilteredHandler('Dollars')}>Dollars</button>
            </div>

        </>
    )
}