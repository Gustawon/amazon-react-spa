import { Outlet } from "react-router-dom";
import styles from "./ProductsRootLayout.module.css";
function ProductsRootLayout() {
  return (
    <div className={styles.container}>
      {/* TODO - create left navigation panel, menu with available categories */}
      <Outlet />
    </div>
  );
}

export default ProductsRootLayout;
