import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Reports from "./pages/Reports";
import Suppliers from "./pages/Suppliers";
import LoginPage from "./pages/Login";
import Register from "./pages/Register";
import LogoutPage from "./pages/Logout";
import { AuthProvider } from "./auth/AuthContext";
import RequireAuth from "./auth/RequireAuth";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <MainLayout>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<LogoutPage />} />

            <Route path="/" element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            } />

            <Route path="/products" element={
              <RequireAuth>
                <Products />
              </RequireAuth>
            } />

            <Route path="/suppliers" element={
              <RequireAuth>
                <Suppliers />
              </RequireAuth>
            } />

            <Route path="/reports" element={
              <RequireAuth>
                <Reports />
              </RequireAuth>
            } />
          </Routes>
        </MainLayout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
