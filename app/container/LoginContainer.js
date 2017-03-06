import React from 'react';
import User from '../components/User';

class LoginContainer extends React.Component{
    constructor(props){
        super(props);
    }

    

    render(){
        console.log("Login Register");
        return(
            <User/>
        )
    }
}

export default LoginContainer;