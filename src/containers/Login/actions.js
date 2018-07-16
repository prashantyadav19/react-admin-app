const axios = require('axios');
export const loginAction = (username, password) => dispatch => {
    console.log('username-----action---', username, password);
    axios.post('https://jsonplaceholder.typicode.com/posts', {
        userId: '11',
        id: '101',
        title: username,
        body: password
    })
        .then(function (response) {
            console.log('post response----->', response);
            dispatch({
                type: 'SUCCESS_LOGIN',
                payload: response
            })
        })
        .catch(function (error) {
            console.log(error);
        });
};