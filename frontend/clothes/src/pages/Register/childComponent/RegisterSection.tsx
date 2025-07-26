import { useState } from "react";
import styles from "../registerPage.module.css";
import type { UserType } from "../../../helps/InterfacesType";
export default function RegisterSection() {
  const [userData, setUserData] = useState<UserType>({
    username: "",
    email: "",
    password: "",
  });
  return (
    <div className={styles.formContainer}>
      <form action="" className={styles.formSection}>
        <input
          type="text"
          placeholder="Username"
          value={userData.username}
          onChange={(e) => {
            setUserData((prev) => ({
              ...prev,
              username: e.target.value,
            }));
          }}
        />
        <input
          type="text"
          placeholder="Email"
          value={userData.email}
          onChange={(e) => {
            setUserData((prev) => ({
              ...prev,
              email: e.target.value,
            }));
          }}
        />
        <input
          type="text"
          placeholder="password"
          value={userData.password}
          onChange={(e) => {
            setUserData((prev) => ({
              ...prev,
              password: e.target.value,
            }));
          }}
        />
        <button>Register</button>
      </form>
    </div>
  );
}
