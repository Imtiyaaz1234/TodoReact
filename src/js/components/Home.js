import React from 'react';
import { connect } from 'react-redux';
import { createTodo, deleteTodo, toggleTodo } from '../actions';
import { bindActionCreators } from 'redux';
import { cloneDeep, concat, filter, forEach, isEmpty, map, parseInt } from 'lodash';
import uuid from 'node-uuid';
import { CREATE_TODO } from '../constants';

// Put these map[x]ToProps functions at the top (best practice)
// All you're doing is returning an object that's going to be merged with the component properties
// ie. componentProps = assign(componentProps, mapStateToProps, mapDispatchToProps);
function mapStateToProps(state){
	return {
		todos:state
	}
}

function mapDispatchToProps(dispatch){
	return {
		// I could do this inside the actionCreator but I'm doing this as an example
		// Doing it this way means your addTodo actionCreator won't be used, dispatch gets done from here
		createTodo: () => {
			// Good example of this.refs vs document.getElementById
			// this.refs can only be used INSIDE the component cos that's what "this" refers to
			// document.getElementById can be used anywhere in the app because it targets the entire DOM
			const todoName = document.getElementById("txtTodoName").value;

			// Don't trigger event (escape function using 'return') if no value given
			if (!value) return;

			// This is why the 'dispatch' object gets passed to this mapDispatchToProps function
			// It gives us the option of dispatching directly from here instead of passing in an actionCreator
			dispatch({
				type: CREATE_TODO,
				payload: {
					todoName: todoName // Hey look, variable names match. Easier to track
				}
			});
		}
		// For the other two I'll use the actionCreators as usual
		deleteTodo,
		toggleTodo
	}
}

class Home extends React.Component {

	constructor(props) {
		super(props);

		// Nope
		/*this.state = {
			todoText:' ',
			
		};*/

		// Dunno what this is for
		/*const uuidv1 = require('uuid/v1');*/

		// This function doesn't exist
		/*this.addTodo=this.addTodo.bind(this);*/
	
	//} Random extra bracket. Proper indentation helps you to spot this
	}// eg. Closing bracket always in line with function name (constructor)



	render(){ 
		let todoComponents = map(this.props.todos, (todo, index)=>{ 
			return (
				<li key={index}>
					<p style={{textDecoration: todo.toggled? 'line-through':'none' }}>{todo.name/*Call it what it is*/}</p>
					<button onClick={ ()=> this.props.toggleTodo(todo.todoId)}>Completed</button>
					<button onClick={ ()=> this.props.deleteTodo(todo.todoId)}>Delete</button>
				</li>
			);
		});

		return (
			<div className="App">
				<input placeholder="Things I have to do...."  ref="txtTodoName" id="txtTodoName" onChange={event =>this.setState({todoText:event.target.value})}/>
				{ /* Again, addTodo !== createTodo. Why it's important to standardise variable names */ }
				{ /*<button type="button" onClick={()=> this.props.addTodo({todoName:this.state.text}) }>Add Item TODO</button>*/ }
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
