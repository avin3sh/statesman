import React, { useState, useEffect } from "react";

import { toggleTodo } from "../statesman/broadcastChannels";
import reader from "../statesman/reader";

import TodoList from "../components/TodoList";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter((t) => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter((t) => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const VisibleTodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    reader();
  }, []);

  new BroadcastChannel("MAIN").onmessage = (e) => {
    const state = e.data;
    const filteredTodos = getVisibleTodos(state.todos, state.filter);
    setTodos(filteredTodos);
  };

  return <TodoList toggleTodo={toggleTodo} todos={todos} />;
};

export default VisibleTodoList;
