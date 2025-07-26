import styles from "../home.module.css";

export default function LowerSection() {
  return (
    <div className={styles.HomePageLowerSectionWrapper}>
      <p className={styles.HomePageLowerSectionWrapperPara}>
        A dedication to Mother Earth is the name of the game for this brand,
        where sustainability is at the forefront but never at the cost of
        cutting-edge fashion for men. The designs are sleek and ooze
        Scandinavian cool. And the story behind the brand is almost as
        interesting as the clothes.
      </p>
      <div className={styles.HomePageLowerSection}>
        <img src="/foto/homeFoto/HomePageSlideFour.webp" alt="" />
        <p>Photo: © Uniforms for the Dedicated</p>
      </div>
    </div>
  );
}
