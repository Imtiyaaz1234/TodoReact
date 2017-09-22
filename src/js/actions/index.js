
import { store } from '../reducers';
import {CREATE_TODO,DELETE_TODO,TOGGLE_TODO } from '../constants';


export const createTodo = (todoListItem) => {
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
			todoId
		}
	});
} 
