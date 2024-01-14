import { Dispatch } from "react";

export interface rentStateType {
    rent: any,
    loading: boolean,
    error: boolean,
    dispatch?: Dispatch<rentActionType> 
}

export interface rentActionType {
    type: 'GET_RENT_START' | 'GET_RENT_SUCCESS' | 'GET_RENT_FAIL' | 'CREATE_RENT_START' | 'CREATE_RENT_SUCESS' | 'CREATE_RENT_FAIL'  
    payload: any
}

export interface rentContextProps {
    rent: any, 
    loading: boolean;
    error: boolean;
    dispatch?: Dispatch<rentActionType> 
  }