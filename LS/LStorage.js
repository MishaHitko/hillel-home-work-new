export const LStorage = {
    get(fieldName) {
        let usersFromLS = JSON.parse(localStorage.getItem(fieldName));

        if (!usersFromLS) {
            usersFromLS = [];
        }

        return usersFromLS
    },
    set(fieldName, item) {
        if (Array.isArray(item)) {
            localStorage.setItem(fieldName, JSON.stringify(item));
            return;
        };

        const usersFromLS = this.get(fieldName);
        usersFromLS.push(item);
        localStorage.setItem(fieldName, JSON.stringify(usersFromLS));
    }
};