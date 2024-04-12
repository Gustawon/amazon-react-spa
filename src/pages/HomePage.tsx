import amzLogo from "../assets/amazon-logo.svg";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div id={styles["page-container"]}>
      <div className={styles["temporary-content"]}>
        <h1>Amazon React App</h1>
        <div>
          <img src={amzLogo} className="logoOriginal" alt="Amazon logo" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
