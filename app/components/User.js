import React, {PropTypes} from 'react';
import '../components/App.css';
import Login from '../components/Login.js';
import Register from '../components/Register.js';




function User(props){
    

    return(
        <div className="App-section">
                <div className="App-section">
                    <Login />
                </div>
                <div className="App-section">
                    <Register />
                </div>
        </div>
    );
}
export default User;
