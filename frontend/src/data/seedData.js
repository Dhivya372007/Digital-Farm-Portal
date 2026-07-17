// Seed dataset for prototype initial launch

export const seedAnimals = [
    {
        id: "A-014",
        species: "Cow",
        breed: "Holstein Major",
        age: 4,
        gender: "Female",
        currentStatus: "withdrawal", // 'safe', 'withdrawal', 'violation'
        currentDrugAdministrationId: "DA-101",
        createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: "A-008",
        species: "Cow",
        breed: "Angus",
        age: 2,
        gender: "Male",
        currentStatus: "safe",
        currentDrugAdministrationId: null,
        createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: "G-021",
        species: "Goat",
        breed: "Boer",
        age: 1,
        gender: "Female",
        currentStatus: "safe",
        currentDrugAdministrationId: null,
        createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
        updatedAt: new Date().toISOString()
    }
];

export const seedDrugs = [
    { id: "DR-001", name: "Oxytetracycline", species: "Cattle", withdrawalDays: 7, description: "Broad-spectrum antibiotic.", active: true },
    { id: "DR-002", name: "Amoxicillin", species: "Cattle", withdrawalDays: 5, description: "Penicillin-type antibiotic.", active: true },
    { id: "DR-003", name: "Penicillin", species: "Cattle", withdrawalDays: 10, description: "Antibacterial medicine.", active: true },
    { id: "DR-004", name: "Enrofloxacin", species: "Cattle", withdrawalDays: 14, description: "Fluoroquinolone antibiotic.", active: true },
    { id: "DR-005", name: "Ivermectin", species: "Cattle", withdrawalDays: 28, description: "Antiparasitic medicine.", active: true }
];

export const seedDrugAdministrations = [
    {
        id: "DA-101",
        animalId: "A-014",
        drugId: "DR-001",
        dose: "15ml",
        administrationDate: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
        withdrawalEndDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
        remainingDays: 3,
        status: "withdrawal",
        createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString()
    }
];

export const seedAppointments = [
    {
        id: "C-201",
        farmer: "John Farmer",
        animalId: "A-014",
        preferredDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        preferredTime: "10:00 AM",
        reason: "Routine MRL compliance audit",
        notes: "Request checks on current milking group",
        status: "Pending",
        createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
    }
];

export const seedAlerts = [];

export const seedActivityLogs = [
    {
        id: "AC-301",
        createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
        type: "Drug Administered",
        description: "Oxytetracycline administered to Cow A-014."
    },
    {
        id: "AC-302",
        createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
        type: "Animal Registered",
        description: "Cow A-014 registered in AgriSafe."
    }
];
