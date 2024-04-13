import amzLogo from "../assets/logos/amazon-logo.svg";
import Banner from "../components/banner/Banner";
import HomeContent from "../components/homeContent/HomeContent";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div id={styles["page-container"]}>
      <Banner />
      <HomeContent />

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
