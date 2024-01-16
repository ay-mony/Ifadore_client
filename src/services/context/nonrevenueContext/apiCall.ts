import axios from "axios"
import { createNonRevenueFail, createNonRevenueStart, createNonRevenueSuccess, getNonRevenueFail, getNonRevenueStart, getNonRevenueSuccess } from "./nonrevenueActions"

import { baseUrl } from "../../utils/url"

export const createNonRevenue = async (nonrevenue:any, dispatch: any) => {
    dispatch(createNonRevenueStart())

    try {
        const res = await axios.post(baseUrl + 'nonrevenue', nonrevenue)
        dispatch(createNonRevenueSuccess(res.data))
    } catch (error) {
        dispatch(createNonRevenueFail(error))
        console.log(error)
    }
}


export const getNonRevenue = async (dispatch: any) => {
    dispatch(getNonRevenueStart())
    try {
        const res = await axios.get(baseUrl + 'nonrevenue')

        dispatch(getNonRevenueSuccess(res.data))
    } catch (error) {
        dispatch(getNonRevenueFail(error))
    }
}