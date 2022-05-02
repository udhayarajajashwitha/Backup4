import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Apidata(){

    const[userdata, setUserdata] = useState([''])
    const[usererror, setUsererror] = useState(false)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums/')
        .then(res => {
            setUserdata(res.data)
        })
        .catch(err => {
            setUsererror(true)
        })
    }, [])
    return(
        <div>
            
            {( userdata.length != 0 ? 
            userdata.map((a) =>  
                (
                    <div>
                        {a.title}
                    </div>
                )
             ) 
             :
              <span>No Data</span>

             )}

            {( usererror === true ? <span>error</span> : <span>No Data</span> )}

        </div>
    )
}