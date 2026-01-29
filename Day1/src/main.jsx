import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MyFirstComponent from "../MyFirstComponent";
import Practice from "./Practice";
import Parent from "./Parent";
// import "./index.css";
let domElement = document.getElementById("roots");
createRoot(domElement).render(<Parent />);
