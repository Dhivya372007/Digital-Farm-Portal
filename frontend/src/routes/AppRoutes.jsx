import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Login from '../pages/Login';
import FarmerDashboard from '../pages/FarmerDashboard';
import Register from '../pages/Register';
import AnimalProfile from '../pages/AnimalProfile';
import DrugAdministration from '../pages/DrugAdministration';
import AlertsPage from '../pages/AlertsPage';
import VetDashboard from '../pages/VetDashboard';
import AdminDashboard from '../pages/AdminDashboard';
import Sidebar from '../components/common/Sidebar';
import Navbar from '../components/common/Navbar';

/**
 * Shared role-guarded layout shell.
 * Renders Sidebar + Navbar + scrollable page container with Outlet.
 */
const RoleLayout = ({ allowedRole }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center bg-stone-50">
                <div className="flex flex-col items-center gap-3">
                    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                    <p className="text-[14px] text-text-secondary">Loading session…</p>
                </div>
            </div>
        );
    }

    if (!user || user.role !== allowedRole) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="flex min-h-screen bg-stone-50">
            <Sidebar role={allowedRole} />
            <div className="flex-1 flex flex-col min-w-0">
                <Navbar />
                <main className="flex-1 p-8 max-w-7xl w-full mx-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default function AppRoutes() {
    return (
        <Routes>
            {/* Public */}
            <Route path="/" element={<Login />} />

            {/* Farmer Routes */}
            <Route path="/farmer" element={<RoleLayout allowedRole="farmer" />}>
                <Route index element={<Navigate to="/farmer/dashboard" replace />} />
                <Route path="dashboard" element={<FarmerDashboard />} />
                <Route path="animals" element={<Register />} />
                <Route path="animals/:animalId" element={<AnimalProfile />} />
                <Route path="drugs" element={<DrugAdministration />} />
                <Route path="consultation" element={<AlertsPage />} />
            </Route>

            {/* Vet Routes */}
            <Route path="/vet" element={<RoleLayout allowedRole="vet" />}>
                <Route index element={<Navigate to="/vet/dashboard" replace />} />
                <Route path="dashboard" element={<VetDashboard />} />
                <Route path="appointments" element={<AlertsPage />} />
                <Route path="animals" element={<Register />} />
                <Route path="animals/:animalId" element={<AnimalProfile />} />
                <Route path="drugs" element={<DrugAdministration />} />
            </Route>

            {/* Admin Routes */}
            <Route path="/admin" element={<RoleLayout allowedRole="admin" />}>
                <Route index element={<Navigate to="/admin/dashboard" replace />} />
                <Route path="dashboard" element={<AdminDashboard />} />
            </Route>

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}
