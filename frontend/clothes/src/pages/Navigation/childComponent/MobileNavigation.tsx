import styles from "../navigation.module.css";
import MobileSideBar from "./MobileSideBar";
export interface PropsType {
  IsClickedHam: boolean;
  setClickedHam: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileNavigation({
  IsClickedHam,
  setClickedHam,
}: PropsType) {
  function handleSideBar() {
    setClickedHam(!IsClickedHam);
  }
  function handleCloseSideBar() {
    setClickedHam(false);
  }

  return (
    <div className={styles.MobileNavigationContainer}>
      <h1>Logo</h1>
      <div className={styles.mobileHamContainer} onClick={handleSideBar}>
        <div className={styles.hamLine}></div>
        <div className={styles.hamLine}></div>
      </div>

      <div
        className={`${styles.MobileMenuListContainer} ${
          IsClickedHam ? styles.turnLeft : ""
        }`}
        onClick={handleCloseSideBar}
      >
        <MobileSideBar
          IsClickedHam={IsClickedHam}
          setClickedHam={setClickedHam}
        />
      </div>
    </div>
  );
}
