import axios from "axios"
import { createPollTaxStart, createPollTaxFail, createPollTaxSuccess, getPollTaxStart, getPollTaxSuccess, getPollTaxFail } from "./polltaxActions"
import { baseUrl } from "../../utils/url"


export const createPollTax = async (polltax:any, dispatch: any) => {
    dispatch(createPollTaxStart())

    try {
        const res = await axios.post(baseUrl + 'polltax', polltax)
        dispatch(createPollTaxSuccess(res.data))
    } catch (error) {
        dispatch(createPollTaxFail(error))
        console.log(error)
    }
}


export const getPollTax = async (dispatch:any) => {
    dispatch(getPollTaxStart())
    try {
        const res = await axios.get(baseUrl + 'nonrevenue')

        dispatch(getPollTaxSuccess(res.data))
    } catch (error) {
        dispatch(getPollTaxFail(error))
    }
}


export const createNonRevenue = async (nonrevenue:any, dispatch: any) => {
    dispatch(createPollTaxStart())

    try {
        const res = await axios.post(baseUrl + 'nonrevenue', nonrevenue)
        dispatch(createPollTaxSuccess(res.data))
    } catch (error) {
        dispatch(createPollTaxFail(error))
        console.log(error)
    }
}


export const getNonRevenue = async (dispatch: any) => {
    dispatch(getPollTaxStart())
    try {
        const res = await axios.get(baseUrl + 'polltax')

        dispatch(getPollTaxSuccess(res.data))
    } catch (error) {
        dispatch(getPollTaxFail(error))
    }
}