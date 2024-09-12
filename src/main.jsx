import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Import the Tailwind CSS file
import App from "./App";
// import { DarkModeProvider } from "./context/DarkModeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <DarkModeProvider> */}
    <App />
    {/* </DarkModeProvider> */}
  </React.StrictMode>
);
