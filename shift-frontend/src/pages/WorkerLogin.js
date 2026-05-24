import { useState } from "react";
import { useNavigate } from "react-router-dom";

function WorkerLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/auth/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();
      console.log("LOGIN RESPONSE:", data);

      if (data.access) {
        localStorage.setItem("token", data.access);
        localStorage.setItem("role", data.role);

        if (data.role === "worker") {
          navigate("/worker");
        } else {
          alert("This account is not a worker");
        }
      } else {
        alert("Invalid login");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Worker Login</h1>

      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={loginUser}>Login</button>
    </div>
  );
}

export default WorkerLogin;