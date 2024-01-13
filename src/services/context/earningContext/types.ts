import { Dispatch } from "react";

export interface earningStateType {
    earning: any,
    loading: boolean,
    error: boolean,
}

export interface earningActionType {
    type: 'GET_EARNING_START' | 'GET_EARNING_SUCCESS' | 'GET_EARNING_FAIL' | 'CREATE_EARNING_START' | 'CREATE_EARNING_SUCESS' | 'CREATE_EARNING_FAIL' 
    payload: any
}

export interface earningContextProps {
    earning: any, 
    loading: boolean;
    error: boolean;
    dispatch?: Dispatch<earningActionType> 
  }