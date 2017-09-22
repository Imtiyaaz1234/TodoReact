import React from 'react';
import { connect } from 'react-redux';
import { createTodo, deleteTodo, toggleTodo } from '../actions';
import { bindActionCreators } from 'redux';
import { cloneDeep, concat, filter, forEach, isEmpty, map, parseInt } from 'lodash';
import uuid from 'node-uuid';
import { CREATE_TODO } from '../constants';


function mapStateToProps(state){
	return {
		todos:state
	}
}

function mapDispatchToProps(dispatch){
	return {
		
		createTodo: () => {
			const todoName = document.getElementById("txtTodoName").value;
			if (!value) return;
			dispatch({
				type: CREATE_TODO,
				payload: {
					todoName: todoName 
				}
			});
		}
		
		deleteTodo,
		toggleTodo
	}
}

class Home extends React.Component {

	constructor(props) {
		super(props);

		


	render(){ 
		let todoComponents = map(this.props.todos, (todo, index)=>{ 
			return (
				<li key={index}>
					<p style={{textDecoration: todo.toggled? 'line-through':'none' }}>{todo.name}</p>
					<button onClick={ ()=> this.props.toggleTodo(todo.todoId)}>Completed</button>
					<button onClick={ ()=> this.props.deleteTodo(todo.todoId)}>Delete</button>
				</li>
			);
		});

		return (
			<div className="App">
				<input placeholder="Things I have to do...."  ref="txtTodoName" id="txtTodoName" onChange={event =>this.setState({todoText:event.target.value})}/>
				{  }
				{ <button type="button" onClick={()=> this.props.addTodo({todoName:this.state.text}) }>Add Item TODO</button> }
				<button onClick={this.props.createTodo}>Add Item</button>
				<div>
					<ul>
						{todoComponents} 
					</ul>
				</div>   					  
			</div>
		);
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home);
