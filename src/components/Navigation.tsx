import { NavLink } from "react-router-dom";
import { NAVIGATION_ITEMS } from "../tools/constants";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <ul className={styles.navigation}>
      {NAVIGATION_ITEMS.map((item) => {
        return (
          <li key={item.id}>
            <NavLink to={item.link}>
              <div
                className={styles.icon}
                style={{ backgroundPosition: item.iconPath }}
              />
              {item.text}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default Navigation;
