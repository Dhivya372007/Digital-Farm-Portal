import { apiFailure, apiSuccess } from './api';
import { storageService } from './storageService';
import { activityService } from './activityService';
import { alertService } from './alertService';

const getList = () => storageService.get('animals', []);

export const animalService = {
    getAnimals: () => apiSuccess(getList()),
    getAnimalById: (id) => {
        const animal = getList().find((item) => item.id === id);
        return animal ? apiSuccess(animal) : apiFailure('Animal not found.');
    },
    createAnimal: async (data) => {
        const animals = getList();
        if (animals.some((animal) => animal.id.toLowerCase() === data.id.toLowerCase())) return apiFailure('An animal with this ID already exists.');
        const animal = { currentStatus: 'safe', currentDrugAdministrationId: null, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), ...data };
        storageService.set('animals', [...animals, animal]);
        await activityService.logActivity({ type: 'Animal Registered', description: `${animal.species} ${animal.id} registered.` });
        return apiSuccess(animal, 'Animal registered successfully.');
    },
    updateAnimal: (id, changes) => {
        const animals = getList(); const index = animals.findIndex((animal) => animal.id === id);
        if (index < 0) return apiFailure('Animal not found.');
        animals[index] = { ...animals[index], ...changes, updatedAt: new Date().toISOString() }; storageService.set('animals', animals);
        return apiSuccess(animals[index], 'Animal updated successfully.');
    },
    deleteAnimal: (id) => { storageService.set('animals', getList().filter((animal) => animal.id !== id)); return apiSuccess(null, 'Animal deleted successfully.'); },
    searchAnimals: (query) => {
        const value = query.trim().toLowerCase();
        return apiSuccess(getList().filter((animal) => [animal.id, animal.species, animal.breed].some((item) => item.toLowerCase().includes(value))));
    },
    filterAnimals: (status) => apiSuccess(status === 'all' ? getList() : getList().filter((animal) => animal.currentStatus === status)),
    attemptSale: async (animalId) => {
        const animal = getList().find((item) => item.id === animalId);
        if (!animal) return apiFailure('Animal not found.');
        const administrations = storageService.get('drugAdministrations', []);
        const administration = administrations.find((item) => item.id === animal.currentDrugAdministrationId);
        const remainingDays = administration?.remainingDays ?? 0;
        await activityService.logActivity({ type: 'Sale Attempt', description: `Sale attempted for ${animal.id}.` });
        if (remainingDays > 0) {
            await animalService.updateAnimal(animalId, { currentStatus: 'violation' });
            const message = `${animal.id} cannot be sold. ${remainingDays} withdrawal day${remainingDays === 1 ? '' : 's'} remaining.`;
            await alertService.createAlert({ type: 'danger', title: 'Sale Blocked', message });
            await activityService.logActivity({ type: 'Sale Blocked', description: message });
            return apiFailure('Sale blocked.', { remainingDays, animalId });
        }
        await animalService.updateAnimal(animalId, { currentStatus: 'safe' });
        await activityService.logActivity({ type: 'Sale Successful', description: `${animal.id} is safe to sell.` });
        return apiSuccess({ animalId }, 'Sale successful. Animal is safe to sell.');
    },
};
