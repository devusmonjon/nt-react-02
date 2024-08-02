import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Footer, Navbar } from "./components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Navbar />
    <App />
    <Footer />
  </>
);
