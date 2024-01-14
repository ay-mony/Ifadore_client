import axios from "axios"
import { createFeesFail, createFeesStart, createFeesSuccess, getFeesFail, getFeesStart, getFeesSuccess } from "./feesActions"

const url = 'http://localhost:8800/api/fees'


export const getFeesTax = async (dispatch: any) => {
    dispatch(getFeesStart())

    try {
        const res = await axios.get(url)
        dispatch(getFeesSuccess(res.data))
    } catch (error) {
        dispatch(getFeesFail(error))
    }
}


export const createFeesTax = async (fees: any, dispatch: any) => {
    dispatch(createFeesStart())

    try {
        const res = await axios.post(url, fees)
        dispatch(createFeesSuccess(res.data))
    } catch (error) {
        dispatch(createFeesFail(error))
    }
}