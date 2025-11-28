import { useState, useEffect } from "react";
import {
  Typography,
  Button,
  TextField,
  Stack,
  IconButton
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ProductModal from "../components/ProductModal";

export default function Products() {
  const [rows, setRows] = useState([]);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    // mock data before API integration
    setRows([
      { id: 1, name: "Laptop", category: "Electronics", stock: 34, price: 1200 },
      { id: 2, name: "Printer", category: "Electronics", stock: 12, price: 300 },
      { id: 3, name: "Chair", category: "Furniture", stock: 50, price: 80 }
    ]);
  }, []);

  const filteredRows = rows.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = () => {
    setEditingProduct(null);
    setModalOpen(true);
  };

  const handleEdit = (row) => {
    setEditingProduct(row);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    setRows((prev) => prev.filter((r) => r.id !== id));
  };

  const handleSubmit = (data) => {
    if (editingProduct) {
      setRows((prev) =>
        prev.map((r) => (r.id === editingProduct.id ? { ...data, id: r.id } : r))
      );
    } else {
      setRows((prev) => [...prev, { ...data, id: prev.length + 1 }]);
    }
  };

  const columns = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "category", headerName: "Category", flex: 1 },
    { field: "stock", headerName: "Stock", flex: 1 },
    { field: "price", headerName: "Price (KES)", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      sortable: false,
      renderCell: (params) => (
        <>
          <IconButton onClick={() => handleEdit(params.row)}>
            <EditIcon color="primary" />
          </IconButton>

          <IconButton onClick={() => handleDelete(params.row.id)}>
            <DeleteIcon color="error" />
          </IconButton>
        </>
      )
    }
  ];

  return (
    <div>
      <Typography variant="h4" gutterBottom>Products</Typography>

      <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
        <TextField
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="contained" onClick={handleAdd}>
          Add Product
        </Button>
      </Stack>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid rows={filteredRows} columns={columns} pageSize={5} />
      </div>

      <ProductModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmit}
        product={editingProduct}
      />
    </div>
  );
}
