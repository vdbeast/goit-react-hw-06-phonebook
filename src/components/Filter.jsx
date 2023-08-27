import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../redux/reducer";

const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
      dispatch(setFilter(e.target.value));
    };

  return (
    <div>
      <label className="label">Filter contacts:
        <input type="text" value={filter} onChange={handleFilterChange} />
      </label>
    </div>
    );
};

export default Filter;

