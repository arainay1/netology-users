import { GET_USERS_FAILURE, GET_USERS_INIT, GET_USERS_SUCCESS } from './constants';

export default function reducer(state, action) {
    switch (action.type) {
        case GET_USERS_INIT:
            return { ...state, isError: false };
        case GET_USERS_SUCCESS:
            return {
                users: action.payload,
                isError: false
            };
        case GET_USERS_FAILURE:
            return { ...state, isError: true };
        default:
            return state;
    }
}
