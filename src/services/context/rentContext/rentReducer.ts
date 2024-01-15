import { rentActionType, rentStateType } from "./types"

const RentTaxReducer = (state: rentStateType, action: rentActionType) => {
    switch (action.type) {
        case 'GET_RENT_START':
            return{
                rent: [],
                loading: true,
                error: false,
            }
        case 'GET_RENT_SUCCESS':
            return{
                rent: action.payload,
                loading: false,
                error: false,
            }
        case 'GET_RENT_FAIL':
            return{
                rent: [],
                loading: false,
                error: true,
            }

        //create
        case 'CREATE_RENT_START':
            return{
                ...state,
                loading: true,
                error: false,
            }
        case 'CREATE_RENT_SUCESS':
            return{
                rent: [...state.rent, action.payload],
                loading: false,
                error: false,
            }
        case 'CREATE_RENT_FAIL':
            return{
                ...state,
                loading: false,
                error: true,
            }
    
        default:
            return state;
    }
}

export default RentTaxReducer
