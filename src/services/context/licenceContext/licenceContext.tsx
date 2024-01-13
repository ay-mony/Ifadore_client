import React, { FC, createContext, useReducer } from "react"
import LicenceReducer from "./licenceReducer"
import { licenceContextProps } from './types'

interface ProviderProp {
    children: React.ReactNode
}


const INITIAL_STATE:licenceContextProps = {
    licence: [],
    loading: false,
    error: false,
    dispatch: () => {}
}

export const LicenceTaxContext = createContext<licenceContextProps>(INITIAL_STATE)

export const LicenceTaxContextProvider: FC<ProviderProp> = ({children}) => {
    const [state, dispatch] = useReducer(LicenceReducer, INITIAL_STATE)
    return(
        <LicenceTaxContext.Provider value={{
            ...state,
            dispatch
        }}>
        {children}
        </LicenceTaxContext.Provider>
    )
}