import React from 'react'

export default function Listcomchild({useName}){
    return(
        <div>
            <p>{useName.title} {useName.userId} {useName.id}</p>
        </div>
    )
}