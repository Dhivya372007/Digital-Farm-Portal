import { apiFailure, apiSuccess } from './api';
import { storageService } from './storageService';
import { activityService } from './activityService';

export const consultationService = {
    getAppointments: () => apiSuccess(storageService.get('appointments', [])),
    bookAppointment: async (appointment) => {
        const appointments = storageService.get('appointments', []);
        const entry = { id: `AP-${Date.now()}`, status: 'Pending', createdAt: new Date().toISOString(), ...appointment };
        storageService.set('appointments', [entry, ...appointments]);
        await activityService.logActivity({ type: 'Consultation Booked', description: 'Consultation request booked.' });
        return apiSuccess(entry, 'Consultation booked.');
    },
    updateAppointment: async (id, changes) => {
        const appointments = storageService.get('appointments', []); const index = appointments.findIndex((item) => item.id === id);
        if (index < 0) return apiFailure('Appointment not found.');
        appointments[index] = { ...appointments[index], ...changes }; storageService.set('appointments', appointments);
        return apiSuccess(appointments[index], 'Appointment updated.');
    },
    cancelAppointment: (id) => consultationService.updateAppointment(id, { status: 'Cancelled' }),
};
