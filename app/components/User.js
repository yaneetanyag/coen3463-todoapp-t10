import React, {PropTypes} from 'react';
import '../components/App.css';
import Login from '../components/Login.js';
import Register from '../components/Register.js';
import { Button, Row, Col, Icon } from 'react-materialize';

import { Menu } from 'semantic-ui-react';

function User(props){
    return(
        <div>
            <Menu color={'grey'} widths={3}>
                <Menu.Item name='login' active={props.mode === 'login'} onClick={props.handleLogin} />
                <Menu.Item name='register' active={props.mode === 'register'} onClick={props.handleRegister} />
              </Menu>
              {props.mode === 'login'?
                <div className="App-section" >
                    <Login/>   
                </div>
                :
                <div className="App-section" >                  
                    <Register />
                </div>
                }
        </div>
    );
}

User.PropTypes = {
    login: PropTypes.bool.isRequired,
    switch: PropTypes.func.isRequired,
    handleRegister: PropTypes.func.isRequired,
    handleLogin: PropTypes.func.isRequired,
}

export default User;
