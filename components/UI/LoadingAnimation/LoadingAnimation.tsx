import React from "react";

import styles from "./LoadingAnimation.module.css";

const LoadingSpinner: React.FC = () => {
  const BackDrop: React.FC = () => {
    return <div className={styles.backdrop}></div>;
  };

  const LoadingSign: React.FC = () => {
    return (
      <div className={styles.loading}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  };

  return (
    <>
      <BackDrop />
      <LoadingSign />
    </>
  );
};

export default LoadingSpinner;
