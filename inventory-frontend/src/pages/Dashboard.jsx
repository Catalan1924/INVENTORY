import {
  Box,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider
} from "@mui/material";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import InventoryIcon from "@mui/icons-material/Inventory";
import GroupIcon from "@mui/icons-material/Group";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

export default function Dashboard() {
  const stats = {
    totalProducts: 128,
    lowStock: 7,
    suppliers: 14,
    inventoryValue: 452000
  };

  const lowStockItems = [
    { name: "HP Laptop Charger", stock: 3 },
    { name: "A4 Printing Paper", stock: 5 },
    { name: "Office Chairs", stock: 2 }
  ];

  const recentActivities = [
    "Added 20 units of USB Cables",
    "Stock level updated for Office Chairs",
    "New supplier added: Tech Supplies Ltd",
    "Generated Monthly Inventory Report"
  ];

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        p: 2,
        backgroundColor: "#f5f6fa",
      }}
    >
      <Typography variant="h4" mb={3}>
        Dashboard
      </Typography>

      {/* KPI CARDS */}
      <Grid container spacing={2}>
        {[ 
          {
            title: "Total Products",
            value: stats.totalProducts,
            icon: <InventoryIcon color="primary" fontSize="large" />
          },
          {
            title: "Low Stock",
            value: stats.lowStock,
            icon: <TrendingDownIcon color="error" fontSize="large" />
          },
          {
            title: "Suppliers",
            value: stats.suppliers,
            icon: <GroupIcon color="success" fontSize="large" />
          },
          {
            title: "Inventory Value (KES)",
            value: stats.inventoryValue.toLocaleString(),
            icon: <MonetizationOnIcon color="warning" fontSize="large" />
          }
        ].map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                height: "130px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 1,
              }}
            >
              {card.icon}
              <Typography variant="h6">{card.title}</Typography>
              <Typography variant="h4">{card.value}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* BOTTOM SECTIONS */}
      <Grid container spacing={2} mt={2} sx={{ height: "calc(100vh - 260px)" }}>
        
        {/* LOW STOCK */}
        <Grid item xs={12} md={4} sx={{ height: "100%" }}>
          <Paper elevation={3} sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <Box p={2}>
              <Typography variant="h6">Low Stock Alerts</Typography>
            </Box>
            <Divider />
            <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
              <List>
                {lowStockItems.map((item, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={item.name} secondary={`Stock: ${item.stock}`} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Paper>
        </Grid>

        {/* RECENT ACTIVITIES */}
        <Grid item xs={12} md={4} sx={{ height: "100%" }}>
          <Paper elevation={3} sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <Box p={2}>
              <Typography variant="h6">Recent Activities</Typography>
            </Box>
            <Divider />
            <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
              <List>
                {recentActivities.map((activity, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={activity} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Paper>
        </Grid>

        {/* CHARTS */}
        <Grid item xs={12} md={4} sx={{ height: "100%" }}>
          <Paper elevation={3} sx={{ height: "100%", p: 2 }}>
            <Typography variant="h6">Sales & Stock Charts</Typography>
            <Box mt={2} sx={{ height: "85%" }}>
              {/* Insert charts here */}
            </Box>
          </Paper>
        </Grid>

      </Grid>
    </Box>
  );
}
