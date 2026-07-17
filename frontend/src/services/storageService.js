// Local storage wrapper service. Only services should use storage directly.
const APP_PREFIX = 'agrisafe_';

export const storageService = {
    get: (key, defaultValue = null) => {
        try {
            const value = localStorage.getItem(APP_PREFIX + key);
            return value ? JSON.parse(value) : defaultValue;
        } catch (e) {
            console.error(`Error reading ${key} from storage`, e);
            return defaultValue;
        }
    },

    set: (key, value) => {
        try {
            localStorage.setItem(APP_PREFIX + key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.error(`Error writing ${key} to storage`, e);
            return false;
        }
    },

    remove: (key) => {
        try {
            localStorage.removeItem(APP_PREFIX + key);
            return true;
        } catch (e) {
            console.error(`Error removing ${key} from storage`, e);
            return false;
        }
    },

    clear: () => {
        try {
            Object.keys(localStorage).filter((key) => key.startsWith(APP_PREFIX)).forEach((key) => localStorage.removeItem(key));
            return true;
        } catch (e) {
            console.error('Error clearing localStorage', e);
            return false;
        }
    }
};
