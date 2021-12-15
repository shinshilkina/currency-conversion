import React from "react";
import Navigation from "./Navigation";
import styles from "./Menu.module.css";

function Menu() {
  return (
    <div className={styles.menu}>
      <h1>React SPA for currency conversion</h1>
      <Navigation />
    </div>
  );
}

export default Menu;
