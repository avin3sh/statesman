const listenBroadcasts = () => {
  let state = {
    // initial state
    todos: [],
    filter: "SHOW_ALL",
  };

  const bcState = new BroadcastChannel("MAIN");

  new BroadcastChannel("REQUEST_STATE").onmessage = (e) => {
    bcState.postMessage(state);
  };

  new BroadcastChannel("ADD_TODO").onmessage = (e) => {
    const todo = { text: e.data, completed: false };

    let newState = state;
    newState.todos.push(todo);

    state = newState;

    bcState.postMessage(newState);
  };

  new BroadcastChannel("TOGGLE_TODO").onmessage = (e) => {
    const todoText = e.data;

    let newState = state;
    newState.todos = state.todos.map((todo) =>
      todo.text === todoText ? { ...todo, completed: !todo.completed } : todo
    );

    state = newState;

    bcState.postMessage(newState);
  };

  new BroadcastChannel("SET_VISIBILITY_FILTER").onmessage = (e) => {
    const filter = e.data;

    let newState = state;
    newState.filter = filter;

    state = newState;

    bcState.postMessage(newState);
  };
};

export default listenBroadcasts;
