import React from 'react';
import Login from './Login.js'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      step: 0,
      username: "",
      password: "",
    }
    this.login = this.login.bind(this)
    this.setState = this.setState.bind(this)
    this.create = this.create.bind(this)
    //bind methods
  }

  login(usernameIn,passwordIn){
    this.setState({username: usernameIn,password:passwordIn,step:1})
  }

  create(){
    this.setState({step:2})
  }

  render(){
    if(this.state.step === 0){
      return(
        <div>
          <Login
          login = {this.login.bind(this)}
          create = {this.create.bind(this)}
          />
        </div>
      )
    }
    else if(this.state.step ===1){
      return(
        <div>
          Main Dashboard Page
        </div>
      )
    }
    else if(this.state.step == 2){
      return(
        <div>
          Create Account
        </div>
      )
    }
  }
}

export default App
