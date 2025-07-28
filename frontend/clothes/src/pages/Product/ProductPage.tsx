import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { RootState } from "../../store/Store";
import { setProducts } from "../../SliceReducers/ProductReducer";

export default function ProductPage() {
  const { products } = useSelector(
    (state: RootState) => state.ProductDataStore
  );
  const dispatch = useDispatch();
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
  return (
    <div>
      <h1>ProductPage</h1>
      {products &&
        products.map((item, index) => {
          return (
            <div key={index}>
              <li> {index + 1} </li>
              <li> Name:{item?.name} </li>

              <li> Description:{item?.description} </li>

              <li>Price:{item?.price} </li>
              <Link to={`/singleproduct/${item.id}`}>
                <button>See more details</button>
              </Link>
            </div>
          );
        })}
    </div>
  );
}
