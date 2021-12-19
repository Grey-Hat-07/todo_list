import logo from './logo.svg';
import './App.css';
import Head from "./compo/Head";
import Footer from "./compo/Footer";
import Todo from "./compo/Todo";
import React, { useState } from 'react';
import Add from "./compo/Add";



function App() {
  const onDelete = (todo) => {
    console.log("todo deleted",todo);
    setTodos(todos.filter((e)=>{
      return e !== todo;
    }
      
    ));
  }
  const addtodo = (title,desc) => {
    console.log("todo added",title,desc);
    let id=todos.length==0?1: todos[todos.length-1].id+1;
    const newTodo = {
      id:id,
      text: title,
      desc: desc
  }
  console.log("newTodo",newTodo);
  setTodos([...todos,newTodo]);
}
  const [todos, setTodos] = useState(
    [
      {
        id: 1,
        text: "Learn React",
        desc: "learn react within 24 hours",
        completed: true
      },
      {
        id: 2,
        text: "Learn Redux",
        desc: "learn redux within 24 hours",
        completed: false
      },
      {
        id: 3,
        text: "Learn React Router",
        desc: "learn react router within 24 hours",
        completed: false
      },
      {
        id: 4,
        text: "Learn React Hooks",
        desc: "learn react hooks within 24 hours",
        completed: false
      }
    ]);

  return (
    <>
      <Head title="Todo Work"/>
      <Todo list={todos} onDelete={onDelete}/>
      <Add AddTodo={addtodo}/>
      <Footer /> 
    </>
  );
}

export default App;
