// None of these are gonna go anywhere if you don't dispatch them
import { store } from '../reducers';
import {CREATE_TODO,DELETE_TODO,TOGGLE_TODO } from '../constants';

// addTodo? Or createTodo? Pick one
export const addTodo = (todoListItem) => {
	store.dispatch({
		type:CREATE_TODO,	
		payload:{
			createNewTodo:todoListItem.createNewTodo,
		}
	});
}

export const deleteTodo = (todoId) => {
	store.dispatch({
		type:DELETE_TODO,
		payload:{
			todoId
		}
	});
}

export const toggleTodo = (todoId) =>{
	store.dispatch({
		type:TOGGLE_TODO,
		payload:{
			todoId//, Need to remove extra comma here
		}
	});
} 