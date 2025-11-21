// текст дела
export const setTodoText = (text) => ({
  type: "SET_TODO_TEXT",
  payload: text,
})

// редактируемое дело
export const setEditingId = (id) => ({
  type: "SET_EDITING_ID",
  payload: id,
})

// текст редактируемого дела
export const setEditingText = (text) => ({
  type: "SET_EDITING_TEXT",
  payload: text,
})

// поиск дела
export const setSearchQuery = (query) => ({
  type: "SET_SEARCH_QUERY",
  payload: query,
})

// флаг для сортировки
export const setIsSorting = (flag) => ({
  type: "SET_IS_SORTING",
  payload: flag,
})

// валидация дела
export const setValidateText = (message) => ({
  type: "SET_VALIDATE_TEXT",
  payload: message,
})

// флаг для отключения кнопки отправки
export const setIsDisabledSubmit = (flag) => ({
  type: "SET_IS_DISABLED_SUBMIT",
  payload: flag,
})

// сохранение дела
export const saveEditing = () => ({
  type: "SAVE_EDITING",
})

// сброс формы
export const resetForm = () => ({
  type: "RESET_FORM",
})
