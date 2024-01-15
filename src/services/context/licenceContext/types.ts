import { Dispatch } from "react";

export interface licenceStateType {
    licence: any,
    loading: boolean,
    error: boolean,
    dispatch?: Dispatch<licenceActionType> 
}

export interface licenceActionType {
    type: 'GET_LICENCE_START' | 'GET_LICENCE_SUCCESS' | 'GET_LICENCE_FAIL' | 'CREATE_LICENCE_START' | 'CREATE_LICENCE_SUCCESS' | 'CREATE_LICENCE_FAIL' 
    payload: any
}

export interface licenceContextProps {
    licence: any, 
    loading: boolean;
    error: boolean;
    dispatch?: Dispatch<licenceActionType> 
  }