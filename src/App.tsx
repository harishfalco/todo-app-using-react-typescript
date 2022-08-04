import React, { useState } from 'react';
import './App.css';
import InputFeild from './components/InputFeild';
import {Todo} from "./components/Model"
import Todolist from './components/Todolist';

const  App : React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  

  const handleAdd = (e:React.FormEvent) : void=>{
    e.preventDefault();
    if( todos.length == 1){
      todos.push({id:Date.now(), todo , isDone : false})
      setTodos(todos)
    }
    if(todo){
      setTodos([...todos,{id:Date.now(), todo , isDone : false}])
    }
    setTodo("")

    console.log(todos);
    
  };
  return (
   <div className="App">
     <span className="heading">
       Taskify
     </span>
     <InputFeild todo={todo} setTodo={setTodo}  handleAdd = {handleAdd}/>
      <Todolist todos={todos} setTodos={setTodos}  />
   </div>
  );

}

export default App;
