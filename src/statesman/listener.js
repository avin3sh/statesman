import reader from "./reader";
import writer from "./writer";

const listenBroadcasts = () => {
  const bcState = new BroadcastChannel("MAIN");

  new BroadcastChannel("ADD_TODO").onmessage = (e) => {
    const state = reader();
    const todo = { text: e.data, completed: false };

    let newState = state;
    newState.todos.push(todo);

    writer(newState);

    bcState.postMessage(newState);
  };

  new BroadcastChannel("TOGGLE_TODO").onmessage = (e) => {
    const state = reader();
    const todoText = e.data;

    let newState = state;
    newState.todos = state.todos.map((todo) =>
      todo.text === todoText ? { ...todo, completed: !todo.completed } : todo
    );

    writer(newState);

    bcState.postMessage(newState);
  };

  new BroadcastChannel("SET_VISIBILITY_FILTER").onmessage = (e) => {
    const state = reader();
    const filter = e.data;

    let newState = state;
    newState.filter = filter;

    writer(newState);

    bcState.postMessage(newState);
  };
};

export default listenBroadcasts;
