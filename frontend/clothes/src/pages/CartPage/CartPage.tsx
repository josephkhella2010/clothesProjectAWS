import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/Store";
import { useEffect } from "react";
import { setUsersData } from "../../SliceReducers/UserReducer";

export default function CartPage() {
  const tokenfromStorage = localStorage.getItem("token");
  const userFromStorage = JSON.parse(localStorage.getItem("user") || "{}");
  const dispatch = useDispatch();
  const { userData } = useSelector((state: RootState) => state.UserDataStore);
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

  const user = userData.find(
    (item: any) => String(item.id) === String(userFromStorage.id)
  );
  console.log(user);
  console.log(tokenfromStorage);

  /*  */
  async function deleteCartItem(cartId: any) {
    const id = parseInt(cartId); // Important!

    try {
      const response = await axios.delete(
        `https://dg98ub8cgd.us-east-1.awsapprunner.com/api/deleteCartItem/${id}`,
        {
          headers: {
            Authorization: `Bearer ${tokenfromStorage}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1>Cart Page</h1>
      {user && user.cartItems && user.cartItems.length > 0 ? (
        user.cartItems.map((item: any, index: number) => (
          <div key={index}>
            <h2>{item.product.name}</h2>
            <p>Description: {item.product.description}</p>
            <p>Price: ${item.product.price}</p>
            <p>Quantity: {item.quantity}</p>{" "}
            <button
              onClick={() => {
                deleteCartItem(item.cartItemId);
              }}
            >
              delete
            </button>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}
