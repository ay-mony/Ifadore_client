import React, { FC, createContext, useReducer } from "react"
import RentTaxReducer from "./rentReducer"
import {rentContextProps } from './types'

interface eProviderProps {
    children: React.ReactNode
}


const INITIAL_STATE:rentContextProps = {
    rent: [],
    loading: false,
    error: false,
    dispatch: () => {}
}

export const RentTaxContext = createContext<rentContextProps>(INITIAL_STATE)

export const RentTaxContextProvider: FC<eProviderProps> = ({children}) => {
    const [state, dispatch] = useReducer(RentTaxReducer, INITIAL_STATE)
    return(
        <RentTaxContext.Provider value={{
            ...state,
            dispatch
        }}>
        {children}
        </RentTaxContext.Provider>
    )
}