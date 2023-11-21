// localStorageUtils.ts

export const saveLocalStorage = (key: string, data: any[]) => {
    try {
        const serializedData = JSON.stringify(data);
        localStorage.setItem(key, serializedData);
    } catch (error) {
        console.error("Error saving data to local storage:", error);
    }
};

export const getLocalStorage = (key: string): any[] | null => {
    try {
        const serializedData = localStorage.getItem(key);
        if (serializedData === null) {
            return null;
        }
        return JSON.parse(serializedData);
    } catch (error) {
        console.error("Error getting data from local storage:", error);
        return null;
    }
};
export const removeLocalStorage = (key: string, data: any[]) => {
    try {
        const serializedData = JSON.stringify(data);
        localStorage.setItem(key, serializedData);
    } catch (error) {
        console.error("Error saving data to local storage:", error);
    }
};
