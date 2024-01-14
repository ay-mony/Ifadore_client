import axios from "axios"
import { createFeesFail, createFeesStart, createFeesSuccess, getFeesFail, getFeesStart, getFeesSuccess } from "./feesActions"
import { baseUrl } from "../../utils/url"


export const getFeesTax = async (dispatch: any) => {
    dispatch(getFeesStart())

    try {
        const res = await axios.get(baseUrl + 'fees')
        dispatch(getFeesSuccess(res.data))
    } catch (error) {
        dispatch(getFeesFail(error))
    }
}


export const createFeesTax = async (fees: any, dispatch: any) => {
    dispatch(createFeesStart())

    try {
        const res = await axios.post(baseUrl + 'fees', fees)
        dispatch(createFeesSuccess(res.data))
    } catch (error) {
        dispatch(createFeesFail(error))
    }
}