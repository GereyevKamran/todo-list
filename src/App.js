import React from "react";
import "./App.css";

import AppHeader from "./component/app-header/app-header";
import SearchPanel from "./component/searc-panel/search-panel";
import TodoList from "./component/todo-list/todo-list";

function App() {
  const todoData = [
    { text: "Drink Coffee", important: false, id: 1 },
    { text: "Relax", important: true, id: 2 },
    { text: "Game Footbal", important: false, id: 3 },
  ];

  return (
    <div className="App">
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  );
}

export default App;
