import { othersActionType, othersStateType } from "./types"

const OthersTaxReducer = (state: othersStateType, action: othersActionType) => {
    switch (action.type) {
        case 'GET_OTHERS_START':
            return{
                others: [],
                loading: true,
                error: false,
            }
        case 'GET_OTHERS_SUCCESS':
            return{
                others: action.payload,
                loading: false,
                error: false,
            }
        case 'GET_OTHERS_FAIL':
            return{
                others: [],
                loading: false,
                error: true,
            }

        //create
        case 'CREATE_OTHERS_START':
            return{
                ...state,
                loading: true,
                error: false,
            }
        case 'CREATE_OTHERS_SUCESS':
            return{
                others: [...state.others, action.payload],
                loading: false,
                error: false,
            }
        case 'CREATE_OTHERS_FAIL':
            return{
                ...state,
                loading: false,
                error: true,
            }
    
        default:
            return state;
    }
}

export default OthersTaxReducer
