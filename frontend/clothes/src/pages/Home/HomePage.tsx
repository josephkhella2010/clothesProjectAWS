import MiddleSection from "./childComponent/MiddleSection";
import UpperSection from "./childComponent/UpperSection";
import styles from "./home.module.css";

export default function HomePage() {
  return (
    <div className={styles.HomePageWrapper}>
      <UpperSection />
      <MiddleSection />
      {/* Other components can be added here */}
    </div>
  );
}
