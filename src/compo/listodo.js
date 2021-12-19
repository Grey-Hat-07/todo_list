import React from 'react'

export default function listodo({todo,onDelete}) {
    return (
        <div>
            <div className="card">
                <h5 className="card-header">{todo.id}. {todo.text}</h5>
                <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text">{todo.desc}</p>
                    <button href="#" className="btn btn-danger" onClick={()=>onDelete(todo)}>Delete</button>
                </div>
            </div><br />
        </div>
    )
}
