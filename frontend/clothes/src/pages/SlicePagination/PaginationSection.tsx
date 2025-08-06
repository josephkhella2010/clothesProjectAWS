import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import styles from "./slicePagi.module.css";

interface PropsType {
  pages: number[]; // Page numbers to display, e.g., [1, 2, 3]
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}
export default function PaginationSection({
  pages,
  currentPage,
  setCurrentPage,
  totalPages,
}: PropsType) {
  console.log(pages, currentPage);
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev: number) => prev + 1);
    }
  };
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev: number) => prev - 1);
    }
  };
  return (
    <div className={styles.paginationContainer}>
      <div className={styles.paginationContent}>
        <button
          onClick={handlePrevious}
          className={`${currentPage === 1 ? styles.disableBtn : ""}`}
        >
          <MdKeyboardArrowLeft />
        </button>
        <div className={styles.pageNumberSection}>
          {pages.map((num: any, index: number) => {
            return (
              <li
                className={`${styles.pageNumber} ${
                  currentPage === num ? styles.activeButton : ""
                }`}
                key={index}
                onClick={() => {
                  setCurrentPage(num);
                }}
              >
                {num}
              </li>
            );
          })}
        </div>
        <button
          onClick={handleNext}
          className={`${currentPage === totalPages ? styles.disableBtn : ""}`}
        >
          <MdKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
}
