import React, { FC, createContext, useReducer } from "react"
import OthersTaxReducer from "./othersReducer"
import { othersContextProps } from './types'

interface eProviderProps {
    children: React.ReactNode
}


const INITIAL_STATE:othersContextProps = {
    others: [],
    loading: false,
    error: false,
    dispatch: () => {}
}

export const OthersTaxContext = createContext<othersContextProps>(INITIAL_STATE)

export const OthersTaxContextProvider: FC<eProviderProps> = ({children}) => {
    const [state, dispatch] = useReducer(OthersTaxReducer, INITIAL_STATE)
    return(
        <OthersTaxContext.Provider value={{
            ...state,
            dispatch
        }}>
        {children}
        </OthersTaxContext.Provider>
    )
}