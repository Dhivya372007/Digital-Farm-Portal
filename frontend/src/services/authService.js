import { apiSuccess } from './api';
import { storageService } from './storageService';

export const authService = {
    login: (role, username) => {
        const user = { role, username, loginTime: new Date().toISOString() };
        storageService.set('currentUser', user);
        return apiSuccess(user, 'Signed in successfully.');
    },
    logout: () => {
        storageService.remove('currentUser');
        return apiSuccess(null, 'Signed out successfully.');
    },
    getCurrentUser: () => apiSuccess(storageService.get('currentUser', null)),
    getRole: () => storageService.get('currentUser', null)?.role || null,
    isAuthenticated: () => Boolean(storageService.get('currentUser', null)),
};
