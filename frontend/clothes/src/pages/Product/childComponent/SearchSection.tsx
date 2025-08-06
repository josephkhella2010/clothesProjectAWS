import { CiSearch } from "react-icons/ci";
import styles from "../product.module.css";
import DropdownSection from "./DropdownSection";
interface PropsType {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  inputMenu: string;
  setInputMenu: React.Dispatch<React.SetStateAction<string>>;
  handleInputMenu: (val: string) => void;
}
export default function SearchSection({
  searchInput,
  setSearchInput,
  showMenu,
  setShowMenu,
  inputMenu,
  setInputMenu,
  handleInputMenu,
}: PropsType) {
  console.log(searchInput);
  return (
    <div className={styles.searchWrapper}>
      <div className={styles.inputSection}>
        <input
          type="text"
          placeholder="search for product"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <CiSearch className={styles.SearchIcon} />
      </div>
      <div className={styles.DropdownContainer}>
        <DropdownSection
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          inputMenu={inputMenu}
          setInputMenu={setInputMenu}
          handleInputMenu={handleInputMenu}
        />
      </div>
    </div>
  );
}
