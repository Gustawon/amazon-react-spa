import { Link } from "react-router-dom";
import IHomeTiel from "../../interfaces/IHomeTiel";
import styles from "./BasicTiel.module.css";

function BasicTiel({ title, image, linkName, link }: IHomeTiel) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <Link to={link} className={styles.imageContainer}>
        <img className={styles.image} src={image} alt="Product image" />
      </Link>
      <Link to={link} className={styles.link}>
        {linkName}
      </Link>
    </div>
  );
}

export default BasicTiel;
