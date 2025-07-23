import type { PropsType } from "./MobileNavigation";
import { Link } from "react-router-dom";
import styles from "../navigation.module.css";
import { FaArrowLeftLong } from "react-icons/fa6";
export default function MobileSideBar({ IsClickedHam }: PropsType) {
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
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </>
  );
}
