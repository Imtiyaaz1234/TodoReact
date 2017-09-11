//import {ADD_TODO,DELETE_TODO,TOGGLE_TODO} from '../constants';
// ADD_TODO !== CREATE_TODO
// Use spacing to your advantage. Example below is more readable ie. less likely to make mistakes
import { CREATE_TODO, DELETE_TODO, TOGGLE_TODO } from '../constants';
import { cloneDeep, concat, filter, forEach, isEmpty, map, parseInt } from 'lodash';
import uuid from 'node-uuid';

// Dunno why you're passing the state in here or giving it a default
/*const deleteById = (state =[],id) => {
	const todos=state.filter(todos => todos.todoId!==id);
	return todos;
}*/


const todos = (state = [],action) => {
	let todos = null;
	switch(action.type){
		case CREATE_TODO:

			const newTodo = {
				id: uuid(),						// always put id at top of object
				name: action.payload.todoName,
				toggled: false,					
			}

			// Remember what I said about using lodash untill you get the hang of it?
			// Lodash function names make it easier to make sense of what you're doing when you read over it
			// You can move on to spread operators and such once you get the hang of the more basic stuff
			todos = concat(state, newTodo);

			return todos;

		case DELETE_TODO:
			// Normally you only abstract business logic into a separate function if you can re-use that function somewhere else
			// Otherwise this just makes it harder to read/follow
			/*todos=deleteById(state,action.todoId);*/
			// See how much easier this is to read with good spacing?
			todos = filter(state, (todo) => { 				// What am I doing? Filtering
				return todo.id !== action.payload.todoId;	// This line shows me HOW I'm filtering
			});												// Space after filter function

			return todos;									// Now return

		case TOGGLE_TODO:

			todos = map(state, (todo) => {
				if (todo.id !== action.payload.todoId) {
					return todo;
				} else {
					// Return new object with updated property
					return assign({}, todo, { toggled: true });
				}

				/*return  {
					newTodo:todo.createNewTodo,
					toggled:!todo.toggled,
					todoId:todo.todoId,
				};*/
			});

			return todos;
			
		default:
			return state;
	}
}

export default todos;
