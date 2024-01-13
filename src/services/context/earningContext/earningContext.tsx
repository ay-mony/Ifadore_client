import React, { FC, createContext, useReducer } from "react"
import EarningTaxReducer from "./earningReducer"
import { earningContextProps } from './types'

interface eProviderProps {
    children: React.ReactNode
}


const INITIAL_STATE = {
    earning: [],
    loading: false,
    error: false,
    dispatch: () => {}
}

export const EarningTaxContext = createContext<earningContextProps>(INITIAL_STATE)

export const EarningTaxContextProvider: FC<eProviderProps> = ({children}) => {
    const [state, dispatch] = useReducer(EarningTaxReducer, INITIAL_STATE)
    return(
        <EarningTaxContext.Provider value={{
            ...state,
            dispatch
        }}>
        {children}
        </EarningTaxContext.Provider>
    )
}