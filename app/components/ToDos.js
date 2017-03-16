import React, {PropTypes} from 'react';
import '../components/App.css';

import Loading from './loading';
import { Input } from 'react-materialize';
import { Button, Segment, Menu, Header, List } from 'semantic-ui-react';



const ToDos=(props)=>{
    return (    
                <List.Item>
                    <List.Content floated='right'>
                    <Button basic color='green' size='mini' onClick={(e)=>{
                        e.preventDefault()
                        props.onComplete(props.item, props.index);
                    }}> Done </Button>
                    <Button basic color='red' size='mini' onClick={(e)=>{
                                        e.preventDefault()
                                        props.OnDelete(props.item, props.index);
                                    }}> Delete </Button>
                    </List.Content>

                <List.Content>
                    <p style={{textDecoration:(props.item.isCompleted?'line-through':'none')}}>{props.item.name} </p>
                </List.Content>
                </List.Item>
    );
}
ToDos.propTypes = {
    item: PropTypes.object.isRequired
    
}
export default ToDos;
