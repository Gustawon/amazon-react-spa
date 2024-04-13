import IHomeTiel from "../../interfaces/IHomeTiel";
import styles from "./BasicTiel.module.css";

function BasicTiel({ title, image, linkName }: IHomeTiel) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image} alt="Product image" />
      </div>
      <div className={styles.link}>{linkName}</div>
    </div>
  );
}

export default BasicTiel;
