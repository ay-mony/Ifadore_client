export const getPollTaxStart = () => ({
    type: 'GET_POLLTAX_START',
    payload: null
})

export const getPollTaxSuccess = (polltax: any) => ({
    type: 'GET_POLLTAX_SUCCESS',
    payload: polltax
})

export const getPollTaxFail = (error: any) => ({
    type: 'GET_POLLTAX_FAIL',
    payload: error
})

//create
export const createPollTaxStart = () => ({
    type: 'CREATE_POLLTAX_START',
    payload: null
})
export const createPollTaxSuccess = (polltax: any) => ({
    type: 'CREATE_POLLTAX_SUCCESS',
    payload: polltax
})
export const createPollTaxFail = (error: any) => ({
    type: 'CREATE_POLLTAX_FAIL',
    payload: error
})
