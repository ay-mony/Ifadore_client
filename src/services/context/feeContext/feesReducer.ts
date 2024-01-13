import { feeAcionType, feeStateType } from "./types";

const FeesReducer = (state: feeStateType, action: feeAcionType) => {
    switch(action.type){
        case 'GET_FEES_START':
            return{
                fees: [],
                error: false,
                loading: true
            }
        case 'GET_FEES_SUCCESS':
            return{
                fees: action.payload,
                error: false,
                loading: false
            }
        case 'GET_FEES_FAIL':
            return{
                fees: [],
                error: true,
                loading: false
            }
        case 'CREATE_FEES_START':
            return{
                ...state,
                error: false,
                loading: false
            }
        case 'CREATE_FEES_SUCCESS':
            return{
                fees: [...state.fees, action.payload],
                error: false,
                loading: false
            }
        case 'CREATE_FEES_FAIL':
            return{
                ...state,
                error: false,
                loading: true
            }
        
        default :
            return state
    }
}


export default FeesReducer