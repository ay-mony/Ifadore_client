export const getRentStart = () => ({
    type: 'GET_RENT_START'
})

export const getRentSuccess = (rent:any) => ({
    type: 'GET_RENT_SUCCESS',
    payload: rent
})

export const getRentFail = (error: any) => ({
    type: 'GET_RENT_FAIL',
    payload: error
})

//create
export const createRentStart = () => ({
    type: 'CREATE_RENT_START'
})
export const createRentSuccess = (rent:any) => ({
    type: 'CREATE_RENT_SUCESS',
    payload: rent
})
export const createRentFail = (error: any) => ({
    type: 'CREATE_RENT_FAIL',
    payload: error
})