import axios from 'axios'
import { createRentStart, createRentSuccess, getRentFail, getRentStart, getRentSuccess } from './rentActions'
import { createFeesFail } from '../feeContext/feesActions'
import { baseUrl } from '../../utils/url'


export const createRentTax = async (rent:any, dispatch: any) => {
    dispatch(createRentStart())

    try {
        const res = await axios.post(baseUrl + 'rent', rent)
        dispatch(createRentSuccess(res.data))
    } catch (error) {
        dispatch(createFeesFail(error))
    }
}

export const getRentTax = async (dispatch: any) => {
    dispatch(getRentStart())

    try {
        const res = await axios.get(baseUrl + 'rent')
        dispatch(getRentSuccess(res.data))
    } catch (error) {
        dispatch(getRentFail(error))
    }
}