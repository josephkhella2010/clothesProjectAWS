import styles from "../navigation.module.css";
import { Link } from "react-router-dom";

export default function DesktopNavigation() {
  return (
    <div className={styles.DesktopNavigationContainer}>
      <h1> Logo</h1>
      <ul className={styles.DesktopMenuList}>
        <li>
          <Link to="/aboutus" className={styles.desktopNavigationLink}>
            AboutUS
          </Link>
        </li>
        <li>
          <Link to="/product" className={styles.desktopNavigationLink}>
            Product
          </Link>
        </li>
        <li>
          <Link to="/register" className={styles.desktopNavigationLink}>
            Register
          </Link>
        </li>
        <li>
          <Link to="/login" className={styles.desktopNavigationLink}>
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
}
