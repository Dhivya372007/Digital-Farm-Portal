import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Bell } from 'lucide-react';

// Derive a human-readable page title from the current path
const routeTitles = {
    dashboard: 'Dashboard',
    animals: 'Animals',
    drugs: 'Drugs',
    consultation: 'Consultation',
    appointments: 'Appointments',
    settings: 'Settings',
};

function getPageTitle(pathname) {
    const segments = pathname.split('/').filter(Boolean);
    // Last meaningful segment (skip dynamic IDs)
    const last = segments[segments.length - 1];
    if (routeTitles[last]) return routeTitles[last];
    // If it's a dynamic segment like an animal ID, use parent
    if (segments.length >= 2) {
        const parent = segments[segments.length - 2];
        if (routeTitles[parent]) return routeTitles[parent];
    }
    return 'Dashboard';
}

export default function Navbar() {
    const { user } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const pageTitle = getPageTitle(location.pathname);

    const username = user?.username || 'User';
    const role = user?.role || 'guest';
    const initials = username
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);

    return (
        <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-border">
            <div className="flex items-center justify-between px-8 py-4 max-w-7xl w-full mx-auto">
                {/* Left — Page Title */}
                <h2 className="text-[20px] font-semibold text-text-primary tracking-tight">
                    {pageTitle}
                </h2>

                {/* Right — Actions */}
                <div className="flex items-center gap-4">
                    {/* Notification Bell */}
                    <button className="relative p-2 rounded-xl hover:bg-gray-50 transition-colors duration-150">
                        <Bell className="w-5 h-5 text-text-secondary" strokeWidth={1.8} />
                        {/* Optional notification dot */}
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-danger rounded-full" />
                    </button>

                    {/* Divider */}
                    <div className="w-px h-8 bg-border" />

                    {/* User Info */}
                    <div className="flex items-center gap-3">
                        <div className="text-right">
                            <p className="text-[13px] font-medium text-text-primary leading-tight">
                                {username}
                            </p>
                            <p className="text-[11px] text-text-secondary leading-tight capitalize">
                                {role}
                            </p>
                        </div>

                        {/* Initials Avatar */}
                        <button onClick={() => navigate(`/${role}/settings`)} aria-label="Open settings" className="w-9 h-9 rounded-full bg-primary-50 border border-primary-100 flex items-center justify-center transition-colors hover:bg-primary-100">
                            <span className="text-[12px] font-semibold text-primary-600">
                                {initials}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
