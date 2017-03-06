import React from 'react'
import './App.css';
import TodoList from './TodoList.js';
import Counter from './Counter';

class App extends React.Component{
	
    render(){
        return(
            <div>
                <div>
                    <p>Hello World!</p>
                </div>
                 <div>
                  {this.props.children}
                 </div>
                
            </div>
        );
    }
}

export default App;