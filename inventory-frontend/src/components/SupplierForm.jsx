import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Grid,
  MenuItem,
  Paper,
  Typography
} from "@mui/material";

export default function SupplierForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    contact_person: "",
    phone: "",
    email: "",
    category: "",
    address: ""
  });

  const categories = [
    "Electronics",
    "Furniture",
    "Stationery",
    "General Supplies",
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (onSubmit) onSubmit(form); // Will submit to backend later
  };

  return (
    <Paper sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Add Supplier
      </Typography>

      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="name"
              label="Supplier Name"
              fullWidth
              value={form.name}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="contact_person"
              label="Contact Person"
              fullWidth
              value={form.contact_person}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="phone"
              label="Phone"
              fullWidth
              value={form.phone}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="email"
              label="Email"
              type="email"
              fullWidth
              value={form.email}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="category"
              label="Category"
              select
              fullWidth
              value={form.category}
              onChange={handleChange}
            >
              {categories.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="address"
              label="Address"
              fullWidth
              multiline
              rows={2}
              value={form.address}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              size="large"
              onClick={handleSubmit}
            >
              Save Supplier
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
