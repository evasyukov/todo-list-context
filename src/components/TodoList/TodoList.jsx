import { useSelector, useDispatch } from "react-redux"

import {
  setEditingId,
  setEditingText,
  saveEditing,
} from "../../actions/elementAction"
import { updateTodo, removeTodo } from "../../actions/thunks"

import "./TodoList.css"

export function TodoList() {
  const dispatch = useDispatch()
  const { items: todos, loading, error } = useSelector((state) => state.todos)
  const { editingId, editingText } = useSelector((state) => state.element)

  if (loading) return <div>Загрузка...</div>
  if (error) return <div>{error}</div>

  const startEditing = (todo) => {
    dispatch(setEditingId(todo.id))
    dispatch(setEditingText(todo.title))
  }

  const saveTitle = (todo) => {
    if (editingText.trim()) {
      dispatch(updateTodo(todo.id, { title: editingText }))
    }
    dispatch(saveEditing())
  }

  const toggleCompleted = (todo) => {
    dispatch(updateTodo(todo.id, { completed: !todo.completed }))
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div className="todo" key={todo.id}>
          <div className="todo__title">
            {editingId === todo.id ? (
              <input
                value={editingText}
                onChange={(event) =>
                  dispatch(setEditingText(event.target.value))
                }
                onBlur={() => saveTitle(todo)}
                onKeyDown={(event) => event.key === "Enter" && saveTitle(todo)}
                autoFocus
              />
            ) : (
              todo.title
            )}
          </div>

          <div className="todo__management">
            <div
              className={`todo_completed ${todo.completed}`}
              onClick={() => toggleCompleted(todo)}
            >
              {todo.completed ? "выполнено" : "не выполнено"}
            </div>

            <div className="todo__buttons">
              <button onClick={() => startEditing(todo)}>Редактировать</button>
              <button onClick={() => dispatch(removeTodo(todo.id))}>
                Удалить
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
