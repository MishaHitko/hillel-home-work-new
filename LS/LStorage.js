export const LStorage = {
    get(fieldName) {
       return JSON.parse(localStorage.getItem(fieldName)) || [];
    },
    set(fieldName, item) {
        localStorage.setItem(fieldName, JSON.stringify(item));
    }
};