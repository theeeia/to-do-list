import React, {useState} from 'react'
import styles from "./AddTodo.style.js"


export default function AddToDo({addTodo}) {
  let [todo, setTodo]= useState("") 
  return (
    <div>
        <input style={styles.inputField} 
        placeholder="Enter Todo" 
        onChange={(event)=>{setTodo(event.target.value)}} 
        value={todo}
        />
        <button style={styles.submitButton} 
        onClick={()=>{addTodo(todo);
        setTodo("")}}>
          Add
          </button>
    </div>
  )
}
