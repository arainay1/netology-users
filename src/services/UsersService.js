import StorageService from '@app/services/StorageService';

export default class UsersService extends StorageService {
    constructor() {
        super();

        this.baseKey = 'users';
    }

    checkUser(user) {
        if (!user) {
            throw new Error('Empty user');
        }
    }

    getUsers() {
        return JSON.parse(this.get(this.baseKey)) || [];
    }

    addUser(user = null) {
        this.checkUser(user);

        const users = this.getUsers();
        const id = Math.random().toString(36).substr(2, 9);

        this.set(
            this.baseKey,
            JSON.stringify([
                ...users,
                {
                    ...user,
                    id
                }
            ]));
    }

    updateUser(user = null) {
        this.checkUser(user);

        const users = this.getUsers();
        const userById = users.find(item => item.id === user.id);

        this.checkUser(userById);

        this.set(
            this.baseKey,
            JSON.stringify(
                users.map(item => item.id === user.id ? { ...userById, ...user } : item)
            )
        );
    }
}
