import axios from 'axios'
import { loginFail, loginStart, loginSuccess, logout } from './authActions'
import { baseUrl } from '../../utils/url'


export const loginUser = async (user:any, dispatch: any) => {
    dispatch(loginStart())

    try {
        const res = await axios.post(baseUrl + 'auth/login', user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFail(error))
    }
}


export const logoutUser = (dispatch: any) => {
    dispatch(logout())
}
