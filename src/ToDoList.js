import React from 'react';
import ToDo from './ToDo';

import './ToDoList.css';

export default function ToDoList({todos, toggleToDo}) {
    return (
        <div className='todoList'>
            {todos.map(todo=>{
                return <ToDo key={todo.id} todo={todo} toggleToDo={toggleToDo} />
            })}
        </div>
    )        
}