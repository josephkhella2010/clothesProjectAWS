import { Link } from "react-router-dom";
import styles from "../product.module.css";

import type { ProductType } from "../../../helps/InterfacesType";
interface ProductItemsProps {
  SlicedProductArr: ProductType[];
}

export default function ProductItem({ SlicedProductArr }: ProductItemsProps) {
  return (
    <div className={styles.productItemContainer}>
      {SlicedProductArr &&
        SlicedProductArr.map((item, index) => {
          return (
            <div key={index} className={styles.productItemSection}>
              <Link
                to={`/singleproduct/${item.id}`}
                className={styles.productItemLink}
              >
                <img
                  src="/foto/homeFoto/HomePageSlideOne.webp"
                  alt="not found"
                />
                <div className={styles.productItemTextContent}>
                  <li>
                    {" "}
                    <span>Name:</span> {item?.name}{" "}
                  </li>

                  <li>
                    {" "}
                    <span>Description:</span> {item?.description}{" "}
                  </li>

                  <li>
                    {" "}
                    <span>Price:</span>
                    {item?.price}{" "}
                  </li>
                  <div className={styles.buttonContainer}>
                    <button>See more details</button>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
    </div>
  );
}
