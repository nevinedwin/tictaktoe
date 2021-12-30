import React from "react";
import '../Style/Button.css'

export default function Button({value, selectButton}){
    return(
            <button className='selectButton' onClick={selectButton}>{value}</button>
    )
}