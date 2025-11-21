import { useSelector, useDispatch } from "react-redux"
import {
  setTodoText,
  setValidateText,
  setIsDisabledSubmit,
  resetForm,
} from "../../actions/elementAction"
import { addTodo } from "../../actions/thunks"

import "./AdditionForm.css"

export function AdditionForm() {
  const dispatch = useDispatch()
  const { todoText } = useSelector((state) => state.element)

  const handleChange = (e) => {
    dispatch(setTodoText(e.target.value))
    dispatch(setValidateText(null))
    dispatch(setIsDisabledSubmit(false))
  }

  const submitTodos = (e) => {
    e.preventDefault()
    if (todoText.trim().length < 1) {
      dispatch(setValidateText("Текст дела не должен быть пустым"))
      dispatch(setIsDisabledSubmit(true))
      return
    }
    dispatch(addTodo(todoText))
    dispatch(resetForm())
  }
  return (
    <form className="add-todo" onSubmit={submitTodos}>
      <textarea
        className="add-todo__textarea"
        autoComplete="off"
        placeholder="Что поделаем?"
        rows="2"
        value={todoText}
        onInput={handleChange}
      />

      {todoText.validateText && (
        <div className="validate-error">{todoText.validateText}</div>
      )}

      <button
        className="add-todo_button"
        type="submit"
        disabled={todoText.isDisabledSubmit}
      >
        Добавить дело
      </button>
    </form>
  )
}
