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
        <input type="text" placeholder="Username" value={userData.username} 
        onChange={(e)=>{setUserData((prev)=>{...prev,username:e,target.value})}}
        />
        <input type="text" placeholder="Email" value={userData.email} />
        <input type="text" placeholder="password" value={userData.password} />
        <button>Register</button>
      </form>
    </div>
  );
}
