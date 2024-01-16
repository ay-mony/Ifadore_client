import { nonrevenueAcionType, nonrevenueStateType } from "./type"

const NonRevenueReducer = (state: nonrevenueStateType, action: nonrevenueAcionType) => {
    switch(action.type){
        case 'GET_NONREVENUE_START':
            return{
                nonrevenue: [],
                loading: true,
                error: false,
            };
        case 'GET_NONREVENUE_SUCCESS':
            return{
                nonrevenue: action.payload,
                loading: false,
                error: false,
            };
        case 'GET_NONREVENUE_FAIL':
            return{
                nonrevenue: [],
                loading: false,
                error: true,
            };
        case 'CREATE_NONREVENUE_START':
            return{
                ...state,
                loading: true,
                error: false
            };
        case 'CREATE_NONREVENUE_SUCCESS':
            return{
                nonrevenue: [...state.nonrevenue, action.payload],
                loading: false,
                error: false
            };
        case 'CREATE_NONREVENUE_FAIL':
            return{
                ...state,
                loading: false,
                error: true
            };
    }
}

export default NonRevenueReducer
