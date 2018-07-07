const axios = require('axios');
export const firstAction = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(function (response) {
            dispatch({
                type: 'SIMPLE_ACTION',
                payload: response
            })
        });
};
