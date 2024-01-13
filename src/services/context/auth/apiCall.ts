import axios from 'axios'
import { loginFail, loginStart, loginSuccess, logout } from './authActions'


const url = 'http://localhost:8800/api/auth/login'

export const loginUser = async (user:any, dispatch: any) => {
    dispatch(loginStart())

    try {
        const res = await axios.post(url, user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFail(error))
    }
}


export const logoutUser = (dispatch: any) => {
    dispatch(logout())
}
