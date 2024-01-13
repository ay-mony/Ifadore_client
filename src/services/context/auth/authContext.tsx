import React, { FC, createContext, useEffect, useReducer } from "react"
import AuthReducer from "./authReducer"
import {  authContextProps } from './types'

interface authProviderProps {
    children: React.ReactNode
}

const userString = localStorage.getItem('user')

const INITIAL_STATE: authContextProps = {
    user: userString ? JSON.parse(userString) : null,
    // user: null,
    loading: false,
    error: false,
    dispatch: () => {}
}

export const AuthContext = createContext<authContextProps>(INITIAL_STATE)

export const AuthContextProvider: FC<authProviderProps> = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.user))
    })

    return(
        <AuthContext.Provider value={{
            ...state,
            dispatch
        }}>
        {children}
        </AuthContext.Provider>
    )
}