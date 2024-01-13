export const getFeesStart = () => ({
    type: 'GET_FEES_START'
})

export const getFeesSuccess = (fees: any) => ({
    type: 'GET_FEES_SUCCESS',
    payload: fees
})

export const getFeesFail = (error: any) => ({
    type: 'GET_FEES_FAIL',
    payload: error
})

//create
export const createFeesStart = () => ({
    type: 'CREATE_FEES_START'
})
export const createFeesSuccess = (fees: any) => ({
    type: 'CREATE_FEES_SUCCESS',
    payload: fees
})
export const createFeesFail = (error: any) => ({
    type: 'CREATE_FEES_FAIL',
    payload: error
})