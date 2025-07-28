import type { PropsType } from "./MobileNavigation";
import { Link } from "react-router-dom";
import styles from "../navigation.module.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../SliceReducers/UserReducer";
import type { RootState } from "../../../store/Store";
export default function MobileSideBar({ IsClickedHam }: PropsType) {
  const { token } = useSelector((state: RootState) => state.UserDataStore);
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.backSection}>
        <FaArrowLeftLong
          className={`${styles.backIcon} ${
            IsClickedHam ? styles.iconTransform : ""
          }`}
        />
        <p> Back</p>
      </div>

      <ul className={styles.MobileMenuList}>
        <li>
          <Link to="/aboutus">AboutUS</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          {token ? (
            <li
              onClick={() => {
                dispatch(logoutUser());
              }}
            >
              Logout
            </li>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
      </ul>
    </>
  );
}
