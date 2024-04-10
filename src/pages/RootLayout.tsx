import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";

function RootLayout() {
  return (
    <>
      <AppHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
