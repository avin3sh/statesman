const read = () => {
  let state = window.localStorage.getItem("state");
  if (state) return JSON.parse(state);
  return {
    // default state
    todos: [],
    filter: "SHOW_ALL",
  };
};

export default read;