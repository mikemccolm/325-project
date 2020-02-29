import React from 'react';
import Login from './Login.js'
import Create from './Create.js'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      step: 0,
      username: "",
      password: "",
    }
    this.loginSuccess = this.loginSuccess.bind(this)
    this.setState = this.setState.bind(this)
    this.createAccount = this.createAccount.bind(this)
    //bind methods
  }

  loginSuccess(usernameIn,passwordIn){
    this.setState({username: usernameIn,password:passwordIn,step:3})
  }

  createAccount(){
    this.setState({step:1})
  }

  createSuccess(usernameIn, passwordIn, emailIn){
    this.setState({userName: usernameIn, password: passwordIn, step:2})
    //write to database
  }

  render(){
    //STATE 0: Login Page
    if(this.state.step === 0){
      return(
        <div>
          <Login
          login = {this.loginSuccess.bind(this)}
          create = {this.createAccount.bind(this)}
          />
        </div>
      )
    }
    //STATE 1: Create Account (Details)
    else if(this.state.step ===1){
      return(
        <Create/>
      )
    }
    //STATE 2: Profile
    else if(this.state.step == 2){
      return(
        //create account details here: gender, height, weight, goals, limitations etc
        <div></div>
      )
    }
    //STATE 3: Dashboard Main
    else if(this.state.step == 3){
      return(
        <div>
          Main Dashboard Page
      </div>
      )
    }
  }
}

export default App
