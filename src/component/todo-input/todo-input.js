import React, { useState } from "react";
import { useDispatch } from "react-redux";

const TodoInput = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState();
  const handleChance = (event) => setNewTodo(event.target.value);
  const handleClick = () =>
    dispatch({
      type: "ADD_TODO",
      payload: {
        label: newTodo,
        id: Math.ceil(Math.random() * 100),
      },
    });

  return (
    <>
      <input value={newTodo} onChange={handleChance} type="text" />
      <button onClick={handleClick}>ADD TODO</button>
    </>
  );
};

export default React.memo(TodoInput);
