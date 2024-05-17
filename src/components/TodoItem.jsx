import React from 'react';

const TodoItem = ({ todo, completedTodo,onComplete }) => {
  return (
    <> 
          
        <li>
        {todo}
        <button onClick={onComplete}>Complete</button>
        </li>
        
        {/* <h3> Completed to-dos</h3>
        <li>
        {completedTodo}
        <button onClick={onComplete}>Complete</button>
        </li> */}

    </>
  );
};

export default TodoItem;