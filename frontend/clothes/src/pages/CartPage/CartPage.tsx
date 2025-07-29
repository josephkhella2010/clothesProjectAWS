import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/Store";
import { useEffect } from "react";
import { setUsersData } from "../../SliceReducers/UserReducer";

export default function CartPage() {
  //const tokenfromStorage = localStorage.getItem("token");
  const userFromStorage = JSON.parse(localStorage.getItem("user") || "{}");
  const dispatch = useDispatch();
  const { userData } = useSelector((state: RootState) => state.UserDataStore);
  console.log(userFromStorage);
  async function getUsers() {
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
    getUsers();
  }, [dispatch]);
  console.log(userData);

  const user = userData.find(
    (item: any) => String(item.id) === String(userFromStorage.id)
  );
  console.log(user?.cartItems);
  return <div>CartPage</div>;
}
