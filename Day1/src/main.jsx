import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MyFirstComponent from "../MyFirstComponent";
// import "./index.css";
let domElement = document.getElementById("roots");
createRoot(domElement).render(<MyFirstComponent />);
