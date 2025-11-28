import { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import { TextField, Button, Typography } from "@mui/material";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    const response = await fetch("http://127.0.0.1:8000/auth/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: email,
        password: password,
      }),
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      alert("Login successful!");
      window.location.href = "/dashboard";
    } else {
      alert(data.error || "Login failed!");
    }
  }

  return (
    <AuthLayout title="Inventory Manager">
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2, mb: 1 }}
        onClick={handleLogin}
      >
        Login
      </Button>

      <Typography variant="body2">
        Don't have an account? <a href="/register">Register</a>
      </Typography>
    </AuthLayout>
  );
}
