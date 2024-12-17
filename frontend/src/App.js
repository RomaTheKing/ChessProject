import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import RegPage from "./pages/RegPage";
import "./scss/app.scss";

function App() {
  return (
    <div className="root">
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/Reg" element={<RegPage />} />
        <Route path="/Home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
