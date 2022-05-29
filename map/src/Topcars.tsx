import React from "react";

type TopCarsType = {
    title: string
    catalog: Array<TopCarsList>
}

type TopCarsList = {
    manufacturer: string,
    model: string
}

export const Topcars = (props: TopCarsType) => {
    return (

        <div>
            <h3>{props.title}</h3>
            <table>
                <tr>
                    <th>Manufacturer</th>
                    <th>Model</th>
                </tr>

                {props.catalog.map((el, index) => {
                    return <tr key={index}>
                        <th>{el.manufacturer}</th>
                        <td>{el.model}</td>
                    </tr>

                })}


            </table>

            {/*<ul>*/}
            {/*    {*/}
            {/*        props.catalog.map((el, index) => {*/}
            {/*            return <li>*/}
            {/*                <span>{el.manufacturer}</span>*/}
            {/*                <span> model: {el.model}</span>*/}
            {/*            </li>*/}
            {/*        })*/}
            {/*    }*/}
            {/*</ul>*/}
        </div>
    )
}

