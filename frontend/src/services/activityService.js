import { apiSuccess } from './api';
import { storageService } from './storageService';

export const activityService = {
    getActivities: () => apiSuccess(storageService.get('activityLogs', [])),
    logActivity: (activity) => {
        const logs = storageService.get('activityLogs', []);
        const entry = { id: `AC-${Date.now()}`, type: 'Activity', createdAt: new Date().toISOString(), ...activity };
        storageService.set('activityLogs', [entry, ...logs]);
        return apiSuccess(entry, 'Activity logged.');
    },
    clearActivities: () => { storageService.set('activityLogs', []); return apiSuccess(null, 'Activities cleared.'); },
};
