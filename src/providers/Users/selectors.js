export default function getSelectors(state) {
    return {
        getUsers: () => state.users,
        getUserById: (id) => state.users.find(item => item.id === id),
        isError: () => state.isError
    };
}
