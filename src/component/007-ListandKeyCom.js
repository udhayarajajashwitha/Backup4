import React from 'react'
import Listcomchild from './008-ListComChild'

export default function Listcom(){
    const userName = ['Udhaya', 'Raja', 'Regan']
    const printName = userName.map((name, index) => <h1 key={index}>{index} {name}</h1>)
    const detail = [
        {
          "userId": 1,
          "id": 1,
          "title": "quidem molestiae enim"
        },
        {
          "userId": 1,
          "id": 2,
          "title": "sunt qui excepturi placeat culpa"
        },
        {
          "userId": 1,
          "id": 3,
          "title": "omnis laborum odio"
        }
    ]

    const getDetail = detail.map(name => <Listcomchild key={detail.id} useName = {name} /> )

    // key is not accessible

    return(
        <div>
            <h1>{getDetail}</h1>
            {/* <h1>{userName[0]}</h1>
            <h1>{userName[1]}</h1>
            <h1>{userName[2]}</h1> */}

            {/* {
                userName.map((name) => {
                    return (<h1>{name}</h1>)
                })
            } */}

            {printName}

        </div>
    )
}