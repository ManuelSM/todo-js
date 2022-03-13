import './styles.css';

import {Todo, TodoList} from './classes'
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

//Las dos siguientes lineas son iguales
//Ya que si solo tienes un argmunto para foreach
//Se puede obviar cual será. 

// todoList.todos.forEach(todo => crearTodoHtml(todo));
todoList.todos.forEach(crearTodoHtml); 
