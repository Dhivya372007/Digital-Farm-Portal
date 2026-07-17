import { apiFailure, apiSuccess } from './api';
import { storageService } from './storageService';
import { addDays, getDaysDifference } from '../utils/dateHelpers';
import { activityService } from './activityService';
import { animalService } from './animalService';

const today = new Date().toISOString().slice(0, 10);
const remaining = (endDate) => Math.max(0, getDaysDifference(today, endDate));

export const drugService = {
    getDrugs: () => apiSuccess(storageService.get('drugs', [])),
    createDrug: (data) => {
        const drug = { id: `DR-${Date.now()}`, active: true, ...data };
        storageService.set('drugs', [...storageService.get('drugs', []), drug]);
        return apiSuccess(drug, 'Drug added successfully.');
    },
    updateDrug: (id, changes) => {
        const drugs = storageService.get('drugs', []); const index = drugs.findIndex((drug) => drug.id === id);
        if (index < 0) return apiFailure('Drug not found.');
        drugs[index] = { ...drugs[index], ...changes }; storageService.set('drugs', drugs); return apiSuccess(drugs[index], 'Drug updated successfully.');
    },
    deleteDrug: (id) => { storageService.set('drugs', storageService.get('drugs', []).filter((drug) => drug.id !== id)); return apiSuccess(null, 'Drug deleted successfully.'); },
    calculateWithdrawal: (administrationDate, withdrawalDays) => {
        const withdrawalEndDate = addDays(administrationDate, Number(withdrawalDays));
        return { withdrawalEndDate, remainingDays: remaining(withdrawalEndDate), status: remaining(withdrawalEndDate) > 0 ? 'withdrawal' : 'safe' };
    },
    administerDrug: async ({ animalId, drugId, dose, administrationDate }) => {
        const drug = storageService.get('drugs', []).find((item) => item.id === drugId);
        if (!drug) return apiFailure('Drug not found.');
        const calculation = drugService.calculateWithdrawal(administrationDate, drug.withdrawalDays);
        const administration = { id: `DA-${Date.now()}`, animalId, drugId, dose, administrationDate, ...calculation, createdAt: new Date().toISOString() };
        storageService.set('drugAdministrations', [administration, ...storageService.get('drugAdministrations', [])]);
        await animalService.updateAnimal(animalId, { currentStatus: calculation.status, currentDrugAdministrationId: administration.id });
        await activityService.logActivity({ type: 'Drug Administered', description: `${drug.name} administered to ${animalId}.` });
        await activityService.logActivity({ type: 'Withdrawal Calculated', description: `${drug.withdrawalDays}-day withdrawal calculated for ${animalId}.` });
        return apiSuccess(administration, 'Withdrawal calculated successfully.');
    },
    getDrugHistory: (animalId) => apiSuccess(storageService.get('drugAdministrations', []).filter((item) => item.animalId === animalId)),
};
