import RegisterSection from "./childComponent/RegisterSection";
import styles from "./registerPage.module.css";
export default function RegisterPage() {
  return (
    <div className={styles.RegisterPageWrapper}>
      <RegisterSection />
    </div>
  );
}
