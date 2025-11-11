import { useState, useEffect } from "react"
import { todosAPI } from "../api/api.todos"
import { useRequestGetTodos } from "../hooks"

export function useTodos() {
  const [todos, setTodos] = useState([])                                     // список дел
  const [todoText, setTodoText] = useState("")                               // текст дела
  const [editingId, setEditingId] = useState(null)                           // редактируемое дело
  const [editingText, setEditingText] = useState("")                         // текст редактируемого дела
  const [searchQuery, setSearchQuery] = useState("")                         // поиск дела
  const [isSorting, setIsSorting] = useState(false)                          // флаг для сортировки
  const [validateText, setValidateText] = useState(null)                     // валидация дела
  const [isDisabledSubmit, setIsDisabledSubmit] = useState(false)            // флаг для отключения кнопки отправки

  const { todos: initialTodos, isLoading, errorText } = useRequestGetTodos() // получаем начальный список дел

  // загружаем данные
  useEffect(() => {
    if (initialTodos.length > 0) {
      setTodos(initialTodos)
    }
  }, [initialTodos])

  // изменение текста в форме добавления
  function handleChange(event) {
    setTodoText(event.target.value)
    setValidateText(null)
    setIsDisabledSubmit(false)
  }

  // добавление нового дела
  async function submitTodos(event) {
    event.preventDefault()
    if (todoText.trim().length < 1) {
      setValidateText("Текст дела не должен быть пустым")
      setIsDisabledSubmit(true)
      return
    }

    try {
      const newTodo = await todosAPI.addTodo(todoText)
      setTodos((prev) => [...prev, newTodo])
      setTodoText("")
    } catch (error) {
      console.error("Ошибка при добавлении задачи:", error)
    }
  }

  // удаление
  async function deleteTodo(id) {
    try {
      await todosAPI.removeTodo(id)
      setTodos((prev) => prev.filter((todo) => todo.id !== id))
    } catch (error) {
      console.error("Ошибка при удалении:", error)
    }
  }

  // начало редактирования
  function startEditing(todo) {
    setEditingId(todo.id)
    setEditingText(todo.title)
  }

  // изменение текста во время редактирования
  function handleTitleChange(e) {
    setEditingText(e.target.value)
  }

  // сохранение изменений
  async function saveTitle(todo) {
    try {
      const updatedTodo = await todosAPI.updateTodo(todo.id, {
        title: editingText,
      })
      setTodos((prev) => prev.map((t) => (t.id === todo.id ? updatedTodo : t)))
      setEditingId(null)
      setEditingText("")
    } catch (error) {
      console.error("Ошибка при сохранении:", error)
    }
  }

  // изменение статуса выполнения
  async function toggleCompleted(todo) {
    try {
      const updatedTodo = await todosAPI.updateTodo(todo.id, {
        completed: !todo.completed,
      })
      setTodos((prev) => prev.map((t) => (t.id === todo.id ? updatedTodo : t)))
    } catch (error) {
      console.error("Ошибка при изменении статуса:", error)
    }
  }

  // фильтрация и сортировка
  const filteredTodos = todos
    .filter((todo) =>
      todo.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => (isSorting ? a.title.localeCompare(b.title) : 0))

  return {
    todos: filteredTodos,
    isLoading,
    errorText,

    // AdditionForm
    todoText,
    handleChange,
    submitTodos,
    validateText,
    isDisabledSubmit,

    // SortingTodoList
    searchQuery,
    setSearchQuery,
    isSorting,
    setIsSorting,

    // TodoList
    editingId,
    editingText,
    handleTitleChange,
    startEditing,
    saveTitle,
    deleteTodo,
    toggleCompleted,
  }
}
