import React, { createContext, useContext, useState } from 'react';
import Toast from '../components/common/Toast';

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
    const [toast, setToast] = useState(null);
    const [refreshTrigger, setRefreshTrigger] = useState(0);

    const showToast = (message, type = 'info') => {
        setToast({ message, type });
        // Auto dismiss after four seconds.
        setTimeout(() => {
            setToast(prev => prev && prev.message === message ? null : prev);
        }, 4000);
    };

    const hideToast = () => {
        setToast(null);
    };

    const triggerRefresh = () => {
        setRefreshTrigger(prev => prev + 1);
    };

    return (
        <AppContext.Provider value={{ toast, showToast, hideToast, refreshTrigger, triggerRefresh }}>
            {children}
            <Toast toast={toast} onDismiss={hideToast} />
        </AppContext.Provider>
    );
};

export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp must be used within an AppProvider');
    }
    return context;
};
