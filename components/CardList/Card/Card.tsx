import React from "react";

import Repo from "../../../models/repo";

import styles from "./Card.module.css";

const Card: React.FC<{ repo: Repo }> = ({ repo }) => {
  const { url, id, name, date, downloadsUrl } = repo;

  // to add some readability.
  const displayedDate = date.replace("T", " ").replace("Z", "");

  return (
    <li className={styles.repo}>
      <p>ID: {id}</p>
      <p>NAME: {name}</p>
      <p>DATE: {displayedDate}</p>
      <div className={styles.links}>
        <a target="_blank" href={url}>
          REPO_URL
        </a>
        <a target="_blank" href={downloadsUrl}>
          DOWNLOADS_URL
        </a>
      </div>
    </li>
  );
};

export default Card;
