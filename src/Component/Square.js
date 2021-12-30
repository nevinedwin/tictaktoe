import React from "react";
import '../Style/Square.css'


export const Square = ({mark, chooseBox})=>{
    return(
        <div className="square" onClick={chooseBox}>
            {mark}
        </div>
    )

}