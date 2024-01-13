import { authActionType, authStateType } from "./types"

const AuthReducer = (state: authStateType, action: authActionType) => {
    switch (action.type) {
        case 'LOGIN_START':
            return{
                user: null,
                loading: true,
                error: false,
            }
        case 'LOGIN_SUCCESS':
            return{
                user: action.payload,
                loading: false,
                error: false,
            }
        case 'LOGIN_FAIL':
            return{
                user: null,
                loading: false,
                error: true,
            }

        case 'LOGOUT':
            return{
                user: null,
                loading: false,
                error: false,
            }

        default:
            return state;
    }
}

export default AuthReducer
