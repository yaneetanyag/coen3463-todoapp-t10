import React, {Component, PropTypes} from 'react';
import './App.css';
import AuthApi from '../api/AuthApi';
import { Button, Input, Row, Col, Icon } from 'react-materialize';

class Login extends Component {
    constructor(props,context) {
      super(props,context);
        this.state={
          username: "",
          user:"",
          error: "",
        }
        this.onLogin = this.onLogin.bind(this)
    }

        onLogin(e){
      console.log(e.target)
        e.preventDefault();
        let data = {
            // username: this.refs.username.value,
            // password: this.refs.password.value,
            username: e.target.elements[0].value,
            password: e.target.elements[1].value,
        }
        AuthApi.onLogin(data).then((res)=>{
            console.log(res);
            const data = res.data;
            if(data.success){
              this.setState({
                user: res.data.response._id,
                username: data.response.username,
              });
              this.context.router.push('/todo');
              // window.location = data.redirect;
              console.log(data);
              return;
            }else{
              this.setState({
                error: data.response
              });
              console.log(data);
              console.log("Login Failed!");}
            
            
        }).catch((err)=>{
          console.log(err);
        });
       
    }
    
    render(){
    return (
      <div className="counter">
      {this.state.error}
      <form onSubmit={this.onLogin}>
          
          <Input type="text" id="username" placeholder="" ref="username" label="username" />
          <br/>
          <Input type="password" id="password" placeholder="" ref="password" label="password" />
          <br/>
          <Button waves='light' type='submit' value="Login">Login</Button>
      </form>
          
      </div>
    )
  }
}
Login.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default Login;
