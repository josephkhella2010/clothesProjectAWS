import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/Store";
import { setProducts } from "../../SliceReducers/ProductReducer";
import ProductItem from "./childComponent/ProductItem";
import styles from "./product.module.css";
import { productsArr } from "../../helps/ProductArray";
import PaginationSection from "./childComponent/PaginationSection";
import SearchSection from "./childComponent/SearchSection";
export default function ProductPage() {
  const { products } = useSelector(
    (state: RootState) => state.ProductDataStore
  );
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState<string>("");
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [inputMenu, setInputMenu] = useState<string>("Cheaper");
  function handleInputMenu(val: string) {
    setInputMenu(val);
    setShowMenu(false);
  }

  /* pagination */
  const [currentPage, setCurrentPage] = useState(1);
  const visibleCard: number = 6;
  const ShowPagesNumber: number = 3;
  const [startPage, setStartPage] = useState<number>(1);
  const totalPages = Math.ceil(products.length / visibleCard);
  const startIndex = (currentPage - 1) * visibleCard;
  const endIndex = startIndex + visibleCard;
  const SlicedProductArr = products.slice(startIndex, endIndex);

  function getVisiblePages() {
    const endPage = Math.min(totalPages, startPage + ShowPagesNumber - 1);

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  }
  const visiblePages = getVisiblePages();
  console.log(SlicedProductArr);
  const changePage = (page: number) => {
    setCurrentPage(page);

    if (page === visiblePages[visiblePages.length - 1] && page < totalPages) {
      setStartPage((prev) =>
        Math.min(prev + 1, totalPages - ShowPagesNumber + 1)
      );
    }

    if (page === visiblePages[0] && page > 1) {
      setStartPage((prev) => Math.max(prev - 1, 1));
    }
  };
  const handleNext = () => {
    if (currentPage < totalPages) {
      changePage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      changePage(currentPage - 1);
    }
  };
  /*  */
  /*  functions */
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
  useEffect(() => {
    dispatch(setProducts(productsArr));
  });
  return (
    <div className={styles.ProductPageWrapper}>
      <h1>Product Page</h1>
      <SearchSection
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        inputMenu={inputMenu}
        setInputMenu={setInputMenu}
        handleInputMenu={handleInputMenu}
      />
      <ProductItem SlicedProductArr={SlicedProductArr} />
      {/* Pagination */}
      <PaginationSection
        currentPage={currentPage}
        totalPages={totalPages}
        visiblePages={visiblePages}
        changePage={changePage}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
    </div>
  );
}
