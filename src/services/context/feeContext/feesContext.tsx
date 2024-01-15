import { FC, createContext, useReducer } from "react"
import { feeStateType } from "./types"
import FeesReducer from "./feesReducer"

interface feeContextType {
    children: React.ReactNode
}

const INITIAL_STATE:feeStateType = {
    fees: [],
    error: false,
    loading: false,
    dispatch: () => {}
}

export const FeesContext = createContext<feeStateType>(INITIAL_STATE)

export const FeesContextProvider: FC<feeContextType> = ({children}) => {

    const [state, dispatch] = useReducer(FeesReducer, INITIAL_STATE)
    
    return(
        <FeesContext.Provider value={{
            ...state, 
            dispatch}}>
            {children}
        </FeesContext.Provider>
    )
}