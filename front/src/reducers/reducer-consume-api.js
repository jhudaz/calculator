function getInitialStatus() {
    return {
        userList: [],
        user: { firstName:'',lastName:''}
    };
}
export default function (status = getInitialStatus(), action) {
    switch (action.type) {
        case 'CONSUME_API_GET':
            return {
                ...status,
                userList: action.payload
            };
        case 'CONSUME_API_GET_ONE':
            return {
                ...status,
                user: action.payload
            }
        default:
            return status;
    }
}