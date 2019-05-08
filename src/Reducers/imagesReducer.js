
let initialState = { data: [], status: "completed" }

/**
 * Images reducer
 * If it is changed by pagination we need to add data to previous array
 */
export default (state = initialState, action) => {
    switch(action.type) {
        case 'GET_IMAGES_PENDING':
            return {
                ...state,
                status: "pending"
            }
        case 'GET_IMAGES_FULFILLED':
            return {
                ...state,
                data: action.meta ? [
                        ...state.data,
                        ...action.payload.data.data
                    ] : action.payload.data.data,
                status: "completed"
            }
        default:
            return state
    }
}
