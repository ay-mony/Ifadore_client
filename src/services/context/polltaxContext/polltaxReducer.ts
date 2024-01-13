export interface polltaxStateType {
    polltax: any,
    loading: boolean,
    error: boolean,
}

export interface polltaxActionType {
    type: 'GET_POLLTAX_START' | 'CREATE_POLLTAX_SUCCESS' | 'GET_POLLTAX_FAIL' | 'CREATE_POLLTAX_START' | 'GET_POLLTAX_SUCCESS' | 'CREATE_POLLTAX_FAIL' 
    payload: any
}


const polltaxReducer = (state: polltaxStateType, action: polltaxActionType): any => {
    switch (action.type) {
        case 'CREATE_POLLTAX_START':
            return{
                ...state,
                loading: true,
                error: false
            }
        case 'CREATE_POLLTAX_SUCCESS':
            return{
                polltax: [...state.polltax, action.payload],
                loading: false,
                error: false
            }
        case 'CREATE_POLLTAX_FAIL':
            return{
                ...state,
                loading: false,
                error: false
            }
        case 'GET_POLLTAX_START':
            return{
                polltax: [],
                loading: true,
                error: false
            }
        case 'GET_POLLTAX_SUCCESS':
            return{
                polltax: action.payload,
                loading: false,
                error: false
            }
        case 'GET_POLLTAX_FAIL':
            return{
                polltax: [],
                loading: false,
                error: true
            }
    
        default:
            return state;
    }
}

export default polltaxReducer
