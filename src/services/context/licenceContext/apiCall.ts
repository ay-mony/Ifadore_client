import axios from 'axios'
import { createLicenceFail, createLicenceStart, createLicenceSuccess, getLicenceFail, getLicenceStart, getLicenceSuccess } from './licenceActions'

const url = 'http://localhost:8800/api/licence'

export const createLicenceTax = async (licence:any, dispatch: any) => {
    dispatch(createLicenceStart())

    try {
        const res = await axios.post(url, licence)
        dispatch(createLicenceSuccess(res.data))
    } catch (error) {
        dispatch(createLicenceFail(error))
    }
}

export const getLicenceTax = async (dispatch: any) => {
    dispatch(getLicenceStart())

    try {
        const res = await axios.get(url)
        dispatch(getLicenceSuccess(res.data))
    } catch (error) {
        dispatch(getLicenceFail(error))
    }
}