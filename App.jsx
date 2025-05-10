// src/App.jsx
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./pages/routes"; // Fix the import path

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
