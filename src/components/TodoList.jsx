import React, { useEffect, useState } from 'react';
// import TodoItem from './TodoItem';
// import withLogger from './withLogger';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import withLogger from './WithLogger';
import Timer from './Timer';
import PreviousState from './PreviousState';


const TodoList = ({loading, clickbutton}) =>{
    
    const [todos, setTodos] = useState([]);
    const [completedTodo, setCompletedTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');  
    
    const addTodo = () => {
        if (newTodo.trim() !== '') {
          setTodos((prevTodos) => [...prevTodos, newTodo]);
          setNewTodo('');
        }
      };

   const completeTodo = (index) => {
    setTodos((prevTodos) => {
        const updatedTodos = [...prevTodos];
        setCompletedTodos((prevCompletedTodos) => [...prevCompletedTodos, prevTodos[index]]);
        updatedTodos.splice(index, 1);
        return updatedTodos;
        });
    };

    // console.log(`current state - ${loading}`);

    
    return(
        <div>
            <h1>To-do Tracker</h1>
            <h3>get the epic shit done</h3>
            <TodoForm newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
            <h3> Available to-dos</h3>
            <ul>
                {todos.map( (todo,index) => (
                    <TodoItem key={index} todo={todo} onComplete={() => completeTodo(index)} />

                    
                ))
            }
            </ul>
            
            <p>click to change the state from below</p>
            <button onClick={() => clickbutton(loading)}>
                {loading ? 'State - True' : 'State - False'}
            </button>

            <Timer />
            <PreviousState />
            
        </div>
        
    )
}

export default withLogger(TodoList);