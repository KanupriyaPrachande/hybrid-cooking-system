import React, { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

function App() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("OFF");

  // Fetch data from backend
  useEffect(() => {
    axios.get("http://localhost:8000/data")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  // Toggle system
  const toggleSystem = () => {
    const newStatus = status === "ON" ? "OFF" : "ON";
    setStatus(newStatus);

    axios.post("http://localhost:8000/control", {
      status: newStatus
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🔥 Hybrid Cooking Dashboard</h1>

      <h2>Status: {status}</h2>
      <button onClick={toggleSystem}>
        Toggle System
      </button>

      <h2>Energy Usage</h2>
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="energy" />
      </LineChart>
    </div>
  );
}

export default App;