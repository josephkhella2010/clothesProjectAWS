/* import { useEffect, useState } from "react";
//import { getUrlName } from "../../../helps/SrcFunction";
import styles from "../home.module.css";

export default function MiddleSection() {
  /*  const ImgUrl = [
    "homepage/HomePageSlideOne.webp",
    "homepage/HomePageSlideTwo.webp",
    "homepage/HomePageSlideThree.webp",
    "homepage/HomePageSlideFour.webp",
    "homepage/HomePageSlideFive.webp",
    "homepage/HomePageSlideSix.webp",
    "homepage/HomePageSlideSeven.webp",
    "homepage/HomePageSlideEight.webp",
    "homepage/HomePageSlideNine.webp",
  ];
  
   {ImgUrl &&
          ImgUrl.map((img, index) => {
            return (
              <div key={index}>
                <img src={getUrlName(`${img}`)} alt={img} />
              </div>
            );
          })}
        </div>
      </div>
  
  
*/
import { useEffect, useState } from "react";
import styles from "../home.module.css";

export default function MiddleSection() {
  const ImgUrl = [
    "/foto/homeFoto/HomePageSlideOne.webp",
    "/foto/homeFoto/HomePageSlideTwo.webp",
    "/foto/homeFoto/HomePageSlideThree.webp",
    "/foto/homeFoto/HomePageSlideFour.webp",
    "/foto/homeFoto/HomePageSlideFive.webp",
    "/foto/homeFoto/HomePageSlideSix.webp",
    "/foto/homeFoto/HomePageSlideSeven.webp",
    "/foto/homeFoto/HomePageSlideEight.webp",
    "/foto/homeFoto/HomePageSlideNine.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < ImgUrl.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentIndex, ImgUrl.length]);

  return (
    <div className={styles.MiddleSectionSliceContainer}>
      <div className={styles.MiddleSectionSliceSection}>
        {ImgUrl.map((img, index) => {
          return (
            <img
              key={index}
              src={img}
              alt={`slide-${index}`}
              className={` ${styles.SlideImage} ${
                index === currentIndex ? styles.ImgActive : ""
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
