import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <h1>Shift Management System</h1>

      <p>Select your login type</p>

      <button
        onClick={() => navigate("/client-login")}
        style={{ padding: "10px 20px" }}
      >
        Client Login
      </button>

      <button
        onClick={() => navigate("/worker-login")}
        style={{ padding: "10px 20px" }}
      >
        Worker Login
      </button>

      <button
        onClick={() => navigate("/register")}
        style={{ padding: "10px 20px" }}
      >
        Register
      </button>
    </div>
  );
}

export default Home;