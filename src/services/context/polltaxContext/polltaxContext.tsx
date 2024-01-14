import { createContext, useReducer, ReactNode, FC, Dispatch } from "react"
import polltaxReducer, { polltaxActionType } from "./polltaxReducer"


interface PolltaxContextProps {
<<<<<<< HEAD
    polltax: any; 
=======
    polltax: any[]; 
>>>>>>> 07d8d54c1f022957c579c0ebb3a016020a3827d9
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
<<<<<<< HEAD
    dispatch: () => {}
=======
>>>>>>> 07d8d54c1f022957c579c0ebb3a016020a3827d9
}

export const PolltaxContext = createContext<PolltaxContextProps>(INITIAL_STATE);

const PolltaxContextProvider: FC<PolltaxContextProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(polltaxReducer, INITIAL_STATE);
  
    return (
<<<<<<< HEAD
      <PolltaxContext.Provider value={{ 
        polltax: state.polltax,
        loading: state.loading, 
        error: state.error,
        dispatch }}>
=======
      <PolltaxContext.Provider value={{ ...state, dispatch }}>
>>>>>>> 07d8d54c1f022957c579c0ebb3a016020a3827d9
        {children}
      </PolltaxContext.Provider>
    );
  };

  export default PolltaxContextProvider
  