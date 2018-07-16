export default (state = {}, action) => {
    switch (action.type) {
        case 'SUCCESS_LOGIN':
            console.log('first post---action----', action);
            return {
                result: action.payload
            }
        default:
            return state
    }
}
