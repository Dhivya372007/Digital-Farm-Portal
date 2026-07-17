import { apiSuccess } from './api';
import { storageService } from './storageService';

export const alertService = {
    getAlerts: () => apiSuccess(storageService.get('alerts', []).filter((alert) => !alert.dismissed)),
    createAlert: (alert) => {
        const alerts = storageService.get('alerts', []);
        const entry = { id: `AL-${Date.now()}`, dismissed: false, createdAt: new Date().toISOString(), ...alert };
        storageService.set('alerts', [entry, ...alerts]);
        return apiSuccess(entry, 'Alert created.');
    },
    dismissAlert: (id) => {
        const alerts = storageService.get('alerts', []).map((alert) => alert.id === id ? { ...alert, dismissed: true } : alert);
        storageService.set('alerts', alerts);
        return apiSuccess(null, 'Alert dismissed.');
    },
    clearAlerts: () => { storageService.set('alerts', []); return apiSuccess(null, 'Alerts cleared.'); },
};
