import React, {Component} from 'react';
import {CInputBox, CButton} from "../../components/index";
import { connect } from 'react-redux';
import { loginAction } from './actions';

const mapDispatchToProps = dispatch => ({
    loginAction: (username, password) => dispatch(loginAction(username, password))
})
console.log('mapDispatchToProps-----', mapDispatchToProps);
const mapStateToProps = state => ({
    ...state
})

console.log('mapStateToProps-----', mapStateToProps);
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    changeValue(e, propName){
        this.setState({[propName]: e.target.value});
    }
    login(e) {
        this.props.loginAction(this.state.username, this.state.password);
    }

    render() {
        return (
            <div>
                <CInputBox  placeholder="Enter username" value={this.state.username} type="text" onChange={(e) => this.changeValue(e, 'username')} />
                <CInputBox  placeholder="Enter password" value={this.state.password} type="password" onChange={(e) => this.changeValue(e, 'password')} />
                <p>Welcome {this.state.username}</p>
                <p>Your Password is  {this.state.password}</p>
                <CButton text="Login" onClick={(e) => this.login(e)} />
            </div>



        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);