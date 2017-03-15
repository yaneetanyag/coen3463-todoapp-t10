import React from 'react';
import User from '../components/User';
import AuthApi from '../api/AuthApi'; 

class UserContainer extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            login: true
        }
        this.switch = this.switch.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
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
        if(this.props.routeParams.mode===undefined){
          this.context.router.push('/login')
        }
    }



    handleLogin(){
      this.context.router.push('/login');
      console.log(this.props.routeParams.mode)
    }
    handleRegister(){
      this.context.router.push('/register');
      
      console.log(this.props.routeParams.mode)
    }

    render(){
        return(
            <User login={this.state.login} switch={this.switch}
            handleLogin={this.handleLogin}
            handleRegister={this.handleRegister}
            mode={this.props.routeParams.mode}
            />
        )
    }
}

UserContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default UserContainer;