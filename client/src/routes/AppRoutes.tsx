import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Stores from "../pages/Stores";
import StoreDetails from "../pages/StoreDetails";
import Profile from "../pages/Profile";

import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminUsers from "../pages/admin/Users";
import AdminStores from "../pages/admin/Stores";

import OwnerDashboard from "../pages/owner/OwnerDashboard";
import StoreRatings from "../pages/owner/StoreRatings";

import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/stores" element={<Stores />} />
      <Route path="/stores/:id" element={<StoreDetails />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/profile" element={<Profile />} />
      </Route>

      <Route element={<ProtectedRoute allowedRoles={["ADMIN"]} />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/stores" element={<AdminStores />} />
      </Route>

      <Route element={<ProtectedRoute allowedRoles={["STORE_OWNER"]} />}>
        <Route path="/owner/dashboard" element={<OwnerDashboard />} />
        <Route path="/owner/ratings" element={<StoreRatings />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;