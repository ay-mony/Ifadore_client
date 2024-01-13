export const getEarningStart = () => ({
    type: 'GET_EARNING_START'
})

export const getEarningSuccess = (earning:any) => ({
    type: 'GET_EARNING_SUCCESS',
    payload: earning
})

export const getEarningFail = (error: any) => ({
    type: 'GET_EARNING_FAIL',
    payload: error
})

//create
export const createEarningStart = () => ({
    type: 'CREATE_EARNING_START'
})
export const createEarningSuccess = (earning:any) => ({
    type: 'CREATE_EARNING_SUCESS',
    payload: earning
})
export const createEarningFail = (error: any) => ({
    type: 'CREATE_EARNING_FAIL',
    payload: error
})