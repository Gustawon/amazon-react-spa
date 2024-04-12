import { Outlet } from "react-router-dom";
import AppHeader from "../components/header/AppHeader";

import styles from "./RootLayout.module.css";

function RootLayout() {
  return (
    <>
      <AppHeader />
      <main id={styles["main-container"]}>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
