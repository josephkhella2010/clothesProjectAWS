import { useEffect, useState } from "react";
import styles from "../loginPage.module.css";
import type { UserType } from "../../../helps/InterfacesType";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store/Store";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { setUsersData } from "../../../SliceReducers/UserReducer";
export default function LoginSection() {
  const { userData } = useSelector((state: RootState) => state.UserDataStore);

  const dispatch = useDispatch();
  const [userInfo, setuserInfo] = useState<UserType>({
    username: "",
    password: "",
  });
  /*    async function fetchUser() {
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
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!userInfo.username || !userInfo.email || !userInfo.password) {
      toast.error("please fill all fields");
      return;
    }
    const existUser = userData.find(
      (user) =>
        user.email === userInfo.email || user.username === userInfo.username
    );
    if (existUser) {
      toast.error("user is already exist");
      return;
    }

    try {
      const response = await axios.post(
        "https://dg98ub8cgd.us-east-1.awsapprunner.com/api/addUser",
        userInfo
      );
      const { user } = response.data;
      dispatch(setUserData(user));
      toast.success("User Registered Sucessfully");
      setuserInfo({
        username: "",
        email: "",
        password: "",
      });
      fetchUser();
    } catch (error) {
      console.log(error);
    }
  } */
  /*  */
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
    if (existUser) {
      toast.error("user is already exist");
      return;
    }
    if (!userInfo.username || !userInfo.password) {
      toast.error("please fill all fields");
      return;
    }
    try {
    } catch (error) {
      console.log(error);
    }
  }
  console.log(userData);

  return (
    <div className={styles.formContainer}>
      <ToastContainer />
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
