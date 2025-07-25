import styles from "../home.module.css";
export default function UpperSection() {
  return (
    <div className={styles.UpperSectionContainer}>
      <div className={styles.upperSectionSectionText}>
        <p>
          Stockholm is a shopper’s paradise. From big names like H&M and Åhlens
          to the special little fashion boutiques that offer one-of-a-kind finds
          this is a stylish and trendy city that embraces its clean Scandinavian
          aesthetic but isn’t afraid to try something new.
        </p>
      </div>
    </div>
  );
}
