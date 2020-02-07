const initialState = {
    a: 1,
    b: 2
}

const NewReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_A':
            return {
                ...state,
                a: state.a + state.b
            }
        case 'UPDATE_B':
            return {
                ...state,
                b: state.b + state.a
            }
        default: return state;
    }

}

export default NewReducer;