// Pure helper for MRL Lookup calculations. Needs to accept drug and species.

// Mock database mapping drug -> species -> withdrawal days
const MRL_WITHDRAWAL_DATABASE = {
    Oxytetracycline: {
        Cow: 7,
        Goat: 7,
        Sheep: 7
    },
    Amoxicillin: {
        Cow: 5,
        Pig: 5
    },
    Penicillin: {
        Cow: 10,
        Goat: 8
    },
    Enrofloxacin: {
        Cow: 14,
        Chicken: 9
    },
    Ivermectin: {
        Cow: 28,
        Sheep: 21
    }
};

export const getWithdrawalPeriod = (drugName, species) => {
    const drugData = MRL_WITHDRAWAL_DATABASE[drugName];
    if (!drugData) return 0;
    return drugData[species] || 0;
};
