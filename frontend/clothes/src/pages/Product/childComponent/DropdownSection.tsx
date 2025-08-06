import { TiArrowSortedDown } from "react-icons/ti";
import styles from "../product.module.css";
interface PropsType {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  inputMenu: string;
  setInputMenu: React.Dispatch<React.SetStateAction<string>>;
  handleInputMenu: (val: string) => void;
}

export default function DropdownSection({
  showMenu,
  setShowMenu,
  inputMenu,
  handleInputMenu,
}: PropsType) {
  return (
    <div className={styles.Dropdownsection}>
      <div
        className={styles.DropdownInputSection}
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <span>{inputMenu}</span>
        <TiArrowSortedDown
          className={showMenu ? styles.roundUp : styles.roundDown}
        />
      </div>
      {showMenu && (
        <div className={styles.DropdownMenu}>
          <p
            onClick={() => {
              handleInputMenu("Cheaper");
            }}
          >
            Cheaper
          </p>
          <div className={styles.DropdownMenuLine}></div>
          <p
            onClick={() => {
              handleInputMenu("Expensive");
            }}
          >
            Expensive
          </p>
        </div>
      )}
    </div>
  );
}
