import { Dispatch } from "react";

export interface authStateType {
    user: any,
    loading: boolean,
    error: boolean,
    dispatch?: Dispatch<authActionType> 
}

export interface authActionType {
    type: 'LOGIN_START' | 'LOGIN_SUCCESS' | 'LOGIN_FAIL' | 'LOGOUT'
    payload: any
}

export interface authContextProps {
    user: any, 
    loading: boolean;
    error: boolean;
    dispatch?: Dispatch<authActionType> 
  }