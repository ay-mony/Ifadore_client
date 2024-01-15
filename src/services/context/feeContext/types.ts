import React, { Dispatch } from "react";

export interface feeAcionType {
    type: 'CREATE_FEES_FAIL' | 'CREATE_FEES_SUCCESS' | 'CREATE_FEES_START' | 'GET_FEES_FAIL' | 'GET_FEES_SUCCESS' | 'GET_FEES_START'
    payload: any
}

export interface feeStateType {
    fees: any,
    loading: boolean,
    error: boolean,
    dispatch?: Dispatch<feeAcionType>
}


