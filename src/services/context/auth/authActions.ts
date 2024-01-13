export const loginStart = () => ({
    type: 'LOGIN_START'
})

export const loginSuccess = (user:any) => ({
    type: 'LOGIN_SUCCESS',
    payload: user
})

export const loginFail = (error: any) => ({
    type: 'LOGIN_FAIL',
    payload: error
})

export const logout = () => ({
    type: 'LOGOUT',
    payload: null
})

