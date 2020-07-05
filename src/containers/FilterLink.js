import React, { useState, useEffect } from "react";

import { setVisibilityFilter } from "../statesman/broadcastChannels";
import reader from "../statesman/reader";
import Link from "../components/Link";

const FilterLink = ({ children, filter }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const state = reader();
    if (filter === state.filter) setActive(true);
  }, []);

  new BroadcastChannel("SET_VISIBILITY_FILTER").onmessage = (e) => {
    const stateFilter = e.data;
    if (filter === stateFilter) setActive(true);
    else setActive(false);
  };

  const setFilter = () => {
    setVisibilityFilter(filter);
  };

  return (
    <Link active={active} onClick={setFilter}>
      {children}
    </Link>
  );
};

export default FilterLink;
