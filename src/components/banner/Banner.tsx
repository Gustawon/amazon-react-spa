import styles from "./Banner.module.css";
import arrowLeft from "../../assets/icons/arrow_banner_left.svg";
import arrowRigth from "../../assets/icons/arrow_banner_rigth.svg";

import background_1 from "../../assets/banner/kitchen-favorites.jpg";
import background_2 from "../../assets/banner/beauty-products.jpg";
import background_3 from "../../assets/banner/essentials-for-gamers.jpg";
import background_4 from "../../assets/banner/new-arrivals-in-toys.jpg";
import background_5 from "../../assets/banner/shop-books.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Categories } from "../../enums/Categories";

function Banner() {
  const backgrounds: { img: string; link: string }[] = [
    { img: background_1, link: `/products/${Categories.KITCHEN}` },
    { img: background_2, link: `/products/${Categories.BEAUTY}` },
    { img: background_3, link: `/products/${Categories.GAMING}` },
    { img: background_4, link: `/products/${Categories.TOYS}` },
    { img: background_5, link: `/products/${Categories.BOOKS}` },
  ];
  const [choice, setChoice] = useState(4);

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
      <Link to={backgrounds[choice].link}>
        <div
          id={styles["banner-background"]}
          style={{
            backgroundImage: `url(${backgrounds[choice].img})`,
            maskImage: `linear-gradient(to top, transparent 10%, black 45%)`,
          }}
        ></div>
      </Link>
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
