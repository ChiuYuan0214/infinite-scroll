import React, { Dispatch, SetStateAction, ChangeEvent } from "react";
import styles from "./Filter.module.css";

const Filter: React.FC<{
  setType: Dispatch<SetStateAction<string>>;
  setSort: Dispatch<SetStateAction<string>>;
  setDirection: Dispatch<SetStateAction<string>>;
  type: string;
  sort: string;
  direction: string;
}> = ({ setType, setSort, setDirection, type, sort, direction }) => {
  // function triggered by change event on select element.
  const selectChangeHandler = (
    type: string,
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    const val = event.target.value;
    // set the input value as respective state based on specified type.
    // query params keys: type, sort, direction.
    switch (type) {
      case "TYPE":
        setType(val);
        break;
      case "SORT":
        setSort(val);
        break;
      case "DIRECTION":
        setDirection(val);
        break;
      default:
        return;
    }
  };
  return (
    <form className={styles.filter}>
      <select
        value={type}
        name="type"
        onChange={selectChangeHandler.bind(null, "TYPE")}
      >
        <option value="all">All</option>
        <option value="public">Public</option>
        <option value="private">Private</option>
        <option value="forks">Forks</option>
        <option value="sources">Sources</option>
        <option value="member">Member</option>
        <option value="internal">Internal</option>
      </select>
      <select
        value={sort}
        name="sort"
        onChange={selectChangeHandler.bind(null, "SORT")}
      >
        <option value="created">Created</option>
        <option value="updated">Updated</option>
        <option value="pushed">Pushed</option>
        <option value="full_name">Full Name</option>
      </select>
      <select
        value={direction}
        name="direction"
        onChange={selectChangeHandler.bind(null, "DIRECTION")}
      >
        <option value="desc">Desc</option>
        <option value="asc">Asc</option>
      </select>
    </form>
  );
};

export default Filter;
