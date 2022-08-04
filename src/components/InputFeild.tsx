import React,{useRef} from 'react'
import "./styles.css"

export type todoTypes = {
    todo:string,
    setTodo : React.Dispatch<React.SetStateAction<string>>
    handleAdd:(e: React.FormEvent)=>void
}

const InputFeild:React.FC<todoTypes>  = ({todo,setTodo,handleAdd})  => {
  
  const inputRef = useRef<HTMLInputElement>(null);
  
  return <form  className="input" onSubmit={(e) => {
                                    handleAdd(e);
                                    inputRef.current?.blur();
                                    }}>
      
      <input type="text"
            ref={inputRef}
            value={todo}
            onChange = {
                (e)=>setTodo(e.target.value)
            }
            placeholder='Enter a task' 
            className="input__box" 
        />
      <button className='input_submit' type="submit">Go</button>
  </form>
}

export default InputFeild