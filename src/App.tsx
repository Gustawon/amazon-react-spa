import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductsList from "./components/products/ProductsList";
import LoginPage from "./pages/LoginPage";
import AddressPage from "./pages/AddressPage";
import LanguageSettingsPage from "./pages/LanguageSettingsPage";
import OrdersHistoryPage from "./pages/OrdersHistoryPage";
import ProductsRootLayout from "./pages/ProductsRootLayout";

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
      {
        path: "products",
        element: <ProductsRootLayout />, // TODO - add left navigation, when it is ready
        children: [
          { index: true },
          {
            path: ":categoryId",
            id: "products-category",
            // loader: productsCategoryLoader,
            element: <ProductsList />,
          },
        ],
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "address",
        element: <AddressPage />,
      },
      {
        path: "language",
        element: <LanguageSettingsPage />,
      },
      {
        path: "orders",
        element: <OrdersHistoryPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
