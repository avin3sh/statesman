const bcAddToDo = new BroadcastChannel("ADD_TODO");
const bcToggleTodo = new BroadcastChannel("TOGGLE_TODO");
const bcSetVisibilityFilter = new BroadcastChannel("SET_VISIBILITY_FILTER");

export const addTodo = (todoText) => {
  bcAddToDo.postMessage(todoText);
};

export const toggleTodo = (todoText) => {
  bcToggleTodo.postMessage(todoText);
};

export const setVisibilityFilter = (filter) => {
  bcSetVisibilityFilter.postMessage(filter);
};
