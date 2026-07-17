import { createContext, useContext, useEffect, useState } from 'react';
import { authService } from '../services/authService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        authService.getCurrentUser().then((response) => setUser(response.data)).finally(() => setLoading(false));
    }, []);

    const login = async (role, username) => {
        const response = await authService.login(role, username);
        if (response.success) setUser(response.data);
        return response;
    };
    const logout = async () => {
        const response = await authService.logout();
        if (response.success) setUser(null);
        return response;
    };

    return <AuthContext.Provider value={{ user, login, logout, loading }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;
};
