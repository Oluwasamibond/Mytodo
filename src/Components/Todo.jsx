import { useState } from "react";
import TodoItem from "./TodoItem";
import styles from './todo.module.css'
import Footer from "./Footer";

function Todo(){
    const [todo,setTodo] = useState({name:"", done:false})
    const [todos,setTodos] = useState([])
   const completedTodos = todos.filter((todo)=>(
    todo.done
   )).length
   const totalTodos = todos.length
    function handleSubmit(e){
        e.preventDefault()
        setTodos([...todos,todo])
        setTodo({name:"", done:false})
    }
    const sortedTodos = todos.slice().sort((a,b)=>Number(a.done)-Number(b.done))
    return(
        <div>
            <form className={styles.todoForm} onSubmit={handleSubmit}>
               <div className={styles.todoContainer}>
                    <input className={styles.todoInput} 
                           onChange={(e)=>setTodo({name:e.target.value, done:false})} 
                           value={todo.name} type="text" 
                           placeholder="Enter your todo..."/>
                    <button className={styles.button}>Add</button>
               </div>
            </form>
            <div className={styles.todoList}>
                {sortedTodos.map((item)=>(
                    <TodoItem key={item.name} 
                              item={item} 
                              todos={todos} 
                              setTodos={setTodos}/>
                ))}
            </div>
                     <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
        </div>
    )
}

export default Todo;