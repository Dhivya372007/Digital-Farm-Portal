const delay = (ms = 350) => new Promise((resolve) => setTimeout(resolve, ms));

export const apiSuccess = async (data, message = '') => {
    await delay();
    return { success: true, message, data };
};

export const apiFailure = async (message, error = {}) => {
    await delay();
    return { success: false, message, error };
};
