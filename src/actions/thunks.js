// src/store/thunks/todosThunks.js

import { todosAPI } from "../api/api.todos"

import {
  fetchTodosRequest,
  fetchTodosSuccess,
  fetchTodosError,
  addTodoSuccess,
  updateTodoSuccess,
  removeTodoSuccess,
} from "./todosAction"

// Загрузка дел
export const fetchTodos = () => async (dispatch) => {
  dispatch(fetchTodosRequest())
  try {
    const todoList = await todosAPI.getTodos()
    dispatch(fetchTodosSuccess(todoList))
  } catch (error) {
    dispatch(fetchTodosError("Ошибка загрузки списка дел"), error)
  }
}

// Добавление дела
export const addTodo = (title) => async (dispatch) => {
  try {
    const newTodo = await todosAPI.addTodo(title)
    dispatch(addTodoSuccess(newTodo))
  } catch (error) {
    console.error("Ошибка при добавлении задачи:", error)
  }
}

// Удаление дела
export const removeTodo = (id) => async (dispatch) => {
  try {
    await todosAPI.removeTodo(id)
    dispatch(removeTodoSuccess(id))
  } catch (error) {
    console.error("Ошибка при удалении:", error)
  }
}

// Обновление дела
export const updateTodo = (id, data) => async (dispatch) => {
  try {
    const updatedTodo = await todosAPI.updateTodo(id, data)
    dispatch(updateTodoSuccess(updatedTodo))
  } catch (error) {
    console.error("Ошибка при сохранении:", error)
  }
}
