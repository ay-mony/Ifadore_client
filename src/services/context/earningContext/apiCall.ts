import axios from 'axios'
import { createEarningFail, createEarningStart, createEarningSuccess, getEarningStart, getEarningSuccess, getEarningFail } from './earningActions'
import { baseUrl } from '../../utils/url'


export const createOthersTax = async (earning:any, dispatch: any) => {
    dispatch(createEarningStart())

    try {
        const res = await axios.post(baseUrl + 'earning', earning)
        dispatch(createEarningSuccess(res.data))
    } catch (error) {
        dispatch(createEarningFail(error))
    }
}

export const getOthersTax = async (dispatch: any) => {
    dispatch(getEarningStart())

    try {
        const res = await axios.get(baseUrl + 'earning')
        dispatch(getEarningSuccess(res.data))
    } catch (error) {
        dispatch(getEarningFail(error))
    }
}