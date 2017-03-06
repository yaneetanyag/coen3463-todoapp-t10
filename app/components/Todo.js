import React, {PropTypes} from 'react';
import '../components/App.css';
import TodoList from '../components/TodoList.js';
import Counter from '../components/Counter';

const services = [
    { name: 'Web Development', price: 300 },
    { name: 'Design', price: 400 },
    { name: 'Integration', price: 250 },
    { name: 'Training', price: 220 }
];
const libraries = [
    { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
    { name: 'AngularJS', url: 'https://angularjs.org/'},
    { name: 'jQuery', url: 'http://jquery.com/'},
    { name: 'Prototype', url: 'http://www.prototypejs.org/'},
    { name: 'React', url: 'http://facebook.github.io/react/'},
    { name: 'Ember', url: 'http://emberjs.com/'},
    { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
    { name: 'Dojo', url: 'http://dojotoolkit.org/'},
    { name: 'Mootools', url: 'http://mootools.net/'},
    { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
    { name: 'Lodash', url: 'http://lodash.com/'},
    { name: 'Moment', url: 'http://momentjs.com/'},
    { name: 'Express', url: 'http://expressjs.com/'},
    { name: 'Koa', url: 'http://koajs.com/'},
];

function Todo(props){
    

    return(
        <div className="App-section">
                <div className="App-section">
                    <TodoList />
                </div>
                <div className="App-section">
                    <Counter />
                </div>
                
                <br/>
                <button onClick={props.handlelogout} value="Logout">Logout</button>
                
        </div>
    );
}

Todo.PropTypes = {
    onLogout: PropTypes.func.isRequired,
    
}
export default Todo;
