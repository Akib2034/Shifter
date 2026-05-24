import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "worker",
  });

  const registerUser = async () => {
    const response = await fetch(
      "http://127.0.0.1:8000/api/auth/register/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    console.log(data);

    alert("User Registered");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Register</h1>

      <input
        placeholder="Username"
        onChange={(e) =>
          setFormData({ ...formData, username: e.target.value })
        }
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setFormData({ ...formData, password: e.target.value })
        }
      />

      <br />
      <br />

      <select
        onChange={(e) =>
          setFormData({ ...formData, role: e.target.value })
        }
      >
        <option value="worker">Worker</option>
        <option value="client">Client</option>
      </select>

      <br />
      <br />

      <button onClick={registerUser}>Register</button>
    </div>
  );
}

export default Register;