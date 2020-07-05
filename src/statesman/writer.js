const write = (state) => {
  const stateData = JSON.stringify(state);
  window.localStorage.setItem("state", stateData);
};

export default write;
