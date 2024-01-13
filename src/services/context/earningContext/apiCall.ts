import axios from 'axios'
import { createEarningFail, createEarningStart, createEarningSuccess, getEarningStart, getEarningSuccess, getEarningFail } from './earningActions'

const url = 'http://localhost:8800/api/earning'

export const createEarningTax = async (earning:any, dispatch: any) => {
    dispatch(createEarningStart())

    try {
        const res = await axios.post(url, earning)
        dispatch(createEarningSuccess(res.data))
    } catch (error) {
        dispatch(createEarningFail(error))
    }
}

export const getEarningTax = async (dispatch: any) => {
    dispatch(getEarningStart())

    try {
        const res = await axios.get(url)
        dispatch(getEarningSuccess(res.data))
    } catch (error) {
        dispatch(getEarningFail(error))
    }
}