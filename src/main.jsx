import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import LoginPage from "./assets/Pages/login";
import RegisterPage from "./assets/Pages/register";
import ErrorPage from "./assets/Pages/404";
import ProductsPage from "./assets/Pages/products";
import ProfilePage from "./assets/Pages/profile";
import DetailProductPage from "./assets/Pages/detailProduct";
import { Provider } from "react-redux";
import DarkModeContextProvider from "./context/DarkMode";
import store from "./redux/store";
import Navbar from "./assets/components/Layouts/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/product/:id",
    element: <DetailProductPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {/* <Navbar /> */}
      <DarkModeContextProvider>
        <RouterProvider router={router} />
      </DarkModeContextProvider>
    </Provider>
  </StrictMode>,
);
