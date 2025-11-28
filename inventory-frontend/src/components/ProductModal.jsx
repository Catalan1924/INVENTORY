import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Grid,
  MenuItem
} from "@mui/material";
import { useEffect, useState } from "react";

export default function ProductModal({ open, onClose, onSubmit, product }) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    stock: "",
    price: ""
  });

  const categories = [
    "Electronics",
    "Furniture",
    "Stationery",
    "Accessories",
    "General"
  ];

  useEffect(() => {
    if (product) {
      setForm(product); // populate for editing
    } else {
      setForm({
        name: "",
        category: "",
        stock: "",
        price: ""
      });
    }
  }, [product]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(form);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        {product ? "Edit Product" : "Add Product"}
      </DialogTitle>

      <DialogContent dividers>
        <Grid container spacing={2}>

          <Grid item xs={12}>
            <TextField
              name="name"
              label="Product Name"
              fullWidth
              value={form.name}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
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

          <Grid item xs={6}>
            <TextField
              name="stock"
              label="Stock Level"
              type="number"
              fullWidth
              value={form.stock}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              name="price"
              label="Unit Price (KES)"
              type="number"
              fullWidth
              value={form.price}
              onChange={handleChange}
            />
          </Grid>

        </Grid>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit}>
          {product ? "Save Changes" : "Add Product"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
