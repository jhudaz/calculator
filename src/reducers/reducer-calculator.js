export default function (state = [], action) {
    switch (action.type) {
        case 'RESULT':
            state.push(action.payload);
            return state.slice(0);
        default:
            return state;
    }
}
