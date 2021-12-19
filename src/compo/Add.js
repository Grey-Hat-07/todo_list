import React,{useState} from 'react'

export default function Add(props) {
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState('');
    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert('Please fill all the fields');
        
        }
        props.AddTodo(title,desc);
    }
    return (
        <div>
            <h3 className="text-center">Add list</h3>
            <form className="container text-center" onSubmit={submit}>
                <div className="container col-md-4">
                    <input type="text" value={title}className="form-control" id="text" onChange={(e)=>setTitle(e.target.value)}
                     placeholder="todo-Title" aria-describedby="emailHelp" />
                </div><br />
                <div className="container col-md-4">
                    <textarea name="" value={desc} className="form-control" onChange={(e)=>setDesc(e.target.value)}
                    placeholder="description" id="" cols="15" rows="5"></textarea>
                </div><br />
                <div className="container">
                    <button type="submit" className="btn btn-primary">Submit</button></div>
            </form><br />
        </div>
    )
}
