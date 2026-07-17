// Pure validation functions.

export const validateAnimalId = (id) => {
    if (!id) return 'Animal ID is required';
    const animalIdRegex = /^[A-Z]-[0-9]+$/i;
    // E.g. A-014, G-102
    if (!animalIdRegex.test(id)) {
        return 'Animal ID must match format [Letter]-[Number] (e.g. A-012)';
    }
    return '';
};

export const validateNotEmpty = (value, fieldName = 'Field') => {
    if (value === undefined || value === null || String(value).trim() === '') {
        return `${fieldName} is required`;
    }
    return '';
};

export const validatePositiveNumber = (value, fieldName = 'Value') => {
    const num = Number(value);
    if (isNaN(num) || num <= 0) {
        return `${fieldName} must be a positive number`;
    }
    return '';
};
