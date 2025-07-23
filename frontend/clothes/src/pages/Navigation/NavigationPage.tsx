import { useEffect, useState } from "react";
import MobileNavigation from "./childComponent/MobileNavigation";
import styles from "./navigation.module.css";
import DesktopNavigation from "./childComponent/DesktopNavigation";

export default function NavigationPage() {
  const [IsClickedHam, setClickedHam] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  });
  return (
    <div className={styles.navigationWrapper}>
      {isMobile ? (
        <MobileNavigation
          IsClickedHam={IsClickedHam}
          setClickedHam={setClickedHam}
        />
      ) : (
        <DesktopNavigation />
      )}
    </div>
  );
}
