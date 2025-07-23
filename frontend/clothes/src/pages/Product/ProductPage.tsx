import axios from "axios";
import { useEffect, useState } from "react";

export default function ProductPage() {
  interface ProductType {
    name: string;
    description: string;
    price: number;
    id?: number;
  }
  const [productsData, setProductsData] = useState<ProductType[]>([]);
  async function fetchProduct() {
    try {
      const response = await axios.get(
        "https://cyrbaxdwxy.us-east-1.awsapprunner.com/api/products"
      );
      const { products } = response.data;
      setProductsData(products);
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
      {productsData &&
        productsData.map((item, index) => {
          return (
            <div key={index}>
              <li> {index + 1} </li>
              <li> Name:{item?.name} </li>

              <li> Description:{item?.description} </li>

              <li>Price:{item?.price} </li>
            </div>
          );
        })}
    </div>
  );
}
