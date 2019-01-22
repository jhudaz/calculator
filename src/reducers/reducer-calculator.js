export default function (state = [], action) {
    switch (action.type) {
        case 'ADD_NUMBERS':
            state.push(action.payload);
            return state.slice(0);
            
        case 'MULTIPLY_NUMBERS':
            state.push(action.payload);
            return state.slice(0);
        default:
            return state;
    }
}