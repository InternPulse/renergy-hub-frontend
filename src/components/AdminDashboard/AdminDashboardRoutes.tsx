import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import Dashboard from "./components/Pages/Dashboard";
import UserManagement from "./components/Pages/UserManagement";
import OrderManagement from "./components/Pages/OrderManagement";
import Messages from "./components/Pages/Messages";
import Reports from "./components/Pages/Reports";
import Settings from "./components/Pages/Settings";
import Logout from "./components/Pages/Logout";

const AdminDashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminDashboard />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="user-management" element={<UserManagement />} />
        <Route path="order-management" element={<OrderManagement />} />
        <Route path="messages" element={<Messages />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
        <Route path="logout" element={<Logout />} />
      </Route>
    </Routes>
  );
};

export default AdminDashboardRoutes;
