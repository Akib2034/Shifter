import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ClientLogin from "./pages/ClientLogin";
import WorkerLogin from "./pages/WorkerLogin";
import Register from "./pages/Register";
import ClientDashboard from "./pages/ClientDashboard";
import WorkerDashboard from "./pages/WorkerDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* AUTH */}
        <Route path="/client-login" element={<ClientLogin />} />
        <Route path="/worker-login" element={<WorkerLogin />} />
        <Route path="/register" element={<Register />} />

        {/* DASHBOARDS */}
        <Route path="/client" element={<ClientDashboard />} />
        <Route path="/worker" element={<WorkerDashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;