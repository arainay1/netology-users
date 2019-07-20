export default class StorageService {
    constructor() {
        this.baseKey = 'key';
    }

    get(key = '') {
        return localStorage.getItem(key);
    }

    set(key = '', value = '') {
        localStorage.setItem(key, value);
    }
}
