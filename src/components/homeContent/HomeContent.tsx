import styles from "./HomeContent.module.css";

import BasicTiel from "./BasicTiel";
import { tiels } from "../../mock/homePageTiels";
import useWindowDimensions from "../../hooks/useWindowDimensions";

function HomeContent() {
  const { isXL } = useWindowDimensions();

  const maxIndex = isXL ? 7 : 8;

  return (
    <div className={styles.tielsContainer}>
      {tiels.map((tiel, index) => {
        if (index > maxIndex) return;
        return <BasicTiel key={tiel.id} {...tiel} />;
      })}
    </div>
  );
}

export default HomeContent;
