import React from "react";

type HeaderPropsTitle ={
    titleForHeader:string
}

export  const Header=(props:HeaderPropsTitle)=>{
    return(
        <>{props.titleForHeader}</>
    )
}