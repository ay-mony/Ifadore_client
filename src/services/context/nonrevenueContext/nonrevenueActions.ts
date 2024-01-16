export const getNonRevenueStart = () => ({
    type: 'GET_NONREVENUE_START'
})

export const getNonRevenueSuccess = (nonrevenue:any) => ({
    type: 'GET_NONREVENUE_SUCCESS',
    payload: nonrevenue
})

export const getNonRevenueFail = (error: any) => ({
    type: 'GET_NONREVENUE_FAIL',
    payload: error
})

//create
export const createNonRevenueStart = () => ({
    type: 'CREATE_NONREVENUE_START'
})
export const createNonRevenueSuccess = (nonrevenue:any) => ({
    type: 'CREATE_NONREVENUE_SUCCESS',
    payload: nonrevenue
})
export const createNonRevenueFail = (error: any) => ({
    type: 'CREATE_NONREVENUE_FAIL',
    payload: error
})