
import { CREATE_TODO, DELETE_TODO, TOGGLE_TODO } from '../constants';
import { cloneDeep, concat, filter, forEach, isEmpty, map, parseInt } from 'lodash';
import uuid from 'node-uuid';


const todos = (state = [],action) => {
	let todos = null;
	switch(action.type){
		case CREATE_TODO:

			const newTodo = {
				id: uuid(),						
				name: action.payload.todoName,
				toggled: false,					
			}

			todos = concat(state, newTodo);

			return todos;

		case DELETE_TODO:
			todos = filter(state, (todo) => { 				
				return todo.id !== action.payload.todoId;	
			});												

			return todos;									

		case TOGGLE_TODO:

			todos = map(state, (todo) => {
				if (todo.id !== action.payload.todoId) {
					return todo;
				} else {
					
					return assign({}, todo, { toggled: true });
				}

			
			});

			return todos;
			
		default:
			return state;
	}
}

export default todos;
