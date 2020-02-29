import React from 'react';
import './App.css'


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.handleCreate = this.handleCreate.bind(this)
    }
    handleUsernameChange(e){
        this.setState({
            username: e.target.value
        });
    }
    handlePasswordChange(e){
        this.setState({
            password: e.target.value
        })
    }

    handleLogin(){
        this.props.login(this.state.username, this.state.password)
        //check backend account
    }

    handleCreate(){
        this.props.create()
    }

    render(){
        return(
        <div className = "centre">
            <h1>QFit</h1>
            <input type="text" placeholder = "Username" value = {this.state.email} onChange={this.handleUsernameChange}/>
            <br/>
            <input type="password" placeholder = "Password" value = {this.state.password} onChange={this.handlePasswordChange}/>
            <br/>
            <button type="submit" onClick={this.handleLogin}>Login</button>
            <p onClick = {this.handleCreate}>Create Account</p>
        </div>
        )
    }
}

export default Login