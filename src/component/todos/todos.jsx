import React from 'react';
import { useDispatch, useSelector } from "react-redux";


const Todos = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);
    const handleClick = (id) =>
      dispatch({
        type: "DELETE_TODO",
        payload: id,
      });
  
    if (!todos || !todos.length) {
      return <p>No Todos</p>;
    }
    return (
      <ul >
        {todos.map((todo) => (
          <div>
            <li onClick={() => handleClick(todo.id)}>{todo.label}</li>
            <button onClick={() => console.log(`done ${todo.label}`)}>del</button>
          </div>
        ))}
      </ul>
    );
  };

  export default React.memo(Todos)