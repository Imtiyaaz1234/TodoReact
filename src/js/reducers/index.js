import {ADD_TODO,DELETE_TODO,TOGGLE_TODO} from '../constants';
import { cloneDeep, concat, filter, forEach, isEmpty, map, parseInt } from 'lodash';
import uuid from 'node-uuid';

const deleteById = (state =[],id) => {
	const todos=state.filter(todos => todos.todoId!==id);
	return todos;
}


const todos = (state = [],action) => {
	let todos = null;
	switch(action.type){
		case CREATE_TODO:
			todos =[
				...state,
				{
					newTodo:action.payload.createNewTodo,
					todoId:uuid(),
					toggled:false,	
					 	
				}
			]
			return todos;

		case DELETE_TODO:
			todos=deleteById(state,action.todoId);
			return todos;

		case TOGGLE_TODO:
					todos = state.map(todo => {
						if(todo.todoId!==action.payload.todoId){
							return todo;
						}

						return  {
							newTodo:todo.createNewTodo,
							toggled:!todo.toggled,
							todoId:todo.todoId,
						};
					});
					return todos;
		default:
			return state;
	}
}

export default todos;
