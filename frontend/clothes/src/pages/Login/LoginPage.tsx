import LoginSection from "./childComponent/LoginSection";
import styles from "./loginPage.module.css";

export default function LoginPage() {
  return (
    <div className={styles.RegisterPageWrapper}>
      <LoginSection />
    </div>
  );
}
