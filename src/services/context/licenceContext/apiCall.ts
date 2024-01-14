import axios from 'axios'
import { createLicenceFail, createLicenceStart, createLicenceSuccess, getLicenceFail, getLicenceStart, getLicenceSuccess } from './licenceActions'
import { baseUrl } from '../../utils/url'

export const createLicenceTax = async (licence:any, dispatch: any) => {
    dispatch(createLicenceStart())

    try {
        const res = await axios.post(baseUrl + 'licence', licence)
        dispatch(createLicenceSuccess(res.data))
    } catch (error) {
        dispatch(createLicenceFail(error))
    }
}

export const getLicenceTax = async (dispatch: any) => {
    dispatch(getLicenceStart())

    try {
        const res = await axios.get(baseUrl + 'licence')
        dispatch(getLicenceSuccess(res.data))
    } catch (error) {
        dispatch(getLicenceFail(error))
    }
}