import { useState } from "react";
import { productsArr } from "../../helps/ProductArray";
import PaginationItem from "./PaginationItem";
import styles from "./slicePagi.module.css";
import PaginationSection from "./PaginationSection";
export default function SlicePagination() {
  const products = productsArr;
  const visibleCard: number = 3;
  const [currentPage, setCurrentPage] = useState<number>(1);

  // here total page =total product number/visible card
  const totalPages = Math.ceil(products.length / visibleCard);
  // start index : here is index of first product in page if current page
  // is 3  first item index will be:6
  const startIndex = (currentPage - 1) * visibleCard;
  // endIndex index : here is index of last  product in page if current page
  // is 3  first item index will be:9
  const endIndex = startIndex + visibleCard;
  const SlicedProductArr = products.slice(startIndex, endIndex);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className={styles.ProductPageWrapper}>
      <h1>Product Page</h1>
      <PaginationItem SlicedProductArr={SlicedProductArr} />
      <PaginationSection
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
}
