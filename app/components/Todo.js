import React, {PropTypes} from 'react';
import '../components/App.css';
import ToDos from '../components/ToDos.js';
import Loading from './loading';
import TodoApi from '../api/TodoApi';
import { Button, Input } from 'react-materialize';
import { Segment, Menu, Header, List } from 'semantic-ui-react';
var moment = require('moment-timezone');

class Todo extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            isAdding: false
        }
        this.onAddTodo = this.onAddTodo.bind(this);
    }
    onAddTodo(e) {
        this.setState({isAdding:true});
        e.preventDefault();
        var lastState = this.props.items; 
        let toDo = { 
            name: e.target.elements[0].value,
            user: this.props.user,
            createDate: moment().tz("Asia/Manila").format('LLL'),
        }
        this.setState({ 
            items :[...lastState,Object.assign({},toDo)]
        });
        TodoApi.onAddTodo(toDo).then(res=>{
            console.log(res.data.response);
            if(res.data.success){
                console.log(this.props.mode)
                this.props.setStateItem([...lastState,Object.assign({},res.data.response)]);
                this.props.setOriginalItems();
                if(this.props.mode==='completed'){
                        this.props.handleSplice();                        
                }
                this.setState({isAdding:false});
                return;
            }
        }).catch(err=>{
            console.log(err);
        }); 
    }
    
    render(){
    return(
        <div className="App-section">

                {this.props.isLoading? 
                <Loading text="Please Wait" speed={300}/>
                :
                <div>
                <Segment clearing>
                    <Header as='h3' floated='right'>
                      <Button waves='light' onClick={this.props.onLogOut} value="Logout">Logout</Button>
                    </Header>
                    <Header as='h3' floated='left'>
                      <p>Hello {this.props.name}
                      <br/> {this.props.email}</p>
                    </Header>
                </Segment>

                <div className="App-list">
                <div>
                <Menu pointing secondary>
                  <Menu.Item name='all' active={this.props.activeItem === 'all'} onClick={this.props.todoAll} />
                  <Menu.Item name='open' active={this.props.activeItem === 'open'} onClick={this.props.todoOpen} />
                  <Menu.Item name='completed' active={this.props.activeItem === 'completed'} onClick={this.props.todoCompleted} />
                  <Menu.Menu position='right'>
                    <Menu.Item name='Clear Completed' onClick={this.props.DelAllComplete} />
                  </Menu.Menu>
                </Menu>

              </div>
                <div className="App-input">
                <form onSubmit={this.onAddTodo}>
                    <Input id="id" placeholder="What needs to be done?" ref="todo"/>
                    <Button floating className='gray' waves='light' icon='add' type='submit'></Button>
                </form>
                </div>
                </div>
                <div>
                {this.props.onUpdate? <Loading text="Loading" speed={300}/>:
                <div>
                
                {this.props.onCounting? <Loading text="Loading" speed={300}/>:
                <div>{(this.props.completedCount)=== 1?
                <p>{this.props.completedCount}/{this.props.originalitems} item/s completed</p>:
                <p>{this.props.completedCount}/{this.props.originalitems} item/s completed</p>
                } </div>
                }

                <List celled>
                {this.props.items.map((item, index)=>

                    <ToDos key={index}
                            item={item}
                            index={index}
                            onComplete={this.props.onComplete}
                            OnDelete={this.props.OnDelete}/>
                )}
                </List>
                </div>
                }
                </div>
                </div>
                }
        </div>
    )
}
}

Todo.PropTypes = {
    onLogOut: PropTypes.func.isRequired,
    onAddTodo: PropTypes.func.isRequired,
    
}
export default Todo;
