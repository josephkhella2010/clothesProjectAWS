import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../SliceReducers/UserReducer";
import styles from "../navigation.module.css";
import { Link } from "react-router-dom";
import type { RootState } from "../../../store/Store";

export default function DesktopNavigation() {
  const { token } = useSelector((state: RootState) => state.UserDataStore);
  const dispatch = useDispatch();
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
          {token ? (
            <li
              className={styles.desktopNavigationLink}
              onClick={() => {
                dispatch(logoutUser());
              }}
            >
              Logout
            </li>
          ) : (
            <Link to="/login" className={styles.desktopNavigationLink}>
              Login
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
}
