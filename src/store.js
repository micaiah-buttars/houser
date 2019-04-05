import {createStore} from 'redux'

const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    img: '',
    mortgage: 0,
    rent: 0,
    houses: []
}

export const STEP_ONE = 'STEP_ONE'
export const STEP_TWO = 'STEP_TWO'
export const STEP_THREE = 'STEP_THREE'


function reducer(state = initialState, action){
    switch(action.type){
        case STEP_ONE:
        return {
            ...state,
            name: action.payload.name,
            address: action.payload.address,
            city: action.payload.city,
            state: action.payload.state,
            zip: action.payload.zip
        }
        case STEP_TWO:
            return {...state, img: action.payload.img}
        case STEP_THREE:
            return {...state, mortgage: action.payload, rent: action.payload}
        default:
            return state
    }
}



export default createStore(reducer)