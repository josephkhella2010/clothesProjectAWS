import { useEffect, useState } from "react";
import styles from "../loginPage.module.css";
import type { UserType } from "../../../helps/InterfacesType";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store/Store";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import {
  setUsersData,
  setToken,
  setSingleUser,
} from "../../../SliceReducers/UserReducer";
export default function LoginSection() {
  const { userData } = useSelector((state: RootState) => state.UserDataStore);
  const singleUserFromStorage = JSON.parse(
    localStorage.getItem("user") || "{}"
  );
  const dispatch = useDispatch();
  const [userInfo, setuserInfo] = useState<UserType>({
    username: "",
    password: "",
  });
  const tokenFromStorage = localStorage.getItem("token");
  useEffect(() => {
    if (tokenFromStorage) {
      dispatch(setToken(tokenFromStorage));
    }
  }, [dispatch, tokenFromStorage]);
  async function fetchUser() {
    try {
      const response = await axios.get(
        "https://dg98ub8cgd.us-east-1.awsapprunner.com/api/users"
      );
      const { users } = response.data;
      dispatch(setUsersData(users));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUser();
  }, [dispatch]);

  /*  */
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const existUser = userData.find(
      (user) =>
        user.email === userInfo.email || user.username === userInfo.username
    );
    if (!existUser) {
      toast.error("user is not found");
      return;
    }
    if (!userInfo.username || !userInfo.password) {
      toast.error("please fill all fields");
      return;
    }
    try {
      const response = await axios.post(
        "https://dg98ub8cgd.us-east-1.awsapprunner.com/api/loginUser",
        userInfo
      );
      const { user, token } = response.data;
      dispatch(setToken(token));
      dispatch(setSingleUser(user));
      toast.success("user os logged in sucessfully");
      setuserInfo({
        username: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  }
  console.log(userData);
  console.log(singleUserFromStorage, "single user");
  console.log(tokenFromStorage);

  return (
    <div className={styles.formContainer}>
      <ToastContainer />
      {singleUserFromStorage && (
        <h2> welcome {singleUserFromStorage.username}</h2>
      )}
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
          placeholder="password"
          value={userInfo.password}
          onChange={(e) => {
            setuserInfo((prev) => ({
              ...prev,
              password: e.target.value,
            }));
          }}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
