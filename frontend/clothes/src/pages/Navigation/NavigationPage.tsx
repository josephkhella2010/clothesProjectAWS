import { useEffect, useState } from "react";
import DesktopNavigation from "./childComponent/desktopNavigation";
import MobileNavigation from "./childComponent/MobileNavigation";
import styles from "./navigation.module.css";

export default function NavigationPage() {
  const [IsClickedHam, setClickedHam] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<any>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (windowWidth < 600) {
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
