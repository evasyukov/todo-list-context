const initialState = {
  items: [], // массив дел
  loading: true, // состояние загрузки
  error: null, // состояние ошибки
}

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    // начало загрузки
    case "FETCH_TODOS_REQUEST":
      return { ...state, loading: true, error: null }

    // успешная загрузка
    case "FETCH_TODOS_SUCCESS":
      return { ...state, loading: false, items: action.payload }

    // ошибка загрузки
    case "FETCH_TODOS_ERROR":
      return { ...state, loading: false, error: action.payload }

    // добавление
    case "ADD_TODO_SUCCESS":
      return { ...state, items: [...state.items, action.payload] }

    // обновление
    case "UPDATE_TODO_SUCCESS":
      return {
        ...state,
        items: state.items.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      }

    // удаление
    case "REMOVE_TODO_SUCCESS":
      return {
        ...state,
        items: state.items.filter((todo) => todo.id !== action.payload),
      }

    default:
      return state
  }
}
