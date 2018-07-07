import React, {Component} from 'react';
import {CInputBox, CButton} from "../../components/index";
export default class Login extends Component {

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
        console.log('state', this.state.username);
    }

    render() {
        return (
            <div>
                <CInputBox  placeholder="Enter username" value={this.state.username} type="text" onChange={(e) => this.changeValue(e, 'username')} />
                <CInputBox  placeholder="Enter password" value={this.state.password} type="password" onChange={(e) => this.changeValue(e, 'password')} />
                <p>Welcome {this.state.username}</p>
                <p>Your Password is  {this.state.password}</p>
                <CButton text="Submit" onClick={(e) => this.login(e)} />
            </div>



        )
    }
}