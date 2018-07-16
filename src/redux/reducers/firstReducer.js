export default (state = {}, action) => {
    switch (action.type) {
        case 'SUCCESS_LOGIN':
            return {
                result: action.payload
            }
        default:
            return state
    }
}
