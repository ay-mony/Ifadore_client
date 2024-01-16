export const getOthersStart = () => ({
    type: 'GET_OTHERS_START'
})

export const getOthersSuccess = (others:any) => ({
    type: 'GET_OTHERS_SUCCESS',
    payload: others
})

export const getOthersFail = (error: any) => ({
    type: 'GET_OTHERS_FAIL',
    payload: error
})

//create
export const createOthersStart = () => ({
    type: 'CREATE_OTHERS_START'
})
export const createOthersSuccess = (others:any) => ({
    type: 'CREATE_OTHERS_SUCESS',
    payload: others
})
export const createOthersFail = (error: any) => ({
    type: 'CREATE_OTHERS_FAIL',
    payload: error
})