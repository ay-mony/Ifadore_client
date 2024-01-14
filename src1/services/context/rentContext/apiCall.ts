import axios from 'axios'
import { createRentStart, createRentSuccess, getRentFail, getRentStart, getRentSuccess } from './rentActions'
import { createFeesFail } from '../feeContext/feesActions'

const url = 'http://localhost:8800/api/rent'

export const createRentTax = async (rent:any, dispatch: any) => {
    dispatch(createRentStart())

    try {
        const res = await axios.post(url, rent)
        dispatch(createRentSuccess(res.data))
    } catch (error) {
        dispatch(createFeesFail(error))
    }
}

export const getRentTax = async (dispatch: any) => {
    dispatch(getRentStart())

    try {
        const res = await axios.get(url)
        dispatch(getRentSuccess(res.data))
    } catch (error) {
        dispatch(getRentFail(error))
    }
}