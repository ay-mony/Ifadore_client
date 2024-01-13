import axios from "axios"
import { createPollTaxStart, createPollTaxFail, createPollTaxSuccess, getPollTaxStart, getPollTaxSuccess, getPollTaxFail } from "./polltaxActions"

export const createPollTax = async (polltax:any, dispatch: any) => {
    dispatch(createPollTaxStart())

    try {
        const res = await axios.post('http://localhost:8800/api/polltax', polltax)
        dispatch(createPollTaxSuccess(res.data))
    } catch (error) {
        dispatch(createPollTaxFail(error))
        console.log(error)
    }
}


export const getPollTax = async (dispatch:any) => {
    dispatch(getPollTaxStart())
    try {
        const res = await axios.get('http://localhost:8800/api/polltax')

        dispatch(getPollTaxSuccess(res.data))
        console.log(res.data)
    } catch (error) {
        dispatch(getPollTaxFail(error))
    }
}