import React from "react";
import { useState } from "react";
import '../App.css'
let nextId = 0;

 function Todolist (){
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('')
    
    const handleChange = (e)=>{
        setInput(e.target.value);
    }

     const addTask = () =>{
        if(input.trim()){
            setTasks([...tasks, {text:input, completed: false, id: nextId++}]);
            setInput('');
        }
     }
     const deleteTask = item =>{
        const newTasks = tasks.filter(task => task.id !== item.id);
        setTasks(newTasks);
    }
     const completeTodo = (id) => {
        setTasks(tasks.map((task) => task.id === id? {...task, completed: !task.completed} : task 
        )
    );
     }
     const totalTasks = tasks.length;
     const completedTask = tasks.filter((task) => task.completed === true).length;

    return ( 
        <div className="todolist-container">
            <h3>Big Todos</h3>
            <section>
                <div>
                    <p>Task Done</p>
                    <p>Keep it up</p>
                </div>
                <div className="circle">
                <h2>{completedTask}/{totalTasks}</h2>
                </div>
            </section>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className={task.completed? 'taskcompleted': ''} >
                        <span onClick={()=>completeTodo(task.id)} >{task.text}</span>
                        <button onClick={()=>deleteTask(task)}>delete</button>
                    </li>
                ))}     
            </ul>
            <input className="todo" type="text" value={input} onChange={handleChange}/>
            <button onClick={addTask} className="addButton">add</button>
     </div>
    ) 
}

export default Todolist;