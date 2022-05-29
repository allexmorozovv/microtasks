import React from "react";

type BodyPropsTitle={
    titleForBody:string
}

export const Body =(props:BodyPropsTitle)=>{
    return(
        <div>{props.titleForBody}</div>
    )
}