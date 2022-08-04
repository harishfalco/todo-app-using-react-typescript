/* eslint-disable array-callback-return */
import React from 'react'
import "./styles.css"
import {Todo} from "./Model"
import SingleTodo from './SingleTodo';

interface props {
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Todolist: React.FC<props>  = ({todos,setTodos}) =>  {
  return (
   <div className="todos">
       <div>
       {
           todos.map((todo ,index)=>{
             return <SingleTodo  todos = {todos}  todo={todo} setTodos={setTodos} />
           })
       }
       </div>
   </div>
  )
}

export default Todolist