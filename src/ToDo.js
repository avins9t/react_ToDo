import React from 'react';

import './ToDo.css';

export default function ToDo({todo, toggleToDo}) {
    function handleToggle(){
        toggleToDo(todo.id);
    }
    return(
        <div class='eachToDo'>            
            <input type='checkbox' checked={todo.complete} onChange={handleToggle}/>
            {todo.name}
        </div>
    )
}