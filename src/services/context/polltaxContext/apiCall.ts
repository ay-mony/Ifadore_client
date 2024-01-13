import axios from "axios"
import { createPollTaxStart, createPollTaxFail, createPollTaxSuccess, getPollTaxStart, getPollTaxSuccess, getPollTaxFail } from "./polltaxActions"

const url = 'http://localhost:8800/api/polltax'

export const createPollTax = async (polltax:any, dispatch: any) => {
    dispatch(createPollTaxStart())

    try {
        const res = await axios.post(url, polltax)
        dispatch(createPollTaxSuccess(res.data))
    } catch (error) {
        dispatch(createPollTaxFail(error))
        console.log(error)
    }
}


export const getPollTax = async (dispatch:any) => {
    dispatch(getPollTaxStart())
    try {
        const res = await axios.get(url)

        dispatch(getPollTaxSuccess(res.data))
    } catch (error) {
        dispatch(getPollTaxFail(error))
    }
}
