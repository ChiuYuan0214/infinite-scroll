import React from "react";

import Repo from "../../models/repo";
import Card from "./Card/Card";

import styles from "./CardList.module.css";

const CardList: React.FC<{ list: Repo[] }> = ({ list }) => {
  return (
    <ul className={styles.list}>
      {list.map((repo: Repo) => (
        <Card key={repo.name} repo={repo} />
      ))}
    </ul>
  );
};

export default CardList;
