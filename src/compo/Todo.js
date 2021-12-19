import React from 'react'
import Listodo from './listodo'

export default function todo(props) {
    return (
        <div className="container"><br /><br />
            <h1 className="text-center"> Todo works!</h1>
            <div className="row">
                {props.list.length === 0 ? <h1>Loading...</h1> :
                    props.list.map((todo) => (
                        <Listodo key={todo.id} todo={todo} onDelete={props.onDelete} />
                    ))
                }
            </div>
        </div>
    )
}
