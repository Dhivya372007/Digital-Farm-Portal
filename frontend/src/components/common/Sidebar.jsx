import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
    LayoutDashboard,
    PawPrint,
    Pill,
    MessageSquare,
    Calendar,
    LogOut,
    Shield,
} from 'lucide-react';

const navConfig = {
    farmer: [
        { label: 'Dashboard', icon: LayoutDashboard, to: '/farmer/dashboard' },
        { label: 'Animals', icon: PawPrint, to: '/farmer/animals' },
        { label: 'Drug Database', icon: Pill, to: '/farmer/drugs/database' },
        { label: 'Drug Administration', icon: Pill, to: '/farmer/drugs/administration' },
        { label: 'Consultation', icon: MessageSquare, to: '/farmer/consultation' },
    ],
    vet: [
        { label: 'Dashboard', icon: LayoutDashboard, to: '/vet/dashboard' },
        { label: 'Appointments', icon: Calendar, to: '/vet/appointments' },
        { label: 'Animals', icon: PawPrint, to: '/vet/animals' },
        { label: 'Drug Database', icon: Pill, to: '/vet/drugs/database' },
    ],
    admin: [
        { label: 'Dashboard', icon: LayoutDashboard, to: '/admin/dashboard' },
    ],
};

function SidebarNavItem({ item }) {
    const location = useLocation();
    const active = location.pathname.startsWith(item.to);
    const Icon = item.icon;

    return (
        <NavLink
            to={item.to}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] transition-all duration-150 ${active
                    ? 'bg-primary-50 text-primary-600 font-medium'
                    : 'text-text-secondary hover:bg-gray-50 hover:text-text-primary'
                }`}
        >
            <Icon className="w-[18px] h-[18px] flex-shrink-0" strokeWidth={active ? 2.2 : 1.8} />
            {item.label}
        </NavLink>
    );
}

export default function Sidebar({ role }) {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const items = navConfig[role] || [];

    const handleLogout = async () => {
        await logout();
        navigate('/');
    };

    return (
        <aside className="w-[260px] min-w-[260px] h-screen sticky top-0 flex flex-col bg-white border-r border-border">
            {/* Logo */}
            <div className="px-6 pt-8 pb-6">
                <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                        <Shield className="w-4 h-4 text-white" strokeWidth={2.5} />
                    </div>
                    <div>
                        <h1 className="text-[15px] font-bold text-text-primary tracking-tight leading-none">
                            AgriSafe
                        </h1>
                        <p className="text-[11px] text-text-secondary mt-0.5 leading-none">
                            Livestock Compliance Portal
                        </p>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-3 space-y-0.5">
                {items.map((item) => (
                    <SidebarNavItem key={item.to} item={item} />
                ))}
            </nav>

            {/* Logout */}
            <div className="px-3 pb-6">
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] text-text-secondary hover:bg-red-50 hover:text-danger-600 transition-all duration-150 w-full"
                >
                    <LogOut className="w-[18px] h-[18px] flex-shrink-0" strokeWidth={1.8} />
                    Logout
                </button>
            </div>
        </aside>
    );
}
