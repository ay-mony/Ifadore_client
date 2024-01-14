import { createContext, useReducer, ReactNode, FC, Dispatch } from "react"
import polltaxReducer, { polltaxActionType } from "./polltaxReducer"


interface PolltaxContextProps {
    polltax: any; 
    loading: boolean;
    error: boolean;
    dispatch?: Dispatch<polltaxActionType> 
  }

interface PolltaxContextProviderProps {
    children: ReactNode;
  }

const INITIAL_STATE: PolltaxContextProps = {
    polltax: [],
    loading: false,
    error: false,
    dispatch: () => {}
}

export const PolltaxContext = createContext<PolltaxContextProps>(INITIAL_STATE);

const PolltaxContextProvider: FC<PolltaxContextProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(polltaxReducer, INITIAL_STATE);
  
    return (
      <PolltaxContext.Provider value={{ 
        polltax: state.polltax,
        loading: state.loading, 
        error: state.error,
        dispatch }}>
        {children}
      </PolltaxContext.Provider>
    );
  };

  export default PolltaxContextProvider
  