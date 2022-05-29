import React from "react";

type FooterPropsTitle ={
    titleForFooter:string
}

export const Footer=(props:FooterPropsTitle)=>{
    return(
        <div>{props.titleForFooter}</div>
    )
}