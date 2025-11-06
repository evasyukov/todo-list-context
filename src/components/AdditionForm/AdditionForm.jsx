import { useContext } from "react"
import { AppContext } from "../../contex"
import "./AdditionForm.css"

export function AdditionForm() {
  const {
    todoText,
    handleChange,
    submitTodos,
    validateText,
    isDisabledSubmit,
  } = useContext(AppContext)

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

      {validateText && <div className="validate-error">{validateText}</div>}

      <button
        className="add-todo_button"
        type="submit"
        disabled={isDisabledSubmit}
      >
        Добавить дело
      </button>
    </form>
  )
}
