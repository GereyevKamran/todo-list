import React from "react";
import "./App.css";

import AppHeader from "./component/app-header/app-header";
import Todos from "./component/todos/todos";
import TodoInput from "./component/todo-input/todo-input";

const App = () => {
  return (
    <div className="root__todo-app">
      <div>
        <AppHeader />
        <TodoInput />
        <Todos />
      </div>
    </div>
  );
};

export default App;
