import React from 'react';
import { connect } from 'react-redux';
import { createTodo ,deleteTodo,toggleTodo } from '../actions';
import { bindActionCreators } from 'redux';
import { cloneDeep, concat, filter, forEach, isEmpty, map, parseInt } from 'lodash';
import uuid from 'node-uuid';

class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			todoText:' ',
			
		};
		const uuidv1 = require('uuid/v1');
		this.addTodo=this.addTodo.bind(this);
	}

	function mapDispatchToProps(dispatch){
	return bindActionCreators({createTodo,deleteTodo,toggleTodo},dispatch);
}

render(){ 
		let todoComponents = map(this.props.todos, (todo, index)=>{ 
			return (
				<li key={index}>
							<p  style={{textDecoration: todo.toggled? 'line-through':'none' }}>{todo.createNewTodo}</p>			 
							<button onClick={ ()=> this.props.toggleTodo(todo.todoId)}>Completed</button>  			
							<button onClick={ ()=> this.props.deleteTodo(todo.todoId)}>Delete</button>
				</li>
			);
		});

		return (
			<div className="App">
				<input placeholder="Things I have to do...."  ref="txtTodoName" onChange={event =>this.setState({todoText:event.target.value})}/>
				<button type="button" onClick={()=> this.props.addTodo({newTodo:this.state.text}) }>Add Item TODO</button>
				<div>
					<ul>
						{todoComponents} 
					</ul>
				</div>   					  
			</div>
		);
    }
}

	
/
function mapStateToProps(state){
	return {
		todos:state
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
