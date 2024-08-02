 import React from "react";
 export const List=(props)=>{
    const {data} = props;
    return <ol>
        {
            data.map((val, index)=>{
                return <li key={index} > {val} </li>
            })
        }
    </ol>
}