export const countReducer = (state={
}, action) => {
    switch (action.type) {
        case "INCREMENT_COUNT":
            return {
                ...state,
                [action.id]:(state[action.id] || 0 || 1) + 1
            }
        case "DECREMENT_COUNT":
            return {
                ...state,
                [action.id]:(state[action.id] || 0) - 1
            }
        default:
            return state;
    }
}
