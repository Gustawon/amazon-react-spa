import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ProductDetailPage from "./pages/ProductDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <ErrorPage /> // TODO that
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "product",
        element: <ProductDetailPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
