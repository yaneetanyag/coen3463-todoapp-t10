import React, {PropTypes} from 'react';
import '../components/App.css';
import Login from '../components/Login.js';
import Register from '../components/Register.js';
import { Button, Row, Col, Icon } from 'react-materialize';

import { Menu, Segment } from 'semantic-ui-react';

function User(props){
    return(
        <div className="App-section">
            <Menu attached='top' size='large'>
              <Menu.Item
                name='login'
                active={props.mode === 'login'}
                onClick={props.handleLogin} 
              >
                Login
              </Menu.Item>

              <Menu.Item
                name='register'
                active={props.mode === 'register'}
                onClick={props.handleRegister}
              >
                Register
              </Menu.Item>
            </Menu>

            <Segment attached>
              {props.mode === 'login'?
                <div>
                    <Login/>   
                </div>
                :
                <div>                 
                    <Register />
                </div>
                }
            </Segment>
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
