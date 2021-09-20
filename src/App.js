import React,{useState, useRef, useEffect} from 'react';
import ToDoList from './ToDoList';
import {v4 as uuidv4} from 'uuid';

import './App.css'

const LOCAL_STORAGE_KEY = 'toDoApp.todos';

function App() {
  const [toDos,setToDos] = useState([]);
  const todoNameRef = useRef();
  
  useEffect(()=>{
    const storedToDos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storedToDos) setToDos(storedToDos);
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(toDos))
  },[toDos])

  function toggleToDo(id){
    const newToDo = [...toDos];
    const todo = newToDo.find(todo=>todo.id===id);
    todo.complete = !todo.complete;
    setToDos(newToDo);
  }

  function handleAddToDo(e){
    const toDoItem = todoNameRef.current.value;
    if(toDoItem) {
      setToDos(prev=>{
        return [...prev,{id:uuidv4(), name: toDoItem, complete: false}];
      })
    }
    todoNameRef.current.value = null;    
  }

  function handleClearCompleted(){
    const newToDos = toDos.filter(todo=>!todo.complete);
    setToDos(newToDos);
  }

  return (
    <div className='app'>
      <ToDoList todos = {toDos} toggleToDo={toggleToDo} />    
      <div className='formElements'>
        <textarea ref={todoNameRef} />
        <button onClick={handleAddToDo}>Add</button>
        <button onClick={handleClearCompleted}>Clear Completed</button>
        <div>{toDos.filter(todo=>!todo.complete).length} left to do</div>
      </div>
      
    </div>
  );
}

export default App;
