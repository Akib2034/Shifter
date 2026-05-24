import { useEffect, useState } from "react";

function ClientDashboard() {
  const [shifts, setShifts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://127.0.0.1:8000/api/shifts/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setShifts(data);
      });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Client Dashboard</h1>

      {shifts.map((shift) => (
        <div key={shift.id}>
          <h3>{shift.title}</h3>
          <p>{shift.address}</p>
          <p>{shift.status}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default ClientDashboard;