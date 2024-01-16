import { createContext, useReducer, FC } from "react"
import NonRevenueReducer from "./nonrevenueReducer"

interface nonrevenueType {
    children: React.ReactNode
}

const INITIAL_STATE = {
    nonrevenue: [],
    loading: false,
    error: false,
    dispatch: () => {}
}

export const NonRevenueContext = createContext(INITIAL_STATE)

export const NonRevenueContextProvider: FC<nonrevenueType> = ({children}) => {
    const [state, dispatch] = useReducer(NonRevenueReducer, INITIAL_STATE)

    return(
        <NonRevenueContext.Provider value={{
            ...state,
            dispatch
        }}>
            {children}
        </NonRevenueContext.Provider>
    )
}
