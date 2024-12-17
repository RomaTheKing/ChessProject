import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Auth" element={<AuthPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
