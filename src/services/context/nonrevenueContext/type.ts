import { Dispatch } from "react";

export interface nonrevenueAcionType {
    type: 'CREATE_NONREVENUE_FAIL' | 'CREATE_NONREVENUE_SUCCESS' | 'CREATE_NONREVENUE_START' | 'GET_NONREVENUE_FAIL' | 'GET_NONREVENUE_SUCCESS' | 'GET_NONREVENUE_START';
    payload: any
}

export interface nonrevenueStateType {
    nonrevenue: any[],
    loading: boolean,
    error: boolean,
    dispatch?: Dispatch<nonrevenueAcionType> ;
}

