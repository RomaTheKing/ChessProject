import AuthPage from "./pages/Auth";
import HomePage from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import RegPage from "./pages/Reg";
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
