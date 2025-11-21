// начало загрузки
export const fetchTodosRequest = () => ({ type: "FETCH_TODOS_REQUEST" })

// успешная загрузка
export const fetchTodosSuccess = (todos) => ({
  type: "FETCH_TODOS_SUCCESS",
  payload: todos,
})

// ошибка загрузки
export const fetchTodosError = (error) => ({
  type: "FETCH_TODOS_ERROR",
  payload: error,
})

// добавление
export const addTodoSuccess = (todo) => ({
  type: "ADD_TODO_SUCCESS",
  payload: todo,
})

// обновление
export const updateTodoSuccess = (todo) => ({
  type: "UPDATE_TODO_SUCCESS",
  payload: todo,
})

// удаление
export const removeTodoSuccess = (id) => ({
  type: "REMOVE_TODO_SUCCESS",
  payload: id,
})
