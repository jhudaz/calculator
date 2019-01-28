function getInitialStatus() {
    return [];
}
export default function (status = getInitialStatus(), action) {
    switch (action.type) {
        // case 'CONSUME_API_POST':
        //     return action.payload;
        case 'CONSUME_API_PUT':
            return action.payload;
        case 'CONSUME_API_GET':
            return action.payload;
        default:
            return status;
    }
}