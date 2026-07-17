// Pure utility functions for date calculations. No UI or storage references.

export const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
};

export const addDays = (dateString, days) => {
    const date = new Date(dateString);
    date.setDate(date.getDate() + days);
    return date.toISOString();
};

export const getDaysDifference = (fromIso, toIso) => {
    const diffTime = new Date(toIso) - new Date(fromIso);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
};

export const getToday = () => new Date().toISOString().slice(0, 10);
