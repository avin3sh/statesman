const read = () => {
  return new Promise((resolve) => {
    new BroadcastChannel("MAIN").onmessage = (e) => {
      return resolve(e.data);
    };
    new BroadcastChannel("REQUEST_STATE").postMessage("GET_STATE");
  });
};

export default read;
