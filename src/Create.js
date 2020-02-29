import React from 'react';
import './App.css'


class Create extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            passwordCopy: "",
            email: ""
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordCopyChange = this.handlePasswordCopyChange.bind(this)
        this.handleContinue = this.handleContinue.bind(this)
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

    handlePasswordCopyChange(e){
        this.setState({
            passwordCopy: e.target.value
        })
    }

    handleEmailChange(e){
        this.setState({
            email:e.target.value
        })
    }

    handleContinue(){
        if (this.state.password == this.state.passwordCopy){
            if (this.state.password.length >= 4){
                if(this.state.email.indexOf('@')!=-1){
                    //check database for unique username in future
                    console.log(this.state.email, this.state.password, this.state.passwordCopy, this.state.username)
                }
                else{
                    alert("Please make sure email is valid (contains @ sign)")
                }
            }
            else{
                alert("Password must be at least four characters for security.")
            }
        }
        else{
            alert("Please make sure the passwords match.")
        }
    }

    render(){
        return(
        <div className = "centre">
            <h1>QFit</h1>
            <input type="text" placeholder = "Username" value = {this.state.username} onChange={this.handleUsernameChange}/>
            <br/>
            <input type="email" placeholder = "Email" value = {this.state.email} onChange={this.handleEmailChange}/>
            <br/>
            <input type="password" placeholder = "Password" value = {this.state.password} onChange={this.handlePasswordChange}/>
            <br/>
            <input type="password" placeholder = "Confirm Password" value = {this.state.passwordCopy} onChange={this.handlePasswordCopyChange}/>
            <br/>
            <button type="submit" onClick={this.handleContinue}>Continue</button>
        </div>
        )
    }
}

export default Create