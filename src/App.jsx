import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import UploadPage from "./pages/UploadPage";
import SimulatePage from "./pages/SimulatePage";
import BaselinePage from "./pages/BaselinePage";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<LandingPage />}
        />

        <Route
  path="/chat"
  element={<ChatPage />}
/>

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/simulate"
          element={<SimulatePage />}
        />

        <Route
          path="/upload"
          element={<UploadPage />}
        />
        
        <Route
          path="/baseline"
          element={<BaselinePage />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;