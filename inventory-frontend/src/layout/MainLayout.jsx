import { Box, Toolbar } from "@mui/material";
import Sidebar from "../components/Sidebar";
import TopNavbar from "../components/TopNavbar";

export default function MainLayout({ children }) {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box sx={{ flexGrow: 1 }}>
        <TopNavbar />

        <Box
          component="main"
          sx={{
            p: 3,
            backgroundColor: "#f5f6fa",
            minHeight: "100vh",
            mt: "64px"  // Push content below navbar
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
