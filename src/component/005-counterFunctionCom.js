import React, { useState } from 'react'

export default function FunctioncounterCom(){

    const[count, itemCount] = useState(0);
    let decriment = () => {
        itemCount(a => a - 1 )
        // itemCount((a) => { return a - 1 })
    }
    let increment = () => {
        itemCount(a => a + 1 )
    }

    return(
        <div>
            { count===0 ? '' : <button onClick = {decriment}>-</button> }
            { count }
            <button onClick = {increment}>+</button>
        </div>
    )
}