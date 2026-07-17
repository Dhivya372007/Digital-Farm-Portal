import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Shield, ArrowRight } from 'lucide-react';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (role) => {
        const name = username.trim() || 'Demo User';
        const response = await login(role, name);
        if (response.success) navigate(`/${role}/dashboard`);
    };

    return (
        <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="flex items-center justify-center gap-3 mb-10">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                        <Shield className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </div>
                    <div>
                        <h1 className="text-[22px] font-bold text-text-primary tracking-tight leading-none">
                            AgriSafe
                        </h1>
                        <p className="text-[12px] text-text-secondary mt-0.5 leading-none">
                            Livestock Compliance Portal
                        </p>
                    </div>
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl border border-border p-8">
                    <h2 className="text-[20px] font-semibold text-text-primary mb-1">
                        Welcome back
                    </h2>
                    <p className="text-[14px] text-text-secondary mb-6">
                        Sign in to access your workspace
                    </p>

                    {/* Inputs */}
                    <div className="space-y-4 mb-8">
                        <div>
                            <label className="block text-[13px] font-medium text-text-primary mb-1.5">
                                Username
                            </label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter any username"
                                className="w-full px-4 py-2.5 rounded-xl border border-border text-[14px] text-text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-150"
                            />
                        </div>
                        <div>
                            <label className="block text-[13px] font-medium text-text-primary mb-1.5">
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter any password"
                                className="w-full px-4 py-2.5 rounded-xl border border-border text-[14px] text-text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-150"
                            />
                        </div>
                    </div>

                    {/* Role Buttons */}
                    <div className="space-y-3">
                        <button
                            onClick={() => handleLogin('farmer')}
                            className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-primary text-white text-[14px] font-medium hover:bg-primary-700 transition-colors duration-150"
                        >
                            Continue as Farmer
                            <ArrowRight className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => handleLogin('vet')}
                            className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-border text-text-primary text-[14px] font-medium hover:bg-gray-50 transition-colors duration-150"
                        >
                            Continue as Vet
                            <ArrowRight className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => handleLogin('admin')}
                            className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-border text-text-primary text-[14px] font-medium hover:bg-gray-50 transition-colors duration-150"
                        >
                            Continue as Admin
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <p className="text-center text-[12px] text-text-secondary mt-6">
                    Demo mode — no real authentication required
                </p>
            </div>
        </div>
    );
}
