import AuthLayout from "../components/AuthLayout";
import { TextField, Button, Typography } from "@mui/material";

export default function Register() {
  return (
    <AuthLayout title="Inventory Manager">
      <TextField label="Username" fullWidth margin="normal" />
      <TextField label="Email" fullWidth margin="normal" />
      <TextField label="Password" type="password" fullWidth margin="normal" />

      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2, mb: 1 }}
      >
        Register
      </Button>

      <Typography variant="body2">
        Already have an account? <a href="/login">Login</a>
      </Typography>
    </AuthLayout>
  );
}
