import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { Toaster } from "react-hot-toast";
import { router } from "./routes/Router.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import "./index.css";
import CartProvider from "./Provider/CartProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
        <Toaster />
      </CartProvider>
    </AuthProvider>
  </StrictMode>,
);
