import { licenceActionType, licenceStateType } from "./types"

const LicenceReducer = (state: licenceStateType, action: licenceActionType) => {
    switch (action.type) {
        case 'GET_LICENCE_START':
            return{
                licence: [],
                loading: true,
                error: false,
            }
        case 'GET_LICENCE_SUCCESS':
            return{
                licence: action.payload,
                loading: false,
                error: false,
            }
        case 'GET_LICENCE_FAIL':
            return{
                licence: [],
                loading: false,
                error: true,
            }

        //create
        case 'CREATE_LICENCE_START':
            return{
                ...state,
                loading: true,
                error: false,
            }
        case 'CREATE_LICENCE_SUCCESS':
            return{
                licence: [...state.licence, action.payload],
                loading: false,
                error: false,
            }
        case 'CREATE_LICENCE_FAIL':
            return{
                ...state,
                loading: false,
                error: true,
            }
    
        default:
            return state;
    }
}

export default LicenceReducer
