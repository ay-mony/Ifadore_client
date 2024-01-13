import { earningActionType, earningStateType } from "./types"

const EarningTaxReducer = (state: earningStateType, action: earningActionType) => {
    switch (action.type) {
        case 'GET_EARNING_START':
            return{
                earning: [],
                loading: true,
                error: false,
            }
        case 'GET_EARNING_SUCCESS':
            return{
                earning: action.payload,
                loading: false,
                error: false,
            }
        case 'GET_EARNING_FAIL':
            return{
                earning: [],
                loading: false,
                error: true,
            }

        //create
        case 'CREATE_EARNING_START':
            return{
                ...state,
                loading: true,
                error: false,
            }
        case 'CREATE_EARNING_SUCESS':
            return{
                earning: [...state.earning, action.payload],
                loading: false,
                error: false,
            }
        case 'CREATE_EARNING_FAIL':
            return{
                ...state,
                loading: false,
                error: true,
            }
    
        default:
            return state;
    }
}

export default EarningTaxReducer
