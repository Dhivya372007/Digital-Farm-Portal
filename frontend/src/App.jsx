import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { AppProvider } from './context/AppContent'
import AppRoutes from './routes/AppRoutes'
import { storageService } from './services/storageService'
import { seedActivityLogs, seedAlerts, seedAnimals, seedAppointments, seedDrugAdministrations, seedDrugs } from './data/seedData'

const initializeSeedData = () => {
    const seeds = { animals: seedAnimals, drugs: seedDrugs, drugAdministrations: seedDrugAdministrations, appointments: seedAppointments, alerts: seedAlerts, activityLogs: seedActivityLogs };
    Object.entries(seeds).forEach(([key, value]) => {
        if (storageService.get(key, null) === null) storageService.set(key, value);
    });
};

function App() {
    useEffect(() => { initializeSeedData(); }, []);
    return (
        <BrowserRouter>
            <AuthProvider>
                <AppProvider>
                    <AppRoutes />
                </AppProvider>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default App
