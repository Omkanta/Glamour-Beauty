import { PRODUCT_REQ_FAILURE, PRODUCT_REQ_PENDNG, PRODUCT_REQ_SUCESS } from "./actiontype"

const initalstate = {
    isLoading: false,
    isError: false,
    Products: [],
}

export const reducer = (state = initalstate, { type, payload }) => {
    switch (type) {
        case PRODUCT_REQ_PENDNG:
            return {
                ...state, isLoading: true
            }
        case PRODUCT_REQ_SUCESS:
            return {
                ...state, isLoading: false, Products: payload
            }
        case PRODUCT_REQ_FAILURE:
            return {
                ...state, isLoading: false, isError: true
            }
        default:
            return state
    }
}



