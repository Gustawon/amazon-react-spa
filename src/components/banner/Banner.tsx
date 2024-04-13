import styles from "./Banner.module.css";
import arrowLeft from "../../assets/icons/arrow_banner_left.svg";
import arrowRigth from "../../assets/icons/arrow_banner_rigth.svg";

import background_1 from "../../assets/banner/kitchen-favorites.jpg";
import background_2 from "../../assets/banner/beauty-products.jpg";
import background_3 from "../../assets/banner/essentials-for-gamers.jpg";
import background_4 from "../../assets/banner/new-arrivals-in-toys.jpg";
import background_5 from "../../assets/banner/shop-books.jpg";
import { useState } from "react";

function Banner() {
  const backgrounds = [
    background_1,
    background_2,
    background_3,
    background_4,
    background_5,
  ];
  const [choice, setChoice] = useState(3);

  function moveChoice(direction: string) {
    if (direction === "left") {
      if (choice - 1 < 0) {
        setChoice(backgrounds.length - 1);
      } else {
        setChoice((current) => current - 1);
      }
    }
    if (direction === "rigth") {
      if (choice + 1 > backgrounds.length - 1) {
        setChoice(0);
      } else {
        setChoice((current) => current + 1);
      }
    }
  }

  return (
    <div id={styles["banner-container"]}>
      <div
        role="button"
        className={`${styles.button} ${styles.left}`}
        onClick={() => moveChoice("left")}
      >
        <img src={arrowLeft} height={30} alt="Arrow left icon" />
      </div>
      <div
        id={styles["banner-background"]}
        style={{
          backgroundImage: `url(${backgrounds[choice]})`,
          maskImage: `linear-gradient(to top, transparent 10%, black 45%)`,
        }}
      ></div>
      <div
        role="button"
        className={`${styles.button} ${styles.rigth}`}
        onClick={() => moveChoice("rigth")}
      >
        <img src={arrowRigth} height={30} alt="Arrow rigth icon" />
      </div>
    </div>
  );
}

export default Banner;
