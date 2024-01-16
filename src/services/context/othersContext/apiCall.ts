import axios from 'axios'
import { createOthersStart, createOthersSuccess, createOthersFail, getOthersStart, getOthersSuccess, getOthersFail } from './othersActions'
import { baseUrl } from '../../utils/url'


export const createOthersTax = async (earning:any, dispatch: any) => {
    dispatch(createOthersStart())

    try {
        const res = await axios.post(baseUrl + 'others', earning)
        dispatch(createOthersSuccess(res.data))
    } catch (error) {
        dispatch(createOthersFail(error))
    }
}

export const getOthersTax = async (dispatch: any) => {
    dispatch(getOthersStart())

    try {
        const res = await axios.get(baseUrl + 'others')
        dispatch(getOthersSuccess(res.data))
    } catch (error) {
        dispatch(getOthersFail(error))
    }
}