import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import styles from "../product.module.css";
interface PropsType {
  currentPage: number;
  totalPages: number;
  visiblePages: any;
  changePage: (page: number) => void;
  handlePrevious: () => void;
  handleNext: () => void;
}

export default function PaginationSection({
  currentPage,
  totalPages,
  visiblePages,
  changePage,
  handlePrevious,
  handleNext,
}: PropsType) {
  return (
    <div className={styles.paginationContainer}>
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={styles.prevBtn}
      >
        <MdKeyboardArrowLeft />
      </button>

      {/* Show visible pages */}
      <div className={styles.paginationPages}>
        {visiblePages.map((page: any) => (
          <button
            key={page}
            onClick={() => changePage(page)}
            className={
              currentPage === page ? styles.activeBtn : styles.disActiveBtn
            }
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={styles.nextBtn}
      >
        <MdKeyboardArrowRight />
      </button>
    </div>
  );
}
