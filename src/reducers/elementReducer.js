const initialState = {
  todoText: "",                 // текст дела
  editingId: null,              // редактируемое дело
  editingText: "",              // текст редактируемого дела
  searchQuery: "",              // поиск дела
  isSorting: false,             // флаг для сортировки
  validateText: null,           // валидация дела
  isDisabledSubmit: false,      // флаг для отключения кнопки отправки
}

export const elementReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TODO_TEXT":
      return { ...state, todoText: action.payload }

    case "SET_EDITING_ID":
      return { ...state, editingId: action.payload }

    case "SET_EDITING_TEXT":
      return { ...state, editingText: action.payload }

    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload }

    case "SET_IS_SORTING":
      return { ...state, isSorting: action.payload }

    case "SET_VALIDATE_TEXT":
      return { ...state, validateText: action.payload }

    case "SET_IS_DISABLED_SUBMIT":
      return { ...state, isDisabledSubmit: action.payload }

    case "SAVE_EDITING":
      return {
        ...state,
        editingId: null,
        editingText: "",
      }

    case "RESET_FORM":
      return {
        ...state,
        todoText: "",
        validateText: null,
        isDisabledSubmit: false,
      }

    default:
      return state
  }
}
