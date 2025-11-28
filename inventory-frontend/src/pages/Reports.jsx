import { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";

import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

export default function Reports() {
  const [reportType, setReportType] = useState("stock");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Mock data (Django API will replace later)
  const chartData = [
    { name: "Jan", value: 200 },
    { name: "Feb", value: 160 },
    { name: "Mar", value: 300 },
    { name: "Apr", value: 180 }
  ];

  const tableData = [
    { id: 1, item: "Laptops", qty: 40, amount: 120000 },
    { id: 2, item: "Printers", qty: 12, amount: 36000 },
    { id: 3, item: "Chairs", qty: 50, amount: 40000 }
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Reports
      </Typography>

      {/* Filters */}
      <Paper sx={{ padding: 3, marginBottom: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Report Type"
              fullWidth
              select
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
            >
              <MenuItem value="stock">Stock Report</MenuItem>
              <MenuItem value="sales">Sales Report</MenuItem>
              <MenuItem value="suppliers">Supplier Report</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} sm={3}>
            <TextField
              label="Start Date"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={3}>
            <TextField
              label="End Date"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={2} display="flex" alignItems="center">
            <Button variant="contained" color="primary" fullWidth>
              Generate
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Chart Section */}
      <Paper sx={{ padding: 3, marginBottom: 3 }}>
        <Typography variant="h6" gutterBottom>
          Summary Chart
        </Typography>

        <BarChart width={600} height={300} data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#1976d2" />
        </BarChart>
      </Paper>

      {/* Table Data */}
      <Paper sx={{ padding: 3 }}>
        <Typography variant="h6" gutterBottom>
          Detailed Report
        </Typography>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>ID</strong></TableCell>
                <TableCell><strong>Item</strong></TableCell>
                <TableCell><strong>Quantity</strong></TableCell>
                <TableCell><strong>Amount (KES)</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.item}</TableCell>
                  <TableCell>{row.qty}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
