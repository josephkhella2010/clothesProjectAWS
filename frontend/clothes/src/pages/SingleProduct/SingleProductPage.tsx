import { useParams } from "react-router-dom";
import styles from "./SingleProduct.module.css";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/Store";
import axios from "axios";
import { setProducts } from "../../SliceReducers/ProductReducer";
import { useEffect } from "react";
export default function SingleProductPage() {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const tokenfromStorage = localStorage.getItem("token");
  const { products } = useSelector(
    (state: RootState) => state.ProductDataStore
  );
  async function fetchProduct() {
    try {
      const response = await axios.get(
        "https://dg98ub8cgd.us-east-1.awsapprunner.com/api/products"
      );
      const { products } = response.data;
      dispatch(setProducts(products));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchProduct();
  }, []);
  const singleProduct = products.find((item) => String(item.id) === id);
  //console.log(singleProduct);
  //console.log(id);
  /*  */
  async function handleAddToCart() {
    console.log(singleProduct);
    try {
      const response = await axios.post(
        "https://dg98ub8cgd.us-east-1.awsapprunner.com/api/addToCart",
        { product: singleProduct, quantity: 1 },
        {
          headers: {
            Authorization: `Bearer ${tokenfromStorage}`,
          },
        }
      );
      const { cart } = response.data;
      console.log(cart);
    } catch (error) {
      console.log(error);
    }
  }

  /*  */
  return (
    <div className={styles.SingleProductWrapper}>
      <h1> single Page</h1>
      {singleProduct && (
        <div>
          <li>{singleProduct.id}</li>
          <li>Name: {singleProduct.name}</li>
          <li>Description: {singleProduct.description}</li>
          <li>Price: {singleProduct.price} $</li>
          <button onClick={handleAddToCart}> add to cart</button>
        </div>
      )}
    </div>
  );
}
