export default function (state = [], action) {
    console.log('accion:', action.type);
    switch (action.type) {
        case 'ADD_NUMBERS':
            console.log('payload sumar:', action.payload);
            state.push(action.payload);
            return state.slice(0);
            
        case 'MULTIPLY_NUMBERS':
            console.log('payload multiplicar:', action.payload);
            state.push(action.payload);
            return state.slice(0);
        default:
            return state;
    }
}