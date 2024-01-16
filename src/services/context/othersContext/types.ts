import { Dispatch } from "react";

export interface othersStateType {
    others: any,
    loading: boolean,
    error: boolean,
    dispatch?: Dispatch<othersActionType> 
}

export interface othersActionType {
    type: 'GET_OTHERS_START' | 'GET_OTHERS_SUCCESS' | 'GET_OTHERS_FAIL' | 'CREATE_OTHERS_START' | 'CREATE_OTHERS_SUCESS' | 'CREATE_OTHERS_FAIL' 
    payload: any
}

export interface othersContextProps {
    others: any, 
    loading: boolean;
    error: boolean;
    dispatch?: Dispatch<othersActionType> 
  }