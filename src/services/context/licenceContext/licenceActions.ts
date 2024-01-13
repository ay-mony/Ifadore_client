export const getLicenceStart = () => ({
    type: 'GET_LICENCE_START'
})

export const getLicenceSuccess = (licence:any) => ({
    type: 'GET_LICENCE_SUCCESS',
    payload: licence
})

export const getLicenceFail = (error: any) => ({
    type: 'GET_LICENCE_FAIL',
    payload: error
})

//create
export const createLicenceStart = () => ({
    type: 'CREATE_LICENCE_START'
})

export const createLicenceSuccess = (licence:any) => ({
    type: 'CREATE_LICENCE_SUCCESS',
    payload: licence
})

export const createLicenceFail = (error: any) => ({
    type: 'CREATE_LICENCE_FAIL',
    payload: error
})