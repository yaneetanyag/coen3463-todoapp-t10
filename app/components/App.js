import React from 'react'
import './App.css';

class App extends React.Component{
    constructor(props) {
    super(props);
    
    }
    render(){
        return(
            <div>
                <div className="App-header">
                    <p><img src="./images/todo.png" /></p>  
                </div>
            <div className="App-section">
                {this.props.children}
            </div>
            </div>
        );
    }
}

App.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default App;

//header
    //body
//footeer