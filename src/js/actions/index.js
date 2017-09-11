import {CREATE_TODO,DELETE_TODO,TOGGLE_TODO } from '../constants';

export const addTodo = (todoListItem) => {
	const action = {
		type:CREATE_TODO,	
		payload:{
			createNewTodo:todoListItem.createNewTodo,
		}
	}
	return action;
}

export const deleteTodo = (todoId) => {
	const action = {
		type:DELETE_TODO,
		payload:{
			todoId
		}
	}
	return action;
}

export const toggleTodo = (todoId) =>{
	const action ={
		type:TOGGLE_TODO,
		payload:{
			todoId,
		}
	}
	return action;
} 