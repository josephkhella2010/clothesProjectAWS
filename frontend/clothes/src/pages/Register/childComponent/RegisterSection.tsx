import { useState } from "react";
import styles from "../registerPage.module.css";
import type { UserType } from "../../../helps/InterfacesType";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../../SliceReducers/UserReducer";
import type { RootState } from "../../../store/Store";
export default function RegisterSection() {
  const { userData } = useSelector((state: RootState) => state.UserDataStore);

  const dispatch = useDispatch();
  const [userInfo, setuserInfo] = useState<UserType>({
    username: "",
    email: "",
    password: "",
  });
  console.log(userData);
  console.log("hi");
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/addUser",
        userInfo
      );
      const { user } = response.data;
      dispatch(setUserData(user));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.formContainer}>
      <form action="" className={styles.formSection} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={userInfo.username}
          onChange={(e) => {
            setuserInfo((prev) => ({
              ...prev,
              username: e.target.value,
            }));
          }}
        />
        <input
          type="text"
          placeholder="Email"
          value={userInfo.email}
          onChange={(e) => {
            setuserInfo((prev) => ({
              ...prev,
              email: e.target.value,
            }));
          }}
        />
        <input
          type="text"
          placeholder="password"
          value={userInfo.password}
          onChange={(e) => {
            setuserInfo((prev) => ({
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
