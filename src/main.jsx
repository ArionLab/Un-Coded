import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/global.css";
import "./styles/layout.css";
import "./styles/typography.css";
import "./styles/buttons.css";

import App from "./App";
import { CartProvider } from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

  <CartProvider>

    <Toaster
      position="bottom-right"
      toastOptions={{
        duration: 2500,
        style: {
          background: "#151515",
          color: "#fff",
          border: "1px solid rgba(199,243,107,.25)",
          borderRadius: "16px",
          padding: "16px",
          fontWeight: "600"
        }
      }}
    />

    <BrowserRouter>

      <App />

    </BrowserRouter>

  </CartProvider>

</React.StrictMode>
);