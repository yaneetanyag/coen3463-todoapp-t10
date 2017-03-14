import React from 'react';
import User from '../components/User';
import AuthApi from '../api/AuthApi'; 

class UserContainer extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            login: true
        }
        this.switch = this.switch.bind(this)
    }
    switch(e){
      var laststate = this.state.login
      {laststate === true?
      this.setState({
        login: false
      }):
      this.setState({
        login: true
      });}
    }

    componentWillMount(){
      AuthApi.onGetUser().then((res)=>{
        if(res.data.response){
            this.context.router.push('/todo');
          }
    });
    }

    handleLogin(){
      this.context.router.push('/login');
    }
    handleRegister(){
      this.context.router.push('/register');
    }

    render(){
        return(
            <User login={this.state.login} switch={this.switch}
            handleLogin={this.handleLogin}
            handleRegister={this.handleRegister
            }/>
        )
    }
}

UserContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default UserContainer;